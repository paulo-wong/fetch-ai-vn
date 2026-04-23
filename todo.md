# Fetch Technology Vietnam Site — TODO

## Design & Branding
- [ ] Update colour palette: add Vietnam red #DA251D as accent alongside amber #FFBE16
- [ ] Add Vietnam flag red stripe accent to header/nav
- [ ] Update index.css with Vietnam-specific CSS variables
- [ ] Add bilingual EN/VI toggle to nav

## Home Page
- [ ] Update hero headline and subheading for Vietnam market
- [ ] Add government grant hook to hero ("Government funds up to 70% of your AI costs")
- [ ] Update stats bar with Vietnam-specific figures
- [ ] Update industries section with Vietnam priority sectors
- [ ] Update testimonials with Vietnamese names/companies
- [ ] Add Grants CTA section linking to new Grants page

## New Grants Page
- [ ] Create /grants page with full breakdown of 3 government programs
- [ ] National AI Development Fund (VND 30T / $1.18B, up to 70% grant)
- [ ] SME Digital Transformation Program 2026-2030 (Decision 433/QD-TTg)
- [ ] Tax incentives for SMEs (Decree 20/2026)
- [ ] Add "How Fetch helps you access these grants" section
- [ ] Add CTA to book a grant eligibility call

## About Page
- [ ] Update "Our Story" copy for Vietnam context
- [ ] Update office location to Ho Chi Minh City / Hanoi
- [ ] Keep team members but add Vietnam-based context

## Solutions Page
- [ ] Keep core solutions but update industry examples to Vietnam sectors
- [ ] Add note about grant eligibility for each solution

## Contact Page
- [ ] Update phone number to Vietnam number
- [ ] Update WhatsApp number to Vietnam contact
- [ ] Update address to Vietnam office

## Navigation
- [ ] Add "Grants" to main nav
- [ ] Update footer with Vietnam company details

## SEO & Meta
- [ ] Update page titles and meta descriptions for Vietnam market
- [ ] Update VITE_APP_TITLE to "Fetch Technology Vietnam"

## Careers Page
- [ ] Add Vietnam-adapted Careers page (sourced from Singapore site, redesigned for Vietnam)
- [ ] Wire /careers route in App.tsx
- [ ] Add Careers link to Layout nav

## Nav Fix (Apr 23)
- [x] Fix Vietnam nav overcrowding: too many header buttons causing layout overflow — consolidated by removing "AI Grants" standalone button (it's in Resources dropdown), slim down "Fetch Singapore" to just a globe icon, nav now fits on one line

## Vietnam Site Audit (Apr 23)
- [ ] Remove "Flexibility" card (hybrid/remote) from Careers page — not offered in Vietnam office
- [ ] Full audit: replace all +65 phone numbers with +84 Vietnam numbers across all pages
- [ ] Full audit: replace all "Singapore" references with Vietnam equivalents across all pages
- [ ] Full audit: replace S$ currency with USD where appropriate
- [ ] Full audit: check Contact page for SG address/number
- [ ] Full audit: check About page for SG-specific content
  - [ ] Full audit: check all other pages (Solutions, Industries, Why Fetch, Case Studies, Resources, Pods, Grants)

## i18n / Language Selector (Apr 23)
- [ ] Install i18next and react-i18next
- [ ] Create translation files: en.json and vi.json for all pages
- [ ] Set Vietnamese as default language (localStorage + browser)
- [ ] Add language selector (VI | EN) to nav header
- [ ] Translate Layout (nav links, footer)
- [ ] Translate Home page
- [ ] Translate all other pages (About, Solutions, Pods, Industries, Why Fetch, Case Studies, Resources, Careers, Contact, Grants)
- [ ] Persist language choice in localStorage
