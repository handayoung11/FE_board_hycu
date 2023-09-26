import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { refreshToken } from "../api/TokenApi";
import { EXPIRED, LOGIN_SUCCESS, getToken, isTokenValid, removeToken } from "../utils/UserUtils";

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export default function AuthProvider({ children }) {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const login = () => {
        axios.defaults.headers.common = { 'Authorization': `Bearer ${getToken()}` }
        setLoggedIn(true);
    }

    const logout = () => {
        delete axios.defaults.headers.common["Authorization"];
        removeToken();
        setLoggedIn(false);
    }

    const reLogin = async () => {
        const isSuccessed = await refreshToken();
        if (isSuccessed) {
            login();
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

    return <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
        {children}
    </AuthContext.Provider>
}