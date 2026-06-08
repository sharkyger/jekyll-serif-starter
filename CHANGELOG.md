# Changelog

All notable changes to this project are documented here.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).
While the version is `0.x`, the starter is considered pre‑stable.

## [Unreleased]

## [0.1.0] - 2026-06-08

First public release: the open‑source [Serif](https://github.com/zerostaticthemes/jekyll-serif-theme)
Jekyll theme turned into a generic, fork‑and‑go business / personal‑brand
starter with a mobile‑friendly hero and a professional tooling floor.

### Added

- **Mobile hero fix** — the hero image now stays visible on mobile and stacks
  below the title (upstream Serif hid it via `display: none`). SCSS override in
  `_sass/components/_intro-image.scss` with a regression note, plus grid
  `order-*` changes in `_layouts/home.html`. Verified at 375 px.
- **Dependency pinning** — committed `Gemfile.lock` (Jekyll 4.4.1, webrick
  1.9.2, jekyll‑environment‑variables 1.0.1); all CVE‑clean and past the
  supply‑chain freshness hold.
- **OSS tooling floor**
  - GitHub Actions CI (`.github/workflows/ci.yml`): `jekyll build`,
    `html-proofer` on the built `_site` (internal links), `bundler-audit`,
    and `stylelint`.
  - GitHub Pages deploy via Actions (`.github/workflows/pages.yml`), building
    with Jekyll 4.x for full plugin support.
  - `stylelint` config (`.stylelintrc.js`) + `package.json` / `package-lock.json`
    pinning `stylelint` 17.12.0 and `stylelint-config-standard-scss` 17.0.0.
  - `.ruby-version` (3.3), `.github/FUNDING.yml`.
- **Documentation** — rewritten `README.md` (system requirements, usage before
  install, deployment guidance, mobile‑hero‑fix and tooling notes) and this
  changelog.

### Changed

- Genericised all upstream branding (titles, social links, copyright, SEO
  placeholders) so the starter carries no specific company identity.
- Renamed feature‑icon SVGs to remove spaces in filenames
  (`noun_The Process_…` → `noun_the-process_…`, etc.) to avoid `%20` URL issues.
- `index.md` hero defaults to `intro_image_hide_on_mobile: false`.
- `netlify.toml` now runs `bundle exec jekyll build` on Ruby 3.3.
- Normalised theme SCSS with `stylelint --fix` (whitespace, hex casing) and
  removed a duplicate `transition` declaration in `_sass/components/_buttons.scss`.
- `.gitignore` no longer ignores `Gemfile.lock`; ignores `vendor/bundle`.

### Fixed

- Twitter card meta tags in `_layouts/default.html` referenced `site.seo.*`
  instead of `site.data.seo.*` and never rendered.

### Removed

- `builtatlightspeed.json` (upstream theme‑catalog metadata).

### License

- Dual MIT attribution: original Serif theme © Robert Austin / Zerostatic
  Themes, and Jekyll Serif Starter modifications © Sharky.

[Unreleased]: https://github.com/sharkyger/jekyll-serif-starter/compare/v0.1.0...HEAD
[0.1.0]: https://github.com/sharkyger/jekyll-serif-starter/releases/tag/v0.1.0
