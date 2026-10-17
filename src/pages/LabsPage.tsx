import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { SiteFooter, SiteHeader } from '../components/SiteChrome'

type Experiment = {
  id: string
  name: string
  src: string
}

const EXPERIMENTS: Experiment[] = [
  { id: 'wfc', name: 'Wave function collapse', src: '/previews/wfc.html' },
  { id: 'ast', name: 'Navigating the code universe', src: '/previews/ast.html' },
  { id: 'glyph', name: 'Morphing glyph', src: '/previews/glyph.html' },
  { id: 'snake', name: 'Snake playing itself', src: '/previews/snake.html' },
  { id: 'pacman', name: 'Pac-Man playing itself', src: '/previews/pacman.html' },
  { id: 'hacking', name: 'Terminal hack', src: '/previews/hacking.html' },
  { id: 'special', name: 'S.P.E.C.I.A.L.', src: '/previews/special.html' },
  { id: 'lockpick', name: 'Lockpicking', src: '/previews/lockpick.html' },
  { id: 'city', name: 'Code city', src: '/previews/city.html' },
  { id: 'system', name: 'Exploded system', src: '/previews/system.html' },
  { id: 'portrait', name: 'Portrait in particles', src: '/previews/portrait.html' },
  { id: 'flock', name: 'Migration', src: '/previews/flock.html' },
  { id: 'snake-learns', name: 'Snake learns', src: '/previews/snake-learns.html' },
  { id: 'cars', name: 'Cars learn to drive', src: '/previews/cars.html' },
  { id: 'teach', name: 'Teach it a shape', src: '/previews/teach.html' },
  { id: 'balance', name: 'Keep it balanced', src: '/previews/balance.html' },
  { id: 'eventloop', name: 'The event loop', src: '/previews/eventloop.html' },
  { id: 'migrate', name: 'Spreadsheet to system', src: '/previews/migrate.html' },
  { id: 'cutover', name: 'Switching the database under traffic', src: '/previews/cutover.html' },
]

const LAST_KEY = 'noventis-labs-last'

function pickExperiment(): Experiment {
  if (typeof window === 'undefined') return EXPERIMENTS[0]
  let last: string | null = null
  try {
    last = sessionStorage.getItem(LAST_KEY)
  } catch {
    // sessionStorage may be unavailable
  }
  const pool = last ? EXPERIMENTS.filter((e) => e.id !== last) : EXPERIMENTS
  const choices = pool.length > 0 ? pool : EXPERIMENTS
  const chosen = choices[Math.floor(Math.random() * choices.length)]
  try {
    sessionStorage.setItem(LAST_KEY, chosen.id)
  } catch {
    // noop
  }
  return chosen
}

export function LabsPage() {
  const [pick] = useState<Experiment>(pickExperiment)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null
      if (target && ['INPUT', 'TEXTAREA'].includes(target.tagName)) return
      if (e.key === 'r' || e.key === 'R') {
        window.location.reload()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const index = EXPERIMENTS.findIndex((e) => e.id === pick.id) + 1
  const itemNo = String(index).padStart(2, '0')

  return (
    <div className="pub">
      <a className="skip" href="#main">
        Skip to content
      </a>
      <div className="wrap">
        <SiteHeader />
        <main className="labs" id="main">
          <div className="labs__head">
            <h1>
              <span className="item-no">Labs · item {itemNo} of {String(EXPERIMENTS.length).padStart(2, '0')}</span>
              {pick.name}
            </h1>
            <span className="label">Running in the browser</span>
          </div>
          <figure className="plate">
            <iframe className="labs-frame" src={pick.src} title={`Noventis Labs experiment: ${pick.name}`} />
            <figcaption className="cap">{pick.name} · written from scratch · runs in the browser</figcaption>
          </figure>
          <div className="labs__row">
            <p>Small things I build to stay sharp, each one written from scratch and running in the browser.</p>
            <div className="labs-actions">
              <button type="button" className="btn" onClick={() => window.location.reload()}>
                Show another
              </button>
              <Link to="/">Back to the catalogue</Link>
              <span className="labs-hint">
                or press <kbd>R</kbd> for another
              </span>
            </div>
          </div>
        </main>
        <SiteFooter />
      </div>
    </div>
  )
}
