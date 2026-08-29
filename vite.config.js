import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  root: 'src',                // Tells Vite that index.html is inside src/
  base: '/portfolio/',        // Correct subfolder path for GitHub Pages
  publicDir: '../public',     // Fix: Explicitly tells Vite public is outside of src/
  plugins: [tailwindcss()],
  build: {
    outDir: '../dist',        // Places the final production build at the project root
    emptyOutDir: true         // Empties old content before rebuilding
  }
})