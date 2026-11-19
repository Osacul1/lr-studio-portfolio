import { defineConfig } from 'vite';

export default defineConfig({
  base: '/lr-studio-portfolio/',
  server: { host: '0.0.0.0', allowedHosts: ['terminal.local'] }
});
