import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/programacaoWebTrabalhoFinal/',
  build: {
    outDir: 'docs',
  },
  plugins: [react()],
})
