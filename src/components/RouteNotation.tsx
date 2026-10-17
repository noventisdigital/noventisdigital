import type { CSSProperties } from 'react'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'

export type Notation = 'terminal' | 'table' | 'diagram'

const NOTATIONS: Notation[] = ['terminal', 'table', 'diagram']

const ROUTES = [
  { id: 'build', name: 'Build', request: 'Something needs building', route: '/build', command: 'noventis build' },
  { id: 'adopt', name: 'Adopt', request: 'AI needs adopting', route: '/adopt', command: 'noventis adopt' },
  { id: 'run', name: 'Run', request: 'Technology needs someone to run it', route: '/run', command: 'noventis run' },
]

const PERSON = {
  short: '24/7',
  name: 'John Byrne',
  roles: 'Software Engineer, AI Expert, Fractional CTO',
}

// Mirrors public.css: request boxes end at 46% of the stage, the name box starts at 68%,
// rows are --rh tall under a 2.6em column head, and the name sits on the middle row.
const REQUEST_RIGHT = 0.46
const NAME_LEFT = 0.68
const HEAD_EM = 2.6

type Geometry = { width: number; fontSize: number; rowHeight: number }

function useMedia(query: string) {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches)
  useEffect(() => {
    const list = window.matchMedia(query)
    const update = () => setMatches(list.matches)
    list.addEventListener('change', update)
    return () => list.removeEventListener('change', update)
  }, [query])
  return matches
}

type Props = {
  start?: Notation
  period?: number
}

export function RouteNotation({ start = 'terminal', period = 6400 }: Props) {
  const reduce = useMedia('(prefers-reduced-motion: reduce)')
  const narrow = useMedia('(max-width: 980px)')
  const [view, setView] = useState<Notation>(start)
  const [paused, setPaused] = useState(false)
  const [left, setLeft] = useState(false)
  const [stopped, setStopped] = useState(false)
  const pausedRef = useRef(false)
  const stoppedRef = useRef(false)
  const stageRef = useRef<HTMLDivElement>(null)
  const pathRefs = useRef<(SVGPathElement | null)[]>([])
  const [geometry, setGeometry] = useState<Geometry | null>(null)

  const isStatic = reduce || narrow
  const shown: Notation = narrow ? 'terminal' : view

  useEffect(() => {
    pausedRef.current = paused
  }, [paused])

  useEffect(() => {
    stoppedRef.current = stopped
  }, [stopped])

  useEffect(() => {
    if (isStatic) return
    const order = [...NOTATIONS.slice(NOTATIONS.indexOf(start)), ...NOTATIONS.slice(0, NOTATIONS.indexOf(start))]
    const id = window.setInterval(() => {
      if (pausedRef.current || stoppedRef.current) return
      setLeft(true)
      setView((current) => order[(order.indexOf(current) + 1) % order.length])
    }, period)
    return () => window.clearInterval(id)
  }, [isStatic, period, start])

  useLayoutEffect(() => {
    const stage = stageRef.current
    if (!stage) return
    const measure = () => {
      const styles = getComputedStyle(stage)
      const fontSize = parseFloat(styles.fontSize)
      const rowHeight = parseFloat(styles.getPropertyValue('--rh')) * fontSize
      setGeometry({ width: stage.clientWidth, fontSize, rowHeight })
    }
    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(stage)
    return () => observer.disconnect()
  }, [])

  const paths = geometry
    ? ROUTES.map((_, index) => {
        const head = HEAD_EM * geometry.fontSize
        const x1 = REQUEST_RIGHT * geometry.width
        const x2 = NAME_LEFT * geometry.width - 2
        const y1 = head + (index + 0.5) * geometry.rowHeight
        const y2 = head + 1.5 * geometry.rowHeight
        const dx = (x2 - x1) / 2
        return `M${x1} ${y1} C${x1 + dx} ${y1} ${x2 - dx} ${y2} ${x2} ${y2}`
      })
    : []
  const pathKey = paths.join('|')

  useLayoutEffect(() => {
    pathRefs.current.forEach((path) => {
      if (!path) return
      const length = path.getTotalLength()
      path.style.strokeDasharray = `${length}`
      path.style.strokeDashoffset = shown === 'diagram' ? '0' : `${length}`
    })
  }, [pathKey, shown])

  return (
    <div
      className={`rt rt--dark${isStatic ? ' rt--static' : ''}${left ? '' : ' rt--first'}${stopped ? ' rt--stopped' : ''}`}
      data-view={shown}
      onBlur={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
    >
      <div className="rt__stage" ref={stageRef}>
        <div aria-hidden="true" className="rt__cols">
          <span>Request</span>
          <span>Route</span>
          <span>On call</span>
        </div>
        <svg aria-hidden="true" className="rt__lines">
          <defs>
            <marker id="rt-arrow" markerHeight="7" markerWidth="7" orient="auto" refX="7" refY="4" viewBox="0 0 8 8">
              <path d="M0 0.5 L7.5 4 L0 7.5 Z" />
            </marker>
          </defs>
          {paths.map((d, index) => (
            <path
              d={d}
              key={ROUTES[index].id}
              markerEnd="url(#rt-arrow)"
              ref={(element) => {
                pathRefs.current[index] = element
              }}
            />
          ))}
        </svg>
        {ROUTES.map((route, index) => (
          <div
            className={`rt__row${index === 1 ? ' rt__row--mid' : ''}`}
            key={route.id}
            style={{ ['--i' as string]: index } as CSSProperties}
          >
            <a aria-label={`${route.name}: ${route.request}`} className="rt__link" href={`#${route.id}`} />
            <span aria-hidden="true" className="rt__cell rt__cell--req">
              <span className="rt__t rt__t--table">{route.request}</span>
              <span className="rt__t rt__t--terminal"># {route.request.toLowerCase()}</span>
            </span>
            <span aria-hidden="true" className="rt__cell rt__cell--route">
              <span className="rt__t rt__t--table">{route.route}</span>
              <span className="rt__t rt__t--terminal">$ {route.command}</span>
            </span>
            <span aria-hidden="true" className="rt__cell rt__cell--hnd">
              <span className="rt__t rt__t--table">{PERSON.short}</span>
              <span className="rt__t rt__t--diagram">
                <b>{PERSON.name}</b>
                <small>{PERSON.roles}</small>
              </span>
              <span className="rt__t rt__t--terminal">
                on-call: <b>hello@noventis</b>
              </span>
            </span>
            <span aria-hidden="true" className="rt__dest">
              {route.name}
            </span>
          </div>
        ))}
        <p className="visually-hidden">
          Every route is answered by {PERSON.name}, {PERSON.roles}.
        </p>
        <button className="rt__pause" onClick={() => setStopped((current) => !current)} type="button">
          {stopped ? 'Play' : 'Pause'}
        </button>
      </div>
    </div>
  )
}
