import { useParams } from "react-router-dom";
import Layout from "../Layout/Layout";
import CloseFeedDetail from "../comp/CloseFeedDetail";
import Comment from "../comp/Comment";
import usePageStateHook from "../hook/PageStateHook";
import { usePostHook } from "../hook/PostHook";

export default function FeedDetail() {
    const { postId } = useParams();
    const { post } = usePostHook(postId);
    const state = usePageStateHook();
    const comments = post ? post.comments.map(c => <Comment key={c.id} {...c} />) : "";

    return <Layout headerContent={<CloseFeedDetail page={state.page || 1} />}>
        <div className="h-full border rounded-xl bg-white m-6 p-4 ">
            <h2 className="text-2xl mb-4">{post ? post.title : ""}</h2>
            <div className="text-gray-400 whitespace-pre-wrap" style={{ minHeight: '5rem' }}>
                {post ? post.content : ""}
            </div>
            {comments}
        </div>
    </Layout>
}
