import { useState } from 'react'

// The client portal's milestone block, working, with the same demo pack the portal shows in demo mode.
// Approve by email and Request changes open an email in the portal; here they move the milestones.

type DemoState = 'done' | 'current' | 'next' | 'changes'

type Milestone = { label: string; due: string; status: DemoState }

const STATE_WORDS: Record<DemoState, string> = {
  done: 'Done',
  current: 'Current',
  next: 'Next',
  changes: 'Changes requested',
}

const DEMO_MILESTONES: Milestone[] = [
  { label: 'Current workflow review complete', due: '11 April 2026', status: 'done' },
  { label: 'Prototype approved', due: '17 April 2026', status: 'current' },
  { label: 'Delivery handover', due: '25 April 2026', status: 'next' },
]

const DEMO_NOTES =
  'This proposal assumes one stakeholder lead, one weekly review call and access to your existing tooling stack during the sprint.'

export function PortalDemo() {
  const [milestones, setMilestones] = useState<Milestone[]>(DEMO_MILESTONES)
  const [announcement, setAnnouncement] = useState('')

  const activeIndex = milestones.findIndex((item) => item.status === 'current' || item.status === 'changes')
  const active = activeIndex >= 0 ? milestones[activeIndex] : null
  const allDone = milestones.every((item) => item.status === 'done')

  const approve = () => {
    if (activeIndex < 0) return
    const next = milestones.map((item, index) => {
      if (index === activeIndex) return { ...item, status: 'done' as const }
      if (index === activeIndex + 1) return { ...item, status: 'current' as const }
      return item
    })
    const following = next[activeIndex + 1]
    setMilestones(next)
    setAnnouncement(
      following
        ? `${milestones[activeIndex].label} marked done. ${following.label} is current.`
        : `${milestones[activeIndex].label} marked done. All milestones done.`,
    )
  }

  const requestChanges = () => {
    if (activeIndex < 0 || milestones[activeIndex].status === 'changes') return
    setMilestones(milestones.map((item, index) => (index === activeIndex ? { ...item, status: 'changes' } : item)))
    setAnnouncement(`Changes requested on ${milestones[activeIndex].label}.`)
  }

  const reset = () => {
    setMilestones(DEMO_MILESTONES)
    setAnnouncement('Demo reset.')
  }

  return (
    <div className="pdemo">
      <section aria-labelledby="pdemo-milestones" className="pdemo__card">
        <h3 id="pdemo-milestones">Delivery milestones</h3>
        <div className="pdemo__list">
          {milestones.map((item) => (
            <div className="pdemo__ms" key={item.label}>
              <span className={`pdemo__state is-${item.status}`}>{STATE_WORDS[item.status]}</span>
              <strong>{item.label}</strong>
              <p>{item.due}</p>
            </div>
          ))}
        </div>
      </section>
      <section aria-labelledby="pdemo-notes" className="pdemo__card pdemo__note">
        <h3 id="pdemo-notes">Notes</h3>
        <p>{DEMO_NOTES}</p>
      </section>
      <div className="pdemo__actions">
        <button className="pdemo__primary" disabled={!active} onClick={approve} type="button">
          Approve by email
        </button>
        <button
          className="pdemo__ghost"
          disabled={!active || active.status === 'changes'}
          onClick={requestChanges}
          type="button"
        >
          Request changes
        </button>
        {allDone ? (
          <button className="pdemo__reset" onClick={reset} type="button">
            Reset
          </button>
        ) : null}
      </div>
      <p aria-live="polite" className="visually-hidden">
        {announcement}
      </p>
    </div>
  )
}
