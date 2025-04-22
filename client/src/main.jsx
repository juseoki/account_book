// client/src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import CardUsagePage from './pages/CardUsagePage';

const root = ReactDOM.createRoot(document.getElementById('root'));

useEffect(() => {
  fetch('/api/hello')
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.error('백엔드 연결 실패:', err));
}, []);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/card-usage" element={<CardUsagePage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
