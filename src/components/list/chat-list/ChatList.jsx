import "./chatlist.scss";
import { useEffect, useState } from "react";

import AddUser from "../addUser/AddUser";
import { useUserStore } from "../../../store/userStore";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "../../../lib/firebase";
import { useChatStore } from "../../../store/chatStore";

const ChatList = () => {
    const { currentUser } = useUserStore();
    const { changeChat } = useChatStore();

    const [addMode, setAddMode] = useState(true);
    const [chats, setChats] = useState([]);

    useEffect(() => {
        // listener
        const unsub = onSnapshot(
            doc(db, "userchats", currentUser.id),
            async (res) => {
                const chats = res.data().chats;

                const promises = chats.map(async (chat) => {
                    const userDocRef = doc(db, "users", chat.receiverId);
                    const userDocSnap = await getDoc(userDocRef);

                    const user = userDocSnap.data();

                    return { ...chat, user };
                });

                const chatData = await Promise.all(promises);
                setChats(chatData.sort((a, b) => b.updatedAt - a.updatedAt));
            }
        );

        return () => unsub();
    }, [currentUser.id]);

    const handleSelect = async (chat) => {
        changeChat(chat.chatId, chat.user);
    };

    return (
        <>
            <div className="chatList">
                <div className="search">
                    <div className="search-bar">
                        <img
                            src="./search.png"
                            alt="search"
                            className="search-bar__icon"
                        />
                        <input type="text" placeholder="Search" />
                    </div>
                    <img
                        onClick={() => setAddMode((prev) => !prev)}
                        src={`./${addMode ? "plus" : "minus"}.png`}
                        alt="plus"
                        className="search__icon-add"
                    />
                </div>
            </div>

            <div className="items-wrapper">
                {chats.map((chat) => (
                    <div
                        className="item"
                        key={chat.chatId}
                        onClick={() => handleSelect(chat)}
                    >
                        <img
                            src={chat.user.avatar || "./avatar.png"}
                            alt="user-avatar"
                        />
                        <div className="texts">
                            <span>{chat.user.username}</span>
                            <p>{chat?.lastMessage}</p>
                        </div>
                    </div>
                ))}
            </div>

            <AddUser isOpen={addMode} />
        </>
    );
};

export default ChatList;
