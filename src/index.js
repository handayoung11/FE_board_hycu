import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import FeedView from './page/FeedView';
import FeedDetail from './page/FeedDetail';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FeedDetail />
  </React.StrictMode>
);
