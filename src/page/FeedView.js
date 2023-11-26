import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate, useSearchParams } from "react-router-dom";
import Layout from "../Layout/Layout";
import { useAuth } from "../comp/AuthProvider";
import Feed from "../comp/Feed";
import FixedRoundButton from "../comp/FixedRoundButton";
import LoginHeader from "../comp/LoginHeader";
import PageNav from "../comp/PageNav";
import { usePostsHook } from "../hook/PostHook";
import { useState } from "react";

function FeedView() {
  const [orderBy, setOrderBy] = useState("T");
  const { posts } = usePostsHook(orderBy);
  const { isLoggedIn, setShowLoginModal } = useAuth();
  const [searchParams] = useSearchParams();
  const naviagte = useNavigate();
  const pageSize = 5;
  const page = Number(searchParams.get('page')) || 1;
  const feeds = [];
  let max = 1;


  const onClick = () => {
    if (isLoggedIn) {
      naviagte("/post/write", { state: { page } })
    } else {
      setShowLoginModal(true);
    }
  }

  if (posts) {
    for (let i = (page - 1) * pageSize; i < page * pageSize && i < posts.length; i++) {
      const p = posts[i];
      feeds.push(<Feed key={p.id} page={page} {...p} />)
    }
    max = Math.ceil(posts.length / pageSize);
  }

  return <Layout className="flex flex-col h-screen" headerContent={<LoginHeader pageNav={<PageNav page={page} max={max} />} orderBy={orderBy} setOrderBy={setOrderBy} />}>
    <div className="p-4 text-2xl text-gray-700 overflow-auto">
      {feeds}
    </div>
    <FixedRoundButton onClick={onClick}>
      <FontAwesomeIcon icon={faPenToSquare} />
    </FixedRoundButton>
  </Layout>;
}

export default FeedView;
