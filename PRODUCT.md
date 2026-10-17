# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary (confirmed 15 October 2026, widened 16 October 2026): two buyers. Owner-managers of established UK SMEs, non-technical, with no in-house CTO or Head of IT, whose technology is handled by a mix of agencies, SaaS subscriptions and whoever is nearest; and managing directors of 50 to 200 person companies with nobody senior in technology, who need a part-time CTO. Both are deciding whether to bring in outside technical leadership and delivery. They arrive via LinkedIn or referral and read on both desktop and phone.

Real examples of this pattern exist (a precision engineering firm, an SEO agency, a price-comparison product company) but are private and must not be named publicly.

Secondary audiences:
- Existing clients using the private portal at /portal: view project packs, quotes, documents and invoices, upload files, give review feedback.
- John Byrne as the sole operator, using /admin to manage clients, uploads, invoices and audit logs.

## Product Purpose

The public site exists to win first conversations with SME owner-managers for Noventis Digital, a one-person consultancy run by John Byrne. Success is a qualified enquiry through the contact form or by email to hello@noventisdigital.co.uk.

Secondary purposes: give existing clients a private place to review their material (portal), and host Labs, a set of small interactive experiments that demonstrate craft.

## Positioning

Lead claim (John, 16 October 2026, replacing the automation-only lead of 15 October): **three routes to one person**. A visitor arrives with one of three problems, Build (something needs building), Adopt (AI needs adopting) or Run (technology needs someone to run it), and the same person answers all three. The tagline under the lockup is "Software Engineering, AI Transformation and IT Leadership"; John's credit line is "John Byrne. Software Engineer, AI Expert, Fractional CTO." (his words and casing). The headline "Most AI consultants ship slides. I ship software." stays. The credentials deck was rebuilt on 17 October 2026 to follow the site (eleven slides: cover with the session, the routes, Build, Adopt, Run, built securely, running today, sectors, the person, a bit more about me, send a note).

What a neighbouring consultancy cannot truthfully copy: John builds and ships the systems himself, inside real businesses, with something running in the first week; and his recommendations include which subscriptions to cancel rather than which platform to buy.

Offer structure (16 October 2026): the three routes above, each a page in its own right in time (anchors on the homepage until then). Inside Build, the process is still find the manual work, build the replacement, keep it running. Run is the fractional CTO seat for part of the week. The four old names (Audit & Roadmap, Build, Support & Evolve, Fractional Technology Lead) stay retired.

## Operating Context

- Workflow: enquiry → John replies personally → fixed-fee proposal with a defined deliverable, typically a 20-working-day window, delivered as HTML and PDF → build → client reviews packs, gives feedback and receives invoices in the portal.
- Proposals, quotes, invoices (NOV-000x numbering) and review packs are real documents in this workflow. Proposals live privately in `proposals/`.
- Voice is first person singular. John speaks as "I", never "we".
- The site deploys from `main` via GitHub Actions to GitHub Pages at noventisdigital.co.uk. Portal and admin run on Supabase (Auth, row-level security, Edge Functions) with transactional email via Resend.
- A static review pack at `/review/homepage-copy.txt` lets another model critique the copy without rendering the SPA. It records the brand direction and constraints as of April 2026.

## Capabilities and Constraints

