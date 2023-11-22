import { faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Layout from "../Layout/Layout";
import Button from "../comp/Button";
import CloseFeedDetail from "../comp/CloseFeedDetail";
import Comment from "../comp/Comment";
import usePageStateHook from "../hook/PageStateHook";
import { usePostHook } from "../hook/PostHook";
import { deletePost } from "../api/PostApi";
import { useAuth } from "../comp/AuthProvider";

export default function FeedDetail() {
    const { postId } = useParams();
    const { post } = usePostHook(postId);
    const state = usePageStateHook();
    const page = state.page || 1;
    const comments = post ? post.comments.map(c => <Comment key={c.id} {...c} />) : "";
    const navigate = useNavigate();
    const { isLoggedIn, userInfo } = useAuth();
    console.log(userInfo);

    async function onDelete() {
        const res = await Swal.fire({
            icon: "question",
            text: "글을 삭제하시겠습니까?",
            showCancelButton: true,
            showCloseButton: true,
            confirmButtonText: "네",
            cancelButtonText: "아니오",
        })

        if (res.isConfirmed) {
            const res = await deletePost(postId);
            if (res) {
                await Swal.fire("삭제 완료", "글이 삭제되었습니다.", "success");
                navigate(`/post?page=${page}`)
            }
        }
    }

    return <Layout headerContent={<CloseFeedDetail page={page} />}>
        <div className="h-full border rounded-xl bg-white m-6 p-4 mb-2">
            <h2 className="text-2xl mb-4">{post ? post.title : ""}</h2>
            <div className="text-gray-400 whitespace-pre-wrap" style={{ minHeight: '5rem' }}>
                {post ? post.content : ""}
            </div>
        </div>
        {post && isLoggedIn && userInfo.id === post.creator.id &&
            <div className="flex flex-row-reverse gap-2 mx-6 mb-3">
                <Button onClick={onDelete} className="basis-11 py-1"><FontAwesomeIcon icon={faTrashCan} /></Button>
                <Button className="basis-11 py-1" theme="yellow"><FontAwesomeIcon icon={faPen} /></Button>
            </div>}
        <div className="mx-6 pl-4">
            {comments}
        </div>
    </Layout>
}
