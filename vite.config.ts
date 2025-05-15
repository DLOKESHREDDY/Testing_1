import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  publicDir: 'public', // Explicitly define public directory
  assetsInclude: ['**/*.glb'], // Ensure GLB files are treated as assets
});