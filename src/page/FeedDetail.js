import { faHeart, faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Layout from "../Layout/Layout";
import { likeOrUnLikePost } from "../api/LikeApi";
import { deletePost } from "../api/PostApi";
import { writeReply } from "../api/ReplyApi";
import { useAuth } from "../comp/AuthProvider";
import Button from "../comp/Button";
import ClosePage from "../comp/ClosePage";
import Comment from "../comp/Comment";
import ReplyForm from "../comp/ReplyForm";
import usePageStateHook from "../hook/PageStateHook";
import { usePostHook } from "../hook/PostHook";
import "../scroll.css";

export default function FeedDetail() {
    const { isLoggedIn, userInfo } = useAuth();
    const { postId } = useParams();
    const { post, fetchPost } = usePostHook(postId, isLoggedIn, onLike);
    const state = usePageStateHook();
    const page = state.page || 1;
    const comments = post ? post.comments.map(c => <Comment key={c.id} {...c} mine={isLoggedIn && userInfo.id === c.creator.id} fetchPost={fetchPost} />) : "";
    const navigate = useNavigate();
    const contentsRef = useRef(null);

    useEffect(() => {
        return Swal.close;
    }, [])

    function onUpdate() {
        navigate(`/post/update/${postId}`, { state: { post, page } });
    }

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

    async function onLike() {
        if (!isLoggedIn) {
            Swal.fire({ text: "로그인 후 이용가능합니다.", icon: "warning" });
            return
        }
        await likeOrUnLikePost(postId);
        fetchPost();
    }

    async function onComment() {
        if (!isLoggedIn) {
            Swal.fire({ text: "로그인 후 이용가능합니다.", icon: "warning" })
            return;
        }

        await writeReply({postId, contents: contentsRef.current.value})
        contentsRef.current.value = "";
        fetchPost();
    }

    return <Layout headerContent={<ClosePage page={page} />}>
        <div className="h-full border rounded-xl bg-white m-6 mb-2">
            <h2 className="p-4 text-2xl">{post ? post.title : ""}</h2>
            <div className="px-4 pb-4 scroll-container text-gray-400 whitespace-pre-wrap max-h-screen-35 overflow-auto" style={{ minHeight: '5rem' }}>
                {post ? post.content : ""}
            </div>
        </div>

        <div className="flex flex-row-reverse gap-2 mx-6 mb-3">
            {post && isLoggedIn && userInfo.id === post.creator.id &&
                <>
                    <Button onClick={onDelete} className="basis-11 py-1"><FontAwesomeIcon icon={faTrashCan} /></Button>
                    <Button onClick={onUpdate} className="basis-11 py-1" theme="yellow"><FontAwesomeIcon icon={faPen} /></Button>
                </>
            }
            <div className="flex-1">
                <Button className="basis-16 py-1" level={0} onClick={onLike}>
                    <FontAwesomeIcon className={post && post.clickLike ? "text-red-600" : ""} icon={faHeart} />
                    <span> {post && post.like}</span>
                </Button>
            </div>
        </div>
        <div className="mx-6 pb-10 mt-5">
            <ReplyForm ref={contentsRef} buttonText="댓글 달기" onClick={onComment} />
            <div className="pl-4">
            {comments}
            </div>
        </div>
    </Layout>
}
