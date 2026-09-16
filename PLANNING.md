# Fauna Kitchen — Planning

## Phase 1 (MVP) — Marketing site
- [ ] Hero
- [ ] Menu (display only — no cart/checkout yet)
- [ ] About
- [ ] Chef
- [ ] Location/Hours (small section — address, hours table, phone, map/directions link)
- [ ] Contact (simple form or mailto/phone)

## Phase 2 (later)
- [ ] Add to cart
- [ ] Checkout / payment (Stripe)
- [ ] Order/cart state management

## Phase 3 (later)
- [ ] Book a table (checking reference implementation first)
- [ ] Home delivery
- [ ] Buy me a coffee (tips)

## Content needed for Phase 1
- [ ] Real menu items + prices
- [ ] Hero photo
- [ ] About copy
- [ ] Chef bio + photo
- [ ] Address/hours/phone
- [ ] Social links (if any)

## Design
- Theme: moody / dark
- Primary color: green (matches logo) — pick exact hex once logo is finalized
- Fonts: Geist (body/UI) + Urbanist (headings) ✅

## Tech decisions — Phase 1
- Single page vs multi-page: multi-page eventually (cart/checkout/reservations later need separate routes),
  but Phase 1 can still be built as a single scrolling page with anchor nav (Hero → Menu → About → Chef → Location → Contact)
- Routing: not needed yet for Phase 1 (add react-router-dom when Phase 2/3 pages are added)
- Contact form: TBD — options are a simple mailto link, or a form service like Formspree/Resend (no backend needed)
- Smooth scroll: Lenis (for anchor nav between sections)

## Build order (Phase 1)
1. Layout shell (Navbar + Footer)
2. Hero section
3. Menu section (core content)
4. About + Chef sections
5. Location/Hours + Contact sections
6. Polish: smooth scroll, responsive tweaks, animations
7. SEO/meta (title, description, OG tags) — already drafted


## Color pallate
Background (#0B0F0D) — page background, deep near-black with a green tint
Surface (#14201B) — cards, nav bar, menu item backgrounds — slightly lighter than the page so content lifts off the background
Primary green (#1B4332) — buttons, borders, section dividers — this matches your logo tone
Hover/accent green (#2D6A4F) — hover states, active nav links
Highlight (#74C69D) — CTA buttons, price tags, small pops of brightness against dark surfaces
Warm accent (#E9C46A) — use sparingly for something like a "chef's pick" badge or a rating star — breaks the monotone green without clashing
Text (#F1FAEE) — body copy on dark backgrounds
Muted text (#8D9C93) — secondary text, timestamps, less important label