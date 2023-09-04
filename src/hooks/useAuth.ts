import { useContext, useEffect } from "react";
import { useUser, User } from "./useUser";
import { useLocalStorage } from "./useLocalStorage";
import { AuthContext } from '../context/authContext';

export const useAuth = () => {
    const { setUser } = useContext(AuthContext);
    const { user, addUser, removeUser } = useUser();
    const { getItem } = useLocalStorage();

    useEffect(() => {
        const user = getItem("user");
        if (user) {
            addUser(JSON.parse(user));
        }
    }, []);

    const login = (user: User) => {
        addUser(user);
    };

    const logout = () => {
        removeUser();
    };

    return { user, login, logout, setUser };
};