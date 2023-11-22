import { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Layout from "../Layout/Layout";
import { updatePost } from "../api/PostApi";
import Button from "../comp/Button";
import ClosePage from "../comp/CloseFeedDetail";
import Input from "../comp/Input";
import Textarea from "../comp/Textarea";

export default function PostUpdate() {
    const { state } = useLocation();
    const post = state.post;
    const titleRef = useRef(null);
    const contentsRef = useRef(null);
    const navigate = useNavigate();

    const onSubmit = async e => {
        e.preventDefault();
        const res = await updatePost(post.id, { title: titleRef.current.value, contents: contentsRef.current.value});
        if (res) {
            navigate(`/post/${post.id}`)
        }
    }
    
    return <Layout headerContent={<ClosePage to={`/post/${post.id}`} />} className={"flex flex-col max-h-screen p-5"}>
        <form className="flex flex-auto flex-col gap-5" onSubmit={onSubmit}>
            <div className="flex items-center gap-4 flex-none text-white">
                <span className="whitespace-nowrap">제목:</span> 
                <Input id="title" ref={titleRef} defaultValue={post.title} required/>
            </div>

            <div className="flex-auto text-gray-500 flex flex-col gap-3">
                <Textarea id="content" className="flex-auto" ref={contentsRef} defaultValue={post.content} required />
                <div className="text-right">
                    <Button type="submit" className="w-20">수정하기</Button>
                </div>
            </div>
        </form>
    </Layout>;
}
