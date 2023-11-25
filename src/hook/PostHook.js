import { useCallback, useEffect, useState } from "react";
import { getPost, getPosts } from "../api/PostApi";

const usePostsHook = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        getPosts().then(data => { setPosts(data) });
    }, [])

    return { posts }
}

const usePostHook = (postId, isLoggedIn, onLike) => {
    const [post, setPost] = useState(null);

    const fetchPost = useCallback(() => {
        getPost(postId).then(data => { setPost(data); });
    }, [postId]);

    useEffect(() => {
        fetchPost();
        // eslint-disable-next-line
    }, [postId, isLoggedIn])

    return { post, setPost, fetchPost }
}

export { usePostsHook, usePostHook };