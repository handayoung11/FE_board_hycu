import axios from "axios";
import { isValidRes, onError } from "./ApiErrorHandler";

export async function checkMail(mail) {
    const res = await axios.get(`/user/mail/${mail}`).catch(onError);
    if (isValidRes(res)) {
        return res.data;
    }
}

export async function checkNickname(nickname) {
    const res = await axios.get(`/user/nickname/${nickname}`).catch(onError);
    if (isValidRes(res)) {
        return res.data;
    }
}

export async function signUp(signUpData) {
    const res = await axios.post("/user", signUpData).catch(onError);
    if (isValidRes(res)) {
        return true;
    }
}