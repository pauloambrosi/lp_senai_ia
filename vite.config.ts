import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  // Base relativa: os caminhos dos assets passam a ser resolvidos a partir da
  // própria página, então o mesmo build funciona na raiz de um domínio e em
  // qualquer subdiretório (como /<repositorio>/ no GitHub Pages), sem precisar
  // saber o prefixo na hora do build. PUBLIC_BASE_URL força um prefixo fixo.
  base: process.env.PUBLIC_BASE_URL || './',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
