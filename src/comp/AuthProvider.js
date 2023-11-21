import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { refreshToken } from "../api/TokenApi";
import { EXPIRED, LOGIN_SUCCESS, getToken, isTokenValid, removeToken, saveToken } from "../utils/UserUtils";
import { getMyInfo } from "../api/UserApi";

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export default function AuthProvider({ children }) {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [userInfo, setUserInfo] = useState();

    const login = async (token) => {
        if (token) saveToken(token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${getToken()}`;
        const res = await getMyInfo();
        setUserInfo(res);
        setLoggedIn(true);
    }

    const logout = () => {
        delete axios.defaults.headers.common["Authorization"];
        removeToken();
        setLoggedIn(false);
    }

    const reLogin = async () => {
        const res = await refreshToken();
        if (res) {
            login(res);
            return true;
        }
        else return false;
    }

    useEffect(() => {
        isTokenValid().then(res => {
            if (res === LOGIN_SUCCESS) login();
        }).catch(e => {
            const res = e.response;
            if (res && res.data !== EXPIRED) {
                console.log('invalid token', e);
                logout();
            }
        })
    }, [])

    window.reLogin = reLogin;
    window.logout = logout;

    return <AuthContext.Provider value={{ isLoggedIn, login, logout, userInfo, setUserInfo, showLoginModal, setShowLoginModal }}>
        {children}
    </AuthContext.Provider>
}