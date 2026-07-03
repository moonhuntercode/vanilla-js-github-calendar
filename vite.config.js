import { defineConfig } from 'vite';
import { resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  build: {
    target: 'es2015',
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'GitHubCalendar',
      fileName: 'vanilla-js-github-calendar',
      formats: ['es', 'umd']
    },
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'vanilla-js-github-calendar.css';
          return assetInfo.name;
        },
      },
    },
  }
});
