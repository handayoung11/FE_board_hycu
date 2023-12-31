import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AuthProvider from './comp/AuthProvider';
import './index.css';
import FeedDetail from './page/FeedDetail';
import FeedView from './page/FeedView';
import { EXPIRED, getToken } from './utils/UserUtils';
import SignUp from './page/SignUp';
import PostWrite from './page/PostWrite';
import { register } from 'timeago.js'
import koLocale from 'timeago.js/lib/lang/ko'
import PostUpdate from './page/PostUpdate';

register('ko', koLocale);
axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.withCredentials = true;
axios.defaults.headers.common['ngrok-skip-browser-warning'] = 'true';
axios.interceptors.response.use(undefined, async e => {
  const res = e.response;
  const config = e.config;
  if (!config || config.noRetry) {
    return Promise.reject(e);
  }
  config.noRetry = true;

  if (res && res.status === 401) {
    if (res.data === EXPIRED) {
      if (window.reLogin) {
        const res = await window.reLogin();
        if (res) config.headers.Authorization = `Bearer ${getToken()}`;
        else config.headers.Authorization = '';
        return await axios(config);
      }
    }
  }
  return Promise.reject(e);
})

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <FeedView />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/post",
    element: <FeedView />,
  },
  {
    path: "/post/:postId",
    element: <FeedDetail />,
  },
  {
    path: "/post/write",
    element: <PostWrite />,
  },
  {
    path: "/post/update/:postId",
    element: <PostUpdate />,
  },
]);

root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
