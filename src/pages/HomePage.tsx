import type { FormEvent } from 'react'
import { useEffect, useRef, useState } from 'react'
import { PortalDemo } from '../components/PortalDemo'
import { RouteNotation } from '../components/RouteNotation'
import { SiteFooter, SiteHeader } from '../components/SiteChrome'
import { submitPublicContactForm } from '../lib/publicSiteService'

const routes = [
  {
    id: 'build',
    no: '01 Build',
    title: 'Something needs building',
    problem: 'A process still done by hand. A tool that does not exist. A system held together by one person.',
    answer: 'I find the manual work, build the replacement and keep it running. You own the result.',
  },
  {
    id: 'adopt',
    no: '02 Adopt',
    title: 'AI needs adopting',
    problem: 'You have seen the demos and perhaps paid for a pilot. Nothing is in daily use.',
    answer: 'I pick a useful application, build it into your staff’s daily work, and put checks in place so you know when it needs attention.',
  },
  {
    id: 'run',
    no: '03 Run',
    title: 'Technology needs someone to run it',
    problem: 'No CTO. An agency nobody can challenge. Decisions nobody is qualified to make.',
    answer: 'I review suppliers, set technical priorities and help you decide what to build, buy or change.',
  },
]

const rules = [
  { rule: 'Build before deck', line: 'Proof is something running, not a slide. Most engagements have working software inside the first week.' },
  { rule: 'Own more than you rent', line: 'Replace subscriptions and manual work with owned systems where that pays back, and say plainly when it does not.' },
  { rule: 'Boring infrastructure first', line: 'Logging, access, backups, deployment and cost control come before the interesting work.' },
  { rule: 'Plain language, always', line: 'I explain the options, costs and risks so you can make the decision.' },
]

type FormState = 'idle' | 'sending' | 'sent' | 'failed'

// The catalogue settles on arrival once per visit, never under reduced motion.
const ARRIVED_KEY = 'noventis-arrived'

function canArrive() {
  if (typeof window === 'undefined') return false
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false
  try {
    return sessionStorage.getItem(ARRIVED_KEY) === null
  } catch {
    return true
  }
}

function markArrived() {
  try {
    sessionStorage.setItem(ARRIVED_KEY, '1')
  } catch {
    // sessionStorage may be unavailable
  }
}

