import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  root: 'src',                 
  base: '/portfolio/',         
  plugins: [tailwindcss()],
  build: {
    outDir: '../dist',         
    emptyOutDir: true          
  }
})