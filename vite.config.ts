import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  base: '/hyunsu12-lab.github.io-portfolio/',
  build: { outDir: 'docs' },
});

