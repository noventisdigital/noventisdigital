---
name: Noventis Digital
description: The maker's catalogue, opened by a session. One studio-grey ground; the catalogue's one dark plate grown to the first screen with the offer written as three routes to one person; copper marks John and the way to him; below it every object a white keylined plate with a caption. Public world only.
colors:
  ground: "#e1e4e6"
  plate: "#ffffff"
  ink: "#141618"
  ink-soft: "#474c50"
  ink-mute: "#60666b"
  key: "#aeb4b8"
  key-soft: "#cdd2d5"
  log: "#1b1e21"
  log-ink: "#d9dde0"
  log-mute: "#8e969c"
  log-key: "#30353a"
  copper: "#c4884d"
  copper-ring: "rgba(196, 136, 77, 0.16)"
  labs-stage: "#0a0a0d"
typography:
  display:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(34px, 2.4vw + 16px, 52px)"
    fontWeight: 600
    lineHeight: 1.04
    letterSpacing: "-0.012em"
    fontVariation: "'wdth' 88"
  headline:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "26px"
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 88"
  title:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "18px"
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: "-0.005em"
    fontVariation: "'wdth' 100"
  lead:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
    fontVariation: "'wdth' 100"
  body:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
    fontFeature: "tnum"
    fontVariation: "'wdth' 100"
  table:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "normal"
    fontFeature: "tnum"
  note:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  label:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "11px"
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: "0.14em"
  caption:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "11px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.08em"
  number:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "12px"
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: "0.14em"
    fontVariation: "'wdth' 125"
  route-path:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "13px"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "0.06em"
    fontVariation: "'wdth' 125"
  request:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "17px"
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: "normal"
  flag:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "10px"
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: "0.14em"
  action:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "13px"
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: "0.1em"
  index:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "12px"
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: "0.1em"
  wordmark:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "14px"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "0.28em"
    fontVariation: "'wdth' 100"
  mono:
    fontFamily: "ui-monospace, SFMono-Regular, Consolas, Liberation Mono, monospace"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: "normal"
rounded:
  none: "0"
  mark: "999px"
spacing:
  hair: "4px"
  xs: "6px"
  sm: "8px"
  cell: "10px"
  md: "12px"
  form: "14px"
  lg: "16px"
  row: "22px"
  xl: "24px"
  stack: "32px"
  page: "40px"
  section: "48px"
  gutter: "56px"
components:
  plate:
    backgroundColor: "{colors.plate}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0"
  plate-caption:
    backgroundColor: "{colors.plate}"
    textColor: "{colors.ink-mute}"
    typography: "{typography.caption}"
    padding: "7px 10px"
  session:
    backgroundColor: "{colors.log}"
    textColor: "{colors.log-ink}"
    rounded: "{rounded.none}"
    padding: "0"
  session-top:
    backgroundColor: "{colors.log}"
    textColor: "{colors.log-ink}"
    typography: "{typography.display}"
    padding: "36px 24px 28px"
  session-foot:
    backgroundColor: "{colors.log}"
    textColor: "{colors.log-mute}"
    typography: "{typography.note}"
    padding: "16px 24px"
  notation:
    backgroundColor: "{colors.log}"
    textColor: "{colors.log-ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "0 16px"
  notation-label:
    backgroundColor: "{colors.log}"
    textColor: "{colors.log-mute}"
    typography: "{typography.label}"
  notation-request-box:
    backgroundColor: "{colors.log}"
    textColor: "{colors.log-ink}"
    typography: "{typography.request}"
    rounded: "{rounded.none}"
    padding: "0 14px"
    height: "48px"
  notation-name-box:
    backgroundColor: "{colors.copper}"
    textColor: "{colors.ink}"
    typography: "{typography.title}"
    rounded: "{rounded.none}"
    padding: "0 14px"
    height: "64px"
  notation-terminal:
    backgroundColor: "{colors.log}"
    textColor: "{colors.log-ink}"
    typography: "{typography.mono}"
  notation-terminal-name:
    backgroundColor: "{colors.log}"
    textColor: "{colors.copper}"
    typography: "{typography.mono}"
  notation-table-on-call:
    backgroundColor: "{colors.log}"
    textColor: "{colors.copper}"
  button-primary:
    backgroundColor: "{colors.copper}"
    textColor: "{colors.ink}"
    typography: "{typography.action}"
    rounded: "{rounded.none}"
    padding: "12px 18px"
  button-primary-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ground}"
  button-session:
    backgroundColor: "{colors.copper}"
    textColor: "{colors.ink}"
    typography: "{typography.action}"
    rounded: "{rounded.none}"
    padding: "12px 18px"
  button-session-hover:
    backgroundColor: "{colors.log-ink}"
    textColor: "{colors.log}"
  flag:
    backgroundColor: "{colors.plate}"
    textColor: "{colors.ink}"
    typography: "{typography.flag}"
    rounded: "{rounded.none}"
    padding: "3px 6px 2px"
  flag-inverse:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ground}"
  input:
    backgroundColor: "{colors.plate}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "9px 11px"
  input-focus:
    backgroundColor: "{colors.plate}"
    textColor: "{colors.ink}"
  form-plate:
    backgroundColor: "{colors.plate}"
    textColor: "{colors.ink}"
    padding: "22px 24px 24px"
  index-link:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.ink}"
    typography: "{typography.index}"
    padding: "0 0 2px"
  route-row:
    backgroundColor: "{colors.plate}"
    textColor: "{colors.ink}"
    padding: "20px 22px"
  spec-row-head:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.ink-mute}"
    typography: "{typography.table}"
    padding: "8px 12px 8px 0"
  rules-row-head:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.ink}"
    typography: "{typography.table}"
    padding: "8px 12px 8px 0"
  status:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.ink}"
    typography: "{typography.table}"
    padding: "12px 14px"
  header:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.ink}"
    height: "58px"
  wordmark-dot:
    backgroundColor: "{colors.copper}"
    rounded: "{rounded.mark}"
    size: "10px"
