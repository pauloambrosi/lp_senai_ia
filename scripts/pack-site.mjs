// Gera o "pacote completo do site" (.zip) oferecido no rodapé.
// Roda depois do `vite build`: compacta o conteúdo de dist/ e grava o
// arquivo dentro de dist/, para que o link do rodapé funcione no site publicado.
import { execFileSync } from 'node:child_process'
import { existsSync, rmSync } from 'node:fs'
import { resolve } from 'node:path'

const distDir = resolve(import.meta.dirname, '..', 'dist')
const zipName = 'senai-ia-site-completo.zip'
const zipPath = resolve(distDir, zipName)

if (!existsSync(distDir)) {
  console.error(`pack-site: ${distDir} não existe — rode o build antes.`)
  process.exit(1)
}

// Remove um pacote anterior para não compactá-lo dentro de si mesmo.
rmSync(zipPath, { force: true })

try {
  execFileSync('zip', ['-r', '-q', '-X', zipName, '.', '-x', zipName], {
    cwd: distDir,
    stdio: 'inherit',
  })
  console.log(`pack-site: dist/${zipName} gerado.`)
} catch (error) {
  console.warn(
    `pack-site: não foi possível gerar o pacote (${error.message}). ` +
      'O site funciona normalmente; apenas o link de download do rodapé ficará indisponível.'
  )
}
