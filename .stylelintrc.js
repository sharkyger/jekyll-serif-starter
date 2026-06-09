// SCSS linting for the Jekyll Serif Starter.
//
// We extend stylelint-config-standard-scss but relax a few rules that the
// inherited Serif theme legitimately uses. The vendored Bootstrap and
// hamburgers SCSS under _sass/bootstrap and _sass/libraries are NOT linted
// (the lint:css script only targets _sass/components and _sass/pages).
module.exports = {
  extends: 'stylelint-config-standard-scss',
  rules: {
    // The theme uses the global lighten()/darken() helpers throughout. Migrating
    // every call to color.adjust() is a larger refactor than this starter needs.
    'scss/no-global-function-names': null,
    // Empty rule/breakpoint blocks (e.g. `.page-home {}`) are intentional
    // extension points the theme leaves for you to fill in.
    'block-no-empty': null,
    // Keyframe animations inherited from the theme use camelCase names.
    'keyframes-name-pattern': null,
  },
};