---

# Design System: Noventis Digital

Scope: the public world only. It lives in `src/public.css`, scoped under `.pub`, and is used by the homepage, Labs and Privacy. The credentials deck at `docs/design/Noventis Credentials - Automation.dc.html` is a sibling surface in the same world at slide scale and still carries the 16 October morning build (the exploded item and its sheet-head tint). The portal and admin UI (`src/secure.css`, `src/pages/PortalPage.tsx`, `src/pages/AdminPage.tsx`, `src/components/admin/`) keep their own older dark system and are out of scope here.

Recorded 16 October 2026, evening, from the shipped three-routes homepage. The morning record (exploded Item 01, parts list, spec strip, assemble toggle) is superseded; that source is archived under `.impeccable/archive/catalogue-item01-2026-10-16/`.

## Overview

**Creative North Star: "The Maker's Catalogue"**

The site is a product catalogue and the products are the software. The catalogue opens with a session: its one dark plate, grown to fill the first screen, with the headline set inside it and the offer written as three routes to one person. The same three lines are shown as a terminal, a table and a diagram, redrawn on one clock while the rows hold their place. Below the session the catalogue resumes: the three routes as numbered rows on one plate, the software that is running today on a plate with its specification table, the person by name and face with his four rules as a spec table, and a form. The reference is the British industrial-design catalogue (Anglepoise, Dualit): a flat grey page, objects photographed on white, a line of small capitals under each one.

The page is one studio-grey ground from top to bottom. Nothing sits on a white band. Every object is a plate with a 1px border and the same soft downward cast shadow, as if laid on a works-office desk in daylight. One plate is dark, the session, and inside it the palette inverts: lettering on log, rules in log-key, the pressed state swapping lettering and log. One accent, copper, with one meaning: it marks John and the way to him. The copper dot in the wordmark, "hello@noventis" in the terminal and "24/7" in the table in the terminal and the table, the diagram's name box, the terminal cursor and the two Send a note buttons are copper; everything else is ink and grey, and state still inverts rather than changing hue. One type family, Archivo, does every job by changing width: expanded for numbers and route paths, condensed for headlines, normal for everything else. Monospace appears in one place, the terminal notation.

Confirmed rejections: the category arrangement (headline over sub-copy and a button, a row of equal service cards); the carousel of three finished pictures; any costume from the client's shop floor (the planning board of 15 October 2026); the quiet hairline studio sketch (judged generic); the earlier restrained dark theme (judged a generic Claude design).

**Key Characteristics:**
- One studio-grey ground across the whole page, never a white band.
- One dark plate, the session, at the top; every other object a white plate with a 1px keyline, cast shadow and caption at the foot.
- Three routes to one person: three rows that keep their place while the notation around them redraws on one clock.
- One accent, copper, only on John and the way to him; state inverts and, where it is shown, is written in words (Sent, Not sent, Sending).
- One family across widths (Archivo 88 to 125); tabular figures everywhere; monospace only in the terminal notation.
- Nothing rounds beyond the copper dot; nothing glows.

