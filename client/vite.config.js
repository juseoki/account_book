import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: '0.0.0.0', //대신 true를 사용할 수도 있습니다
    strictPort: true, // 포트 충돌 시 종료
    proxy: {
      '/api': {
        target: 'http://backend:3000',
        changeOrigin: true
      }
    },
    allowedHosts: ['juseokwoo.org']
  }
});
