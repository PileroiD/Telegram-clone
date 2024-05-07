import "./login.scss";

import { toast } from "react-toastify";
import { useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../../lib/firebase";
import {
    collection,
    doc,
    getDocs,
    query,
    setDoc,
    where,
} from "firebase/firestore";

import upload from "../../lib/upload";
import { Spinner } from "../spinner/Spinner.jsx";

const Login = () => {
    const [avatar, setAvatar] = useState({
        file: null,
        url: "",
    });
    const [loading, setLoading] = useState(false);

    const handleAvatar = (e) => {
        e.target.files[0] &&
            setAvatar({
                file: e.target.files[0],
                url: URL.createObjectURL(e.target.files[0]),
            });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.target);
        const { email, password } = Object.fromEntries(formData);

        try {
            const res = await signInWithEmailAndPassword(
                auth,
                email,
                password
            ).then((userCredentials) => userCredentials.user);
        } catch (error) {
            console.log("error :>> ", error.code);
            switch (error.code) {
                case "auth/invalid-credential":
                    toast.error("User not found");
                    break;
                default:
                    toast.error("Something went wrong");
            }
        } finally {
            setLoading(false);
        }
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.target);
        const { username, email, password } = Object.fromEntries(formData);

        if (!username || !email || !password)
            return toast.warn("Please enter inputs!");

        const usersRef = collection(db, "users");
        const qUsername = query(usersRef, where("username", "==", username));
        const queryUsernameSnapshot = await getDocs(qUsername);
        if (!queryUsernameSnapshot.empty) {
            setLoading(false);
            return toast.warn(
                "Select another username. This username already exists"
            );
        }

        const qEmail = query(usersRef, where("email", "==", email));
        const queryEmailSnapshot = await getDocs(qEmail);
        if (!queryEmailSnapshot.empty) {
            setLoading(false);
            return toast.warn(
                "Select another email. This email already exists"
            );
        }

        try {
            const res = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            )
                .then((userCredential) => userCredential.user)
                .catch((error) => {
                    console.log("error :>> ", error);
                    toast.error(error.message);
                });

            toast.success("Account created! You can login now!");

            const imageUrl = avatar?.file && (await upload(avatar?.file));

            await setDoc(doc(db, "users", res.uid), {
                username,
                email: email,
                avatar: imageUrl || null,
                id: res.uid,
                blocked: [],
            });

            await setDoc(doc(db, "userchats", res.uid), {
                chats: [],
            });
        } catch (error) {
            console.log("error :>> ", error);
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login">
            <div className="item">
                <h2>Welcome back</h2>
                <form onSubmit={handleLogin}>
                    <input
                        required
                        type="email"
                        placeholder="Email"
                        name="email"
                    />
                    <input
                        required
                        type="password"
                        placeholder="Password"
                        name="password"
                    />
                    <button disabled={loading}>
                        {loading ? <Spinner /> : "Sign In"}
                    </button>
                </form>
            </div>
            <div className="separator"></div>
            <div className="item">
                <h2>Create an Account</h2>
                <form onSubmit={handleRegister}>
                    <label htmlFor="file">
                        <img src={avatar.url || "./avatar.png"} alt="avatar" />
                        <span>Upload an image</span>
                    </label>
                    <input
                        type="file"
                        id="file"
                        style={{ display: "none" }}
                        onChange={handleAvatar}
                    />
                    <input
                        required
                        type="text"
                        placeholder="User name"
                        name="username"
                    />
                    <input
                        required
                        type="email"
                        placeholder="Email"
                        name="email"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        required
                    />
                    <button disabled={loading} type="submit">
                        {loading ? <Spinner /> : "Sign Up"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
