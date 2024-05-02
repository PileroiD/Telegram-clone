import "./adduser.scss";

const AddUser = ({ isOpen }) => {
    return (
        <div className={`addUser ${!isOpen ? "active" : null}`}>
            <form>
                <input type="text" placeholder="User name" name="username" />
                <button className="btn">Search</button>
            </form>
            <div className="user">
                <div className="detail">
                    <img src="./avatar.png" alt="user-avatar" />
                    <span>Jona Doe</span>
                </div>
                <button className="btn add">Add User</button>
            </div>
        </div>
    );
};

export default AddUser;
