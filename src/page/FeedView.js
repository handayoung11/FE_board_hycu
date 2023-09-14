import Layout from "../Layout/Layout";
import Header from "../comp/Header";
import PageNav from "../comp/PageNav";

function FeedView() {
  return <Layout headerContent = { PageNav() }>
    <div class="p-4 text-2xl text-gray-700">
      {/* {{ __news_feed__ }} */}
    </div>
  </Layout>;
}

export default FeedView;
