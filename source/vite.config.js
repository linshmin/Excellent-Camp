import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  publicDir: false,
  server: {
    host: '0.0.0.0',
    allowedHosts: ['terminal.local'],
  },
});
