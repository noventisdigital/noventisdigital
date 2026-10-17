import { Link } from 'react-router-dom'

const INDEX = [
  { href: '/#build', label: 'Build' },
  { href: '/#adopt', label: 'Adopt' },
  { href: '/#run', label: 'Run' },
  { href: '/#john', label: 'About' },
  { href: '/#contact', label: 'Send a note' },
]

export function SiteHeader() {
  return (
    <header className="cat">
      <Link className="wm" to="/">
        <span aria-hidden="true" className="wm__mark" />
        <span className="wm__copy">
          <strong>Noventis</strong>
          <span>Software Engineering, AI Transformation and IT Leadership</span>
        </span>
      </Link>
      <span className="cat__sub" />
      <nav aria-label="Index" className="index">
        {INDEX.map((item) => (
          <a href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  )
}

export function SiteFooter() {
  return (
    <footer className="colophon">
      <p>
        Noventis Digital is John Byrne: software engineer, AI expert, fractional CTO. East Midlands, UK, working with teams everywhere.
      </p>
      <nav aria-label="Footer">
        <a href="mailto:hello@noventisdigital.co.uk">hello@noventisdigital.co.uk</a>
        <a href="https://www.linkedin.com/in/jmbyrne/" rel="noreferrer" target="_blank">
          LinkedIn
        </a>
        <Link to="/labs">Labs</Link>
        <Link to="/portal">Client portal</Link>
        <Link to="/privacy">Privacy</Link>
      </nav>
    </footer>
  )
}
