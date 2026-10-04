# Editing the AH Foundation website (CMS guide)

The site uses **Decap CMS**. Staff log in at `/admin/`, edit content in forms, and click **Publish**.
Publishing saves the change to the GitHub repository, and the host rebuilds the site automatically.
No code is touched.

## What staff can edit (from the developer guide's CMS requirements)

| Requirement in the guide | Where in the admin | What it controls |
|---|---|---|
| Partner Profiles | **Partner Profiles** | Every card on *Our Partners* and the *Featured Partners* on the homepage. Add, edit, reorder, delete. Name, location, categories, overview, mission, partnership summary, logo/photo, website, "Show on Homepage". |
| Impact Stories | **Impact Stories** + **Impact Metrics & Featured Story** | Story cards on the homepage and the Impact page, plus the Featured Impact Story (Jamaica) text, highlights and photos. |
| Homepage Content | **Homepage Content** | Hero headline/copy/buttons, headline numbers, "Business Success. Community Impact.", the four values, section headings, closing statement. |
| Photos | Any **Photo** field, plus the **Media** tab | Slideshow photos (Home and About), founder photo, partner logos, story photos. |
| Impact Metrics | **Impact Metrics & Featured Story** | The six numbers on the Impact page (value, suffix, label) and the verification footnote. |
| Contact Information | **Contact Information & Site Settings** | General email, mailing address, partnership contact, social links, footer text, and the website address. |

Also editable: the **About page** photo slideshow and the Founder message (**About Page**).

Not editable in the CMS (requires a developer): page layouts, navigation, the Partnership Approach page text, the Mission/Vision and Approach text on About, and the About "Why Partnership Matters" section.

## Tips for editors

- **Gold word in the homepage headline:** wrap one word in asterisks, e.g. `Sowing Into Communities. *Strengthening* Those Who Serve.`
- **Contact page "To Be Confirmed" badges** disappear as soon as the email / mailing address fields are filled in. Leave them empty to show the badge again.
- **Impact metrics footnote:** once the numbers are verified, empty the *Footnote under metrics* field to remove the "illustrative placeholders" notice. The developer guide requires verified data only.
- **Social icons** appear in the footer only for links that are filled in.
- **Partner logo empty?** The card shows the organization's initials instead.
- **Partner website empty?** The "Visit organization website" link is hidden.
- **Sample cards:** the two "Sample Partner Profile" entries are placeholders. Delete them (the ✕ on the card) once real partners are added; the editor note on the Partners page disappears automatically.
- **Story with no link** shows "Story coming soon".
- Photo tips: JPG/WebP, about 1000-1400 px on the long side, under ~300 KB. Always fill in the *Description* (screen-reader text).
- Changes go live after the host finishes rebuilding (usually 30-90 seconds after **Publish**).

## Running it locally (developers)

```bash
npm install
npm run dev          # site on http://localhost:8090  +  CMS proxy on :8081
# open http://localhost:8090/admin/  -> click Login (no password locally)
```

Edits made locally are written straight into `src/_data/*.json` and `src/assets/img/uploads/`.
`npm run build` produces the static site in `_site/`.

## Going live (one-time setup)

The admin needs a login, which needs a small OAuth service. The simplest option is **Netlify**:

1. Create a Netlify site from this GitHub repo. `netlify.toml` already sets the build (`npm run build`, publish `_site`).
2. Attach the custom domain, then set **Website Address** in the admin (or `src/_data/site.json`) to the final address. That updates canonical links, social previews, `sitemap.xml` and `robots.txt`.
3. In GitHub: *Settings > Developer settings > OAuth Apps > New OAuth App*.
   Homepage URL = the site address, Authorization callback URL = `https://api.netlify.com/auth/done`.
4. In Netlify: *Site configuration > Access control > OAuth > Install provider > GitHub*, paste the Client ID and Secret.
5. In `src/admin/config.yml` set `backend.repo` to the final `owner/repo` (and `branch` if it is not `master`).
6. Give each editor a GitHub account and **write access** to the repository (GitHub backend requirement).

Notes:
- GitHub Pages can host the *site* (see `.github/workflows/pages.yml`) but cannot provide the admin login. Use Netlify (or another host with an OAuth provider) for the CMS.
- If the repo is moved to the client's GitHub organization, update `backend.repo` and re-create the OAuth app under that organization.
- Everything is versioned in Git, so any edit can be undone from the repository history.

## File map

```
src/_data/*.json      all CMS-editable content (one file per area)
src/admin/config.yml  the CMS form definitions
src/_includes/        shared header, footer, layout, slideshow, cards
src/*.html            page templates (Nunjucks)
src/assets/img/       images (uploads go to assets/img/uploads)
eleventy.config.js    build configuration
netlify.toml          Netlify build + headers
```
