// src/pages/LoginPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const login = async () => {
    try {
      const res = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, pw }),
      });

      const data = await res.json();
      if (data.success) {
        setMsg('✅ 로그인 성공!');
        navigate('/card-usage');
      } else {
        setMsg('❌ 로그인 실패');
      }
    } catch (err) {
      setMsg('서버 오류');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <h1 className="text-2xl font-bold">🔐 로그인</h1>
      <input
        placeholder="아이디"
        value={id}
        onChange={(e) => setId(e.target.value)}
        className="border px-3 py-2 w-64"
      />
      <input
        placeholder="비밀번호"
        type="password"
        value={pw}
        onChange={(e) => setPw(e.target.value)}
        className="border px-3 py-2 w-64"
      />
      <button
        onClick={login}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        로그인
      </button>
      <p className="text-xs text-gray-500">{msg}</p>
    </div>
  );
}
