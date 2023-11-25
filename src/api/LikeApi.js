import axios from "axios";
import { isValidRes, onError } from "./ApiErrorHandler";

export async function likeOrUnLikePost(postId) {
    const res = await axios.post("like", postId, {
        headers: { "Content-type": "application/json" },
    }).catch(onError);
    if (isValidRes(res)) {
        return true;
    }
}