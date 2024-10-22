import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import dotenv from 'dotenv';
import { resolve, join } from 'path';
dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: join(__dirname, 'dist/client'),
  },
  ssr: {
    format: 'cjs',
  },
  server: {
    port: Number(process.env.CLIENT_PORT) || 3000,
  },
  define: {
    __SERVER_PORT__: JSON.stringify(process.env.SERVER_PORT),
    __SERVER_API_URL__: JSON.stringify(process.env.SERVER_API_URL),
    __YANDEX_API_URL__: JSON.stringify(process.env.YANDEX_API_URL),
    __YANDEX_RESOURCES_URL__: JSON.stringify(process.env.YANDEX_RESOURCES_URL),
    __EXTERNAL_SERVER_URL__: JSON.stringify(process.env.EXTERNAL_SERVER_URL),
    __INTERNAL_SERVER_URL__: JSON.stringify(process.env.INTERNAL_SERVER_URL),
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
