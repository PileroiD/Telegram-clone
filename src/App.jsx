import { useEffect } from "react";
import Chat from "./components/chat/Chat";
import Detail from "./components/detail/Detail";
import List from "./components/list/List";
import Login from "./components/login/Login";
import Notification from "./components/notification/Notification";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./lib/firebase";
import { useUserStore } from "./store/userStore";
import { Spinner } from "./components/spinner/Spinner";

const App = () => {
    const { isLoading, currentUser: user, fetchUserInfo } = useUserStore();

    useEffect(() => {
        const unSub = onAuthStateChanged(auth, (user) => {
            fetchUserInfo(user?.uid);
        });

        return () => unSub();
    }, []);

    if (isLoading) {
        return (
            <div className="container">
                <Spinner />
            </div>
        );
    }

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
