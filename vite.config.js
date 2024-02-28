import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:`/cv3/`,
  // production
  // comment base for local
  server: {
    port: 3003,
  },
})
