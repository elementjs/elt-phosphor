const css = new CSSStyleSheet()
css.replace(/* css */`
.eltph > svg {
  height: 1em;
  vertical-align: -.155em;
}

.eltph > svg :is(path[opacity], circle:not([stroke])) {
  fill: var(--e-color-fg, currentColor);
}
`)
document.adoptedStyleSheets.push(css)
