import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate, useSearchParams } from "react-router-dom";
import Layout from "../Layout/Layout";
import Feed from "../comp/Feed";
import FixedRoundButton from "../comp/FixedRoundButton";
import LoginHeader from "../comp/LoginHeader";
import PageNav from "../comp/PageNav";
import { usePostsHook } from "../hook/PostHook";

function FeedView() {
  const { posts } = usePostsHook();
  const [searchParams] = useSearchParams();
  const naviagte = useNavigate();
  const pageSize = 5;
  const page = Number(searchParams.get('page')) || 1;
  const feeds = [];
  let max = 1;

  if (posts) {
    for (let i = (page - 1) * pageSize; i < page * pageSize && i < posts.length; i++) {
      const p = posts[i];
      feeds.push(<Feed key={p.id} page={page} {...p} />)
    }
    max = Math.ceil(posts.length / pageSize);
  }

  return <Layout className="flex flex-col h-screen" headerContent={<LoginHeader pageNav={<PageNav page={page} max={max} />} />}>
    <div className="p-4 text-2xl text-gray-700 overflow-auto">
      {feeds}
    </div>
    <FixedRoundButton onClick={() => naviagte("/post/write", { state: { page } })}>
      <FontAwesomeIcon icon={faPenToSquare} />
    </FixedRoundButton>
  </Layout>;
}

export default FeedView;
