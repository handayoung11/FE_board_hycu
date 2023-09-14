import Layout from "../Layout/Layout";
import CloseFeedDetail from "../comp/CloseFeedDetail";

export default function FeedDetail() {
    return <Layout headerContent={CloseFeedDetail()}>
        <div class="h-full border rounded-xl bg-white m-6 p-4 ">
            <h2 class="text-2xl mb-4">title</h2>
            <div class="text-gray-400" style={{ minHeight: '5rem' }}>
                content
            </div>

            comments

        </div>
    </Layout>
}
