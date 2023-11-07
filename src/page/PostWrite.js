import { useRef } from "react";
import Layout from "../Layout/Layout";
import { writePost } from "../api/PostApi";
import Button from "../comp/Button";
import CloseFeedDetail from "../comp/CloseFeedDetail";
import Input from "../comp/Input";
import Textarea from "../comp/Textarea";
import usePageStateHook from "../hook/PageStateHook";
import { useNavigate } from "react-router-dom";

export default function PostWrite() {
    const state = usePageStateHook();
    const titleRef = useRef(null);
    const contentsRef = useRef(null);
    const navigate = useNavigate();

    const onSubmit = async e => {
        e.preventDefault();
        const res = await writePost({ title: titleRef.current.value, contents: contentsRef.current.value});
        if (res) {
            navigate(`/post?page=${state.page}`)
        }
    }

    return <Layout headerContent={<CloseFeedDetail page={state.page || 1} />} className={"flex flex-col max-h-screen p-5"}>
        <form className="flex flex-auto flex-col gap-5" onSubmit={onSubmit}>
            <div className="flex items-center gap-4 flex-none text-white">
                <span className="whitespace-nowrap">제목:</span> 
                <Input id="title" ref={titleRef} required/>
            </div>

            <div className="flex-auto text-gray-500 flex flex-col gap-3">
                <Textarea id="content" className="flex-auto" ref={contentsRef} required />
                <div className="text-right">
                    <Button type="submit" className="w-20">글쓰기</Button>
                </div>
            </div>
        </form>
    </Layout>;
}
