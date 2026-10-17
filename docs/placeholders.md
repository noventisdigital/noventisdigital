# Placeholder content (invented, replace before launch)

**16 October 2026, evening:** the homepage was rebuilt on three routes and one handler and no longer carries the story, the quote builder drawing or the two numbers. **17 October 2026:** John supplied his photograph; the placeholder SVG is deleted and the site carries no placeholder at all. The story and figures stay in the credentials deck (cover and slide 10) until the deck is rebuilt to follow the site.

Created 15 October 2026 at John's request so design work can proceed. Nothing in this file is true. Every use of it in a surface must carry the word PLACEHOLDER in the source so it cannot ship unnoticed.

## Portrait

- File: `public/images/john-byrne-placeholder.svg`
- Stand-in for a real photograph of John Byrne. 4:5 portrait, neutral tones, carries the text "Photo to come".
- Replace with a real photo at the same aspect ratio. LinkedIn serves only a blank silhouette to visitors who are not signed in, so the photo has to come from John directly: save it as `public/images/john-byrne.png` (square or 4:5) and swap the two references in `src/pages/HomePage.tsx` (the maker line in Item 01 and the Maker plate) and the three in the deck.

## Illustrative automation story (invented)

Sector chosen so it does not point at any real client.

- Client: an independent builders' merchant, three branches, about 60 staff.
- The manual work: every Monday the sales desk re-keyed supplier price lists into a spreadsheet, then built customer quotes by hand from it. Two people, about nine hours a week between them. The spreadsheet was maintained by one person and nobody else understood the margin rules in it.
- What was built: an internal quoting tool that imports the supplier price files, holds the margin rules in one place, and produces the quote PDF. Logging, access control and a nightly backup included. Something was running in the first week; the spreadsheet was retired in week three.
- What the team does with the time now: quotes go out the same day instead of the next, and the sales desk spends Monday mornings on the phone to customers.

## Where the story appears (catalogue world, 16 October 2026)

- Item 01 on the homepage is this story drawn as a product: an exploded quoting tool with seven parts. The plate head carries the flag "Illustrative item" and the right column carries the note "Illustrative item from a worked example. The story and figures are placeholders until a real case replaces them." The demo data on the parts (Example Joinery Ltd, supplier-a_2026-10-13.csv, the margin percentages, the log lines, Quote 1042) is invented to fit the story and must be replaced with the real build's material at the same time.
- The spec strip's "Replaces: 9 hrs/wk by hand" is the first of the two numbers. The subscription figure (£4.8k) is no longer shown on the site in this world; it remains here for the deck.

## Two numbers

- Time returned to the team each week: **9 hrs**
- Annual subscription cost removed (a quoting SaaS and a form tool they no longer need): **£4.8k**

Both numbers were requested by John on 15 October 2026 ("just make those up as placeholders for now"). The site's rule of no price, duration or phone number covers Noventis's own commercial terms; a client's saving inside a labelled placeholder example is allowed by that request.

## Replacement checklist

- [x] Real photo supplied (17 October 2026) and `john-byrne-placeholder.svg` removed; the deck's three portrait references still need the real file
- [ ] Real story supplied, checked for anonymity, Item 01's parts redrawn from the real build, and the word PLACEHOLDER removed from every surface
- [ ] Real numbers supplied, sourced, and the word PLACEHOLDER removed
