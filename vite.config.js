import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace 'portfolio' with your actual GitHub repository name
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
