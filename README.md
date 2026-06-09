# Jekyll Serif Starter

A fast, responsive **Jekyll business / personal‑brand starter** built on the
open‑source [Serif](https://github.com/zerostaticthemes/jekyll-serif-theme)
theme by Robert Austin ([Zerostatic Themes](https://www.zerostatic.io)). Fork
it, drop in your content, colours, fonts, logo and photo, and ship.

The one substantive change from upstream Serif is a **mobile hero fix**: Serif
hides the hero image on phones, but here the hero photo stays visible and stacks
neatly below the title — see [The mobile hero fix](#the-mobile-hero-fix).

> This is a **generic** starter. Bring your own brand. Nothing here is tied to a
> particular company.

---

## System requirements

| Tool        | Version                          | Notes                                              |
| ----------- | -------------------------------- | -------------------------------------------------- |
| **Ruby**    | 3.2 or newer (CI runs on 3.3)    | See [`.ruby-version`](.ruby-version)               |
| **Bundler** | 2.x or newer                     | `gem install bundler`                              |
| **Jekyll**  | 4.x (installed via Bundler)      | Pinned in [`Gemfile`](Gemfile) / `Gemfile.lock`    |
| **Node.js** | LTS — *only* to run SCSS linting | Optional; not needed to build or serve the site    |

The published site is **static HTML/CSS/JS** — no server‑side code or runtime
dependencies. Ruby/Node are build‑time tools only.

---

## Usage

### 1. Get the code

Use this repository as a template (or fork it), then clone your copy:

```bash
git clone https://github.com/<you>/<your-site>.git
cd <your-site>
bundle install
```

### 2. Run it locally

```bash
bundle exec jekyll serve
# → http://localhost:4000
```

The site rebuilds automatically as you edit. Press <kbd>Ctrl</kbd>+<kbd>C</kbd>
to stop.

### 3. Make it yours

| What                | Where                                                                       |
| ------------------- | --------------------------------------------------------------------------- |
| Site title / logo   | [`_config.yml`](_config.yml) (`title`, `logo`) + `images/logo/`             |
| Home hero + copy    | [`index.md`](index.md) (front matter + Markdown body)                       |
| Hero illustration   | `intro_image:` in [`index.md`](index.md); files live in `images/`           |
| Colours             | `$primary`, `$secondary`, … at the top of [`assets/css/style.scss`](assets/css/style.scss) |
| Fonts               | Google Fonts link in [`_layouts/default.html`](_layouts/default.html) + `$font-family-*` in `style.scss` |
| Navigation          | [`_data/menus.yml`](_data/menus.yml)                                        |
| Contact details     | [`_data/contact.yml`](_data/contact.yml)                                    |
| Social links        | [`_data/social.json`](_data/social.json)                                    |
| Footer / SEO        | [`_data/seo.yml`](_data/seo.yml)                                            |
| "Features" row      | [`_data/features.json`](_data/features.json)                                |
| Services (cards)    | Markdown files in [`_services/`](_services/)                                |
| Team members        | Markdown files in [`_team/`](_team/)                                         |
| Pages               | `about.md`, `services.md`, `team.md`, `contact.md`                          |

> **Swap the hero for a real photo.** For personal‑brand sites, replace the
> illustration in `intro_image:` with a portrait. It stays visible on mobile by
> design (see below), because a face is the strongest conversion driver.

---

## Installation

```bash
# 1. Install a supported Ruby (3.2+). Using a version manager is recommended:
#    rbenv install 3.3.x  &&  rbenv local 3.3.x
# 2. Install Bundler and the project gems:
gem install bundler
bundle install
# 3. Build or serve:
bundle exec jekyll build        # → _site/
bundle exec jekyll serve        # → http://localhost:4000
```

### Optional: SCSS linting

SCSS is linted with [stylelint](https://stylelint.io/). This needs Node.js and
is **not** required to build the site:

```bash
npm install
npm run lint:css
```

---

## Deployment

This starter ships with the
[`jekyll-environment-variables`](https://rubygems.org/gems/jekyll-environment-variables)
plugin, which is **not** on GitHub Pages' built‑in allow‑list. So:

### GitHub Actions → GitHub Pages (recommended, and what's wired up)

[`.github/workflows/pages.yml`](.github/workflows/pages.yml) builds the site
with **Jekyll 4.x** (full plugin support) and deploys it to GitHub Pages **after
CI passes on `main`** (the deploy is gated on a green CI run, so a broken build
never ships). To enable it once:

1. Push this repository to GitHub.
2. **Settings → Pages → Build and deployment → Source: GitHub Actions.**

That's it — the workflow handles the project‑site base path automatically.

### Alternatives

- **Netlify** — [`netlify.toml`](netlify.toml) is preconfigured
  (`bundle exec jekyll build`, Ruby 3.3). Point Netlify at the repo and deploy.
- **Native GitHub Pages (no Actions)** — only works if you first remove the
  `jekyll-environment-variables` plugin from `_config.yml` and the `Gemfile`,
  since GitHub's built‑in Jekyll (3.x) won't load it.

---

## The mobile hero fix

Upstream Serif sets `display: none` on the hero image below the `md` breakpoint,
so the hero is **completely hidden on phones**. For business and personal‑brand
sites the hero — often a photo of a person — is the main conversion driver, so
this starter keeps it visible and **stacks it below the title** on mobile.

- SCSS override: [`_sass/components/_intro-image.scss`](_sass/components/_intro-image.scss)
  (the `.intro-image-hide-mobile` rule no longer hides the image; carries a
  regression note).
- Layout order: [`_layouts/home.html`](_layouts/home.html) uses
  `order-1`/`order-2` so the title comes first and the photo second on mobile,
  while the desktop side‑by‑side layout is unchanged.

**Regression check:** at **375 px** wide the hero image must be visible and sit
**below** the `<h1>`.

---

## Tooling

| Check                  | Command                    | CI                                   |
| ---------------------- | -------------------------- | ------------------------------------ |
| Build                  | `bundle exec jekyll build` | [`ci.yml`](.github/workflows/ci.yml) |
| Broken links / images  | `htmlproofer ./_site`      | `ci.yml` (internal links only)       |
| Gem vulnerabilities    | `bundle-audit check`       | `ci.yml`                             |
| SCSS lint              | `npm run lint:css`         | `ci.yml`                             |

`html-proofer` and `bundler-audit` are **CI‑only** tools — they are not part of
the project `Gemfile` and never ship in the static output. CI installs current,
patched versions of them at run time.

---

## License & credits

This project is released under the [MIT License](LICENSE).

- Original **Serif** theme © Robert Austin / [Zerostatic Themes](https://www.zerostatic.io)
  — MIT. Thank you for the excellent base theme.
- **Jekyll Serif Starter** modifications (mobile hero fix, tooling, CI, docs)
  © [Sharky](https://github.com/sharkyger) — MIT.

Hero and feature illustrations ship with the upstream Serif theme.
