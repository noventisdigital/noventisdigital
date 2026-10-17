// Writes public/previews/code-city.json: every tracked source file in this repository with its size,
// for the Labs experiment "Code city". Runs before each build.
import { readdirSync, statSync, writeFileSync } from 'node:fs'
import { join, relative, extname, dirname } from 'node:path'

const root = process.cwd()
const skip = new Set(['node_modules', 'dist', 'dist-preview', '.git', '.impeccable', 'proposals', 'artifacts', 'docs', 'playwright-tests'])
const files = []

function walk(dir) {
  for (const name of readdirSync(dir)) {
    if (name.startsWith('.') && name !== '.github') continue
    const full = join(dir, name)
    const rel = relative(root, full)
    if (skip.has(name) || skip.has(rel)) continue
    const st = statSync(full)
    if (st.isDirectory()) walk(full)
    else if (!/\.(png|jpg|jpeg|woff2?|ico|lock)$/i.test(name) && name !== 'code-city.json') {
      files.push({ path: rel.split('\\').join('/'), size: st.size, ext: extname(name).slice(1) || name, dir: dirname(rel).split('\\').join('/') })
    }
  }
}
walk(root)
files.sort((a, b) => a.path.localeCompare(b.path))
writeFileSync(join(root, 'public/previews/code-city.json'), JSON.stringify(files))
console.log(`code-city: ${files.length} files`)
