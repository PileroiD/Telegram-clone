import "./detail.scss";

const Detail = () => {
    return (
        <div className="detail">
            <div className="user">
                <img
                    className="user-img"
                    src="./avatar.png"
                    alt="user-avatar"
                />
                <h2>Jona Doe</h2>
                <p>lorem ipsum dolor sit amet</p>
            </div>
            <div className="info">
                <div className="option">
                    <div className="title">
                        <span>Chat Settings</span>
                        <img src="./arrowUp.png" alt="arrowUp" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Privacy & Help</span>
                        <img src="./arrowUp.png" alt="arrowUp" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Shared photos</span>
                        <img src="./arrowDown.png" alt="arrowUp" />
                    </div>
                    <div className="photos">
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img
                                    src="https://wallpapers.com/images/featured/coolest-pictures-88c269e953ar0aw4.jpg"
                                    alt=""
                                />
                                <span>photo_drink_on_the_moon.jpeg</span>
                            </div>
                            <img src="./download.png" alt="download" />
                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img
                                    src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
                                    alt=""
                                />
                                <span>photo_drink_on_the_moon.jpeg</span>
                            </div>
                            <img src="./download.png" alt="download" />
                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img
                                    src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
                                    alt=""
                                />
                                <span>photo_drink_on_the_moon.jpeg</span>
                            </div>
                            <img src="./download.png" alt="download" />
                        </div>
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Shared Files</span>
                        <img src="./arrowUp.png" alt="arrowUp" />
                    </div>
                </div>
                <button className="block-btn">Block User</button>
                <hr />
                <button className="log-out-btn">Log Out</button>
            </div>
        </div>
    );
};

export default Detail;
