import Layout from "../Layout/Layout";
import PageNav from "../comp/PageNav";
import Feed from "../comp/Feed";
import { usePostsHook } from "../hook/PostHook";
import { useSearchParams } from "react-router-dom";

function FeedView() {
  const { posts } = usePostsHook();
  const [searchParams] = useSearchParams();
  const pageSize = 5;
  const page = Number(searchParams.get('page')) || 1;
  const feeds = [];
  let max = 1;

  if (posts) {
    for (let i = (page - 1) * pageSize; i < page * pageSize && i < posts.length; i++) {
      const p = posts[i];
      feeds.push(<Feed key={p.id} page={page} {...p} />)
    }
    max = Math.ceil(posts.length/pageSize);
  }

  return <Layout headerContent={<PageNav page={page} max={max} />}>
    <div className="p-4 text-2xl text-gray-700">
      {feeds}
    </div>
  </Layout>;
}

export default FeedView;
