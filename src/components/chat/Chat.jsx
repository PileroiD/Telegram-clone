import "./chat.scss";
import EmojiPicker from "emoji-picker-react";

import IconWrapper from "../icon-wrapper/IconWrapper";
import { useLayoutEffect, useRef, useState } from "react";

const Chat = () => {
    const [openEmoji, setOpenEmoji] = useState(false);
    const [textValue, setTextValue] = useState("");

    const scrollableRef = useRef(null);

    useLayoutEffect(() => {
        if (scrollableRef.current) {
            const scrollableElement = scrollableRef.current;
            scrollableElement.scrollTop = scrollableElement.scrollHeight;
        }
    }, []);

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
                <div className="message">
                    <img
                        className="user-icon"
                        src="./avatar.png"
                        alt="user-avatar"
                    />
                    <div className="texts">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Quaerat eveniet ducimus officiis! Alias.
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message own">
                    <div className="texts">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Quaerat eveniet ducimus officiis! Alias.
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message">
                    <img
                        className="user-icon"
                        src="./avatar.png"
                        alt="user-avatar"
                    />
                    <div className="texts">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Quaerat eveniet ducimus officiis! Alias.
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message own">
                    <div className="texts">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Quaerat eveniet ducimus officiis! Alias.
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message">
                    <img
                        className="user-icon"
                        src="./avatar.png"
                        alt="user-avatar"
                    />
                    <div className="texts">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Quaerat eveniet ducimus officiis! Alias.
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message own">
                    <div className="texts">
                        <img
                            src="https://wallpapers.com/images/featured/coolest-pictures-88c269e953ar0aw4.jpg"
                            alt=""
                        />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Quaerat eveniet ducimus officiis! Alias.
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
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