export function HomePage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [message, setMessage] = useState('')
  const [website, setWebsite] = useState('')
  const [formState, setFormState] = useState<FormState>('idle')
  const [arrive] = useState(canArrive)
  const statusRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (arrive) markArrived()
  }, [arrive])

  useEffect(() => {
    if (formState === 'sent' || formState === 'failed') {
      statusRef.current?.focus()
    }
  }, [formState])

  const handleContactSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setFormState('sending')
    try {
      await submitPublicContactForm({ name, email, company, message, website })
      setFormState('sent')
    } catch {
      setFormState('failed')
    }
  }

  return (
    <div className={arrive ? 'pub pub--arrive' : 'pub'}>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <div className="wrap">
        <SiteHeader />

        <main id="main">
          <section className="session" aria-labelledby="hero-title">
            <div className="session__top">
              <h1 id="hero-title">
                Most AI consultants ship slides. <span className="nowrap">I ship software.</span>
              </h1>
              <p className="lead">
                I build software for work still done by hand, get AI into daily use with your staff, and take responsibility for technology decisions when there is no CTO.
              </p>
            </div>
            <RouteNotation />
            <div className="session__foot">
              <p className="who">
                <img alt="John Byrne" height="44" src="/images/john-byrne.png" width="44" />
                <span>
                  <b>John Byrne</b>
                  Software Engineer, AI Expert, Fractional CTO.
                </span>
              </p>
              <div className="actions">
                <a className="btn" href="#contact">
                  Send a note
                </a>
                <a href="#routes">What I do</a>
              </div>
            </div>
          </section>

          <section className="section" id="routes" aria-labelledby="routes-title">
            <div className="section__head">
              <h2 id="routes-title">What I do</h2>
              <span className="label">Pick yours</span>
            </div>
            <div className="plate routes">
              {routes.map((route) => (
                <article className="route" id={route.id} key={route.id}>
                  <span className="item-no">{route.no}</span>
                  <div>
                    <h3>{route.title}</h3>
                    <p>{route.problem}</p>
                  </div>
                  <div>
                    <p>{route.answer}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="section" id="proof" aria-labelledby="proof-title">
            <div className="section__head">
              <h2 id="proof-title">Running today</h2>
              <span className="label">Client portal</span>
            </div>
            <div className="item">
              <figure className="plate plate--portal">
                <PortalDemo />
                <figcaption className="cap">Shown with demo data. The buttons work here; in the portal they open an email.</figcaption>
              </figure>
              <div>
                <table className="specs">
                  <tbody>
                    <tr>
                      <th scope="row">What it is</th>
                      <td>Where each client signs in and sees only their own material: packs, quotes, documents, invoices.</td>
                    </tr>
                    <tr>
                      <th scope="row">Access</th>
                      <td>Per client. Nobody sees another client's files.</td>
                    </tr>
                    <tr>
                      <th scope="row">Email</th>
                      <td>Sent by the system when a pack or invoice is ready.</td>
                    </tr>
                    <tr>
                      <th scope="row">Built</th>
                      <td>2026, by me, for Noventis</td>
                    </tr>
                  </tbody>
                </table>
                <p className="note">
                  Also running: <a href="/labs">Labs</a>, nineteen experiments in code.
                </p>
              </div>
            </div>
          </section>

          <section className="section" id="john" aria-labelledby="john-title">
            <div className="section__head">
              <h2 id="john-title">The person</h2>
              <span className="label">One person</span>
            </div>
            <div className="maker">
              <figure className="plate plate--portrait">
                <img alt="John Byrne" height="275" src="/images/john-byrne.png" width="220" />
                <figcaption className="cap">John Byrne</figcaption>
              </figure>
              <div>
                <h3>Noventis is me.</h3>
                <p>
                  <b>John Byrne.</b> Software Engineer, AI Expert, Fractional CTO.
                </p>
                <p>
                  I have spent my career as a software engineer, then running engineering teams, then as a CTO. Automation and AI are what I point that experience at now.
                </p>
                <p>
                  I came to AI after learning how software actually gets shipped and maintained, not the other way round. My work includes security, deployment, backups and maintenance.
                </p>
                <p>
                  Noventis is where I do that work for a small number of outside clients. If it is not the right fit, I will say so and point you at someone who is.
                </p>
                <p>
                  <a href="https://www.linkedin.com/in/jmbyrne/" rel="noreferrer" target="_blank">
                    John on LinkedIn
                  </a>
                </p>
                <table className="specs rules" aria-label="How I work">
                  <tbody>
                    {rules.map((item) => (
                      <tr key={item.rule}>
                        <th scope="row">{item.rule}</th>
                        <td>{item.line}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section className="section" id="contact" aria-labelledby="contact-title">
            <div className="section__head">
              <h2 id="contact-title">Send a note</h2>
              <span className="label">Enquiry form</span>
            </div>
            <div className="enq">
              <div className="enq__text">
                <p>
                  A short message saying what is going on will do. No obligation. It either ends with a clear next step or an honest &quot;this isn&apos;t for me, here&apos;s who you should talk to instead.&quot;
                </p>
                <p>
                  Or email <a href="mailto:hello@noventisdigital.co.uk">hello@noventisdigital.co.uk</a> directly.
                </p>
              </div>

              {formState === 'sent' ? (
                <div className="plate sent" ref={statusRef} role="status" tabIndex={-1}>
                  <span className="flag flag--inverse">Sent</span>
                  <h3>Got it, thanks.</h3>
                  <p>
                    I read every note myself and reply from hello@noventisdigital.co.uk.
                  </p>
                </div>
              ) : (
                <form className="form" onSubmit={handleContactSubmit}>
                  <div className="form-grid">
                    <label className="field">
                      <span>Name</span>
                      <input
                        autoComplete="name"
                        className="input"
                        id="contact-name"
                        name="name"
                        onChange={(event) => setName(event.target.value)}
                        required
                        type="text"
                        value={name}
                      />
                    </label>
                    <label className="field">
                      <span>Email</span>
                      <input
                        autoComplete="email"
                        className="input"
                        id="contact-email"
                        name="email"
                        onChange={(event) => setEmail(event.target.value)}
                        required
                        type="email"
                        value={email}
                      />
                    </label>
                    <label className="field field--wide">
                      <span>Company</span>
                      <input
                        autoComplete="organization"
                        className="input"
                        id="contact-company"
                        name="company"
                        onChange={(event) => setCompany(event.target.value)}
                        type="text"
                        value={company}
                      />
                    </label>
                    <label aria-hidden="true" className="field field--hidden">
                      <span>Website</span>
                      <input
                        autoComplete="off"
                        className="input"
                        name="website"
                        onChange={(event) => setWebsite(event.target.value)}
                        tabIndex={-1}
                        type="text"
                        value={website}
                      />
                    </label>
                    <label className="field field--wide">
                      <span>What is going on?</span>
                      <textarea
                        className="input"
                        id="contact-message"
                        name="message"
                        onChange={(event) => setMessage(event.target.value)}
                        required
                        rows={5}
                        value={message}
                      />
                    </label>
                  </div>

                  {formState === 'failed' ? (
                    <div className="status" ref={statusRef} role="alert" tabIndex={-1}>
                      <span className="flag flag--inverse">Not sent</span>
                      That did not send. Your message is still in the box above, so try again, or email me at{' '}
                      <a href="mailto:hello@noventisdigital.co.uk">hello@noventisdigital.co.uk</a>.
                    </div>
                  ) : null}

                  <div className="form-actions">
                    <button className="btn" disabled={formState === 'sending'} type="submit">
                      {formState === 'sending' ? 'Sending' : 'Send a note'}
                    </button>
                    <p className="form-note">
                      By sending this, you agree I can use your details to reply. See the <a href="/privacy">privacy policy</a>.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </section>
        </main>

        <SiteFooter />
      </div>
    </div>
  )
}
