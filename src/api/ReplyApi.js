import axios from "axios";
import { isValidRes, onError } from "./ApiErrorHandler";

export async function writeReply(replyData) {
    const res = await axios.post("reply", replyData).catch(onError);
    if (isValidRes(res)) {
        return true;
    }
}

export async function deleteReply(replyId) {
    const res = await axios.delete(`reply/${replyId}`).catch(onError);
    if (isValidRes(res)) {
        return true;
    }
}

export async function updateReply(replyId, replyData) {
    const res = await axios.post(`reply/${replyId}`, replyData, {
        headers: { "Content-type": "application/json" },
    }).catch(onError);
    if (isValidRes(res)) {
        return true;
    }
}