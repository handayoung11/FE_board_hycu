import { useParams } from "react-router-dom";
import Layout from "../Layout/Layout";
import CloseFeedDetail from "../comp/CloseFeedDetail";
import { usePostHook } from "../hook/PostHook";
import Comment from "../comp/Comment";

export default function FeedDetail() {
    const { postId } = useParams();
    const { post } = usePostHook(postId);
    const comments = post ? post.comments.map(c => <Comment {...c} />) : "";

    console.log(comments);
    return <Layout headerContent={CloseFeedDetail()}>
        <div className="h-full border rounded-xl bg-white m-6 p-4 ">
            <h2 className="text-2xl mb-4">{post ? post.title : ""}</h2>
            <div className="text-gray-400" style={{ minHeight: '5rem' }}>
                {post ? post.content : ""}
            </div>
            {comments}
        </div>
    </Layout>
}
