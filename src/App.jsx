import Chat from "./components/chat/Chat";
import Detail from "./components/detail/Detail";
import List from "./components/list/List";
import Login from "./components/login/Login";
import Notification from "./components/notification/Notification";

const App = () => {
    const user = true;

    return (
        <div className="container">
            {!user ? (
                <Login />
            ) : (
                <>
                    <List />
                    <Chat />
                    <Detail />
                </>
            )}

            <Notification />
        </div>
    );
};

export default App;
