# AH Foundation Website — Compliance Check

Comparing `AH_Foundation_Website_Content_Developer_Guide.docx` against what's actually built in this repo, as of the latest commit.

**Legend:** ✅ Done &nbsp;·&nbsp; ⚠️ Partial / placeholder &nbsp;·&nbsp; ❌ Not done

---

## Foundation Philosophy & Objective

| Requirement | Status | Notes |
|---|---|---|
| Tagline "Sowing Into the Communities Where We Do Business" used throughout | ✅ | Hero eyebrow, About page, footer tagline |
| Site answers: who we are / why we exist / who we support / impact / how partnerships work | ✅ | See breakdown below — each question has a direct, explicit answer, not something a visitor has to piece together |
| Emphasize Purpose, Community, Partnership, Faith, Stewardship, Relationship-building | ✅ | "What Guides Us" pillars (Faith/Community/Partnership/Impact) + copy throughout |
| Not an open grant-seeking portal | ✅ | No "Apply Now" anywhere; Approach page explicitly relationship-driven, Contact CTA only |

### The five questions, verified against actual page copy

| Question | Answered where | Actual copy |
|---|---|---|
| **Who are we?** | Home hero + About "Our Story" | *"The AH Foundation partners with faith-based and nonprofit organizations that are creating meaningful change..."* (Home) / *"Established by INTEGRITY owner Antoninus Hines, the Foundation was created to intentionally invest in the communities where relationships are built and business is conducted."* (About) |
| **Why do we exist?** | Home "Business Success. Community Impact." + About "Our Mission" | *"The AH Foundation was established from a belief that success creates both an opportunity and a responsibility to give back."* (Home) / *"To strengthen communities by investing in faith-based and nonprofit organizations that serve people, create opportunity, and make a lasting difference."* (About Mission) |
| **Who do we support?** | Our Partners page intro | *"The AH Foundation values relationships with organizations that understand their communities, serve with purpose, and create meaningful impact."* — backed by the 8 category filters (Faith-Based Ministry, Youth Development, etc.) |
| **What impact are we making?** | Our Impact page intro + metrics + Jamaica story | *"Our impact is reflected in the organizations and communities we are privileged to support..."* — the *kind* of impact is answered honestly; the metrics backing it up are still placeholder numbers, not verified data (see Impact Page section below) |
| **How do we develop partnerships?** | Our Partnership Approach page intro + 5-step process | *"Our approach is intentionally relationship-driven rather than application-driven."* — followed by the full Identify → Connect → Evaluate → Invitation → Partner & Engage breakdown |

## Site Structure

