import axios from "axios";
import { isValidRes, onError } from "./ApiErrorHandler";

export async function writeReply(replyData) {
    const res = await axios.post("reply", replyData).catch(onError);
    if (isValidRes(res)) {
        return true;
    }
}