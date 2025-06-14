import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// vite.config.js
export default {
  server: {
    proxy: {
      '/notes': 'http://localhost:3001/api/notes'
    }
  }
}
