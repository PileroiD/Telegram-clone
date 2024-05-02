import { toast } from "react-toastify";
import "./login.scss";
import { useState } from "react";

const Login = () => {
    const [avatar, setAvatar] = useState({
        file: null,
        url: "",
    });

    const handleAvatar = (e) => {
        e.target.files[0] &&
            setAvatar({
                file: e.target.files[0],
                url: URL.createObjectURL(e.target.files[0]),
            });
    };

    const handleCreate = (e) => {
        e.preventDefault();
        toast.error("An error occured");
    };

    return (
        <div className="login">
            <div className="item">
                <h2>Welcome back</h2>
                <form>
                    <input type="email" placeholder="Email" name="email" />
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                    />
                    <button>Sign In</button>
                </form>
            </div>
            <div className="separator"></div>
            <div className="item">
                <h2>Create an Account</h2>
                <form onSubmit={handleCreate}>
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
                        type="text"
                        placeholder="User name"
                        name="username"
                    />
                    <input type="email" placeholder="Email" name="email" />
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                    />
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
