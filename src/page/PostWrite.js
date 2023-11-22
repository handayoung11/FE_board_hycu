import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { writePost } from "../api/PostApi";
import { PostContentsAndButton, PostLayout, PostTitle } from "../comp/PostCUComps";
import usePageStateHook from "../hook/PageStateHook";

export default function PostWrite() {
    const state = usePageStateHook();
    const titleRef = useRef(null);
    const contentsRef = useRef(null);
    const navigate = useNavigate();

    const onSubmit = async e => {
        e.preventDefault();
        const res = await writePost({ title: titleRef.current.value, contents: contentsRef.current.value });
        if (res) {
            navigate(`/post`)
        }
    }

    return <PostLayout page={state.page || 1} className={"flex flex-col max-h-screen p-5"} onSubmit={onSubmit}>
        <PostTitle id="title" ref={titleRef} required />
        <PostContentsAndButton id="content" className="flex-auto" ref={contentsRef} buttonText="글쓰기" required />
    </PostLayout>;
}
