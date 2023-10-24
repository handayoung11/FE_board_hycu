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

axios.defaults.baseURL = 'http://localhost:8080';
axios.defaults.withCredentials = true;
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
]);

root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
