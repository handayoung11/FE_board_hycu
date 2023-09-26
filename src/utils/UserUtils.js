import Cookies from "js-cookie";
import { checkToken } from "../api/TokenApi";

export const EXPIRED = "EXP";
export const LOGIN_SUCCESS = "SUCCESS";

export function removeToken() {
    Cookies.remove("token")
}

export async function isTokenValid() {
    const token = getToken();
    if (token) {
        return await checkToken(token);
    }
}

export function getToken() {
    return Cookies.get("token");
}
