import "./adduser.scss";
import {
    arrayUnion,
    collection,
    doc,
    getDocs,
    query,
    serverTimestamp,
    setDoc,
    updateDoc,
    where,
} from "firebase/firestore";
import { db } from "../../../lib/firebase";
import { toast } from "react-toastify";
import { useState } from "react";
import { useUserStore } from "../../../store/userStore";

const AddUser = ({ isOpen }) => {
    const [user, setUser] = useState(null);
    const { currentUser } = useUserStore();

    const handleSearch = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const username = formData.get("username");

        try {
            const userRef = collection(db, "users");
            const q = query(userRef, where("username", "==", username));

            const querySnapshot = await getDocs(q);

            if (!querySnapshot.empty) {
                setUser(querySnapshot.docs[0].data());
            }
        } catch (error) {
            console.log("error :>> ", error);
            toast.error(
                `Something went wrong trying to find user: ${username}`
            );
        }
    };

    const handleAdd = async () => {
        const chatRef = collection(db, "chats");
        const userChatsRef = collection(db, "userchats");

        try {
            const newChatRef = doc(chatRef);

            await setDoc(newChatRef, {
                createdAt: serverTimestamp(),
                messages: [],
            });

            await updateDoc(doc(userChatsRef, user.id), {
                chats: arrayUnion({
                    chatId: newChatRef.id,
                    lastMessage: "",
                    receiverId: currentUser.id,
                    updatedAt: Date.now(),
                }),
            });

            await updateDoc(doc(userChatsRef, currentUser.id), {
                chats: arrayUnion({
                    chatId: newChatRef.id,
                    lastMessage: "",
                    receiverId: user.id,
                    updatedAt: Date.now(),
                }),
            });
        } catch (error) {
            console.log("error :>> ", error);
        }
    };

    return (
        <div className={`addUser ${!isOpen ? "active" : null}`}>
            <form onSubmit={handleSearch}>
                <input type="text" placeholder="User name" name="username" />
                <button type="submit" className="btn">
                    Search
                </button>
            </form>
            {user ? (
                <div className="user">
                    <div className="detail">
                        <img
                            src={user.avatar || "./avatar.png"}
                            alt="user-avatar"
                        />
                        <span>{user.username}</span>
                    </div>
                    <button className="btn add" onClick={handleAdd}>
                        Add User
                    </button>
                </div>
            ) : (
                <div className="no-users">No users</div>
            )}
        </div>
    );
};

export default AddUser;
