import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from 'path';
import fs from 'fs';


export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/portfolio/",
  assetsInclude: ['**/*.svg', '**/*.png', '**/*.jpg', '**/*.glb'],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html')
      }
    },
    outDir: 'dist',
    emptyOutDir: true
  },
  // Copie index.html en 404.html à la fin du build
  buildEnd() {
    const indexPath = resolve(__dirname, 'dist/index.html');
    const notFoundPath = resolve(__dirname, 'dist/404.html');
    if (fs.existsSync(indexPath)) {
      fs.copyFileSync(indexPath, notFoundPath);
    }
  }
});
