import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
 /*  base: '/irinadan-react/', */ // Для продакшена нужно убирать
  plugins: [react()],
})
