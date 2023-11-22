import { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { updatePost } from "../api/PostApi";
import { PostContentsAndButton, PostLayout, PostTitle } from "../comp/PostCUComps";

export default function PostUpdate() {
    const { state } = useLocation();
    const post = state.post;
    const titleRef = useRef(null);
    const contentsRef = useRef(null);
    const navigate = useNavigate();

    const onSubmit = async e => {
        e.preventDefault();
        const res = await updatePost(post.id, { title: titleRef.current.value, contents: contentsRef.current.value });
        if (res) {
            navigate(`/post/${post.id}`, { state: { page: state.page } })
        }
    }
    
    return <PostLayout to={`/post/${post.id}`} state={{ page: state.page }} onSubmit={onSubmit}>
        <PostTitle id="title" ref={titleRef} defaultValue={post.title} required />
        <PostContentsAndButton id="content" className="flex-auto" ref={contentsRef}
            defaultValue={post.content} buttonText={"수정하기"} required />
    </PostLayout>;
}
