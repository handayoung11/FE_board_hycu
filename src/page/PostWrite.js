import { useLocation } from "react-router-dom";
import Layout from "../Layout/Layout";
import CloseFeedDetail from "../comp/CloseFeedDetail";
import Input from "../comp/Input";
import Button from "../comp/Button";
import Textarea from "../comp/Textarea";

export default function PostWrite() {
    let { state } = useLocation();
    if (!state) state = { page: 1 };
    return <Layout headerContent={<CloseFeedDetail page={state.page || 1} />} className={"flex flex-col max-h-screen p-5"}>
        <div className="flex flex-auto flex-col gap-5">
            <div className="flex items-center gap-4 flex-none text-white">
                <span className="whitespace-nowrap">제목:</span> <Input id="title" />
            </div>

            <div className="flex-auto text-gray-500 flex flex-col gap-3">
                <Textarea id="content" className="flex-auto" />
                <div className="text-right">
                    <Button className="w-20">글쓰기</Button>
                </div>
            </div>
        </div>
    </Layout>;
}
