import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/ReactTemplate/',
  plugins: [react()],
  build: { outDir: 'build' },
  test: { environment: 'jsdom', setupFiles: ['./src/setupTests.js'] },
});