| Requirement | Status | Notes |
|---|---|---|
| Pages: Home, About, Our Partners, Our Impact, Our Partnership Approach, Contact | ✅ | All 6 built as separate pages |
| Main nav shows all 6 pages | ⚠️ | Nav shows 5 (Home/About/Partners/Impact/Contact) — Partnership Approach was intentionally dropped from the nav list and folded into the gold header CTA button instead, per your request to remove the duplicate "Partnership Approach" wording. Still reachable from every page. |
| Header CTA: "Learn About Our Partnership Approach" | ✅ | Present on every page except the Approach page itself (there it becomes "Contact the Foundation," since linking to the page you're already on was redundant) |

## Home Page

| Requirement | Status | Notes |
|---|---|---|
| Hero: "Sowing Into Communities. Strengthening Those Who Serve." | ✅ | |
| Hero CTAs: Explore Our Impact / Learn About Our Partnership Approach | ✅ | |
| "Business Success. Community Impact." section | ✅ | Now shows a real mission-photo slideshow (was an illustration) |
| What Guides Us: Faith, Community, Partnership, Impact | ✅ | Redesigned as editorial numerals (01–04), not generic icons |
| Impact in Action: 2–3 stories w/ photo, headline, summary, link | ✅ | 3 stories; Jamaica links to the real Impact page story, other two link to Impact page |
| Featured Partners card preview + link to full directory | ✅ | 2 real partners + "more coming soon" card |
| Closing statement | ✅ | "We Believe Meaningful Impact Happens Through Partnership." |

## About Page

| Requirement | Status | Notes |
|---|---|---|
| Our Story | ✅ | Now illustrated with a real mission-photo slideshow |
| Our Mission | ✅ | |
| Our Vision | ✅ | |
| Our Approach (Identify, Partner, Invest, Engage) | ✅ | |
| Why Partnership Matters | ✅ | |
| CEO message | ✅ *(not in original doc — added on request)* | Real quote from Antoninus Hines' public LinkedIn post + his headshot |

## Our Partners Page

| Requirement | Status | Notes |
|---|---|---|
| Single directory page, no individual partner pages | ✅ | |
| Card fields: Org Name, Location, Focus Area, Mission Summary, AH Foundation Partnership Summary, Photo/Logo, Website Link | ⚠️ | Fields all present in the template; 2 of 4 cards use a text-initial placeholder instead of an **approved photo/logo** — none has been supplied yet |
| Categories: Education, Youth Development, Community Outreach, Workforce Development, Family Support, International Missions, Faith-Based Ministry, Humanitarian Relief | ✅ | All 8 implemented as filter chips |
| Real partner data | ⚠️ | Only Fresh Bread Ministries + Refuge of Hope are real (sourced from your Jamaica mission content). 2 cards are explicitly labeled "Sample Partner Profile" placeholders — full roster not yet provided |

## Our Impact Page

| Requirement | Status | Notes |
|---|---|---|
| Impact Metrics: Organizations Supported, Communities Served, People Reached, States Impacted, Countries Impacted, Years of Investment | ⚠️ | All 6 metrics built with animated counters, but the **numbers are placeholders** (30, 12, 150, 5, 2, 3) — page explicitly says so ("illustrative placeholders pending confirmed, verified Foundation data"). Doc requires **verified data only** — this is the one open item blocking full compliance here |
| Featured Impact Story: Jamaica mission | ✅ | Full story text from your brief, plus real mission photos |

## Our Partnership Approach Page

| Requirement | Status | Notes |
|---|---|---|
| "Who We Typically Partner With" (6 criteria) | ✅ | |
| 5-step process: Identify, Connect, Evaluate, Invitation, Partner & Engage | ✅ | |
| "Partnership Is More Than Funding" | ✅ | |
| Important Notice (no guarantee of funding) | ✅ | Also duplicated on Contact page, since it's a liability-relevant disclosure |
| Learn More → Contact the Foundation, no public Apply Now | ✅ | |

## Contact Page

| Requirement | Status | Notes |
|---|---|---|
| "Let's Connect" intro | ✅ | |
| General Email | ⚠️ | Marked "To Be Confirmed" — real address not yet provided |
| Partnership Inquiries: Ruby Reynolds, Director of Foundation Partner Relations & Operations | ✅ | |
| Mailing Address | ✅ | 1734 Elton Road, Suite 230, Silver Spring, MD 20903 (provided by client) |
| Contact form fields: Name, Organization, Email, Phone (Optional), Inquiry Type, Message | ✅ | All 6 fields present with validation |
| Form actually delivers submissions | ❌ | Front-end only right now — shows a success message but doesn't send email anywhere. Needs a form backend (e.g. Netlify Forms) wired in |

## Technical Requirements

| Requirement | Status | Notes |
|---|---|---|
| **CMS** — staff can update Partners, Impact Stories, Homepage Content, Photos, Impact Metrics, Contact Info without a developer | ⚠️ | **Built and tested locally** with Decap CMS + Eleventy: all six areas named in the guide (Partner Profiles, Impact Stories, Homepage Content, Photos, Impact Metrics, Contact Information) are editable from `/admin/` with no code. Content lives in `src/_data/*.json`; edits publish as Git commits and the host rebuilds the site. **Still to do to make it usable by staff:** deploy to a host with a login provider (Netlify recommended) and give editors GitHub accounts with repo access. Steps are in `CMS-GUIDE.md`. Not on the live GitHub Pages demo yet (branch `cms`, unpushed) |
| Mobile-responsive | ✅ | Tested down to mobile widths, verified nav/menu behavior |
| Modern and professional design | ✅ | |
| Community-focused imagery | ⚠️ | Real mission photos now used on Home + About; Partners/Impact pages still use custom illustrations in places (no photography supplied for those sections) |
| Accessible design (WCAG) | ⚠️ | Alt text, skip link, semantic landmarks, aria labels, contrast-aware palette all in place — but never run through a formal audit tool (e.g. axe), so not a verified WCAG pass |
| SSL enabled | ✅ | Automatic via GitHub Pages on the current demo URL; will carry over automatically on Netlify/Vercel once a production host is chosen |
| Secure contact forms | ❌ | No spam protection (honeypot/reCAPTCHA), and see "form actually delivers" above |
| SEO optimized | ✅ | Per-page titles/descriptions, OG tags, canonical URLs, JSON-LD structured data, sitemap.xml, robots.txt, semantic headings |
| Google Analytics integration | ❌ | Not wired in — needs a GA4 measurement ID from you |
| Social sharing capabilities | ⚠️ | OG/Twitter card tags present (so shared links preview correctly); footer social icons exist but point to placeholder `#` URLs — no real social accounts supplied yet |
| Fast page loads | ✅ | No framework overhead, optimized/compressed images, no render-blocking heavy assets |

## Core Story

| Requirement | Status | Notes |
|---|---|---|
| INTEGRITY → gives back → AH Foundation invests → partners deliver impact → communities strengthened | ✅ | This narrative is explicit on the About page and implicit throughout Home/Impact copy |

---

## Bottom line

**Content and structure: fully compliant.** Every page, section, field, and piece of copy the doc calls for exists, in the right place, in the right order.

**What's keeping this from 100%** is entirely things that need real information or a build decision from you or the client — not more design/dev work on what's already built:

1. **CMS** — built and tested locally (see table above); needs production deploy + editor login setup before staff can use it
2. **Verified impact metrics** — currently placeholder numbers
3. **Full partner roster + approved photos/logos** — only 2 of the planned set are real
4. **General email** — still marked "To Be Confirmed" (mailing address now added)
5. **Working contact form backend** — currently a front-end demo only
6. **Google Analytics** — needs a GA4 ID
7. **Real social media links**
8. **Formal accessibility audit**

Everything else in the developer guide has been built.
