import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  base: '/lr-studio-portfolio/',
  server: { host: '0.0.0.0', allowedHosts: ['terminal.local'] },
  build: { rollupOptions: { input: { main: resolve(import.meta.dirname, 'index.html'), english: resolve(import.meta.dirname, 'en.html') } } }
});
