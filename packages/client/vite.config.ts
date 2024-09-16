import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import dotenv from 'dotenv';
import { resolve } from 'path';
dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: Number(process.env.CLIENT_PORT) || 3000,
  },
  define: {
    __SERVER_PORT__: process.env.SERVER_PORT,
    __API_KEY_PIXABAY__: JSON.stringify(process.env.API_KEY_PIXABAY),
  },
  plugins: [
    svgr({
      include: '**/*.svg',
    }),
    react(),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/app/styles/_mantine.scss";`,
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});
