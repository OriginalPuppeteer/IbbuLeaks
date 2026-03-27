import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  // Relative base keeps built asset URLs valid for GitHub Pages and local previews.
  base: './',
})
