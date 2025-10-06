// frontend/src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // component หลัก
import './index.css'; // ไฟล์ Tailwind CSS
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);