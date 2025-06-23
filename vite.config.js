<<<<<<< HEAD
=======
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

>>>>>>> fe84dd3a1a3febb0809174eb6d7bf47b290d9d28
export default defineConfig({
  base: '/programacaoWebTrabalhoFinal/',
  build: {
    outDir: 'docs',
  },
  plugins: [react()],
})
