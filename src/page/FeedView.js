import Layout from "../Layout/Layout";
import PageNav from "../comp/PageNav";
import usePostsHook from "../hook/PostHook";
import Feed from "../comp/Feed";

function FeedView() {

  console.log(1);
  const {posts} = usePostsHook();
  const feeds = posts.map(p => <Feed key={p.id} {...p} />)

  return <Layout headerContent = { PageNav() }>
    <div className="p-4 text-2xl text-gray-700">
      {feeds}
    </div>
  </Layout>;
}

export default FeedView;
