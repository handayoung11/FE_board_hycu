import { useEffect, useState } from "react";
import { getPost, getPosts } from "../api/PostApi";

const usePostsHook = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        getPosts().then(data => { setPosts(data) });
    }, [])

    return { posts }
}

const usePostHook = (postId) => {
    const [post, setPost] = useState(null);
    useEffect(() => {
        getPost(postId).then(data => { setPost(data) });
    }, [postId])

    return { post }
}

export { usePostsHook, usePostHook };