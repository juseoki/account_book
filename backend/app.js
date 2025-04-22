const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get('/api/hello', (req, res) => {
  res.json({ message: '백엔드 연결 완료!' });
});

app.post('/api/login', (req, res) => {
  const { id, pw } = req.body;
  if (id === 'juseokwoo' && pw === '1234') {
    res.json({ success: true });
  } else {
    res.status(401).json({ success: false });
  }
});

app.listen(port, '0.0.0.0', () => {
  console.log(`✅ Backend listening on http://localhost:${port}`);
});
