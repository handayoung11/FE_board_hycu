import Layout from "../Layout/Layout";
import PageNav from "../comp/PageNav";
import Feed from "../comp/Feed";
import { usePostsHook } from "../hook/PostHook";

function FeedView() {
  const { posts } = usePostsHook();
  const feeds = posts.map(p => <Feed key={p.id} {...p} />)

  return <Layout headerContent={PageNav()}>
    <div className="p-4 text-2xl text-gray-700">
      {feeds}
    </div>
  </Layout>;
}

export default FeedView;
