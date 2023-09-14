import { useEffect, useState } from "react";
import { getPosts } from "../api/PostApi";

const usePostsHook = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        getPosts().then(data => { console.log(data); setPosts(data) });
    }, [])

    return {posts}
}

export default usePostsHook;