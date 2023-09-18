import Layout from "../Layout/Layout";
import PageNav from "../comp/PageNav";
import Feed from "../comp/Feed";
import { usePostsHook } from "../hook/PostHook";
import { useSearchParams } from "react-router-dom";

function FeedView() {
  const { posts } = usePostsHook();
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;
  const feeds = [];

  if (posts) {
    for (let i = (page - 1) * 10; i < page * 10 && i < posts.length; i++) {
      const p = posts[i];
      feeds.push(<Feed key={p.id} {...p} />)
    }
  }

  return <Layout headerContent={<PageNav page={page} />}>
    <div className="p-4 text-2xl text-gray-700">
      {feeds}
    </div>
  </Layout>;
}

export default FeedView;