- Routes: `/` marketing homepage; `/labs` one randomly chosen experiment per visit, press R for another; `/privacy`; `/portal` client sign-in with a demo fallback when Supabase is not configured; `/admin` operator console.
- Static hosting on GitHub Pages: no server rendering, SPA fallback through `404.html`, secrets never reach the frontend. Privileged actions go through Supabase Edge Functions.
- Contact form posts to the `public-contact` Edge Function and carries a hidden honeypot field.
- Fonts are self-hosted. Public site (since the 16 October 2026 catalogue redesign): Archivo variable, weight 100 to 900 and width 62% to 125%, upright and italic, under `public/fonts/`. Portal and admin still use Fraunces (variable weight) and Manrope 400 to 700. The deck loads Archivo from Google Fonts. The homepage has no third-party script on its critical path.
- Current engagement terminology: Audit & Roadmap; Build; Support & Evolve; Fractional Technology Lead (the hero ledger still says "Fractional CTO"). Principles are grouped as "Building" and "Working together".
- Based in the East Midlands, UK (John's words, 15 October 2026, carried on the deck and in the site footer), working with teams everywhere. British English spelling throughout.
- Engagement names are the three routes above. "Fractional CTO" appears on the public site only in John's credit line, as a role, never as a priced engagement.
- Commercial and contact facts (confirmed 15 October 2026): the public site states no fee model, no price, no typical duration and no phone number. Contact is the form and hello@noventisdigital.co.uk only. Fees and timescales are discussed in conversation.

## Brand Commitments

- Name: Noventis Digital. Wordmark: the original lockup, a copper dot beside NOVENTIS in small tracked capitals with a one-line descriptor beneath (John, 16 October 2026: the expanded, wide-set wordmark looked "fake futuristic"; keep the classic one). Copper (#c4884d) is the brand colour and the one accent: the dot in the lockup, and on the homepage John and the way to him (the diagram's name box, hello@noventis in the terminal and 24/7 in the table's On call column, the Send a note buttons) (John, 16 October 2026: "we need some colour on the site"). Operated by John Byrne.
- Voice (binding): understated, senior, direct, commercially credible. No marketing language, no exclamation marks, no em dashes, no hype about AI, no consultancy clichés, no vague "transformation" wording. Plain short sentences, one idea per sentence.
- Never mention client-private material publicly.
- Visual constraint John stated in April 2026 (restrained dark theme, subtle motion, closer to Anthropic's Glasswing pages than a generic agency site) was superseded on 15 October 2026 when he judged that look "like a generic Claude design" and chose the planning-board world: a light enamel panel in an aluminium frame, T-cards, printed strips, one red card. On 16 October 2026 he judged the planning board a costume from the client's shop floor that clashed with the name and ethos, and a quiet hairline studio sketch as generic, and chose the maker's catalogue world after a second direction round: one studio-grey ground, every object a white keylined plate with a caption, the software shown as catalogue items with specification tables, the first item exploded into its parts, one type family (Archivo) across widths, no accent colour. DESIGN.md records that world. The portal and admin keep the older dark system until they are redesigned.
- The client portal exists but is not the main homepage story.
- The credentials deck "Noventis Credentials" (`docs/design/Noventis Credentials.dc.html`, with a shareable copy at https://claude.ai/artifact/9xgXGh8GWjhW6pSNTXETcz) follows the site since 17 October 2026. The Claude Design project e56c946f-d7c1-416a-92f7-0d76e0d60a70 still holds the earlier automation deck and would need re-importing. Site and deck are to stay consistent with each other.

## Evidence on Hand

- Nothing client-specific is public (confirmed 15 October 2026). No client names, logos, testimonials or case studies may appear. Future work must not fabricate any of these.
- Proof that does exist and may be used: nineteen Labs experiments under `public/previews/` (eight from April 2026 and eleven built on 17 October 2026: Three.js, self-learning, loops and migrations, all real and running in the browser; Three.js r170 is vendored at `public/vendor/`, and `scripts/code-city.mjs` writes the repository map the city experiment uses before each build); the LinkedIn profile at linkedin.com/in/jmbyrne; the working client portal and admin console as evidence of shipped software; John's own words.
- Proof John has agreed to put in front of prospects (confirmed 15 October 2026): his own name and face on the site and in the deck; real screenshots of the portal and of Labs experiments as artefacts; one anonymised automation story (the process, hours by hand, what was built, time returned to the team) with two defensible numbers. John supplied his photograph on 17 October 2026 (`public/images/john-byrne.png`, 400 by 400, black and white); the placeholder SVG is gone and the public site carries no placeholder. The deck was rebuilt the same day without the invented story and figures, so nothing placeholder remains on the site or in the deck; `docs/placeholders.md` keeps the record of what was invented and retired.
- Private material, not for public use: four client proposals under `proposals/`; invoices under `artifacts/`.
- Assets: `public/favicon.svg`, `public/icons.svg`, `public/images/social-card.png` and `.svg` (1200 by 630, carries the current hero line and will need updating if the hero changes), three decorative SVGs under `public/images/` (ai-strategy, portal-systems, transformation) and `src/assets/hero.png`, none of which the current source references (legacy, candidates for removal).
- One photograph of John (`public/images/john-byrne.png`, 400 by 400; a larger file would be sharper on the 220 by 275 portrait plate at 2x) and no logo beyond the wordmark and the brand-mark element.

## Product Principles

1. Build before deck. Proof is something running, not a slide. Most engagements have working software inside the first week.
2. Own more than you rent. Default to replacing subscriptions and manual work with owned systems where that pays back, and say plainly when it does not.
3. Boring infrastructure first. Logging, evaluation, deployment, observability and cost control come before the interesting work.
4. Plain language for leadership. If a decision cannot be explained to a non-technical owner, it is usually wrong or hiding something.
5. End every conversation with a clear next step, or an honest "this isn't for me, here's who to talk to instead."
