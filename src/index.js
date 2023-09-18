import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import FeedView from './page/FeedView';
import FeedDetail from './page/FeedDetail';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <FeedView />,
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
        <RouterProvider router={router} />
  </React.StrictMode>
);
