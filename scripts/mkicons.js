#!/usr/bin/env node
/// <reference types="node" />
/**
 * Make the icons .js files as well as their .d.ts
 */
const path = require('path')

function try_require(pkg) {
  try {
    // The file returned is actually two folders up.
    return path.join(require.resolve(pkg), '../..')
  } catch (e) {
    return null
  }
}

const fs = require("fs")
const root = process.argv[2]
if (!fs.statSync(root).isDirectory()) {
  console.log('Could not find any fontawesome package')
  process.exit(1)
  // throw new Error(`Could not find any fontawesome package`)
}

const kind = path.basename(root)
console.log(`building elt-phosphor for ${kind}`)

// const css = fs.readFileSync(path.join(root, "css/fontawesome.css"), "utf-8")

function mksnake(str) { return str.replace(/\b-?([a-z0-9])/g, (_, m) => m.toUpperCase()) }


const res = []
const dts = []

dts.push(`import { Attrs } from "elt"`)

res.push(`

import "./style"

function _(s) {
  return E("span", {class: "eltph"}, s)
}
`)

for (let dir of fs.readdirSync(path.join(root, "SVGs"))) {


  for (let icon of fs.readdirSync(path.join(root, "SVGs", dir))) {
    const contents = fs.readFileSync(path.join(root, "SVGs", dir, icon), "utf-8")
      .replace(`xmlns="http://www.w3.org/2000/svg" `, "")
      .replace(/<!--[^]*-->/m, '')
      .replace(/<\/svg>/g, ")")
      .replace(/<\/[^>]+?>/g, "),")
      .replace(/\/>/g, "}), ")
      .replace(/>/g, " }, ")
      .replace(/<([^\s]+)/g, "E(\"$1\", {")
      .replace(/([0-9A-Za-z-]+)="([^"]+)"/g, "\"$1\": \"$2\",")

    const fnname = "Ph" + mksnake(icon.replace(".svg", ""))
    res.push(`export let ${fnname} = /** @__PURE__ */ () => _(${contents})`)
    dts.push(`export function ${fnname}(attrs?: Attrs): SVGElement`)
    // console.log(dir, icon, fnname)
  }
}
fs.writeFileSync(path.join(__dirname, `../index.js`), res.join("\n"), "utf-8")
fs.writeFileSync(path.join(__dirname, `../index.d.ts`), dts.join("\n"), "utf-8")
