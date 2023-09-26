import axios from "axios";
import Swal from "sweetalert2";
import { LOGIN_SUCCESS } from "../utils/UserUtils";
import { NORETRY, isValidRes, onError } from "./ApiErrorHandler";

export async function postToken(id, pw) {
    const credentials = btoa(id + ':' + pw);
    const config = { headers: { Authorization: `Basic ${credentials}` }, ...NORETRY }

    const res = await axios.post("/token", "", config).catch(e => {
        const res = e.response;
        if (res) {
            Swal.showValidationMessage(res.data);
        } else {    
            onError(e);
        }
    });
    if (isValidRes(res)) {
        return true;
    }
}

export async function checkToken(token) {
    const res = await axios.get("/token", { headers: { Authorization: `Bearer ${token}` } }).catch(e => {
        throw e;
    });

    if (isValidRes(res)) {
        return LOGIN_SUCCESS;
    }
}

export async function refreshToken() {
    const res = await axios.post('/token/refresh', '', {
        ...NORETRY,
        transformRequest: (data, headers) => {
            delete headers['Authorization'];
            return data;
        }
    }).catch(e => {
        console.log(e);
        if (e.response.data.doLogout) {
            window.logout();
        }
    });

    if (isValidRes(res)) {
        return true
    }
}