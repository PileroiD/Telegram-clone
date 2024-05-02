import "./chatlist.scss";

import { useState } from "react";

const ChatList = () => {
    const [addMode, setAddMode] = useState(true);

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
                <div className="item">
                    <img src="./avatar.png" alt="user-avatar" />
                    <div className="texts">
                        <span>Jane Doe</span>
                        <p>How is it going?</p>
                    </div>
                </div>
                <div className="item">
                    <img src="./avatar.png" alt="user-avatar" />
                    <div className="texts">
                        <span>Jane Doe</span>
                        <p>How is it going?</p>
                    </div>
                </div>
                <div className="item">
                    <img src="./avatar.png" alt="user-avatar" />
                    <div className="texts">
                        <span>Jane Doe</span>
                        <p>How is it going?</p>
                    </div>
                </div>
                <div className="item">
                    <img src="./avatar.png" alt="user-avatar" />
                    <div className="texts">
                        <span>Jane Doe</span>
                        <p>How is it going?</p>
                    </div>
                </div>
                <div className="item">
                    <img src="./avatar.png" alt="user-avatar" />
                    <div className="texts">
                        <span>Jane Doe</span>
                        <p>How is it going?</p>
                    </div>
                </div>
                <div className="item">
                    <img src="./avatar.png" alt="user-avatar" />
                    <div className="texts">
                        <span>Jane Doe</span>
                        <p>How is it going?</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChatList;
