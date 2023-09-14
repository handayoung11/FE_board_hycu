import axios from "axios";

export async function getPosts() {
    const res = await axios.get("post").catch(e => console.log(e));
    return res.data;
}