## Colors

A grey room with ink lettering, one dark plate and one copper accent. Fourteen values, of which one is copper and the rest are a ladder from ink to white.

### Primary
- **Ink** (`ink`): all text on the ground, keylines on the strongest objects, the inverted fill of buttons and inverse flags, the rules table's row heads. Selection highlight is ink with ground-coloured text.
- **Studio Grey ground** (`ground`): the single page background, the `theme-color`, and the lettering colour on anything inverted to ink.
- **Plate white** (`plate`): every light object's face: the routes plate, the portal screenshot plate, the portrait, the form, the sent plate, the policy page.

### Secondary
- **Copper** (`copper`): the one accent, and it means John. In the wordmark it is the 10px dot. On the homepage it is "hello@noventis" in the terminal and "24/7" in the table in the terminal output and the On call column of the table, the diagram's name box (copper face, ink type), the terminal's block cursor, and the two Send a note buttons (copper face, ink type), one in the session and one on the form. It is never a rule, a background band, a link colour or a hover colour, and never copper text on white: the route numbers were tried in copper and failed contrast at 12px, so they are ink.
- **Copper ring** (`copper-ring`): the flat 3.5px pale ring around the wordmark's dot. Part of the lockup artwork, not a glow, and the only ring on the page.

### Neutral
- **Soft ink** (`ink-soft`): body prose on plates and in sections, the route rows' problem and answer lines, labels, the wordmark descriptor, the specification values' neighbours, the rules table's lines, the form note's neighbours, the colophon.
- **Muted ink** (`ink-mute`): captions, the specification table's row heads, the form note, the policy meta line, the Labs hint. Measures about 4.6:1 on the ground.
- **Keyline** (`key`): the 1px plate border, the header and section rules, the input border, the portrait border, the `kbd` border, the resting link underline.
- **Soft keyline** (`key-soft`): every interior rule on a light plate: specification and rules table rows, the caption's top rule, the route row dividers.
- **Log plate** (`log`), **log lettering** (`log-ink`), **log muted** (`log-mute`), **log key** (`log-key`): the session. The plate is log with a log border; the headline, the request lines, the terminal commands and the foot credit's name are lettering; the lead, the table's column heads, the terminal comments and the credit roles are muted; every rule inside the session (foot, notation rows, the phone list's rows, the portrait border) is log-key, and the session's resting link underline is log-key. The session button's hover is lettering with log type.
- **Labs stage** (`labs-stage`): the iframe's background on Labs. The dark field belongs to the experiment inside its plate, never to the page.

### Named Rules
**The One Ground Rule.** The page is `ground` from the top of the header to the bottom of the colophon. Sections are separated by a 1px keyline, never by a change of background. The only dark fields are the session plate and the Labs experiment, and both are plates on the ground, not bands.

**The Inversion Rule.** State is never a hue. Hover, pressed and active leave copper for the plate's own pair. The Send a note button is copper with ink type everywhere; on the ground it goes to ink with ground type on hover, inside the session to lettering with log type. Copper is never a hover or pressed colour; it is a resting mark.

**The Copper Means John Rule.** Copper is the one accent and it has one meaning: John, and the way to him. It sits on the wordmark's dot, on "hello@noventis" in the terminal and "24/7" in the table and John Byrne's box in the notation, on the terminal cursor and on the two Send a note buttons. Do not spend it on headings, links, rules, numbers, icons or decoration, and never set it as small text on white; if a copper mark does not point at John, it is wrong.

## Typography

**Display Font:** Archivo variable, self-hosted (weight 100 to 900, width 62% to 125%), with Helvetica Neue and Arial as fallback
**Body Font:** Archivo at 100% width
**Label/Mono Font:** the system monospace stack, only in the terminal notation

**Character:** one family doing every job by changing its width. Numbers and route paths are expanded, like stamped part numbers. Headlines are condensed and tight. Prose, tables and captions sit at normal width. Tabular figures are set on the root so every time, price and count lines up. The notation sets its own 16px base and sizes everything inside it in em, so the whole figure scales as one object.

### Hierarchy
- **Display** (600, clamp 34 to 52px, 1.04, 88% width, -0.012em): the session headline only, in lettering, with the second sentence held on one line. The column sets the measure; there is no ch limit. 52px is the session's display step, added on 16 October evening; the morning record topped at 46px. At 390 wide it sits at the clamp floor, 34px.
- **Headline** (600, 26px, 88% width, -0.01em): section heads (The routes, Running today, The person, Send a note) and the Labs head. The item number sits inside the Labs heading with 14px after it. The Privacy title is the same voice at 34px.
- **Title** (600, 18px, -0.005em): route row titles, the person's opening line, the sent plate's title, policy section heads. The diagram's name box sets John Byrne at the same weight at 15px in ink on copper, with the roles beneath at 72% of that.
- **Lead** (400, 17px, 1.5): the paragraph beside the headline, in log muted inside the session, max 52ch. (The ground variant in soft ink at 46ch remains in the stylesheet but nothing uses it.)
- **Request** (500, 17px, 1.25): the request cell of the notation table ("Something needs building"); 14.4px inside the diagram's boxes.
- **Body** (400, 16px, 1.5): the root size; route row problem and answer lines; prose on the person plate; the enquiry text; policy prose at max 66ch; the phone list's request line.
- **Table** (500, 14px): specification values. Row heads at 400 in muted ink. The rules table reverses it: row heads at 600 in ink, lines at 400 in soft ink.
- **Note** (400, 13px, soft or muted ink): the credit line in the session foot (1.35 line height), the "Also running" note, the form note, the policy meta, the colophon. The phone list's on-call line is the same size in lettering.
- **Label** (600, 11px, 0.14em, uppercase): section head labels on the ground in soft ink ("Pick yours", "Client portal", "One person", "Enquiry form"); inside the notation the column heads (Request, Route, On call), the diagram's route labels and the hover destination, all at 0.6875em of the 16px base in log muted. Form field names use 0.12em in soft ink.
- **Caption** (400, 11px, 0.08em, uppercase, muted ink): the line at the foot of every light plate.
- **Number** (600, 12px, 100% width, 0.12em, uppercase, soft ink): the route numbers on the routes plate ("01 Build") and "Labs · item NN of 19", the lockup's tracked capitals. Until 26 October 2026 it was 700 at 125% width in ink; John: "the 01 BUILD 02 ADOPT font looks crap".
- **Route path** (600, 13px, 125% width, 0.06em): the route cell of the notation table ("/build"). In the diagram it drops to 11px, 100% width, 0.14em, uppercase, muted, centred on the line. The table's On call cell ("24/7") is 15px in copper.
- **Flag** (700, 10px, 0.14em, uppercase, 1px ink border): "Sent", "Not sent".
- **Action** (600, 13px, 0.1em, uppercase): buttons. The index uses the same voice at 12px.
- **Wordmark** (600, 14px, 0.28em, uppercase, 100% width): NOVENTIS, with the descriptor beneath at 12.5px in soft ink.
- **Mono** (400, 14px, 1.25): the terminal notation only, at 0.875em of the notation's 16px base. Commands and "on-call:" in lettering, comments in log muted, "hello@noventis" in the terminal and "24/7" in the table in copper, a blinking copper block cursor after the last line. On a phone the same face at 13px.

### Named Rules
**The One Family Rule.** Archivo is the only typeface on the public world. Expanded (125%) is reserved for the route paths in the notation table; condensed (88%) for the display and headlines; everything else, numbers included, is 100%. Monospace appears only in the terminal notation.

**The Tabular Time Rule.** Every automation states when it runs, as a tabular time ("Mondays, 07:30", "02:00 nightly, kept 30 days"). Figures are tabular on the root, so times, prices and counts align in every table.

**The State in Words Rule.** When state is shown it is written, not coloured. The form says Sending, Sent or Not sent in a flag or a button label; the hover on a notation row shows the route's name as a word. The notation itself shows no state at all: no caption, no status word, no control.

## Layout

A single centred column, max 1360px, with 40px side padding (18px at or below 980px). The header is 58px tall over a 1px keyline: wordmark at left, the index (Build, Adopt, Run, About, Send a note) at right in 12px tracked capitals with a 26px gap (18px on narrow screens). Every target is an anchor (`#routes`, `#build`, `#adopt`, `#run`, `#proof`, `#john`, `#contact`); sections, the session and each route row carry a 16px scroll margin.

The session sits 24px under the header and ends at about 735px at 1440 by 900, so the next section head shows under the fold. It is three stacked rows divided by log-key rules (the 40px bar that opened it, NOVENTIS · SESSION and AI TRANSFORMATION EXPERTISE, was removed on 26 October 2026 at John's request, and the headline now sits at the top of the plate): the top, a two-column grid of 1.1fr to 1fr with a 48px gap, bottom aligned, 36px 24px 28px, headline left and lead right; the notation, inset 8px each side with no border or shadow of its own; the foot (16px by 24px), credit line left and the button beside a link right.

The notation's stage is a 16px base with rows of 5.4em (86.4px) under a 2.6em column head, so the stage is 18.8em tall; it is inset 1em. Its table columns are 52%, 18% and 30%. The cells are placed by percentage of the stage width: request at 0 to 50%, route at 52% to 68%, on call at 70% to 100%. In the diagram the request box ends at 46%, the route label sits at 47% to 65% raised 1.5 cell heights, and the name box starts at 68% on the middle row. The terminal puts the route command at 0 to 34% and the comment at 34% to 100% on the row's upper line (30%), with the on-call line at 0 to 60% on the lower line (72%). The SVG lines read the same 46% and 68% from the source and curve from each request's mid-height to the middle row's mid-height. The stage ends 0.8em above the session foot and the last row's rule is transparent; the notation has no foot of its own.

Below the session the spread grammar holds: "Running today" is 7:5 with a 56px gutter, plate left and specification right; the person section is 220px for the portrait and the rest for prose, with a 40px gap; the enquiry section is 5:7 with text left and the form plate right. Sections carry 48px vertical padding and open with a 1px keyline. Section heads sit 22px above their content. The routes plate is three rows of 110px, 5fr and 7fr with 28px gaps and 20px by 22px padding.

Rhythm inside plates is tight: 8px rows in the specification and rules tables, 7px by 10px captions, 20px by 22px route rows, 22px by 24px on the form plate, 32px by 36px on the policy plate.

At or below 980px every grid collapses to one column with a 32px gap. The session's foot pads 18px; the top stacks headline then lead with a 16px gap at 26px 18px 18px; the notation loses its inset. The notation becomes the terminal as a static list: each route is three stacked lines in the mono face at 13px with 3px between them, the command in lettering, the comment in log muted and the on-call line in lettering with "hello@noventis" in the terminal and "24/7" in the table in copper; rows carry 12px vertical padding ruled by log-key with none after the last; the column heads, the lines, the clock and the hover destination are gone. Route rows stack with 6px gaps and 16px by 18px padding; the wordmark descriptor is hidden. At or below 600px the form becomes one column.

## Elevation & Depth

One shadow and it is always on. Every plate, the session included, carries the same two-part cast shadow at rest: a soft downward throw and a 1px contact line. The notation inside the session carries no shadow and no border; it is part of the plate, not an object on it. Depth is otherwise drawn, not lit: keylines separate objects from the ground, soft keylines rule light interiors, log-key rules dark ones, and the diagram's arrows are 1px strokes in lettering. Nothing lifts, blurs or glows on hover; hover changes a border colour, inverts a fill, or (on a table row) lays a 6% wash of lettering over the row. Copper is flat: no ring, glow or shadow of its own anywhere but the wordmark's artwork ring.

### Shadow Vocabulary
- **Plate cast** (`box-shadow: 0 26px 48px -30px rgba(20,22,24,.55), 0 1px 2px rgba(20,22,24,.14)`): every plate at rest and in every state, light or dark. The deck uses the same shadow doubled for slide scale (`0 40px 70px -44px` plus `0 2px 4px`).
- **Copper ring** (`box-shadow: 0 0 0 3.5px rgba(196,136,77,.16)`): the flat pale ring around the wordmark's dot. Artwork, not elevation.

### Named Rules
**The Cast Shadow Rule.** A plate's shadow is the same whether it is resting, hovered or pressed. Shadows describe where the object sits on the desk; they never signal state.

## Shapes

Square. Plates, the session, buttons, flags, inputs, the notation's boxes, the portrait and the status box all have 0 radius and a 1px border (keyline for light plates and inputs, log for the session, copper for both Send a note buttons and the diagram's name box, ink for flags and the status box, log muted for the diagram's request boxes). One thing rounds: the copper dot, a 10px circle. The focus ring is a 2px ink outline at 3px offset (1px offset inside inputs). Links are underlined by a 1px keyline that turns ink on hover (log-key turning lettering inside the session); index and colophon links show the rule only on hover or when current. The diagram's arrows are 1px cubic curves ending in a 7px filled arrowhead, drawn by dash offset. The terminal cursor is a 0.55em by 1.05em copper block.

## Components

### Buttons
- **Shape:** square (0 radius), 1px border.
- **Primary:** copper face and border, ink tracked capitals (13px, 600, 0.1em), 12px by 18px padding. Used for "Send a note" on the form and "Show another" on Labs.
- **Hover / Focus:** on the ground, inverts to ink face with ground type over 140ms; focus shows the 2px ink outline. Disabled sits at 55% opacity, stays copper, and its label changes to the word "Sending".
- **Session:** the same copper button inside the dark plate; hover goes to lettering face with log type. Used for "Send a note" in the session foot, beside the plain link "The three routes".

### Flags
- **Style:** 10px bold tracked capitals, 1px ink border, 3px 6px 2px padding, white-space nowrap.
- **State:** the inverse flag (ink face, ground lettering) marks an outcome ("Sent", "Not sent"). The plain flag's style remains for provenance marks but nothing on the current pages uses it.

### Plates
- **Corner Style:** square.
- **Background:** plate white; the session is the one dark plate.
- **Shadow Strategy:** the plate cast, always.
- **Border:** 1px keyline; the session's border is log.
- **Internal Padding:** content sets its own; the caption at the foot is 7px by 10px over a 1px soft keyline, in 11px tracked capitals, muted ink. The portrait plate crops to 4:5. The policy plate is 760px wide with 32px by 36px padding. The sent plate is 22px 24px 24px.

### The session plate (signature)
The catalogue's dark plate grown to the first screen. Log face, log border, the plate cast. Three rows ruled by log-key: the top with the display headline in lettering at left and the lead in log muted at right; the route notation; the foot with the credit line (44px portrait with a log-key border, name in lettering at 600, roles in log muted, 13px) at left and the copper session button beside a plain link at right. Links inside the session rest on a log-key rule and turn lettering on hover.

### The route notation (signature)
Three rows that hold their position while the notation around them redraws. Each row is a link to its route (`#build`, `#adopt`, `#run`) carrying three cells: request, route and the person on call. Every cell holds a copy of its text per notation and crossfades between them, so the rows never move; only the cells' left, width, height, top, face and type change, over 0.7s on `cubic-bezier(0.2, 0.7, 0.2, 1)` with a 90ms stagger per row. There is no foot: no caption, no status word, no notation control. The one control is the word Pause (Play while stopped) in the column-head voice at the stage's bottom right, which holds the clock and the cursor until pressed again (an outside review of 17 October 2026 cited WCAG 2.2.2; hover and focus alone do not count as a pause). The stage ends 0.8em above the session foot with its last rule transparent.
- **Terminal (rest):** monospace, 14px, two lines per row: `$ noventis build` in lettering with `# something needs building` in log muted on the upper line, `on-call: hello@noventis` on the lower with "hello@noventis" in the terminal and "24/7" in the table in copper; a copper block cursor blinks after the last line at 1.1s in steps. On first arrival only, the lines type in: each text is revealed by a clip-path over 0.6s in 20 steps, the command at row × 0.6s + 0.15s, the comment at + 0.55s, the on-call line at + 0.85s. Later returns to the terminal morph from the held positions with no blank frame.
- **Table:** column heads Request, Route, On call in 11px capitals over a lettering rule; request at 17px 500, route path at 13px 600 expanded, "24/7" at 15px in copper; rows ruled by log-key. No arrival animation of its own; the cells morph into place. Hovering a row washes it 6% and shows the route's name at the right in capitals.
- **Diagram:** each request becomes a 3em box with a log-muted border; the route path becomes an 11px uppercase label raised above its line; the three on-call cells converge into one 4em name box on the middle row, copper face with ink type, "John Byrne" at 600 with the roles beneath; three 1px curves draw from the boxes to the name box over 0.6s after a 0.25s delay, ending in arrowheads; the row rules go transparent.
- **Clock:** terminal, table, diagram every 6.4s, the only driver. Pointer entry or focus pauses it; the Pause word stops it until Play.
- **Reduced motion:** the notation rests on the terminal, still, with every transition and animation off.
- **At or below 980px:** the terminal as a static list of three lines per route, no clock, no heads, no lines. See Layout.

### Inputs / Fields
- **Style:** keylined box on the form plate, 9px by 11px padding, inherits the body font; the field name above in 11px tracked capitals at 0.12em, soft ink, 5px gap. Textareas are 120px minimum and resize vertically.
- **Hover:** border turns muted ink.
- **Focus:** border turns ink with a 2px ink outline at 1px offset.
- **Error / Sent:** the failed state is a status box with a 1px ink border, the inverse flag "Not sent" and a sentence; the sent state replaces the form with a plate carrying the inverse flag "Sent", an 18px title and a sentence. Both receive focus when they appear.

### Navigation
- **Header:** 58px, keyline beneath. Wordmark: copper dot with ring, NOVENTIS in 14px capitals tracked 0.28em, descriptor beneath in 12.5px soft ink. Index: Build, Adopt, Run, About, Send a note in 12px tracked capitals, 26px apart, a 1px rule beneath on hover and when `aria-current="page"`. On narrow screens the header wraps and the descriptor is hidden.
- **Colophon:** 24px above, 48px below, keyline on top, 13px soft ink, links without a resting rule.

### Tables
- **Specification:** 14px; row heads at 400 in muted ink, 38% wide; values at 500; rows ruled by soft keylines; 8px vertical padding. Used for "Running today".
- **Rules:** the specification table reversed: row heads at 600 in ink, 34% wide; lines at 400 in soft ink; 20px above. Used for the person's four rules.

### Route rows
Three numbered rows on one plate, never three cards: 110px number column, 5fr title and problem, 7fr answer, 28px gaps, 20px by 22px padding, soft keyline between rows and none after the last. The number is the expanded number voice ("01 Build") in ink, the title 18px 600, the problem and answer 16px soft ink. The proof captions under the answers were cut on 17 October 2026 after an outside review; the sections below do the proving. Each row is an anchor target for the header index and the notation.

### Labs
The experiment is the item. The head reads "Labs · item NN of 19" in the number voice with the experiment's name in the headline voice; the iframe sits inside a plate on the grey ground, its dark stage (`labs-stage`) contained by the plate, with a caption at the foot; the actions row carries the primary button, a link and a `kbd` hint.

## Do's and Don'ts

### Do:
- **Do** keep the whole page on the studio-grey ground and put every object on a plate with a 1px border, the plate cast shadow and a caption at its foot.
- **Do** keep one dark plate at the top, the session, and invert its palette consistently: lettering on log, rules in log-key, the button's hover as lettering with log type.
- **Do** spend copper only on John and the way to him: the dot, "hello@noventis" in the terminal and "24/7" in the table, the name box, the cursor, the two Send a note buttons.
- **Do** number items and routes in the number voice (Archivo 100%, 600, 12px, 0.12em, soft ink), the lockup's tracked capitals, and set the display and headlines condensed (88%). Never expand the numbers: John rejected the wide number on 26 October 2026 as he rejected the wide wordmark on 16 October.
- **Do** write state as a word where it is shown (Sent, Not sent, Sending) and invert for the active or pressed state.
- **Do** give every automation a tabular time for when it runs.
- **Do** run all motion off one clock, pause it on hover or focus and stop it from the Pause word, type the terminal in once on first arrival only, rest still on the terminal under reduced motion, and show the static terminal list at or below 980px.
- **Do** keep the wordmark as the original lockup: copper dot in its flat ring, NOVENTIS at 100% width tracked 0.28em, descriptor beneath.

### Don't:
- **Don't** add a second accent, and don't put copper on anything that is not John or the way to him: no copper headings, links, rules, numbers, hover states or decoration, and no copper text on white.
- **Don't** introduce a white band, a tinted section or a dark page field; dark is a plate on the ground (the session, the Labs experiment).
- **Don't** arrange the routes as three equal cards; they are three numbered rows on one plate.
- **Don't** round a corner other than the copper dot, and don't add glows, lifted hover shadows or a second shadow depth.
- **Don't** use a second type family or a monospace outside the terminal notation.
- **Don't** signal state by colour alone or by a hue change.
- **Don't** let the notation's rows move when the notation changes; the cells redraw, the rows stay.
- **Don't** add a notation selector, caption or status word to the notation; the clock drives it, hover or focus pauses it, and Pause is the only control.
- **Don't** call John a handler anywhere on the surface; the third column is On call and the line reads on-call: hello@noventis.
