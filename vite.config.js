import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/Defi-101/',
  plugins: [
    react(),
    tailwindcss(),
  ],
})