import "./chat.scss";
import EmojiPicker from "emoji-picker-react";

import IconWrapper from "../icon-wrapper/IconWrapper";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../lib/firebase";
import { useChatStore } from "../../store/chatStore";

const Chat = () => {
    const { chatId } = useChatStore();

    const [openEmoji, setOpenEmoji] = useState(false);
    const [textValue, setTextValue] = useState("");
    const [chat, setChat] = useState([]);

    const scrollableRef = useRef(null);

    useLayoutEffect(() => {
        if (scrollableRef.current) {
            const scrollableElement = scrollableRef.current;
            scrollableElement.scrollTop = scrollableElement.scrollHeight;
        }
    }, []);

    useEffect(() => {
        if (chatId) {
            const unsub = onSnapshot(doc(db, "chats", chatId), (res) => {
                setChat(res.data());
            });

            return () => unsub();
        }
    }, [chatId]);

    return (
        <div className="chat">
            <div className="top">
                <div className="user">
                    <img src="./avatar.png" alt="user-avatar" />
                    <div className="texts">
                        <span>Jona Doe</span>
                        <p>Lorem ipsum dolor sit, amet.</p>
                    </div>
                </div>
                <div className="icons">
                    <IconWrapper>
                        <img src="./phone.png" alt="phone" />
                    </IconWrapper>
                    <IconWrapper>
                        <img src="./video.png" alt="video" />
                    </IconWrapper>
                    <IconWrapper>
                        <img src="./info.png" alt="info" />
                    </IconWrapper>
                </div>
            </div>
            <div className="center" ref={scrollableRef}>
                {chat?.messages?.map((msg) => (
                    <div className="message own" key={msg?.createdAt}>
                        <div className="texts">
                            {msg.img && <img src={msg.img} alt="message-img" />}
                            <p>{msg.text}</p>
                            {/* <span>{msg.createdAt}</span> */}
                        </div>
                    </div>
                ))}
            </div>
            <div className="bottom">
                <div className="icons">
                    <IconWrapper>
                        <img src="./img.png" alt="img" />
                    </IconWrapper>
                    <IconWrapper>
                        <img src="./camera.png" alt="camera" />
                    </IconWrapper>
                    <IconWrapper>
                        <img src="./mic.png" alt="mic" />
                    </IconWrapper>
                </div>
                <textarea
                    value={textValue}
                    onChange={({ target }) => setTextValue(target.value)}
                    type="text"
                    placeholder="Type a message..."
                />
                <div className="emoji">
                    <IconWrapper onClick={() => setOpenEmoji((prev) => !prev)}>
                        <img src="./emoji.png" alt="emoji" />
                    </IconWrapper>
                    <EmojiPicker
                        open={openEmoji}
                        theme="dark"
                        emojiStyle="google"
                        onEmojiClick={(data) =>
                            setTextValue((prev) => prev + data.emoji)
                        }
                    />
                </div>
                <button className="send-btn">Send</button>
            </div>
        </div>
    );
};

export default Chat;
