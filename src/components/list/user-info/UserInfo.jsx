import IconWrapper from "../../icon-wrapper/IconWrapper";
import "./userinfo.scss";

const UserInfo = () => {
    return (
        <div className="userInfo">
            <div className="user">
                <img
                    className="user-img"
                    src="./avatar.png"
                    alt="user-avatar"
                />
                <h2>John Doe</h2>
            </div>
            <div className="icons">
                <IconWrapper>
                    <img className="icons-img" src="./more.png" alt="more" />
                </IconWrapper>
                <IconWrapper>
                    <img className="icons-img" src="./video.png" alt="video" />
                </IconWrapper>
                <IconWrapper>
                    <img className="icons-img" src="./edit.png" alt="edit" />
                </IconWrapper>
            </div>
        </div>
    );
};

export default UserInfo;
