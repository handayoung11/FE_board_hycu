import axios from "axios";
import { isValidRes, onError } from "./ApiErrorHandler";

export async function getPosts() {
    const res = await axios.get("post").catch(onError);
    if (isValidRes(res)) {
        return res.data;
    }
}

export async function getPost(postId) {
    const res = await axios.get(`post/${postId}`).catch(onError);
    if (isValidRes(res)) {
        return res.data;
    }
}

export async function writePost(postData) {
    const res = await axios.post("post", postData).catch(onError);
    if (isValidRes(res)) {
        return true;
    }
}

export async function updatePost(postId, postData) {
    const res = await axios.patch(`/post/${postId}`, postData).catch(onError);
    if (isValidRes(res)) {
        return true;
    }
}

export async function deletePost(postId) {
    const res = await axios.delete(`post/${postId}`).catch(onError);
    if (isValidRes(res)) {
        return true;
    }
}