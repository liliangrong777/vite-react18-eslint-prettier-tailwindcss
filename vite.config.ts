import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import eslintPlugin from 'vite-plugin-eslint';
import { visualizer } from 'rollup-plugin-visualizer';
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  const isDevMode = process.env.NODE_ENV === 'development';
  const basePath =
    process.env.VITE_API_ORIGIN + (process.env.VITE_ROUTER_BASE_NAME || '');
  return {
    base: basePath,
    plugins: [
      react({
        babel: {
          plugins: [
            ['@babel/plugin-proposal-decorators', { legacy: true }],
            ['@babel/plugin-proposal-class-properties', { loose: true }],
          ],
        },
        include: '**/*.tsx',
      }),
      eslintPlugin({
        lintOnStart: false,
        failOnError: false,
      }),
      visualizer({
        gzipSize: true,
      }),
    ],
    esbuild: {
      drop: !isDevMode ? ['console', 'debugger'] : undefined,
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'lodash-es': ['lodash-es'],
            '@shopify/polaris': ['@shopify/polaris'],
            '@shopify/polaris-icons': ['@shopify/polaris-icons'],
            'lottie-web': ['lottie-web'],
          },
        },
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      host: '0.0.0.0',
    },
  };
});
