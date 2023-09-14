import axios from "axios";

export async function getPosts() {
    const res = await axios.get("post").catch(e => console.log(e));
    return res.data;
}

export async function getPost(postId) {
    const res = await axios.get(`post/${postId}`).catch(e => console.log(e));
    return res.data;
}