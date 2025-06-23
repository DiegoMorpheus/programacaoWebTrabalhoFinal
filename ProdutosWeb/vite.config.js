import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
   base: '/ProdutosWeb/', // <- certinho se esse for o nome do repositório
  plugins: [react()],
})
