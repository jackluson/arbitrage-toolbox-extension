import { resolve } from 'node:path';
import { makeEntryPointPlugin } from '@arbitrage-toolbox/hmr';
import { withPageConfig } from '@arbitrage-toolbox/vite-config';
import { IS_DEV } from '@arbitrage-toolbox/env';

const rootDir = resolve(import.meta.dirname);
const srcDir = resolve(rootDir, 'src');

export default withPageConfig({
  resolve: {
    alias: {
      '@src': srcDir,
    },
  },
  plugins: [IS_DEV && makeEntryPointPlugin()],
  publicDir: resolve(rootDir, 'public'),
  build: {
    lib: {
      name: 'contentUI',
      fileName: 'index',
      formats: ['iife'],
      entry: resolve(srcDir, 'index.tsx'),
    },
    outDir: resolve(rootDir, '..', '..', 'dist', 'content-ui'),
  },
});
