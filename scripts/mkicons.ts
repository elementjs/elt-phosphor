#!/usr/bin/env node
/**
 * Make the icons .js files as well as their .d.ts
 */
import path from 'path'

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


const res: string[] = []
const dts: string[] = []

dts.push(`import { Attrs } from "elt"`)

const attmap = new Map<string, string>([
  ["circle", "c"],
  ["currentColor", "cc"],
  ["cx", "cx"],
  ["cy", "cy"],
  ["d", "d"],
  ["ellipse", "e"],
  ["fill", "f"],
  ["g", "g"],
  ["height", "h"],
  ["line", "l"],
  ["none", "n"],
  ["opacity", "o"],
  ["path", "p"],
  ["points", "ps"],
  ["polygon", "pl"],
  ["polyline", "py"],
  ["r", "r"],
  ["rect", "rt"],
  ["round", "ro"],
  ["rx", "rx"],
  ["ry", "ry"],
  ["stroke-linecap", "sc"],
  ["stroke-linejoin", "sj"],
  ["stroke-miterlimit", "sl"],
  ["stroke-width", "sw"],
  ["stroke", "st"],
  ["svg", "v"],
  ["transform", "t"],
  ["viewBox", "vb"],
  ["0 0 256 256", "vd"],
  ["width", "w"],
  ["x", "x"],
  ["x1", "x1"],
  ["x2", "x2"],
  ["y", "y"],
  ["y1", "y1"],
  ["y2", "y2"],
])

res.push(`

import "./style"

${Array.from(attmap.entries()).map(([k, v]) => `let ${v} = "${k}"`).join("\n")}

function _(...args) {
  const sp = document.createElement("span")
  sp.classList.add("eltph")
  const svg = s(v, ...args)
  sp.appendChild(svg)
  return sp
}

function s(tag, ...args) {
  const e = document.createElementNS("http://www.w3.org/2000/svg", tag)
  for (let i = 0, l = args.length; i < l; i++) {
    const key = args[i]
    if (typeof key === "string") {
      const value = args[++i]
      e.setAttribute(key, value)
    } else {
      e.appendChild(key)
    }
  }
  return e
}
`)

for (let dir of fs.readdirSync(path.join(root, "SVGs"))) {
  const fileres = [...res]
  const filedts = [...dts]
  console.log(dir)

  for (let icon of fs.readdirSync(path.join(root, "SVGs", dir))) {
    const contents = fs.readFileSync(path.join(root, "SVGs", dir, icon), "utf-8")
      .replace(`xmlns="http://www.w3.org/2000/svg" `, "")
      .replace(/<!--[^]*-->/m, '')
      .replace(/<\/svg>/g, ")")
      .replace(/<\/[^>]+?>/g, "),")
      .replace(/\/>/g, "),")
      .replace(/>/g, "")
      .replace(/<([^\s]+)/g, (_, tag) => {
        if (tag === "svg") {
          return `_(`
        }
        if (attmap.has(tag)) {
          tag = attmap.get(tag)!
        } else {
          tag = `"${tag}"`
        }
        return `s(${tag}, `
      })
      .replace(/([0-9A-Za-z-]+)="([^"]+)"/g, (_, k, v) => {
        if (attmap.has(k)) {
          k = attmap.get(k)!
        } else {
          k = `"${k}"`
        }
        if (attmap.has(v)) {
          v = attmap.get(v)
        } else {
          v = `"${v}"`
        }
        return `${k},${v},`
      })

    const fnname = mksnake(icon.replace(".svg", "").replace(`-${dir}`, ""))
    fileres.push(`export const ${fnname} = /** @__PURE__ */ () => ${contents.replace(/(\(|,)\s+/g, "$1").replace(/,\)/g, ")")}\n`)
    filedts.push(`export function ${fnname}(attrs?: Attrs): SVGElement`)
    fs.writeFileSync(path.join(__dirname, `../${dir}.js`), fileres.join("\n"), "utf-8")
    fs.writeFileSync(path.join(__dirname, `../${dir}.d.ts`), filedts.join("\n"), "utf-8")
    // console.log(dir, icon, fnname)
  }
}
