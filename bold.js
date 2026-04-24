

import "./style"

let c = "circle"
let cc = "currentColor"
let cx = "cx"
let cy = "cy"
let d = "d"
let e = "ellipse"
let f = "fill"
let g = "g"
let h = "height"
let l = "line"
let n = "none"
let o = "opacity"
let p = "path"
let ps = "points"
let pl = "polygon"
let py = "polyline"
let r = "r"
let rt = "rect"
let ro = "round"
let rx = "rx"
let ry = "ry"
let sc = "stroke-linecap"
let sj = "stroke-linejoin"
let sl = "stroke-miterlimit"
let sw = "stroke-width"
let st = "stroke"
let v = "svg"
let t = "transform"
let vb = "viewBox"
let vd = "0 0 256 256"
let w = "width"
let x = "x"
let x1 = "x1"
let x2 = "x2"
let y = "y"
let y1 = "y1"
let y2 = "y2"

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

export const Crown = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"52",r,"20",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"220",cy,"80",r,"20",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"36",cy,"80",r,"20",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"120.02 70.35 88 144 48.61 95.52",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"207.39 95.52 168 144 135.98 70.35",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M39.29,99.73l15.6,93.59A8,8,0,0,0,62.78,200H193.22a8,8,0,0,0,7.89-6.68l15.6-93.59",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const SpinnerGap = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"128",y1,"32",x2,"128",y2,"64",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"224",y1,"128",x2,"192",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"195.88",y1,"195.88",x2,"173.25",y2,"173.25",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"224",x2,"128",y2,"192",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"60.12",y1,"195.88",x2,"82.75",y2,"173.25",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"32",y1,"128",x2,"64",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"60.12",y1,"60.12",x2,"82.75",y2,"82.75",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Notebook = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"120",y1,"108",x2,"176",y2,"108",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"120",y1,"148",x2,"176",y2,"148",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"40",y,"40",w,"176",h,"176",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"80",y1,"40",x2,"80",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const FolderSimpleMinus = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M224,88V200.89a7.11,7.11,0,0,1-7.11,7.11H40a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H93.33a8,8,0,0,1,4.8,1.6L128,80h88A8,8,0,0,1,224,88Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"104",y1,"144",x2,"152",y2,"144",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ChartBar = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"48 208 48 136 96 136",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"224",y1,"208",x2,"32",y2,"208",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"96 208 96 88 152 88",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"152 208 152 40 208 40 208 208",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const SelectionBackground = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"40",y,"92",w,"124",h,"124",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"160",y1,"40",x2,"144",y2,"40",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M200,40h8a8,8,0,0,1,8,8v8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"216",y1,"112",x2,"216",y2,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M200,168h8a8,8,0,0,0,8-8v-8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M104,40H96a8,8,0,0,0-8,8v8",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ArrowLineDown = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"128",y1,"32",x2,"128",y2,"176",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"56 104 128 176 200 104",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40",y1,"216",x2,"216",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Barn = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"112",y1,"84",x2,"144",y2,"84",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M240,128,200,72,132.44,25.34a8,8,0,0,0-8.88,0L56,72,16,128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"16",y1,"200",x2,"240",y2,"200",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"76 200 76 124 180 124 180 200",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"76",y1,"124",x2,"184",y2,"200",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"32",y1,"105.6",x2,"32",y2,"200",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"224",y1,"105.6",x2,"224",y2,"200",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const MapPinPlus = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"128",y1,"72",x2,"128",y2,"136",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"96",y1,"104",x2,"160",y2,"104",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M208,104c0,72-80,128-80,128S48,176,48,104a80,80,0,0,1,160,0Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const HandEye = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"184",r,"16"),s(p,d,"M88,76V44a20,20,0,0,1,40,0v60",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M128,60a20,20,0,0,1,40,0v52",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M168,112a20,20,0,0,1,40,0v40a80,80,0,0,1-160,0V76a20,20,0,0,1,40,0v36",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M88.8,164a44,44,0,0,1,78.4,0",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const TreeStructure = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"16",y,"104",w,"48",h,"48",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"152",y,"40",w,"64",h,"64",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"152",y,"152",w,"64",h,"64",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"64",y1,"128",x2,"112",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M152,184H128a16,16,0,0,1-16-16V88a16,16,0,0,1,16-16h24",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ArrowCircleDownRight = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"160",y1,"160",x2,"96",y2,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"160 112 160 160 112 160",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Coins = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(e,cx,"96",cy,"84",rx,"80",ry,"36",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M16,84v40c0,19.88,35.82,36,80,36s80-16.12,80-36V84",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"64",y1,"117",x2,"64",y2,"157",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M176,96.72c36.52,3.34,64,17.86,64,35.28,0,19.88-35.82,36-80,36-19.6,0-37.56-3.17-51.47-8.44",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M80,159.28V172c0,19.88,35.82,36,80,36s80-16.12,80-36V132",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"192",y1,"165",x2,"192",y2,"205",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"117",x2,"128",y2,"205",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const FootballHelmet = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M116,200a8,8,0,0,0,7.81-9.74l-15.62-52.52A8,8,0,0,1,116,128H216v-4a92,92,0,0,0-93.31-92C72.65,32.71,32,73.92,32,124a91.91,91.91,0,0,0,40.14,76Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M148,128l24.31,82.27A8,8,0,0,0,180,216h36a8,8,0,0,0,8-8V176a8,8,0,0,0-8-8H117.19",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const NumberCircleFour = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"160 152 88 152 144 80 144 176",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const WifiHigh = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"204",r,"16"),s(p,d,"M232,93.19a164,164,0,0,0-208,0",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M200,129a116,116,0,0,0-144,0",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M168,165a68,68,0,0,0-80,0",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Skull = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"92",cy,"132",r,"24"),s(c,cx,"164",cy,"132",r,"24"),s(l,x1,"108",y1,"224",x2,"108",y2,"192",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"148",y1,"224",x2,"148",y2,"192",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M188,216a8,8,0,0,1-8,8H76a8,8,0,0,1-8-8V187.82C46.05,171,32,145.05,32,116c0-50.81,43-92,96-92s96,41.19,96,92c0,29.05-14.05,55-36,71.82Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const WhatsappLogo = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M152,176a72.08,72.08,0,0,1-72-72A24,24,0,0,1,99.29,80.46l11.48,23L98.65,121.6l1.65,4a56.47,56.47,0,0,0,30.15,30.15l4,1.65,18.17-12.12,23,11.48A24,24,0,0,1,152,176Z",st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M79.93,211.11a96,96,0,1,0-35-35h0L32.42,213.46a8,8,0,0,0,10.12,10.12l37.39-12.47Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const PhoneCall = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M152,48a78.61,78.61,0,0,1,56,56",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M156.39,153.34a8,8,0,0,1,7.59-.69l47.16,21.13a8,8,0,0,1,4.8,8.3A48.33,48.33,0,0,1,168,224,136,136,0,0,1,32,88,48.33,48.33,0,0,1,73.92,40.06a8,8,0,0,1,8.3,4.8l21.13,47.2a8,8,0,0,1-.66,7.53L81.32,125a7.93,7.93,0,0,0-.54,7.81c8.27,16.93,25.77,34.22,42.75,42.41a7.92,7.92,0,0,0,7.83-.59Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M141.23,86A44.11,44.11,0,0,1,170,114.77",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Perspective = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M216,208a8,8,0,0,1-9.43,7.87l-160-29.09A8,8,0,0,1,40,178.91V77.09a8,8,0,0,1,6.57-7.87l160-29.09A8,8,0,0,1,216,48Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"16",y1,"128",x2,"240",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Log = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"200",cy,"136",r,"16"),s(e,cx,"200",cy,"136",rx,"40",ry,"64",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"96 72 136 32 168 32",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M200,200H56c-22.09,0-40-28.65-40-64S33.91,72,56,72H200",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"80",y1,"156",x2,"161.99",y2,"156",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"17.99",y1,"116",x2,"104",y2,"116",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ArrowBendDoubleUpRight = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"176 152 224 104 176 56",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"120 152 168 104 120 56",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M32,200a96,96,0,0,1,96-96h40",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const FilmReel = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"224",x2,"232",y2,"224",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"128",cy,"84",r,"20"),s(c,cx,"128",cy,"172",r,"20"),s(c,cx,"172",cy,"128",r,"20"),s(c,cx,"84",cy,"128",r,"20"))

export const Dress = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"160",y1,"35.22",x2,"160",y2,"12",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"96",y1,"12",x2,"96",y2,"35.22",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M200,224a8,8,0,0,0,7.35-11.15L160,112l22.86-35.88a8,8,0,0,0,0-8.24L160,35.22,153,44a32,32,0,0,1-50,0l-7-8.77L73.14,67.88a8,8,0,0,0,0,8.24L96,112,48.66,212.85A8,8,0,0,0,56,224Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"96",y1,"112",x2,"160",y2,"112",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ArrowBendUpLeft = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"80 152 32 104 80 56",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M224,200a96,96,0,0,0-96-96H32",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Parallelogram = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M24,208a8,8,0,0,1-7.3-11.28l64.8-144A8,8,0,0,1,88.81,48H232a8,8,0,0,1,7.3,11.28l-64.8,144a8,8,0,0,1-7.3,4.72Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const GearSix = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"40",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M130.05,206.11c-1.34,0-2.69,0-4,0L94,224a104.61,104.61,0,0,1-34.11-19.2l-.12-36c-.71-1.12-1.38-2.25-2-3.41L25.9,147.24a99.15,99.15,0,0,1,0-38.46l31.84-18.1c.65-1.15,1.32-2.29,2-3.41l.16-36A104.58,104.58,0,0,1,94,32l32,17.89c1.34,0,2.69,0,4,0L162,32a104.61,104.61,0,0,1,34.11,19.2l.12,36c.71,1.12,1.38,2.25,2,3.41l31.85,18.14a99.15,99.15,0,0,1,0,38.46l-31.84,18.1c-.65,1.15-1.32,2.29-2,3.41l-.16,36A104.58,104.58,0,0,1,162,224Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const FileJs = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M180,224h20a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8v68",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"148 32 148 92 208 92",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M139.9,153.6s-29.43-7.78-31.8,11,38.43,10.12,35.78,30.72c-2.47,19.16-31.78,11-31.78,11",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M36,190a18,18,0,0,0,36,0V152",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const MinusCircle = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"88",y1,"128",x2,"168",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const SlackLogo = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M80,56h24a0,0,0,0,1,0,0v72a24,24,0,0,1-24,24h0a24,24,0,0,1-24-24V80A24,24,0,0,1,80,56Z",t,"translate(184 24) rotate(90)",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M128,80H104A24,24,0,0,1,80,56h0a24,24,0,0,1,24-24h0a24,24,0,0,1,24,24Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M152,32h24a0,0,0,0,1,0,0v72a24,24,0,0,1-24,24h0a24,24,0,0,1-24-24V56a24,24,0,0,1,24-24Z",t,"translate(304 160) rotate(-180)",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M176,128V104a24,24,0,0,1,24-24h0a24,24,0,0,1,24,24h0a24,24,0,0,1-24,24Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M176,104h24a0,0,0,0,1,0,0v72a24,24,0,0,1-24,24h0a24,24,0,0,1-24-24V128a24,24,0,0,1,24-24Z",t,"translate(24 328) rotate(-90)",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M128,176h24a24,24,0,0,1,24,24h0a24,24,0,0,1-24,24h0a24,24,0,0,1-24-24Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M104,128h24a0,0,0,0,1,0,0v72a24,24,0,0,1-24,24h0a24,24,0,0,1-24-24V152A24,24,0,0,1,104,128Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M80,128v24a24,24,0,0,1-24,24h0a24,24,0,0,1-24-24h0a24,24,0,0,1,24-24Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CloudCheck = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M80,128a80,80,0,1,1,80,80H72A56,56,0,1,1,85.92,97.74",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"120 136 144 160 192 112",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const RainbowCloud = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M156,200c-13.25,0-24-11.14-24-24.89s10.75-24.89,24-24.89a23.33,23.33,0,0,1,8.81,1.73h0A40,40,0,1,1,204,200Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M92,176V160a20,20,0,0,1,7.74-15.8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M52,176V160a60,60,0,0,1,90.83-51.48",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M12,176V160A100,100,0,0,1,177.59,84.52",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const UserSound = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"108",cy,"108",r,"60",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M24,208c20.55-24.45,49.56-40,84-40s63.45,15.55,84,40",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M229.36,56a132.39,132.39,0,0,1,0,104",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M196,69.57a96.3,96.3,0,0,1,0,76.86",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const HardDrives = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"40",y,"48",w,"176",h,"160",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"216",y1,"128",x2,"40",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"176",cy,"88",r,"16"),s(c,cx,"176",cy,"168",r,"16"))

export const TrafficSign = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M88,148v-4a24,24,0,0,1,24-24h56",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"46.3",y,"46.3",w,"163.41",h,"163.41",rx,"8.56",t,"translate(-53.02 128) rotate(-45)",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"144 96 168 120 144 144",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Stamp = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"40",y1,"224",x2,"216",y2,"224",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M110.32,136l-15-83.78A24,24,0,0,1,119,24h18a24,24,0,0,1,23.63,28.22l-15,83.78",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"40",y,"136",w,"176",h,"48",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Table = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"32",y1,"104",x2,"224",y2,"104",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"32",y1,"152",x2,"224",y2,"152",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"88",y1,"104",x2,"88",y2,"200",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const BoundingBox = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"168",y,"40",w,"48",h,"48",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"40",y,"40",w,"48",h,"48",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"168",y,"168",w,"48",h,"48",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"40",y,"168",w,"48",h,"48",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"64",y1,"168",x2,"64",y2,"88",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"168",y1,"192",x2,"88",y2,"192",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"192",y1,"88",x2,"192",y2,"168",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"88",y1,"64",x2,"168",y2,"64",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CalendarDot = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"152",r,"20"),s(rt,x,"40",y,"40",w,"176",h,"176",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"176",y1,"24",x2,"176",y2,"52",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"80",y1,"24",x2,"80",y2,"52",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40",y1,"88",x2,"216",y2,"88",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const HandTap = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M68,224,42.68,182a20,20,0,0,1,34.64-20L96,192V84a20,20,0,0,1,40,0v56a20,20,0,0,1,40,0v16a20,20,0,0,1,40,0v36c0,13.84-1.75,25-4,32",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M56,84a60,60,0,0,1,120,0",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Highlighter = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"88 128 24 192 96 216 136 176",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M184,160l-26.34,26.34a8,8,0,0,1-11.32,0L77.66,117.66a8,8,0,0,1,0-11.32L104,80",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M244,116l-46.34,46.34a8,8,0,0,1-11.32,0L101.66,77.66a8,8,0,0,1,0-11.32L148,20",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const SkipForwardCircle = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(pl,ps,"160 128 96 88 96 168 160 128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"160",y1,"88",x2,"160",y2,"168",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ShoppingBagOpen = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"32",y,"48",w,"192",h,"160",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"32",y1,"88",x2,"224",y2,"88",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M168,124a40,40,0,0,1-80,0",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CurrencyDollar = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"128",y1,"24",x2,"128",y2,"232",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M184,88a40,40,0,0,0-40-40H112a40,40,0,0,0,0,80h40a40,40,0,0,1,0,80H104a40,40,0,0,1-40-40",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const StarAndCrescent = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M152,206.4a88,88,0,0,1,0-156.8,88,88,0,1,0,0,156.8Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(pl,ps,"173.46 128 156 98.33 188.59 106.4 210.39 80 213.06 114.65 244 128 213.06 141.35 210.39 176 188.59 149.6 156 157.67 173.46 128",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const PersonSimpleRun = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"152",cy,"56",r,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M56,109.6s32-25.67,80,7c50.47,34.3,80,20.85,80,20.85",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M110.64,161.16C128.47,165,176,180,176,232",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M133.51,114.9C125.7,141.36,95.88,206.39,32,200",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Users = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"84",cy,"108",r,"52",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M13,196a88,88,0,0,1,142,0",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M172,160a87.86,87.86,0,0,1,71,36",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M158.62,57.74A52,52,0,1,1,172,160",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const SmileyBlank = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"92",cy,"108",r,"16"),s(c,cx,"164",cy,"108",r,"16"))

export const ChartLineDown = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"200 168 128 96 96 128 32 64",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"200 128 200 168 160 168",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"224 208 32 208 32 48",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const GenderFemale = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"96",r,"72",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"168",x2,"128",y2,"240",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"88",y1,"208",x2,"168",y2,"208",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const PoliceCar = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"16",y1,"112",x2,"240",y2,"112",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M224,168v32a8,8,0,0,1-8,8H188a8,8,0,0,1-8-8V168",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M76,168v32a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V168",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M224,112,194.3,60a8,8,0,0,0-6.94-4H68.64a8,8,0,0,0-6.94,4L32,112v56H224Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"104",y1,"20",x2,"152",y2,"20",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const DiamondsFour = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"101.13",y,"35.13",w,"53.74",h,"53.74",t,"translate(-6.35 108.67) rotate(-45)",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"101.13",y,"167.13",w,"53.74",h,"53.74",t,"translate(-99.69 147.33) rotate(-45)",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"35.13",y,"101.13",w,"53.74",h,"53.74",t,"translate(-72.35 81.33) rotate(-45)",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"167.13",y,"101.13",w,"53.74",h,"53.74",t,"translate(-33.69 174.67) rotate(-45)",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ArrowFatLinesDown = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(pl,ps,"32 136 128 232 224 136 176 136 176 120 80 120 80 136 32 136",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"176",y1,"40",x2,"80",y2,"40",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"176",y1,"80",x2,"80",y2,"80",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const FileXls = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"148 32 148 92 208 92",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M48,108V40a8,8,0,0,1,8-8h96l56,56v20",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"148 208 120 208 120 152",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"44",y1,"152",x2,"84",y2,"208",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"84",y1,"152",x2,"44",y2,"208",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M207.9,153.6s-29.43-7.78-31.8,11,38.43,10.12,35.78,30.72c-2.47,19.16-31.78,11-31.78,11",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ArrowUUpLeft = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"80 136 32 88 80 40",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M80,200h88a56,56,0,0,0,56-56h0a56,56,0,0,0-56-56H32",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ArrowDownRight = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"64",y1,"64",x2,"192",y2,"192",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"88 192 192 192 192 88",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Waves = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M40,185.61c72-59.69,104,56.47,176-3.22",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M40,129.61c72-59.69,104,56.47,176-3.22",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M40,73.61c72-59.69,104,56.47,176-3.22",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ListNumbers = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"116",y1,"128",x2,"216",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"116",y1,"64",x2,"216",y2,"64",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"116",y1,"192",x2,"216",y2,"192",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"56 104 56 40 40 48",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M72,208H40l28.68-38.37a15.69,15.69,0,0,0-3.24-22.41,16.78,16.78,0,0,0-23.06,3.15,15.85,15.85,0,0,0-2.38,4.3",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ArrowBendDownRight = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"176 104 224 152 176 200",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M32,56a96,96,0,0,0,96,96h96",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ScribbleLoop = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M28,92.8S60,48,108,48c104,0,92.6,160-3.4,160-64,0-64-96,32-96,64,0,107.4,48,107.4,48",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Binary = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(e,cx,"92",cy,"72",rx,"28",ry,"36",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"180 108 180 36 156 48",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(e,cx,"164",cy,"184",rx,"28",ry,"36",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"92 220 92 148 68 160",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ArrowUpRight = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"64",y1,"192",x2,"192",y2,"64",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"88 64 192 64 192 168",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Metronome = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"60.34",y1,"168",x2,"195.66",y2,"168",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M56,216a8,8,0,0,1-7.63-10.43l50.91-160A8,8,0,0,1,106.91,40h42.18a8,8,0,0,1,7.62,5.57l50.91,160A8,8,0,0,1,200,216Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"168",x2,"208",y2,"80",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const GpsSlash = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"128",y1,"240",x2,"128",y2,"208",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"16",x2,"128",y2,"48",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"16",y1,"128",x2,"48",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"240",y1,"128",x2,"208",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"48",y1,"40",x2,"208",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M181.81,187.2A80,80,0,0,1,74.19,68.8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M111,49.81A80.9,80.9,0,0,1,128,48a80.07,80.07,0,0,1,76.22,104.38",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const VinylRecord = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M72,128a56,56,0,0,1,56-56",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M184,128a56,56,0,0,1-56,56",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"128",cy,"128",r,"28"))

export const WaveSine = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M24,128c104-221.7,104,221.7,208,0",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ArrowCircleDownLeft = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"96 112 96 160 144 160",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"160",y1,"96",x2,"96",y2,"160",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ThreadsLogo = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M200,77.65C189.86,51.29,168.57,32,128,32c-64,0-80,48-80,96s16,96,80,96c48,0,72-32,72-56,0-64-104-64-104-16,0,40,72,40,72-24,0-56-56-56-72-32",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Pause = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"152",y,"40",w,"56",h,"176",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"48",y,"40",w,"56",h,"176",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ArrowFatLineUp = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(pl,ps,"32 120 128 24 224 120 176 120 176 176 80 176 80 120 32 120",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"176",y1,"216",x2,"80",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Crosshair = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"128",y1,"232",x2,"128",y2,"200",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"128",cy,"128",r,"88",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"24",x2,"128",y2,"56",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"24",y1,"128",x2,"56",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"232",y1,"128",x2,"200",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"128",cy,"128",r,"32",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const TrafficSignal = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"64",y,"32",w,"128",h,"192",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"192",y1,"72",x2,"216",y2,"72",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"192",y1,"152",x2,"216",y2,"152",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40",y1,"72",x2,"64",y2,"72",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40",y1,"152",x2,"64",y2,"152",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"128",cy,"88",r,"20",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"128",cy,"168",r,"20",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const OfficeChair = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M72,232h0a24,24,0,0,1,24-24h64a24,24,0,0,1,24,24h0",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"168",x2,"128",y2,"232",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M16,128H40a40,40,0,0,0,40,40h96a40,40,0,0,0,40-40h24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M154.41,24H101.59a8,8,0,0,0-7.93,6.78l-13.57,88A8,8,0,0,0,88,128h80a8,8,0,0,0,7.93-9.22l-13.57-88A8,8,0,0,0,154.41,24Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Pill = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"10.98",y,"82.75",w,"234.04",h,"90.51",rx,"45.25",t,"translate(-53.02 128) rotate(-45)",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"96",y1,"96",x2,"160",y2,"160",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"160",y1,"108",x2,"184",y2,"84",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const TelevisionSimple = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"32",y,"72",w,"192",h,"136",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"80 24 128 72 176 24",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ArrowFatUp = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M32,120l96-96,96,96H176v88a8,8,0,0,1-8,8H88a8,8,0,0,1-8-8V120Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const AirTrafficControl = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"128",y1,"72",x2,"128",y2,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M104,24h48",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"168 72 152 160 152 232",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"88 72 104 160 104 232",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M66.19,160a8,8,0,0,1-7.52-5.27l-26.18-72A8,8,0,0,1,40,72H216a8,8,0,0,1,7.52,10.73l-26.18,72a8,8,0,0,1-7.52,5.27Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Mountains = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"160",cy,"48",r,"20",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M12,200,85.1,75.94a8,8,0,0,1,13.8,0L172,200Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M146.62,156.94l29-49a8,8,0,0,1,13.76,0L244,200H172",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"54.43",y1,"128",x2,"129.57",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const MinusSquare = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"40",y,"40",w,"176",h,"176",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"88",y1,"128",x2,"168",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const DropSlash = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"48",y1,"40",x2,"208",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M74.9,69.59C60.11,90.4,48,116,48,144a80,80,0,0,0,141.29,51.42",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M207.16,155.61A80.84,80.84,0,0,0,208,144c0-72-80-128-80-128a233.87,233.87,0,0,0-26.84,23",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Slideshow = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"64",y,"56",w,"128",h,"144",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"232",y1,"56",x2,"232",y2,"200",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"24",y1,"56",x2,"24",y2,"200",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Devices = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"132",y,"100",w,"124",h,"92",rx,"16",t,"translate(340 -48) rotate(90)",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"112",y1,"208",x2,"88",y2,"208",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M148,168H40a16,16,0,0,1-16-16V64A16,16,0,0,1,40,48H184a16,16,0,0,1,16,16V84",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"188",y1,"124",x2,"200",y2,"124",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const TwitterLogo = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M88,176S32.85,144,40.78,56c0,0,39.66,40,87.22,48V88c0-22,18-40.27,40-40a40.74,40.74,0,0,1,36.67,24H240l-32,32c-4.26,66.84-60.08,120-128,120-32,0-40-12-40-12S72,200,88,176Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const TreasureChest = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M72,48H184a48,48,0,0,1,48,48v96a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V96A48,48,0,0,1,72,48Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"24",y1,"112",x2,"232",y2,"112",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"144",x2,"128",y2,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"76",y1,"48",x2,"76",y2,"200",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"180",y1,"48",x2,"180",y2,"200",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Strategy = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"80",cy,"184",r,"28",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"48",y1,"76",x2,"88",y2,"116",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"88",y1,"76",x2,"48",y2,"116",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"184",y1,"172",x2,"224",y2,"212",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"224",y1,"172",x2,"184",y2,"212",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"148 84 148 44 188 44",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M148,44l12,12c38.33,38.33,10.55,84-20,94.79",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CalendarBlank = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"40",y,"40",w,"176",h,"176",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"176",y1,"24",x2,"176",y2,"52",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"80",y1,"24",x2,"80",y2,"52",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40",y1,"88",x2,"216",y2,"88",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const AirplaneTakeoff = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"24",y1,"216",x2,"168",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M88,112.51,58.65,84a8,8,0,0,1,2.2-13.3L68,68l57.53,21.17,54.84-32.75a32,32,0,0,1,41,7.32L240,87.64l-147.41,88a32,32,0,0,1-38-4.32L18.53,136a8,8,0,0,1,2.32-13.19L24,121.27,55.79,132Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const HourglassSimpleLow = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M50.36,53.66A8,8,0,0,1,56,40H200a8,8,0,0,1,5.66,13.66L128,128Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M50.36,202.34A8,8,0,0,0,56,216H200a8,8,0,0,0,5.66-13.66L128,128Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"178.13",y1,"176",x2,"77.87",y2,"176",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Backpack = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M92,60h72a48,48,0,0,1,48,48V220a8,8,0,0,1-8,8H52a8,8,0,0,1-8-8V108A48,48,0,0,1,92,60Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M84,228V152a16,16,0,0,1,16-16h56a16,16,0,0,1,16,16v76",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M96,60V36a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V60",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"108",y1,"100",x2,"148",y2,"100",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"84",y1,"172",x2,"172",y2,"172",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ArrowsIn = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"192 104 152 104 152 64",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"208",y1,"48",x2,"152",y2,"104",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"64 152 104 152 104 192",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"48",y1,"208",x2,"104",y2,"152",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"152 192 152 152 192 152",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"208",y1,"208",x2,"152",y2,"152",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"104 64 104 104 64 104",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"48",y1,"48",x2,"104",y2,"104",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const BowlFood = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M48,112a80,80,0,0,1,160,0",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M89.6,112A80,80,0,0,1,168,48a81.61,81.61,0,0,1,8.61.46",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M134.66,112A80.13,80.13,0,0,1,193,65.4",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M88,199.3A96,96,0,0,1,32,112H224a96,96,0,0,1-56,87.3V208a8,8,0,0,1-8,8H96a8,8,0,0,1-8-8Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const BatteryPlusVertical = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"104",y1,"12",x2,"152",y2,"12",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"64",y,"44",w,"128",h,"200",rx,"16",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"116",x2,"128",y2,"164",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"104",y1,"140",x2,"152",y2,"140",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CompassTool = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"80",r,"32",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"48",x2,"128",y2,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"141",y1,"109.25",x2,"192",y2,"224",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"64",y1,"224",x2,"115",y2,"109.25",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M208,120c-14.57,28.49-45.8,48-80,48a87.71,87.71,0,0,1-35.75-7.56",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Prohibit = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"195.88",y1,"195.88",x2,"60.12",y2,"60.12",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const NumberCircleSeven = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"104 88 152 88 120 176",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const HandbagSimple = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M209.67,72H46.33a8.06,8.06,0,0,0-8,7.07l-14.25,120a8,8,0,0,0,8,8.93H223.92a8,8,0,0,0,8-8.93l-14.25-120A8.06,8.06,0,0,0,209.67,72Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M88,72V64a40,40,0,0,1,80,0v8",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const RocketLaunch = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M191.11,112.89c24-24,25.5-52.55,24.75-65.28a8,8,0,0,0-7.47-7.47c-12.73-.75-41.26.73-65.28,24.75L80,128l48,48Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M136,72H74.35a8,8,0,0,0-5.65,2.34L34.35,108.69a8,8,0,0,0,4.53,13.57L80,128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M184,120v61.65a8,8,0,0,1-2.34,5.65l-34.35,34.35a8,8,0,0,1-13.57-4.53L128,176",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M90.36,194.93C83.55,204.2,69.15,216,40,216c0-29.15,11.8-43.55,21.07-50.36",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const BellSimple = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M56,104a72,72,0,0,1,144,0c0,35.82,8.3,56.6,14.9,68A8,8,0,0,1,208,184H48a8,8,0,0,1-6.88-12C47.71,160.6,56,139.81,56,104Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"96",y1,"224",x2,"160",y2,"224",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const EnvelopeSimple = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"224 56 128 144 32 56",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const SprayBottle = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M72,72H200a48,48,0,0,0-48-48H80a8,8,0,0,0-8,8V80a32,32,0,0,1-32,32",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M160,72h0a263.14,263.14,0,0,1,40,139.47V224a8,8,0,0,1-8,8H88a8,8,0,0,1-8-8V167.38a32,32,0,0,1,12-25l16-12.78a32,32,0,0,0,12-25V72",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const FolderUser = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M160,224c3.67-13.8,16.6-24,32-24s28.33,10.2,32,24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"192",cy,"176",r,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M112.56,208H39.38A7.4,7.4,0,0,1,32,200.62V80H216a8,8,0,0,1,8,8v20",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M98.39,46.69,128,80H32V52a8,8,0,0,1,8-8H92.41A8,8,0,0,1,98.39,46.69Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const DeviceMobileSpeaker = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"24",y,"64",w,"208",h,"128",rx,"16",t,"translate(256) rotate(90)",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"104",y1,"64",x2,"152",y2,"64",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Van = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"188",cy,"184",r,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"80",cy,"184",r,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"164",y1,"184",x2,"104",y2,"184",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M212,184h24a8,8,0,0,0,8-8V112L198.4,58.87A8,8,0,0,0,192.26,56H32a8,8,0,0,0-8,8V176a8,8,0,0,0,8,8H56",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"24",y1,"112",x2,"244",y2,"112",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"164",y1,"56",x2,"164",y2,"112",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"92",y1,"56",x2,"92",y2,"112",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ArrowFatLinesLeft = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(pl,ps,"120 32 24 128 120 224 120 176 136 176 136 80 120 80 120 32",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"216",y1,"176",x2,"216",y2,"80",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"176",y1,"176",x2,"176",y2,"80",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ToggleLeft = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"16",y,"64",w,"224",h,"128",rx,"64",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"80",cy,"128",r,"28",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ShuffleSimple = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"168 48 208 48 208 88",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"208 168 208 208 168 208",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"48",y1,"48",x2,"208",y2,"208",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"156.28",y1,"99.72",x2,"208",y2,"48",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"48",y1,"208",x2,"99.72",y2,"156.28",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Paperclip = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M96,176l95.8-92.2a28,28,0,0,0-39.59-39.6L54.06,142.06a48,48,0,0,0,67.88,67.88L204,128",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Book = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M48,208a24,24,0,0,1,24-24H208V32H72A24,24,0,0,0,48,56Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"48 208 48 224 192 224",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ArrowFatLinesRight = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(pl,ps,"136 32 232 128 136 224 136 176 120 176 120 80 136 80 136 32",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40",y1,"176",x2,"40",y2,"80",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"80",y1,"176",x2,"80",y2,"80",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Keyhole = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M108,137a32,32,0,1,1,40,0l12,39H96Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CourtBasketball = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"24",y,"56",w,"208",h,"144",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"56",x2,"128",y2,"200",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M232,168H216a40,40,0,0,1,0-80h16",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M24,168H40a40,40,0,0,0,0-80H24",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const NumberCircleZero = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(e,cx,"128",cy,"128",rx,"36",ry,"48",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const SteamLogo = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M130.39,94.19l-37.9,49.19a20,20,0,0,0,28.13,28.13l49.19-37.9",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"93.74",y1,"141.74",x2,"40.48",y2,"88.48",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"152",cy,"112",r,"28",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Goggles = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"104",y1,"152",x2,"152",y2,"152",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M232,152c0,17.67-30.33,32-48,32a32,32,0,0,1,0-64C201.67,120,232,134.33,232,152Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M104,152a32,32,0,0,1-32,32c-17.67,0-48-14.33-48-32s30.33-32,48-32A32,32,0,0,1,104,152Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M232,152h0a12,12,0,0,0,12-12v-4a64,64,0,0,0-64-64H76a64,64,0,0,0-64,64v4a12,12,0,0,0,12,12h0",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const WaveTriangle = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"24 128 76 56 180 200 232 128",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CloudMoon = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M104,144a68.06,68.06,0,1,1,68,72H92a44,44,0,1,1,14.2-85.66",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M64.38,137.75A64.14,64.14,0,0,1,29.62,94.38h0a64.06,64.06,0,0,0,76.76-76.76h0A64,64,0,0,1,156,80c0,.63,0,1.27,0,1.9",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const AndroidLogo = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"164",cy,"148",r,"16"),s(c,cx,"92",cy,"148",r,"16"),s(p,d,"M24,184V161.13C24,103.65,70.15,56.2,127.63,56A104,104,0,0,1,232,160v24a8,8,0,0,1-8,8H32A8,8,0,0,1,24,184Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"32",y1,"48",x2,"63.07",y2,"79.07",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"224",y1,"48",x2,"193.1",y2,"78.9",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CloudFog = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"120",y1,"196",x2,"72",y2,"196",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"184",y1,"196",x2,"160",y2,"196",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"160",y1,"232",x2,"104",y2,"232",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M92,96a64,64,0,1,1,64,64H76A40,40,0,1,1,93.15,83.85",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ImageSquare = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"40",y,"40",w,"176",h,"176",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"96",cy,"96",r,"20"),s(p,d,"M56.69,216,166.34,106.34a8,8,0,0,1,11.32,0L216,144.69",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Images = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"176",cy,"88",r,"16"),s(rt,x,"72",y,"48",w,"152",h,"120",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M192,168v32a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V88a8,8,0,0,1,8-8H72",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M72,156.69l46.34-46.35a8,8,0,0,1,11.32,0L187.31,168",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ShieldCheck = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M216,112V56a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8v56c0,96,88,120,88,120S216,208,216,112Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"88 136 112 160 168 104",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Microscope = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"32",y1,"216",x2,"224",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"72",y1,"176",x2,"136",y2,"176",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"72",y,"24",w,"64",h,"112",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M136,72a80,80,0,0,1,48,144",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Bicycle = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M208,80a16,16,0,0,0-16-16H148l56,96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"204",cy,"160",r,"40",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"52",cy,"160",r,"40",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"166.67 96 102.67 96 52 160",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"52 64 84 64 128.33 140",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const FlyingSaucer = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"172",y1,"196",x2,"176",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"200",x2,"128",y2,"224",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"84",y1,"196",x2,"80",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M177,68.82C214.29,76.61,240,93,240,112c0,26.51-50.14,48-112,48S16,138.51,16,112c0-19,25.86-35.49,63.35-43.25",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M72,99.9a15.94,15.94,0,0,0,12.34,15.52A195.87,195.87,0,0,0,128,120a195.71,195.71,0,0,0,43.64-4.58A16,16,0,0,0,184,99.9V96a56,56,0,0,0-56.74-56C96.48,40.4,72,66.06,72,96.83Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const TextItalic = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"152",y1,"56",x2,"104",y2,"200",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"64",y1,"200",x2,"144",y2,"200",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"112",y1,"56",x2,"192",y2,"56",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const FileTsx = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"148 32 148 92 208 92",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M48,108V40a8,8,0,0,1,8-8h96l56,56v20",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"172",y1,"152",x2,"212",y2,"208",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"212",y1,"152",x2,"172",y2,"208",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M135.9,153.6s-29.43-7.78-31.8,11,38.43,10.12,35.78,30.72c-2.47,19.16-31.78,11-31.78,11",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"76",y1,"152",x2,"36",y2,"152",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"56",y1,"152",x2,"56",y2,"208",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const AppWindow = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"32",y,"48",w,"192",h,"160",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"76",cy,"92",r,"16"),s(c,cx,"124",cy,"92",r,"16"))

export const BabyCarriage = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M48,112H232a0,0,0,0,1,0,0v0a72,72,0,0,1-72,72H120a72,72,0,0,1-72-72v0a0,0,0,0,1,0,0Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M144,112V48a8,8,0,0,1,8-8h8a72,72,0,0,1,72,72h0",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"88",cy,"224",r,"20"),s(c,cx,"192",cy,"224",r,"20"),s(l,x1,"144",y1,"112",x2,"209.43",y2,"59.65",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M48,112A28,28,0,0,0,20,84",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CellSignalX = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"208",y1,"152",x2,"160",y2,"200",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"208",y1,"200",x2,"160",y2,"152",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"160",y1,"72",x2,"160",y2,"108",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"200",y1,"32",x2,"200",y2,"108",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"120",y1,"112",x2,"120",y2,"200",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"80",y1,"152",x2,"80",y2,"200",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40",y1,"192",x2,"40",y2,"200",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Football = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M186.54,186.54c-43,43-102.66,39.55-131.35,34.69a24.92,24.92,0,0,1-20.42-20.42c-4.86-28.69-8.29-88.37,34.69-131.35S172.12,29.91,200.81,34.77a24.92,24.92,0,0,1,20.42,20.42C226.09,83.88,229.52,143.56,186.54,186.54Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"100",y1,"128",x2,"128",y2,"156",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"100",x2,"156",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"156",y1,"100",x2,"100",y2,"156",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"145.45",y1,"33.45",x2,"222.55",y2,"110.55",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"33.45",y1,"145.45",x2,"110.55",y2,"222.55",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const MapPinSimpleArea = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"64",r,"32",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"96",x2,"128",y2,"176",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M172,139.75c35.44,6.37,60,20.21,60,36.25,0,22.09-46.56,40-104,40S24,198.09,24,176c0-16,24.56-29.88,60-36.25",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const TrendDown = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"232 192 136 96 96 136 24 64",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"232 128 232 192 168 192",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Function = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"72",y1,"128",x2,"184",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M56,216H85.29a32,32,0,0,0,31.49-26.28L139.22,66.28A32,32,0,0,1,170.71,40H200",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const FloppyDisk = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M216,83.31V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H172.69a8,8,0,0,1,5.65,2.34l35.32,35.32A8,8,0,0,1,216,83.31Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M80,216V156a8,8,0,0,1,8-8h80a8,8,0,0,1,8,8v60",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"152",y1,"84",x2,"96",y2,"84",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Wall = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"128",y1,"104",x2,"128",y2,"56",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"80",y1,"152",x2,"80",y2,"104",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"176",y1,"152",x2,"176",y2,"104",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"200",x2,"128",y2,"152",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"32",y1,"104",x2,"224",y2,"104",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"32",y1,"152",x2,"224",y2,"152",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"32",y,"56",w,"192",h,"144",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Faders = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"128",y1,"124",x2,"128",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"40",x2,"128",y2,"84",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"200",y1,"204",x2,"200",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"200",y1,"40",x2,"200",y2,"164",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"224",y1,"164",x2,"176",y2,"164",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"56",y1,"172",x2,"56",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"56",y1,"40",x2,"56",y2,"132",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"32",y1,"132",x2,"80",y2,"132",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"152",y1,"84",x2,"104",y2,"84",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const LockSimple = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"40",y,"88",w,"176",h,"128",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M88,88V56a40,40,0,0,1,80,0V88",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const TextSuperscript = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M240,144H192l43.17-57.56A24,24,0,1,0,193.37,64",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40",y1,"80",x2,"144",y2,"200",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"144",y1,"80",x2,"40",y2,"200",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ChatText = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M45.15,230.11A8,8,0,0,1,32,224V64a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V192a8,8,0,0,1-8,8H80Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"96",y1,"108",x2,"160",y2,"108",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"96",y1,"148",x2,"160",y2,"148",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Graph = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"118.25",y1,"106.07",x2,"105.75",y2,"77.93",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"177.23",y1,"111.59",x2,"150.77",y2,"120.41",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"181.06",y1,"169.27",x2,"146.94",y2,"142.73",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"110.06",y1,"143.94",x2,"73.94",y2,"176.06",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"128",cy,"128",r,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"96",cy,"56",r,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"200",cy,"100",r,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"200",cy,"188",r,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"56",cy,"192",r,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const SplitVertical = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"48",y1,"152",x2,"208",y2,"152",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"48",y1,"104",x2,"208",y2,"104",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"104",x2,"128",y2,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"232",x2,"128",y2,"152",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"96 56 128 24 160 56",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"160 200 128 232 96 200",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const FediverseLogo = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"148",cy,"44",r,"20",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"212",cy,"124",r,"20",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"156",cy,"212",r,"20",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"56",cy,"184",r,"20",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"52",cy,"84",r,"20",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"201.26",y1,"140.88",x2,"166.74",y2,"195.12",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"160.49",y1,"59.62",x2,"199.51",y2,"108.38",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"70.47",y1,"76.31",x2,"129.53",y2,"51.69",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"192.02",y1,"124.95",x2,"128",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"128",x2,"143.37",y2,"63.46",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"69.31",y1,"94.02",x2,"128",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"128",x2,"149.67",y2,"193.02",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"136.74",y1,"206.61",x2,"75.26",y2,"189.39",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"71.79",y1,"171.72",x2,"128",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"55.2",y1,"164.02",x2,"52.8",y2,"103.98",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Timer = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"140",r,"84",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"136",x2,"156",y2,"108",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"104",y1,"16",x2,"152",y2,"16",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ArrowLineUpRight = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"40",y1,"216",x2,"216",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"80",y1,"168",x2,"192",y2,"56",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"96 56 192 56 192 152",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Volleyball = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"80",y1,"44.86",x2,"128",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"80",y1,"211.14",x2,"128",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"224",y1,"128",x2,"128",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M116.58,32.66A96,96,0,0,1,173.06,128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M51.14,185.56A96,96,0,0,1,105.47,89",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M216.28,165.78A96,96,0,0,1,105.47,167",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const LinktreeLogo = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"128",y1,"164",x2,"128",y2,"232",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"184",y1,"48",x2,"72",y2,"160",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"184",y1,"160",x2,"72",y2,"48",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"208",y1,"104",x2,"48",y2,"104",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"24",x2,"128",y2,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ShieldWarning = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"128",y1,"132",x2,"128",y2,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"128",cy,"172",r,"16"),s(p,d,"M216,112V56a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8v56c0,96,88,120,88,120S216,208,216,112Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const TextTSlash = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"96",y1,"200",x2,"160",y2,"200",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"48",y1,"40",x2,"208",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"128",x2,"128",y2,"200",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"116.6 56 200 56 200 88",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"56 88 56 56 62.55 56",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"56",x2,"128",y2,"68.54",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const FastForwardCircle = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M191.5,118.63l-40-32A12,12,0,0,0,132,96v64a12,12,0,0,0,19.5,9.37l40-32a12,12,0,0,0,0-18.74Z"),s(p,d,"M135.5,118.63l-40-32A12,12,0,0,0,76,96v64a12,12,0,0,0,19.5,9.37l40-32a12,12,0,0,0,0-18.74Z"),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Share = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"176 152 224 104 176 56",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"192 216 32 216 32 88",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M72,176a96,96,0,0,1,93-72h59",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Joystick = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"40",y,"156",w,"176",h,"60",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"156",x2,"128",y2,"88",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"128",cy,"56",r,"32",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"204",y1,"116",x2,"172",y2,"116",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CaretRight = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"96 48 176 128 96 208",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Tray = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"40",y,"40",w,"176",h,"176",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M40,156H76.69a8,8,0,0,1,5.65,2.34l19.32,19.32a8,8,0,0,0,5.65,2.34h41.38a8,8,0,0,0,5.65-2.34l19.32-19.32a8,8,0,0,1,5.65-2.34H216",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const BatteryHigh = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"12",y,"64",w,"200",h,"128",rx,"16",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"132",y1,"104",x2,"132",y2,"152",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"92",y1,"104",x2,"92",y2,"152",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"52",y1,"104",x2,"52",y2,"152",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"244",y1,"104",x2,"244",y2,"152",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Feather = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"184",y1,"72",x2,"32",y2,"224",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M146.34,189.66a8,8,0,0,1-5.65,2.34H64V115.31a8,8,0,0,1,2.34-5.65L136.4,40.4a56,56,0,0,1,79.2,79.2Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"112",y1,"64.52",x2,"112",y2,"144",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"136",y1,"120",x2,"215.2",y2,"120",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ArrowLineLeft = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"224",y1,"128",x2,"80",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"152 56 80 128 152 200",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40",y1,"40",x2,"40",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CloudWarning = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M80,128a80,80,0,1,1,80,80H72A56,56,0,1,1,85.92,97.74",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"160",y1,"120",x2,"160",y2,"88",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"160",cy,"160",r,"16"))

export const CornersOut = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"168 48 208 48 208 88",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"88 208 48 208 48 168",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"208 168 208 208 168 208",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"48 88 48 48 88 48",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const StopCircle = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"88",y,"88",w,"80",h,"80",rx,"12"))

export const ArrowLineUpLeft = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"48",y1,"208",x2,"224",y2,"208",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"168 48 72 48 72 144",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"72",y1,"48",x2,"184",y2,"160",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const LinuxLogo = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M32,208S64,168,64,88a64,64,0,0,1,128,0c0,80,32,120,32,120",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"104",cy,"104",r,"16"),s(c,cx,"152",cy,"104",r,"16"),s(py,ps,"156 144 128 156 100 144",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M97.46,208a44.86,44.86,0,0,1,61.08,0",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Egg = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M208,152a80,80,0,0,1-160,0C48,88,96,24,128,24S208,88,208,152Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Link = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M108.71,197.23l-5.11,5.11a46.63,46.63,0,0,1-66-.05h0a46.63,46.63,0,0,1,.06-65.89L72.4,101.66a46.62,46.62,0,0,1,65.94,0h0A46.34,46.34,0,0,1,150.78,124",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M147.29,58.77l5.11-5.11a46.62,46.62,0,0,1,65.94,0h0a46.62,46.62,0,0,1,0,65.94L193.94,144,183.6,154.34a46.63,46.63,0,0,1-66-.05h0A46.46,46.46,0,0,1,105.22,132",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ChatTeardrop = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M132,216H48a8,8,0,0,1-8-8V124a92,92,0,0,1,92-92h0a92,92,0,0,1,92,92h0A92,92,0,0,1,132,216Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const FlagBanner = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"152 224 232 56 40 56 88 104 40 152 186.29 152",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Eraser = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"96",y1,"104",x2,"160",y2,"168",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M112,216,219.31,108.69a16,16,0,0,0,0-22.63L177.94,44.69a16,16,0,0,0-22.63,0L36.69,163.31a16,16,0,0,0,0,22.63L66.75,216H216",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CurrencyEur = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"40",y1,"108",x2,"136",y2,"108",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40",y1,"148",x2,"120",y2,"148",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M184,197.67A72,72,0,0,1,64,144V112A72,72,0,0,1,184,58.33",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ArrowBendDoubleUpLeft = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"80 152 32 104 80 56",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"136 152 88 104 136 56",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M224,200a96,96,0,0,0-96-96H88",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const HashStraight = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"40",y1,"96",x2,"216",y2,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40",y1,"160",x2,"216",y2,"160",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"160",y1,"40",x2,"160",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"96",y1,"40",x2,"96",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ArrowUUpRight = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"176 136 224 88 176 40",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M176,200H88a56,56,0,0,1-56-56h0A56,56,0,0,1,88,88H224",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const BatteryPlus = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"116",y1,"104",x2,"116",y2,"152",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"92",y1,"128",x2,"140",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"12",y,"64",w,"200",h,"128",rx,"16",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"244",y1,"104",x2,"244",y2,"152",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Bag = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"32",y,"72",w,"192",h,"136",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M88,96V64a40,40,0,0,1,80,0V96",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Bookmarks = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M160,224l-52-40L56,224V80a8,8,0,0,1,8-8h88a8,8,0,0,1,8,8Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M88,72V40a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8V184l-40-30.76",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const SelectionForeground = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M56,216H48a8,8,0,0,1-8-8v-8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"112",y1,"88",x2,"92",y2,"88",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"112",y1,"216",x2,"96",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"168",y1,"164",x2,"168",y2,"144",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40",y1,"160",x2,"40",y2,"144",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M152,216h8a8,8,0,0,0,8-8v-8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M152,88h8a8,8,0,0,1,8,8v8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M56,88H48a8,8,0,0,0-8,8v8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M168,164h40a8,8,0,0,0,8-8V48a8,8,0,0,0-8-8H100a8,8,0,0,0-8,8V88",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ReceiptX = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M32,208V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V208l-32-16-32,16-32-16L96,208,64,192Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"152",y1,"96",x2,"104",y2,"144",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"104",y1,"96",x2,"152",y2,"144",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Calendar = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"40",y,"40",w,"176",h,"176",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"176",y1,"24",x2,"176",y2,"52",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"80",y1,"24",x2,"80",y2,"52",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40",y1,"88",x2,"216",y2,"88",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"84 132 100 124 100 180",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M138.14,132a16,16,0,1,1,26.64,17.63L136,180h32",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const SelectionPlus = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"144",y1,"40",x2,"112",y2,"40",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"112",y1,"216",x2,"144",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M184,40h24a8,8,0,0,1,8,8V72",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"216",y1,"144",x2,"216",y2,"112",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40",y1,"112",x2,"40",y2,"144",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M72,216H48a8,8,0,0,1-8-8V184",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M72,40H48a8,8,0,0,0-8,8V72",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"216",y1,"192",x2,"216",y2,"240",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"192",y1,"216",x2,"240",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const NumberSeven = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"88 48 168 48 120 208",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const DiscordLogo = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"92",cy,"136",r,"16"),s(c,cx,"164",cy,"136",r,"16"),s(p,d,"M151.47,81.43l6.95-27.37a8.1,8.1,0,0,1,9.21-6L203.69,54A8.08,8.08,0,0,1,210.23,60l29.53,116.37a8,8,0,0,1-4.55,9.24l-67,29.7a8.15,8.15,0,0,1-11-4.56L145.61,179.2",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M104.53,81.43l-7-27.37a8.1,8.1,0,0,0-9.21-6L52.31,54A8.08,8.08,0,0,0,45.77,60L16.24,176.35a8,8,0,0,0,4.55,9.24l67,29.7a8.15,8.15,0,0,0,11-4.56l11.64-31.53",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M84,85.24A181.44,181.44,0,0,1,128,80a181.44,181.44,0,0,1,44,5.24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M172,174.76A181.44,181.44,0,0,1,128,180a181.44,181.44,0,0,1-44-5.24",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const GitMerge = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"80",cy,"200",r,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"80",cy,"56",r,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"208",cy,"144",r,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M184,144l-50-7.15a16,16,0,0,1-9.88-5.42L80,80v96",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Tent = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(pl,ps,"76 48 12 192 140 192 76 48",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"140 192 244 192 180 48 76 48 76 192",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const DeviceMobile = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"64",y,"24",w,"128",h,"208",rx,"16",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"64",y1,"64",x2,"192",y2,"64",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"64",y1,"192",x2,"192",y2,"192",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const InstagramLogo = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"36",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"32",y,"32",w,"192",h,"192",rx,"48",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"180",cy,"76",r,"16"))

export const Diamond = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"52.13",y,"52.13",w,"151.73",h,"151.73",rx,"7.95",t,"translate(-53.02 128) rotate(-45)",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const FileCss = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"148 32 148 92 208 92",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M48,108V40a8,8,0,0,1,8-8h96l56,56v20",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M76,200.87A22.12,22.12,0,0,1,60,208c-13.26,0-24-12.54-24-28s10.74-28,24-28a22.12,22.12,0,0,1,16,7.13",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M139.9,153.6s-29.43-7.78-31.8,11,38.43,10.12,35.78,30.72c-2.47,19.16-31.78,11-31.78,11",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M207.9,153.6s-29.43-7.78-31.8,11,38.43,10.12,35.78,30.72c-2.47,19.16-31.78,11-31.78,11",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const HardHat = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"24",y,"160",w,"208",h,"40",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M104,160V40a8,8,0,0,1,8-8h32a8,8,0,0,1,8,8V160",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M216,160V136a88,88,0,0,0-64-84.69",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M40,160V136a88,88,0,0,1,64-84.69",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const DevToLogo = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"16",y,"64",w,"224",h,"128",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"140 100 120 100 120 156 140 156",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"132",y1,"128",x2,"120",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"172 100 188 156 204 100",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M52,100H64a24,24,0,0,1,24,24v8a24,24,0,0,1-24,24H52a0,0,0,0,1,0,0V100A0,0,0,0,1,52,100Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ShoppingCart = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M188,184H91.17a16,16,0,0,1-15.74-13.14L48.73,24H24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"92",cy,"204",r,"20",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"188",cy,"204",r,"20",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M70.55,144H196.1a16,16,0,0,0,15.74-13.14L224,64H56",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const FacebookLogo = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M168,88H152a24,24,0,0,0-24,24V224",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"96",y1,"144",x2,"160",y2,"144",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Dot = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"16"))

export const PlugCharging = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"168",y1,"16",x2,"168",y2,"60",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M88,16V60",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M128,196v44",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M32,60H224",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M56,60V164a32,32,0,0,0,32,32h80a32,32,0,0,0,32-32V60",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"132 160 144 128 112 128 124 96",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Buildings = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M160,88h48a8,8,0,0,1,8,8V216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"16",y1,"216",x2,"240",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"120",y1,"112",x2,"120",y2,"124",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"80",y1,"112",x2,"80",y2,"124",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"80",y1,"164",x2,"80",y2,"176",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"120",y1,"164",x2,"120",y2,"176",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M40,216V80.55a8,8,0,0,1,4.61-7.25l104-48.54A8,8,0,0,1,160,32V216",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const AmazonLogo = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M240,168l-16,16s-36,40-96,40-96-40-96-40",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"208 168 240 168 240 200",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"124",cy,"132",r,"44",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M168,176V84A44,44,0,0,0,87.12,60",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const PersonSimpleSki = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"176",cy,"60",r,"20",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"152.94",y1,"116.94",x2,"40",y2,"84",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"200 124 160 124 128 92 114.32 105.68",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M232,201.6a61.94,61.94,0,0,1-51.69,7.92L24,164",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"88 140 144 156 110.74 189.26",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Couch = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M24,112V72a8,8,0,0,1,8-8H224a8,8,0,0,1,8,8v40",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"216",y1,"176",x2,"216",y2,"200",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40",y1,"176",x2,"40",y2,"200",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M200,136V120a8,8,0,0,1,8-8h24a8,8,0,0,1,8,8v48a8,8,0,0,1-8,8H24a8,8,0,0,1-8-8V120a8,8,0,0,1,8-8H48a8,8,0,0,1,8,8v16Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"64",x2,"128",y2,"136",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const BriefcaseMetal = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"32",y,"64",w,"192",h,"144",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"32",y1,"164",x2,"224",y2,"164",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"32",y1,"108",x2,"224",y2,"108",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M168,64V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V64",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const RectangleDashed = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M32,72V56a8,8,0,0,1,8-8H72",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"32",y1,"144",x2,"32",y2,"112",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M72,208H40a8,8,0,0,1-8-8V184",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"144",y1,"208",x2,"112",y2,"208",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M224,184v16a8,8,0,0,1-8,8H184",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"224",y1,"112",x2,"224",y2,"144",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M184,48h32a8,8,0,0,1,8,8V72",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"112",y1,"48",x2,"144",y2,"48",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Headphones = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M224,128H192a16,16,0,0,0-16,16v40a16,16,0,0,0,16,16h16a16,16,0,0,0,16-16V128a96,96,0,1,0-192,0v56a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16V144a16,16,0,0,0-16-16H32",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const SubsetProperOf = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M200,48H128a80,80,0,0,0-80,80h0a80,80,0,0,0,80,80h72",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const FlipVertical = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M59.12,32.64A8,8,0,0,0,48,40v60a8,8,0,0,0,8,8H216c8.72,0,11.15-12,3.12-15.37Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M219.11,163.37c8-3.4,5.6-15.37-3.12-15.37H56a8,8,0,0,0-8,8v60a8,8,0,0,0,11.12,7.37Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Tag = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M42.34,138.34A8,8,0,0,1,40,132.69V40h92.69a8,8,0,0,1,5.65,2.34l99.32,99.32a8,8,0,0,1,0,11.31L153,237.66a8,8,0,0,1-11.31,0Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"88",cy,"88",r,"16"))

export const FolderPlus = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M216.89,208H39.38A7.4,7.4,0,0,1,32,200.62V80H216a8,8,0,0,1,8,8V200.89A7.11,7.11,0,0,1,216.89,208Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M32,80V52a8,8,0,0,1,8-8H92.41a8,8,0,0,1,6,2.69L128,80",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"104",y1,"144",x2,"152",y2,"144",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"120",x2,"128",y2,"168",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Notification = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M208,132v76a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8h76",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"196",cy,"60",r,"28",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const PaintBrushBroad = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"40",y1,"108",x2,"216",y2,"108",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M156,152a8,8,0,0,0-7.92,9.13L152,208a24,24,0,0,1-48,0l3.92-46.87A8,8,0,0,0,100,152H56a16,16,0,0,1-16-16V64A32,32,0,0,1,72,32H216V136a16,16,0,0,1-16,16Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"172",y1,"32",x2,"172",y2,"68",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ChartLine = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"224 208 32 208 32 48",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"224 96 160 152 96 104 32 160",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Golf = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"164",cy,"100",r,"16"),s(c,cx,"132",cy,"132",r,"16"),s(c,cx,"128",cy,"96",r,"80",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"216",x2,"128",y2,"244",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M168,209.17a120.55,120.55,0,0,1-80,0",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const AngularLogo = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(pl,ps,"128 232 208 192 224 72 128 32 32 72 48 192 128 232",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"168 160 128 88 88 160",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"99.11",y1,"140",x2,"156.89",y2,"140",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CowboyHat = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M44,128c40,64,84,64,84,64s44,0,84-64a32,32,0,0,1,0,64H44a32,32,0,0,1,0-64Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"70.06",y1,"136",x2,"185.94",y2,"136",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M66.05,157.08,85.54,54.53A8,8,0,0,1,98.4,49.76L123,70.25a8,8,0,0,0,10,0l24.6-20.49a8,8,0,0,1,12.86,4.77L190,157.08",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const FilePdf = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"220 152 188 152 188 208",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"212",y1,"184",x2,"188",y2,"184",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M44,192H60a20,20,0,0,0,0-40H44v56",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M112,152v56h16a28,28,0,0,0,0-56Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"148 32 148 92 208 92",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M48,108V40a8,8,0,0,1,8-8h96l56,56v20",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const FunnelSimpleX = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"64",y1,"136",x2,"192",y2,"136",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"24",y1,"88",x2,"232",y2,"88",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"104",y1,"184",x2,"128",y2,"184",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"168",y1,"176",x2,"216",y2,"224",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"216",y1,"176",x2,"168",y2,"224",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const EyeSlash = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"48",y1,"40",x2,"208",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M74,68.6C33.23,89.24,16,128,16,128s32,72,112,72a118.05,118.05,0,0,0,54-12.6",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M214.41,163.59C232.12,145.73,240,128,240,128S208,56,128,56c-3.76,0-7.42.16-11,.46",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const DotsThreeOutlineVertical = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"20",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"128",cy,"48",r,"20",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"128",cy,"208",r,"20",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CurrencyBtc = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"72",y1,"48",x2,"88",y2,"48",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"72",y1,"200",x2,"88",y2,"200",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"108",y1,"48",x2,"108",y2,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"148",y1,"48",x2,"148",y2,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"108",y1,"224",x2,"108",y2,"200",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"148",y1,"224",x2,"148",y2,"200",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M88,120h72a40,40,0,0,1,0,80H88V48h60a36,36,0,0,1,0,72",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const XLogo = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(pl,ps,"48 40 96 40 208 216 160 216 48 40",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"113.88",y1,"143.53",x2,"48",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"208",y1,"40",x2,"142.12",y2,"112.47",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Drone = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M50.54,101.46a36,36,0,0,1,50.92-50.92",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M154.54,50.54a36,36,0,0,1,50.92,50.92",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M205.46,154.54a36,36,0,0,1-50.92,50.92",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M101.46,205.46a36,36,0,0,1-50.92-50.92",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"152",y1,"104",x2,"180",y2,"76",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"76",y1,"180",x2,"104",y2,"152",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"152",y1,"152",x2,"180",y2,"180",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"76",y1,"76",x2,"104",y2,"104",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"104",y,"104",w,"48",h,"48",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const BuildingApartment = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"16",y1,"216",x2,"240",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"224 216 224 76 176 76 176 40 80 40 80 112 32 112 32 216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"120",y1,"76",x2,"136",y2,"76",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"120",y1,"112",x2,"136",y2,"112",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"172",y1,"112",x2,"188",y2,"112",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"68",y1,"148",x2,"84",y2,"148",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"120",y1,"148",x2,"136",y2,"148",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"172",y1,"148",x2,"188",y2,"148",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M148,216V176a4,4,0,0,0-4-4H112a4,4,0,0,0-4,4v40Z"))

export const HandPointing = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M42.68,142a20,20,0,0,1,34.64-20L96,152V44a20,20,0,0,1,40,0v56a20,20,0,0,1,40,0v16a20,20,0,0,1,40,0v36a80,80,0,0,1-80,80C91.82,232,80.19,208,42.68,142Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const SmileyNervous = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"92",cy,"108",r,"16"),s(c,cx,"164",cy,"108",r,"16"),s(p,d,"M86.72,165.81C92.65,161.43,94.79,152,104,152c12,0,12,16,24,16s12-16,24-16c9.21,0,11.35,9.43,17.28,13.81",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ArrowsInCardinal = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"128",y1,"24",x2,"128",y2,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"160 64 128 96 96 64",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"232",x2,"128",y2,"160",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"160 192 128 160 96 192",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"232",y1,"128",x2,"160",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"192 160 160 128 192 96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"24",y1,"128",x2,"96",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"64 160 96 128 64 96",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const FlagBannerFold = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"152 224 232 48 152 48 112 136 192 136",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"112 136 101.09 160 28 160 68 116 28 72 141.09 72",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const BowlingBall = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"128",cy,"128",r,"16"),s(c,cx,"160",cy,"96",r,"16"),s(c,cx,"176",cy,"136",r,"16"))

export const UserCirclePlus = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"120",r,"40",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M63.8,199.37a72,72,0,0,1,128.4,0",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"176",y1,"56",x2,"224",y2,"56",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"200",y1,"32",x2,"200",y2,"80",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M222.67,112A95.92,95.92,0,1,1,144,33.33",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Sunglasses = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M104,136v28a36,36,0,0,1-72,0V136",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M224,136v28a36,36,0,0,1-72,0V136",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M200,48a24,24,0,0,1,24,24v64H32V72A24,24,0,0,1,56,48",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"42",y1,"136",x2,"94.44",y2,"188.44",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"162",y1,"136",x2,"214.44",y2,"188.44",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Ladder = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"184",y1,"40",x2,"88",y2,"40",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"104",y1,"40",x2,"40",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"104",y1,"216",x2,"168",y2,"40",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"69.09",y1,"136",x2,"133.09",y2,"136",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"86.55",y1,"88",x2,"150.55",y2,"88",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"51.64",y1,"184",x2,"115.64",y2,"184",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"156",y1,"73",x2,"208",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"124.36",y1,"160",x2,"187.64",y2,"160",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const TextIndent = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"120",y1,"128",x2,"216",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"120",y1,"64",x2,"216",y2,"64",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40",y1,"192",x2,"216",y2,"192",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"40 56 80 96 40 136",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CigaretteSlash = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"88",y1,"184",x2,"88",y2,"136",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M212,100s-18-7.6,0-38,0-38,0-38",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M164,100s-18-7.6,0-38,0-38,0-38",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"48",y1,"40",x2,"208",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M178.91,184H32a8,8,0,0,1-8-8V144a8,8,0,0,1,8-8H135.27",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M189.33,136H224a8,8,0,0,1,8,8v38.94",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CarBattery = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"156",y1,"140",x2,"188",y2,"140",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"172",y1,"124",x2,"172",y2,"156",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"68",y1,"140",x2,"100",y2,"140",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"24",y,"84",w,"208",h,"108",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M56,84V56a8,8,0,0,1,8-8H96a8,8,0,0,1,8,8V84",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M152,84V56a8,8,0,0,1,8-8h32a8,8,0,0,1,8,8V84",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ChalkboardSimple = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M32,200V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8v64",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"16",y1,"200",x2,"240",y2,"200",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"160 200 160 160 224 160 224 200",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Paragraph = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"184",y1,"48",x2,"184",y2,"208",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"144",y1,"48",x2,"144",y2,"208",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M144,160H96A56,56,0,0,1,96,48H208",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Selection = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"144",y1,"40",x2,"112",y2,"40",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"112",y1,"216",x2,"144",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M184,40h24a8,8,0,0,1,8,8V72",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"216",y1,"144",x2,"216",y2,"112",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M184,216h24a8,8,0,0,0,8-8V184",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40",y1,"112",x2,"40",y2,"144",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M72,216H48a8,8,0,0,1-8-8V184",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M72,40H48a8,8,0,0,0-8,8V72",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const SolarRoof = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"240 128 96 128 56 48",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"144",y1,"128",x2,"104",y2,"48",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"152",y1,"48",x2,"192",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"96",y1,"128",x2,"96",y2,"192",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M240,128v56a8,8,0,0,1-8,8H24a8,8,0,0,1-8-8V128L56,48H200Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"76",y1,"88",x2,"220",y2,"88",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Browser = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"32",y,"48",w,"192",h,"160",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"32",y1,"96",x2,"224",y2,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const MarkdownLogo = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"16",y,"56",w,"224",h,"144",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"60 148 60 108 88 136 116 108 116 148",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"176",y1,"108",x2,"176",y2,"148",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"196 132 176 148 156 132",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Building = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"24",y1,"232",x2,"232",y2,"232",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"56",y1,"24",x2,"56",y2,"232",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"200",y1,"232",x2,"200",y2,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"104 232 104 184 152 184 152 232",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40",y1,"24",x2,"216",y2,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"96",y1,"64",x2,"108",y2,"64",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"148",y1,"64",x2,"160",y2,"64",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"96",y1,"104",x2,"108",y2,"104",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"148",y1,"104",x2,"160",y2,"104",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"96",y1,"144",x2,"108",y2,"144",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"148",y1,"144",x2,"160",y2,"144",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CableCar = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"16",y1,"72",x2,"240",y2,"32",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"40",y,"104",w,"176",h,"112",rx,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40",y1,"168",x2,"216",y2,"168",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"52",x2,"128",y2,"104",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"160",y1,"104",x2,"160",y2,"168",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"96",y1,"104",x2,"96",y2,"168",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Tipi = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"104 16 232 216 24 216 152 16",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"74.24 216 128 132 181.76 216",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Notches = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"208",y1,"128",x2,"128",y2,"208",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"192",y1,"40",x2,"40",y2,"192",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const GitBranch = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M80,168V144a16,16,0,0,1,16-16h88a16,16,0,0,0,16-16V88",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"80",y1,"88",x2,"80",y2,"168",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"80",cy,"64",r,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"200",cy,"64",r,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"80",cy,"192",r,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const SlidersHorizontal = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"104",cy,"80",r,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"168",cy,"176",r,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"80",x2,"216",y2,"80",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40",y1,"80",x2,"80",y2,"80",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"192",y1,"176",x2,"216",y2,"176",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40",y1,"176",x2,"144",y2,"176",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ArrowCircleLeft = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"88",y1,"128",x2,"168",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"120 96 88 128 120 160",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const AlignRightSimple = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"224",y1,"56",x2,"224",y2,"200",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"24",y,"88",w,"160",h,"80",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const FileMagnifyingGlass = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M200,224H56a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h96l56,56V216A8,8,0,0,1,200,224Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"148 32 148 92 208 92",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"124",cy,"148",r,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"140.97",y1,"164.97",x2,"160",y2,"184",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const NetworkSlash = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"40",y,"168",w,"48",h,"48",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"64",y1,"168",x2,"64",y2,"120",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"48",y1,"40",x2,"208",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"24",y1,"120",x2,"120.73",y2,"120",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M104,42.14V40a8,8,0,0,1,8-8h32a8,8,0,0,1,8,8V72a8,8,0,0,1-8,8h-5.58",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"174.79",y1,"120",x2,"232",y2,"120",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"192",y1,"120",x2,"192",y2,"138.94",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const PhoneList = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M156.39,153.34a8,8,0,0,1,7.59-.69l47.16,21.13a8,8,0,0,1,4.8,8.3A48.33,48.33,0,0,1,168,224,136,136,0,0,1,32,88,48.33,48.33,0,0,1,73.92,40.06a8,8,0,0,1,8.3,4.8l21.13,47.2a8,8,0,0,1-.66,7.53L81.32,125a7.93,7.93,0,0,0-.54,7.81c8.27,16.93,25.77,34.22,42.75,42.41a7.92,7.92,0,0,0,7.83-.59Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"144",y1,"64",x2,"208",y2,"64",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"144",y1,"104",x2,"208",y2,"104",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const City = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"16",y1,"216",x2,"240",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"104 216 104 40 32 40 32 216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"224 216 224 88 152 88 152 216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"152",y1,"136",x2,"104",y2,"136",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"68",y1,"76",x2,"68",y2,"84",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"68",y1,"124",x2,"68",y2,"132",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"68",y1,"172",x2,"68",y2,"180",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"188",y1,"172",x2,"188",y2,"180",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"188",y1,"124",x2,"188",y2,"132",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Presentation = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"32",y,"48",w,"192",h,"136",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"160",y1,"184",x2,"192",y2,"224",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"96",y1,"184",x2,"64",y2,"224",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"48",x2,"128",y2,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CardsThree = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"40",y,"108",w,"176",h,"100",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"56",y1,"68",x2,"200",y2,"68",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"72",y1,"28",x2,"184",y2,"28",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CurrencyNgn = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"40",y1,"128",x2,"216",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"64 210 64 46 192 210 192 46",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Bulldozer = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"188",y1,"176",x2,"220",y2,"176",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"12",y,"144",w,"176",h,"64",rx,"32",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"56",y1,"48",x2,"56",y2,"144",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M244,144h-8a16,16,0,0,0-16,16v32a16,16,0,0,0,16,16h8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M16,160.5V56a8,8,0,0,1,8-8h86.67a8,8,0,0,1,7.38,4.92L156,144",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const NavigationArrow = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M152,152,234.35,129a8,8,0,0,0,.27-15.21l-176-65.28A8,8,0,0,0,48.46,58.63l65.28,176a8,8,0,0,0,15.21-.27Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const NumberTwo = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M91.33,72a40,40,0,1,1,68.61,40.07L88,208h80",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Nut = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"40",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M219.84,182.84l-88,48.18a8,8,0,0,1-7.68,0l-88-48.18a8,8,0,0,1-4.16-7V80.18a8,8,0,0,1,4.16-7l88-48.18a8,8,0,0,1,7.68,0l88,48.18a8,8,0,0,1,4.16,7v95.64A8,8,0,0,1,219.84,182.84Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Sidebar = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"84",y1,"48",x2,"84",y2,"208",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"32",y,"48",w,"192",h,"160",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"32",y1,"92",x2,"84",y2,"92",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"32",y1,"136",x2,"84",y2,"136",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ArrowSquareIn = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"40",y1,"216",x2,"120",y2,"136",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"120 200 119.99 136.01 56 136",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M164,184h44a8,8,0,0,0,8-8V48a8,8,0,0,0-8-8H80a8,8,0,0,0-8,8V92",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const MapPin = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"104",r,"32",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M208,104c0,72-80,128-80,128S48,176,48,104a80,80,0,0,1,160,0Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ArrowsOutSimple = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"160 48 208 48 208 96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"148",y1,"108",x2,"208",y2,"48",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"96 208 48 208 48 160",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"108",y1,"148",x2,"48",y2,"208",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const MapTrifold = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"96",y1,"184",x2,"96",y2,"40",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"160",y1,"72",x2,"160",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(pl,ps,"96 184 32 200 32 56 96 40 160 72 224 56 224 200 160 216 96 184",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Tote = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M209.67,208H46.33a8.06,8.06,0,0,1-8-7.07l-14.25-120a8,8,0,0,1,8-8.93H223.92a8,8,0,0,1,8,8.93l-14.25,120A8.06,8.06,0,0,1,209.67,208Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M88,104V64a40,40,0,0,1,80,0v40",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const DiceTwo = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"40",y,"40",w,"176",h,"176",rx,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"104",cy,"104",r,"16"),s(c,cx,"152",cy,"152",r,"16"))

export const Browsers = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"28",y,"84",w,"160",h,"128",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M68,84V52a8,8,0,0,1,8-8H220a8,8,0,0,1,8,8V164a8,8,0,0,1-8,8H188",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"28",y1,"124",x2,"188",y2,"124",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const SpeakerHigh = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M80,168H32a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H80l72-56V224Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"80",y1,"88",x2,"80",y2,"168",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M192,106.85a32,32,0,0,1,0,42.3",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M221.67,80a72,72,0,0,1,0,96",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ArrowsInSimple = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"148 60 148 108 196 108",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"208",y1,"48",x2,"148",y2,"108",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"60 148 108 148 108 196",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"48",y1,"208",x2,"108",y2,"148",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const BatteryVerticalHigh = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"104",y1,"12",x2,"152",y2,"12",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"64",y,"44",w,"128",h,"200",rx,"16",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"100",y1,"124",x2,"156",y2,"124",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"100",y1,"164",x2,"156",y2,"164",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"100",y1,"204",x2,"156",y2,"204",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CellSignalMedium = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"120",y1,"112",x2,"120",y2,"200",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"80",y1,"152",x2,"80",y2,"200",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40",y1,"192",x2,"40",y2,"200",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ArrowElbowRightDown = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"128 160 176 208 224 160",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"32 64 176 64 176 208",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const TagSimple = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M194.37,196.44,240,128,194.37,59.56A8,8,0,0,0,187.72,56H40a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8H187.72A8,8,0,0,0,194.37,196.44Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Layout = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"104",y1,"104",x2,"104",y2,"208",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"32",y1,"104",x2,"224",y2,"104",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"32",y,"48",w,"192",h,"160",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Wallet = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"180",cy,"136",r,"16"),s(p,d,"M40,60.73V180a20,20,0,0,0,20,20H204a20,20,0,0,0,20-20V100a20,20,0,0,0-20-20H60.48C49.63,80,40.4,71.57,40,60.73A20,20,0,0,1,60,40H192",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ArrowBendLeftDown = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"152 176 104 224 56 176",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M200,32a96,96,0,0,0-96,96v96",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const JarLabel = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"48",y1,"108",x2,"208",y2,"108",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"48",y1,"180",x2,"208",y2,"180",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"48",y,"60",w,"160",h,"172",rx,"32",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M80,60V32a8,8,0,0,1,8-8h80a8,8,0,0,1,8,8V60",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"60",x2,"128",y2,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Sigma = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"192 72 192 48 64 48 128 128 64 208 192 208 192 184",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const PhosphorLogo = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"72",y,"40",w,"72",h,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M144,168v72a72,72,0,0,1-72-72",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"72",y1,"40",x2,"144",y2,"168",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M144,168h8a64,64,0,0,0,0-128h-8",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const RssSimple = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M64,40A152,152,0,0,1,216,192",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M64,112a80,80,0,0,1,80,80",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"68",cy,"188",r,"16"))

export const StandardDefinition = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M148,176h24a48,48,0,0,0,0-96H148Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"32",y1,"44",x2,"224",y2,"44",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"32",y1,"212",x2,"224",y2,"212",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M44,152c0,13.25,14.33,24,32,24s32-10.75,32-24c0-32-62.22-20-62.22-48,0-13.25,12.55-24,30.22-24,13.25,0,23.63,6,28,14.66",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Bluetooth = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(pl,ps,"128 32 192 80 128 128 128 32",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(pl,ps,"128 128 192 176 128 224 128 128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"64",y1,"80",x2,"128",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"64",y1,"176",x2,"128",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Medal = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"96",r,"80",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"128",cy,"96",r,"40",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"176 160 176 240 127.99 216 80 240 80 160.01",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Bus = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"48",y1,"100",x2,"208",y2,"100",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M208,180H48V64A24,24,0,0,1,72,40H184a24,24,0,0,1,24,24Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M208,180v28a8,8,0,0,1-8,8H172a8,8,0,0,1-8-8V180",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M92,180v28a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V180",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"92",cy,"140",r,"16"),s(c,cx,"164",cy,"140",r,"16"),s(l,x1,"244",y1,"80",x2,"244",y2,"104",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"12",y1,"80",x2,"12",y2,"104",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ArrowUDownLeft = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"80 120 32 168 80 216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M80,56h88a56,56,0,0,1,56,56h0a56,56,0,0,1-56,56H32",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Broom = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M112,224a95.2,95.2,0,0,1-29-48",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M192,152c0,31.67,13.31,59,40,72H61A103.65,103.65,0,0,1,32,152c0-28.21,11.23-50.89,29.47-69.64a8,8,0,0,1,8.67-1.81L95.52,90.83a16,16,0,0,0,20.82-9l21-53.11c4.15-10,15.47-15.32,25.63-11.53a20,20,0,0,1,11.51,26.4L153.13,96.69a16,16,0,0,0,8.93,20.76L187,127.29a8,8,0,0,1,5,7.43Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40.54",y1,"112.21",x2,"194.26",y2,"173.7",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const FileAudio = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(pl,ps,"44 200 44 160 68 160 92 136 92 224 68 200 44 200",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M132,152a32.5,32.5,0,0,1,0,56",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"148 32 148 92 208 92",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M180,224h20a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8v72",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const UmbrellaSimple = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M176,200a24,24,0,0,1-48,0V136",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M32,136a8,8,0,0,1-8-8.71,104.37,104.37,0,0,1,207.94,0,8,8,0,0,1-8,8.71Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Car = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"16",y1,"112",x2,"240",y2,"112",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M224,168v32a8,8,0,0,1-8,8H188a8,8,0,0,1-8-8V168",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M76,168v32a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V168",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M224,112,194.11,44.75A8,8,0,0,0,186.8,40H69.2a8,8,0,0,0-7.31,4.75L32,112v56H224Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ArrowElbowDownLeft = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"96 128 48 176 96 224",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"192 32 192 176 48 176",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Signature = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"24",y1,"176",x2,"232",y2,"176",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M24,224S139.6,32,78,32c-45.84,0-46.41,184.91,50,64,0,0,16,77.43,56,16,0,0,0,24,48,24",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Fingerprint = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M108,128a20,20,0,0,1,40,0,211.13,211.13,0,0,1-25,99.88",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M128,68a60,60,0,0,1,60,60q0,12.13-1.12,24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M51.35,192.22A131.39,131.39,0,0,0,68,128,59.85,59.85,0,0,1,88,83.29",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M103.32,168A171,171,0,0,1,83,217.33",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M179.8,192a250.79,250.79,0,0,1-8.4,26.12",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M22.28,160A92,92,0,0,0,28,128h0a100,100,0,0,1,200,0h0a293.41,293.41,0,0,1-7,64",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const FilePng = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"148 32 148 92 208 92",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M48,108V40a8,8,0,0,1,8-8h96l56,56v20",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M40,192H56a20,20,0,0,0,0-40H40v56",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M216,188h4v12.87A22.12,22.12,0,0,1,204,208c-13.25,0-24-12.54-24-28s10.75-28,24-28a21.28,21.28,0,0,1,12,3.75",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"108 208 108 152 148 208 148 152",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Clock = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"128 72 128 128 184 128",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const FilmScript = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"48",y,"32",w,"160",h,"192",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"92",cy,"80",r,"16"),s(c,cx,"92",cy,"176",r,"16"),s(c,cx,"92",cy,"128",r,"16"))

export const Pulse = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"24 128 56 128 96 40 160 208 200 128 232 128",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ThumbsDown = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M32,48H80a0,0,0,0,1,0,0V152a0,0,0,0,1,0,0H32a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M80,152l40,80a32,32,0,0,0,32-32V176h64a16,16,0,0,0,15.87-18l-12-96A16,16,0,0,0,204,48H80",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const DownloadSimple = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"128",y1,"144",x2,"128",y2,"32",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"216 144 216 208 40 208 40 144",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"168 104 128 144 88 104",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const AnchorSimple = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"64",r,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"216",x2,"128",y2,"88",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M56,120H32a96,96,0,0,0,192,0H200",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Windmill = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M148.1,61.86l-76-44.75a8,8,0,0,0-11,2.83l-12,20.34a8,8,0,0,0,2.84,11l152.1,89.52a8,8,0,0,1,2.84,11l-12,20.34a8,8,0,0,1-11,2.83l-76-44.75",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M93.86,75.9l-44.75,76a8,8,0,0,0,2.83,11l20.34,12a8,8,0,0,0,11-2.84L172.76,20a8,8,0,0,1,11-2.84l20.34,12a8,8,0,0,1,2.83,11l-44.75,76",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"32",y1,"232",x2,"224",y2,"232",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"166.36",y1,"164.55",x2,"176",y2,"232",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"90.27",y1,"160.11",x2,"80",y2,"232",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const LineSegments = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"40",cy,"200",r,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"96",cy,"96",r,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"160",cy,"160",r,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"216",cy,"56",r,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"84.62",y1,"117.13",x2,"51.38",y2,"178.87",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"143.03",y1,"143.03",x2,"112.97",y2,"112.97",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"204.62",y1,"77.13",x2,"171.38",y2,"138.87",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const DotsThreeOutline = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"20",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"208",cy,"128",r,"20",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"48",cy,"128",r,"20",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ArrowsHorizontal = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"56 96 24 128 56 160",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"200 96 232 128 200 160",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"24",y1,"128",x2,"232",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const AlignCenterHorizontalSimple = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"128",y1,"48",x2,"128",y2,"88",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"168",x2,"128",y2,"208",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"40",y,"88",w,"176",h,"80",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ShuffleAngular = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"32 72 88 72 168 184 232 184",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"208 48 232 72 208 96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"208 160 232 184 208 208",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"32 184 88 184 103.42 162.41",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"152.58 93.59 168 72 232 72",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const BatteryVerticalMedium = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"104",y1,"12",x2,"152",y2,"12",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"64",y,"44",w,"128",h,"200",rx,"16",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"100",y1,"164",x2,"156",y2,"164",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"100",y1,"204",x2,"156",y2,"204",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const GridNine = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"32",y,"56",w,"192",h,"144",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"96",y1,"56",x2,"96",y2,"200",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"160",y1,"56",x2,"160",y2,"200",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"32",y1,"104",x2,"224",y2,"104",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"32",y1,"152",x2,"224",y2,"152",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ArrowSquareUpLeft = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"40",y,"40",w,"176",h,"176",rx,"8",t,"translate(256 0) rotate(90)",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"144 96 96 96 96 144",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"160",y1,"160",x2,"96",y2,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const AlignCenterHorizontal = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"128",y1,"32",x2,"128",y2,"52",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"204",x2,"128",y2,"224",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"108",x2,"128",y2,"148",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"64",y,"52",w,"128",h,"56",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"40",y,"148",w,"176",h,"56",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const BellSimpleZ = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"112 92 144 92 112 140 144 140",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M56,104a72,72,0,0,1,144,0c0,35.82,8.3,56.6,14.9,68A8,8,0,0,1,208,184H48a8,8,0,0,1-6.88-12C47.71,160.6,56,139.81,56,104Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"96",y1,"224",x2,"160",y2,"224",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const NoteBlank = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M156.69,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8V156.69a8,8,0,0,1-2.34,5.65l-51.32,51.32A8,8,0,0,1,156.69,216Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"215.28 155.99 156 155.99 156 215.28",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const BowlSteam = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M88,207.3A96,96,0,0,1,32,120H224a96,96,0,0,1-56,87.3V216a8,8,0,0,1-8,8H96a8,8,0,0,1-8-8Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M172,84s-18-5.2,0-26,0-26,0-26",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M128,84s-18-5.2,0-26,0-26,0-26",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M84,84s-18-5.2,0-26,0-26,0-26",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Footprints = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M156,192h56v12a28,28,0,0,1-56,0Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M44,168h56v12a28,28,0,0,1-56,0Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M46.74,128C20.54,98.29,47.48,24,72,24s51.46,74.29,25.26,104Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M158.74,152c-26.2-29.71.74-104,25.26-104s51.46,74.29,25.26,104Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Lamp = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(pl,ps,"64 40 192 40 240 152 16 152 64 40",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"152",x2,"128",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"96",y1,"216",x2,"160",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"200",y1,"152",x2,"200",y2,"192",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const DoorOpen = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"24",y1,"224",x2,"232",y2,"224",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M56,224V40a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8V224",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"120",cy,"128",r,"16"),s(l,x1,"160",y1,"32",x2,"160",y2,"224",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const BeerStein = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M48,80H192a0,0,0,0,1,0,0V208a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V80A0,0,0,0,1,48,80Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M192,96h24a16,16,0,0,1,16,16v64a16,16,0,0,1-16,16H192",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"96",y1,"120",x2,"96",y2,"176",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"144",y1,"120",x2,"144",y2,"176",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M192,80V72a32,32,0,0,0-32-32H145.74C135.49,30.18,120.59,24,104,24,73.07,24,48,45.49,48,72v8",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Thermometer = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"212",cy,"84",r,"20",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"108",y1,"188",x2,"108",y2,"92",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M68,154.78V56a40,40,0,0,1,80,0v98.77h0a52,52,0,1,1-80,0Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"108",cy,"188",r,"24"))

export const PencilSimpleSlash = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"136",y1,"64",x2,"192",y2,"120",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"48",y1,"40",x2,"208",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M154.67,157.33,98.34,213.66A8,8,0,0,1,92.69,216H48a8,8,0,0,1-8-8V163.31a8,8,0,0,1,2.34-5.65l59-59",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M129.65,70.35l36-36a8,8,0,0,1,11.31,0L221.66,79a8,8,0,0,1,0,11.31L183,129",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Scribble = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M88,40,46.63,81.37a22.62,22.62,0,0,0,0,32h0a22.62,22.62,0,0,0,32,0l66.74-66.74a22.62,22.62,0,0,1,32,0h0a22.62,22.62,0,0,1,0,32L78.63,177.37a22.62,22.62,0,0,0,0,32h0a22.62,22.62,0,0,0,32,0l66.74-66.74a22.62,22.62,0,0,1,32,0h0a22.62,22.62,0,0,1,0,32L200,184a22.62,22.62,0,0,0,0,32h0",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const WarningOctagon = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"128",y1,"132",x2,"128",y2,"80",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M164.45,32H91.55a8,8,0,0,0-5.66,2.34L34.34,85.89A8,8,0,0,0,32,91.55v72.9a8,8,0,0,0,2.34,5.66l51.55,51.55A8,8,0,0,0,91.55,224h72.9a8,8,0,0,0,5.66-2.34l51.55-51.55a8,8,0,0,0,2.34-5.66V91.55a8,8,0,0,0-2.34-5.66L170.11,34.34A8,8,0,0,0,164.45,32Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"128",cy,"172",r,"16"))

export const Waveform = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"48",y1,"96",x2,"48",y2,"160",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"88",y1,"32",x2,"88",y2,"224",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"64",x2,"128",y2,"192",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"168",y1,"96",x2,"168",y2,"160",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"208",y1,"80",x2,"208",y2,"176",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Stethoscope = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"208",cy,"160",r,"28",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M104,144v48a40,40,0,0,0,40,40h24a40,40,0,0,0,40-40v-4",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M136,40h24V87.17c0,30.77-24.48,56.43-55.26,56.83A56,56,0,0,1,48,88V40H72",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const MouseSimple = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"56",y,"24",w,"144",h,"208",rx,"56",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"112",x2,"128",y2,"64",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const X = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"200",y1,"56",x2,"56",y2,"200",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"200",y1,"200",x2,"56",y2,"56",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Fire = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M166.17,156A40.11,40.11,0,0,1,140,182.17",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M112,96l26.27-72C159.86,41.92,208,88.15,208,144a80,80,0,0,1-160,0c0-30.57,14.42-58.26,31-80Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Bird = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"160",cy,"72",r,"16"),s(p,d,"M104,99.52V76.89c0-28.77,23-52.75,51.74-52.89a52,52,0,0,1,50.59,38.89L232,80,208,96v24a96,96,0,0,1-96,96H24a8,8,0,0,1-6.25-13Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"132",y1,"128",x2,"58.67",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CloudSun = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"87.66",y1,"56.73",x2,"83.5",y2,"33.09",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"56.69",y1,"76.46",x2,"37.03",y2,"62.69",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"48.73",y1,"112.31",x2,"25.09",y2,"116.48",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"123.52",y1,"64.69",x2,"137.28",y2,"45.03",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M96,144a68.06,68.06,0,1,1,68,72H84a44,44,0,1,1,14.2-85.66",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M59.65,135.35a48,48,0,1,1,80.19-50.94",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const StackSimple = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(pl,ps,"16 100 128 164 240 100 128 36 16 100",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"16 148 128 212 240 148",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const FileX = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M200,224H56a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h96l56,56V216A8,8,0,0,1,200,224Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"148 32 148 92 208 92",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"104",y1,"128",x2,"152",y2,"176",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"152",y1,"128",x2,"104",y2,"176",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Info = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"124",cy,"84",r,"16"),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M120,124a8,8,0,0,1,8,8v36a8,8,0,0,0,8,8",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ChargingStation = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"112 168 128 128 96 128 112 88",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M56,216V56A16,16,0,0,1,72,40h80a16,16,0,0,1,16,16V216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"32",y1,"216",x2,"192",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M168,112h24a16,16,0,0,1,16,16v38a18,18,0,0,0,18,18h0a18,18,0,0,0,18-18V86.63a16,16,0,0,0-4.69-11.32L220,56",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Acorn = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M216,112v16c0,53-88,88-88,112,0-24-88-59-88-112V112",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M80,56h96a48,48,0,0,1,48,48v0a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8v0A48,48,0,0,1,80,56Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M128,56V48a32,32,0,0,1,32-32",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const PintGlass = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M56,32H200L176.85,225A8,8,0,0,1,168.9,232H87.1A8,8,0,0,1,79.15,225Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"60.8",y1,"72",x2,"195.2",y2,"72",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ShieldChevron = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M216,112V56a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8v56c0,96,88,120,88,120S216,208,216,112Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"201.97 171.78 128 120 54.03 171.78",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Shovel = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"192",y1,"16",x2,"240",y2,"64",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"216",y1,"40",x2,"88",y2,"168",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M32,232a8,8,0,0,1-8-8V144a8,8,0,0,1,2.34-5.66l56-56a8,8,0,0,1,11.32,0l80,80a8,8,0,0,1,0,11.32l-56,56A8,8,0,0,1,112,232Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const TennisBall = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M127.83,32A96,96,0,0,1,32,127.83",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M224,128.17A96,96,0,0,0,128.17,224",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ThumbsUp = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M32,104H80a0,0,0,0,1,0,0V208a0,0,0,0,1,0,0H32a8,8,0,0,1-8-8V112A8,8,0,0,1,32,104Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M80,104l40-80a32,32,0,0,1,32,32V80h64a16,16,0,0,1,15.87,18l-12,96A16,16,0,0,1,204,208H80",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const BatteryWarning = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"12",y,"64",w,"200",h,"128",rx,"16",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"244",y1,"104",x2,"244",y2,"152",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"112",y1,"100",x2,"112",y2,"116",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"112",cy,"152",r,"16"))

export const PenNibStraight = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"134",r,"22",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"156",x2,"128",y2,"244",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M72,72,40.83,127.43a8,8,0,0,0,.73,8.29L128,244l86.43-108.28a8,8,0,0,0,.73-8.29L184,72Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M184,72V32a8,8,0,0,0-8-8H80a8,8,0,0,0-8,8V72",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const FireSimple = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M112,96l26.27-72C159.86,41.92,208,88.15,208,144a80,80,0,0,1-160,0c0-30.57,14.42-58.26,31-80Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Sparkle = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M84.27,171.73l-55.09-20.3a7.92,7.92,0,0,1,0-14.86l55.09-20.3,20.3-55.09a7.92,7.92,0,0,1,14.86,0l20.3,55.09,55.09,20.3a7.92,7.92,0,0,1,0,14.86l-55.09,20.3-20.3,55.09a7.92,7.92,0,0,1-14.86,0Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"176",y1,"16",x2,"176",y2,"64",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"224",y1,"72",x2,"224",y2,"104",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"152",y1,"40",x2,"200",y2,"40",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"208",y1,"88",x2,"240",y2,"88",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const HourglassSimpleMedium = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M50.36,53.66A8,8,0,0,1,56,40H200a8,8,0,0,1,5.66,13.66L128,128Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M50.36,202.34A8,8,0,0,0,56,216H200a8,8,0,0,0,5.66-13.66L128,128Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"128",x2,"128",y2,"168",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"178.13",y1,"80",x2,"77.87",y2,"80",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const SkipBack = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"56",y1,"40",x2,"56",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M200,47.88V208.12a8,8,0,0,1-12.19,6.65L59.7,134.65a7.83,7.83,0,0,1,0-13.3L187.81,41.23A8,8,0,0,1,200,47.88Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const TextHTwo = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"40",y1,"56",x2,"40",y2,"176",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"144",y1,"116",x2,"40",y2,"116",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"144",y1,"56",x2,"144",y2,"176",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M240,208H192l43.17-57.56A24,24,0,1,0,193.37,128",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Boat = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"128",y1,"48",x2,"128",y2,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"168",x2,"128",y2,"88",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M224,152c0,56-96,80-96,80s-96-24-96-80V125.77a8,8,0,0,1,5.47-7.59L128,88l90.53,30.18a8,8,0,0,1,5.47,7.59Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M56,112V56a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8v56",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Spinner = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"128",y1,"32",x2,"128",y2,"64",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"195.88",y1,"60.12",x2,"173.25",y2,"82.75",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"224",y1,"128",x2,"192",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"195.88",y1,"195.88",x2,"173.25",y2,"173.25",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"224",x2,"128",y2,"192",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"60.12",y1,"195.88",x2,"82.75",y2,"173.25",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"32",y1,"128",x2,"64",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"60.12",y1,"60.12",x2,"82.75",y2,"82.75",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const PhonePause = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M156.39,153.34a8,8,0,0,1,7.59-.69l47.16,21.13a8,8,0,0,1,4.8,8.3A48.33,48.33,0,0,1,168,224,136,136,0,0,1,32,88,48.33,48.33,0,0,1,73.92,40.06a8,8,0,0,1,8.3,4.8l21.13,47.2a8,8,0,0,1-.66,7.53L81.32,125a7.93,7.93,0,0,0-.54,7.81c8.27,16.93,25.77,34.22,42.75,42.41a7.92,7.92,0,0,0,7.83-.59Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"200",y1,"48",x2,"200",y2,"104",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"160",y1,"48",x2,"160",y2,"104",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const GreaterThan = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"64 56 216 128 64 200",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const WechatLogo = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"136",cy,"144",r,"16"),s(c,cx,"184",cy,"144",r,"16"),s(p,d,"M160,224a72,72,0,1,1,63.5-38l8.16,27.76a8,8,0,0,1-9.93,9.93L194,215.5A71.75,71.75,0,0,1,160,224Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M92.06,175.89a71.53,71.53,0,0,1-30-8.39l-27.76,8.16a8,8,0,0,1-9.93-9.93L32.5,138A72,72,0,1,1,163.94,80.11",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const HouseLine = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"16",y1,"216",x2,"240",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"152 216 152 152 104 152 104 216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40",y1,"116.69",x2,"40",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"216",y1,"216",x2,"216",y2,"116.69",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M24,132.69l98.34-98.35a8,8,0,0,1,11.32,0L232,132.69",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Ambulance = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"192",cy,"192",r,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"80",cy,"192",r,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"168",y1,"192",x2,"104",y2,"192",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M56,192H32a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8H184V169.37",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"92",y1,"120",x2,"132",y2,"120",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"112",y1,"100",x2,"112",y2,"140",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"184",y1,"120",x2,"244",y2,"120",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M184,80h38.58A8,8,0,0,1,230,85l14,35v64a8,8,0,0,1-8,8H216",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Placeholder = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"40",y,"40",w,"176",h,"176",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"42.34",y1,"42.34",x2,"213.66",y2,"213.66",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ClipboardText = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"96",y1,"164",x2,"160",y2,"164",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"96",y1,"124",x2,"160",y2,"124",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M160,40h40a8,8,0,0,1,8,8V216a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M88,72V64a40,40,0,0,1,80,0v8Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const BagSimple = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"32",y,"72",w,"192",h,"136",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M88,72V64a40,40,0,0,1,80,0v8",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const UserCircleCheck = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"120",r,"40",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M63.8,199.37a72,72,0,0,1,128.4,0",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M222.67,112A95.92,95.92,0,1,1,144,33.33",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"184 56 200 72 232 40",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const PersonSimpleBike = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"168",cy,"52",r,"20",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"204",cy,"180",r,"28",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"54",cy,"178",r,"30",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"188 116 152 116 120 84 88 116 128 156 128 204",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const BatteryEmpty = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"12",y,"64",w,"200",h,"128",rx,"16",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"244",y1,"104",x2,"244",y2,"152",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CirclesFour = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"78",cy,"78",r,"30",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"178",cy,"78",r,"30",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"78",cy,"178",r,"30",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"178",cy,"178",r,"30",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const TruckTrailer = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"220",cy,"184",r,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"36",cy,"184",r,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"84",cy,"184",r,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"196",y1,"184",x2,"108",y2,"184",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M156,184V56a8,8,0,0,1,8-8h0a48,48,0,0,1,48,48v8h0a32,32,0,0,1,32,32v48",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M116,184V72H20a8,8,0,0,0-8,8V184",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ThermometerCold = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M68,154.78V56a40,40,0,0,1,80,0v98.77h0a52,52,0,1,1-80,0Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"108",y1,"188",x2,"108",y2,"132",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"212",y1,"48",x2,"212",y2,"80",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"181.57",y1,"70.11",x2,"212",y2,"80",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"193.19",y1,"105.89",x2,"212",y2,"80",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"230.81",y1,"105.89",x2,"212",y2,"80",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"242.43",y1,"70.11",x2,"212",y2,"80",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"108",cy,"188",r,"24"))

export const NyTimesLogo = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"176",cy,"148",r,"16"),s(p,d,"M64.19,95.74A28,28,0,0,1,68,40L188,96a28,28,0,0,0,0-56",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"92",y1,"133.33",x2,"92",y2,"215.46",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"48.94 156.3 132 112 132 224",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M199.46,180A80,80,0,1,1,120.23,64.37",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ArticleNyTimes = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"168",y1,"92",x2,"232",y2,"92",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"168",y1,"132",x2,"232",y2,"132",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"80",y1,"172",x2,"232",y2,"172",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"80",y1,"212",x2,"232",y2,"212",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"128 72 128 56 32 56 32 72",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"64",y1,"132",x2,"96",y2,"132",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"80",y1,"56",x2,"80",y2,"132",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const PiggyBank = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"184",cy,"120",r,"16"),s(l,x1,"116",y1,"76",x2,"156",y2,"76",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"220",y1,"40",x2,"148",y2,"40",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M12,144a24,24,0,0,1,24-24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M224.34,96H228a16,16,0,0,1,16,16v32a16,16,0,0,1-16,16h-8l-18.1,50.69a8,8,0,0,1-7.54,5.31H181.64a8,8,0,0,1-7.54-5.31L170.29,200H101.71L97.9,210.69A8,8,0,0,1,90.36,216H77.64a8,8,0,0,1-7.54-5.31L57,174a79.7,79.7,0,0,1-21-54h0a80,80,0,0,1,80-80h32a80,80,0,0,1,73.44,48.22,82.22,82.22,0,0,1,2.9,7.78",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const PresentationChart = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"32",y,"48",w,"192",h,"136",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"160",y1,"184",x2,"192",y2,"224",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"96",y1,"184",x2,"64",y2,"224",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"92",y1,"120",x2,"92",y2,"144",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"104",x2,"128",y2,"144",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"164",y1,"88",x2,"164",y2,"144",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"48",x2,"128",y2,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Copyleft = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M96,104a40,40,0,1,1,0,48",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const VideoCameraSlash = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"200 112 244 80 244 176 200 144",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"48",y1,"40",x2,"208",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M186.18,192H32a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8H69.82",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M123.88,64H192a8,8,0,0,1,8,8v72",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Equals = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"40",y1,"160",x2,"216",y2,"160",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40",y1,"96",x2,"216",y2,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const SelectionInverse = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"112",y1,"216",x2,"144",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40",y1,"112",x2,"40",y2,"144",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M72,216H48a8,8,0,0,1-8-8V184",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M184,216h24a8,8,0,0,0,8-8V48a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8V72",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"42.34",y1,"42.34",x2,"213.66",y2,"213.66",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CashRegister = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"232",y1,"160",x2,"24",y2,"160",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M24,160,46.44,74a8,8,0,0,1,7.74-6H201.82a8,8,0,0,1,7.74,6L232,160v32a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"76",y1,"116",x2,"84",y2,"116",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"124",y1,"116",x2,"132",y2,"116",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"172",y1,"116",x2,"180",y2,"116",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M72,68V40a8,8,0,0,1,8-8h40a8,8,0,0,1,8,8V68",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Lightbulb = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"88",y1,"232",x2,"168",y2,"232",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M78.7,167A79.87,79.87,0,0,1,48,104.45C47.76,61.09,82.72,25,126.07,24a80,80,0,0,1,51.34,142.9A24.3,24.3,0,0,0,168,186v2a8,8,0,0,1-8,8H96a8,8,0,0,1-8-8v-2A24.11,24.11,0,0,0,78.7,167Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M140,70a36.39,36.39,0,0,1,24,30",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const UserPlus = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"204",y1,"136",x2,"244",y2,"136",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"224",y1,"116",x2,"224",y2,"156",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"108",cy,"100",r,"60",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M24,200c20.55-24.45,49.56-40,84-40s63.45,15.55,84,40",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ListDashes = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"96",y1,"64",x2,"216",y2,"64",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"96",y1,"128",x2,"216",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"96",y1,"192",x2,"216",y2,"192",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40",y1,"64",x2,"56",y2,"64",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40",y1,"128",x2,"56",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40",y1,"192",x2,"56",y2,"192",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ArrowCircleDown = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"96 136 128 168 160 136",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"88",x2,"128",y2,"168",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Gear = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"40",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M41.43,178.09A99.14,99.14,0,0,1,31.36,153.8l16.78-21a81.59,81.59,0,0,1,0-9.64l-16.77-21a99.43,99.43,0,0,1,10.05-24.3l26.71-3a81,81,0,0,1,6.81-6.81l3-26.7A99.14,99.14,0,0,1,102.2,31.36l21,16.78a81.59,81.59,0,0,1,9.64,0l21-16.77a99.43,99.43,0,0,1,24.3,10.05l3,26.71a81,81,0,0,1,6.81,6.81l26.7,3a99.14,99.14,0,0,1,10.07,24.29l-16.78,21a81.59,81.59,0,0,1,0,9.64l16.77,21a99.43,99.43,0,0,1-10,24.3l-26.71,3a81,81,0,0,1-6.81,6.81l-3,26.7a99.14,99.14,0,0,1-24.29,10.07l-21-16.78a81.59,81.59,0,0,1-9.64,0l-21,16.77a99.43,99.43,0,0,1-24.3-10l-3-26.71a81,81,0,0,1-6.81-6.81Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Gradient = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"32",y1,"108",x2,"108",y2,"108",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"148",y1,"108",x2,"224",y2,"108",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"32",y1,"148",x2,"68",y2,"148",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"188",y1,"148",x2,"224",y2,"148",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"108",y1,"148",x2,"148",y2,"148",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"32",y1,"188",x2,"52",y2,"188",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"92",y1,"188",x2,"108",y2,"188",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"148",y1,"188",x2,"164",y2,"188",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"204",y1,"188",x2,"224",y2,"188",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"32",y1,"68",x2,"224",y2,"68",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const AlignBottomSimple = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"56",y1,"232",x2,"200",y2,"232",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"88",y,"32",w,"80",h,"160",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const GenderNonbinary = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"168",r,"64",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"104",x2,"128",y2,"48",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"88",y1,"72",x2,"168",y2,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"88",y1,"24",x2,"168",y2,"72",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const PaintRoller = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"44",y,"56",w,"156",h,"80",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M200,96h32a8,8,0,0,1,8,8v54a8,8,0,0,1-5.8,7.69L133.8,194.34A8,8,0,0,0,128,202v30",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"44",y1,"96",x2,"16",y2,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ApproximateEquals = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M40,161.61c72-59.69,104,56.47,176-3.22",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M40,97.61c72-59.69,104,56.47,176-3.22",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ArrowURightDown = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"120 176 168 224 216 176",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M56,176V88a56,56,0,0,1,56-56h0a56,56,0,0,1,56,56V224",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Shrimp = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"112",y1,"144",x2,"112",y2,"80",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"112",y1,"192",x2,"112",y2,"224",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M112,24a16,16,0,0,0,16,16h84a20,20,0,0,1,0,40",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M168,184H112a20,20,0,0,1,0-40h40a64,64,0,0,0,64-64H96.9C57.2,80,24.3,111.75,24,151.45A72,72,0,0,0,96,224h56",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"92.59",y1,"159.18",x2,"27.55",y2,"129.61",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"95.46",y1,"175.24",x2,"50.21",y2,"207.56",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Coffee = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M83.3,216A88,88,0,0,1,32,136V88H208v48a88,88,0,0,1-51.3,80",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"32",y1,"216",x2,"208",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M208,88h4a32,32,0,0,1,32,32v8a32,32,0,0,1-32,32h-7.38",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"80",y1,"24",x2,"80",y2,"48",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"120",y1,"24",x2,"120",y2,"48",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"160",y1,"24",x2,"160",y2,"48",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const NotEquals = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"40",y1,"160",x2,"216",y2,"160",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40",y1,"96",x2,"216",y2,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"208",y1,"40",x2,"48",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ChatsCircle = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M32.5,138A72,72,0,1,1,62,167.5l-27.76,8.16a8,8,0,0,1-9.93-9.93Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M163.94,80.11A72,72,0,0,1,223.5,186l8.16,27.76a8,8,0,0,1-9.93,9.93L194,215.5A72.05,72.05,0,0,1,92.06,175.89",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ClockClockwise = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"128 80 128 128 168 152",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"184 104 224 104 224 64",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M188.4,192a88,88,0,1,1,1.83-126.23C202,77.69,211.72,88.93,224,104",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Resize = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"48",y,"120",w,"88",h,"88",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M208,188v12a8,8,0,0,1-8,8H180",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"208",y1,"116",x2,"208",y2,"140",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M184,48h16a8,8,0,0,1,8,8V72",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"116",y1,"48",x2,"140",y2,"48",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M48,76V56a8,8,0,0,1,8-8H68",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const BatteryCharging = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"12",y,"64",w,"200",h,"128",rx,"16",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"244",y1,"104",x2,"244",y2,"152",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"116 156 132 128 100 128 116 100",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Boot = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M240,164v36a8,8,0,0,1-8,8H205.89a8.08,8.08,0,0,1-3.58-.84l-12.62-6.32a8.08,8.08,0,0,0-3.58-.84H169.89a8.08,8.08,0,0,0-3.58.84l-12.62,6.32a8.08,8.08,0,0,1-3.58.84H121.89a8.08,8.08,0,0,1-3.58-.84l-12.62-6.32a8.08,8.08,0,0,0-3.58-.84H85.89a8.08,8.08,0,0,0-3.58.84l-12.62,6.32a8.08,8.08,0,0,1-3.58.84H40a8,8,0,0,1-8-8V164c9.22-32.06,12-84.65,0-116H144a8,8,0,0,1,8,8v60h40A48,48,0,0,1,240,164Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"116",y1,"116",x2,"152",y2,"116",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"32",y1,"164",x2,"240",y2,"164",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Door = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"24",y1,"224",x2,"232",y2,"224",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M56,224V40a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8V224",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"156",cy,"132",r,"16"))

export const TextHFive = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M240,112H200l-8,48a27.57,27.57,0,0,1,20-8,28,28,0,0,1,0,56,27.57,27.57,0,0,1-20-8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40",y1,"56",x2,"40",y2,"176",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"144",y1,"116",x2,"40",y2,"116",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"144",y1,"56",x2,"144",y2,"176",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const AirplaneInFlight = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"72",y1,"216",x2,"216",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M144,104h64a32,32,0,0,1,32,32v24H61.06a32,32,0,0,1-30.65-22.8L16.34,90.3A8,8,0,0,1,24,80h8l24,24H92.91L80.42,66.53A8,8,0,0,1,88,56h8Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const FileMd = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"88 208 88 152 60 192 32 152 32 208",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M128,152v56h16a28,28,0,0,0,0-56Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"148 32 148 92 208 92",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M208,224V88L152,32H56a8,8,0,0,0-8,8v68",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const DiceThree = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"40",y,"40",w,"176",h,"176",rx,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"88",cy,"88",r,"16"),s(c,cx,"128",cy,"128",r,"16"),s(c,cx,"168",cy,"168",r,"16"))

export const BeachBall = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M147.93,34.08a192.17,192.17,0,0,1-27.12,189.65",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M32.27,135.19a192.17,192.17,0,0,1,189.65-27.12",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M79.25,45.27a191.14,191.14,0,0,1,82.69,48.79,191.14,191.14,0,0,1,48.79,82.69",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Webcam = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"104",r,"72",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"128",cy,"104",r,"28",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"176",x2,"128",y2,"208",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"32",y1,"208",x2,"224",y2,"208",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ArrowSquareLeft = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"40",y,"40",w,"176",h,"176",rx,"8",t,"translate(256 0) rotate(90)",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"88",y1,"128",x2,"168",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"120 96 88 128 120 160",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Boules = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"161.86",y1,"38.14",x2,"38.14",y2,"161.86",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"195.88",y1,"60.12",x2,"60.12",y2,"195.88",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"217.86",y1,"94.14",x2,"94.14",y2,"217.86",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Screwdriver = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"200",y1,"56",x2,"148",y2,"108",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M74.34,132.94a8,8,0,0,1,0-11.32l8-8A8,8,0,0,1,87.17,112H104a8,8,0,0,0,8-8V87.31a8,8,0,0,1,2.34-5.65l53.23-53.23a42.42,42.42,0,0,1,60,0h0a42.42,42.42,0,0,1,0,60l-53.23,53.23a8,8,0,0,1-5.65,2.34H152a8,8,0,0,0-8,8v16.83a8,8,0,0,1-1.62,4.83l-8,8a8,8,0,0,1-11.32,0Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"98.7",y1,"157.3",x2,"16",y2,"240",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Rug = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"56",y,"48",w,"144",h,"160",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"56",y1,"48",x2,"56",y2,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"104",y1,"48",x2,"104",y2,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"200",y1,"48",x2,"200",y2,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"56",y1,"232",x2,"56",y2,"208",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"104",y1,"232",x2,"104",y2,"208",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"152",y1,"48",x2,"152",y2,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"152",y1,"232",x2,"152",y2,"208",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"200",y1,"232",x2,"200",y2,"208",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(pl,ps,"128 88 104 128 128 168 152 128 128 88",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Armchair = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"92",y1,"136",x2,"164",y2,"136",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M164,164V128a40,40,0,1,1,44,39.8V200a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V167.8A40,40,0,1,1,92,128v36",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M48,88.2V72A32,32,0,0,1,80,40h96a32,32,0,0,1,32,32V88.2",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const PixLogo = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"52.13",y,"52.13",w,"151.73",h,"151.73",rx,"7.95",t,"translate(-53.02 128) rotate(-45)",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"52.71 96 96 96 160 160 203.29 160",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"203.29 96 160 96 96 160 52.71 160",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const LockKeyOpen = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"40",y,"88",w,"176",h,"128",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M88,88V56a40,40,0,0,1,40-40c19.35,0,36.29,13.74,40,32",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"128",cy,"144",r,"20",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"164",x2,"128",y2,"180",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const BezierCurve = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"16",y1,"80",x2,"104",y2,"80",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"152",y1,"80",x2,"240",y2,"80",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"128",cy,"80",r,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"40",cy,"176",r,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"216",cy,"176",r,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M151.78,83.25a88.12,88.12,0,0,1,62.78,68.8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M41.44,152.05a88.13,88.13,0,0,1,62.78-68.8",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Eyeglasses = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"68",cy,"164",r,"36",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"188",cy,"164",r,"36",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"104",y1,"160",x2,"152",y2,"160",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M32,164V72A24,24,0,0,1,56,48",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M200,48a24,24,0,0,1,24,24v92",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const BatteryLow = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"12",y,"64",w,"200",h,"128",rx,"16",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"52",y1,"104",x2,"52",y2,"152",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"244",y1,"104",x2,"244",y2,"152",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const TrashSimple = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"216",y1,"60",x2,"40",y2,"60",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"88",y1,"20",x2,"168",y2,"20",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M200,60V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V60",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const PlayCircle = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M170.83,118.13l-52-36A12,12,0,0,0,100,92v72a12,12,0,0,0,18.83,9.87l52-36a12,12,0,0,0,0-19.74Z"),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const SpeakerSimpleSlash = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"236",y1,"88",x2,"236",y2,"168",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"56",y1,"40",x2,"216",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M160,154.4V224L88,168H40a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H99.64",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"126.48 58.07 160 32 160 94.94",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"200",y1,"104",x2,"200",y2,"138.94",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const FolderDashed = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M88,208H39.38A7.4,7.4,0,0,1,32,200.62V192",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"160",y1,"208",x2,"128",y2,"208",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M224,152v48.89a7.11,7.11,0,0,1-7.11,7.11H200",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M168,80h48a8,8,0,0,1,8,8v24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"32",y1,"120",x2,"32",y2,"152",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M98.39,46.69,128,80H32V52a8,8,0,0,1,8-8H92.41A8,8,0,0,1,98.39,46.69Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Biohazard = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"132",r,"56",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M208,207.83A52,52,0,1,1,232,164",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M24,164a52,52,0,1,1,24,43.83",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M152,27.79a52,52,0,1,1-48,0",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Cricket = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"68.12",y,"74.75",w,"167.76",h,"90.51",rx,"8",t,"translate(-40.33 142.63) rotate(-45)",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"144",x2,"40",y2,"232",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"104 104 168 104 168 168",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"60",cy,"60",r,"20",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const MopedFront = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"108",y,"144",w,"40",h,"96",rx,"20",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"128",cy,"48",r,"32",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"160",y1,"48",x2,"208",y2,"48",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"48",y1,"48",x2,"96",y2,"48",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M108,208H80a8,8,0,0,1-8-8V136a56,56,0,0,1,56-56h0a56,56,0,0,1,56,56v64a8,8,0,0,1-8,8H148",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const WifiNone = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"204",r,"16"))

export const BaseballHelmet = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"88",cy,"156",r,"20",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M216,128a96,96,0,0,0-192,0v24a64,64,0,0,0,128,0V128h92",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M88,216h40a64,64,0,0,0,64-64V128",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const DotsThree = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"16"),s(c,cx,"60",cy,"128",r,"16"),s(c,cx,"196",cy,"128",r,"16"))

export const PuzzlePiece = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M64,216a8,8,0,0,1-8-8V165.31a28,28,0,1,1,0-50.62V72a8,8,0,0,1,8-8h46.69a28,28,0,1,1,50.61,0H208a8,8,0,0,1,8,8v42.69a28,28,0,1,0,0,50.62V208a8,8,0,0,1-8,8Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Wrench = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M73,217A24,24,0,0,1,39,183l63.77-58.28A64,64,0,0,1,184,36.65L144,80l5.66,26.34L176,112l43.35-40a64,64,0,0,1-88.1,81.2Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Airplay = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(pl,ps,"128 160 176 216 80 216 128 160",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M52,192H48a16,16,0,0,1-16-16V64A16,16,0,0,1,48,48H208a16,16,0,0,1,16,16V176a16,16,0,0,1-16,16h-4",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const AlignBottom = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"216",y1,"216",x2,"40",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"122",y,"98",w,"104",h,"52",rx,"8",t,"translate(50 298) rotate(-90)",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"56",y,"32",w,"52",h,"144",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Flame = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M208,144c0-72-80-120-80-120S48,72,48,144a80,80,0,0,0,160,0Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M88,184a40,40,0,0,0,80,0c0-40-40-64-40-64S88,144,88,184Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const SunHorizon = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"240",y1,"160",x2,"16",y2,"160",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"208",y1,"200",x2,"48",y2,"200",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M66,160a64,64,0,1,1,124,0",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"24",y1,"96",x2,"36",y2,"100",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"80",y1,"40",x2,"84",y2,"52",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"232",y1,"96",x2,"220",y2,"100",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"176",y1,"40",x2,"172",y2,"52",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ArrowBendUpRight = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"176 152 224 104 176 56",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M32,200a96,96,0,0,1,96-96h96",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const BluetoothX = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(pl,ps,"112 128 176 176 112 224 112 128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"48",y1,"80",x2,"112",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"48",y1,"176",x2,"112",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"232",y1,"56",x2,"184",y2,"104",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"232",y1,"104",x2,"184",y2,"56",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"136.41 109.69 112 128 112 32 136.41 50.31",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ArrowCircleRight = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"88",y1,"128",x2,"168",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"136 96 168 128 136 160",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ClockCountdown = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M224,136c-4.07,49.28-45.67,88-96,88a96,96,0,0,1-96-96c0-50.33,38.72-91.93,88-96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"128 76 128 128 180 128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"208",cy,"80",r,"16"),s(c,cx,"176",cy,"48",r,"16"))

export const Lockers = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"128",y1,"40",x2,"128",y2,"224",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"164",y1,"80",x2,"180",y2,"80",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"164",y1,"120",x2,"180",y2,"120",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"76",y1,"80",x2,"92",y2,"80",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"76",y1,"120",x2,"92",y2,"120",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M48,40H208a8,8,0,0,1,8,8V200a0,0,0,0,1,0,0H40a0,0,0,0,1,0,0V48a8,8,0,0,1,8-8Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40",y1,"200",x2,"40",y2,"224",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"216",y1,"200",x2,"216",y2,"224",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Rocket = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"144",y1,"228",x2,"112",y2,"228",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"128",cy,"100",r,"16"),s(p,d,"M94.81,192C37.52,95.32,103.87,32.53,123.09,17.68a8,8,0,0,1,9.82,0C152.13,32.53,218.48,95.32,161.19,192Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M183.84,110.88l30.31,36.36a8,8,0,0,1,1.66,6.86l-12.36,55.63a8,8,0,0,1-12.81,4.51L161.19,192",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M72.16,110.88,41.85,147.24a8,8,0,0,0-1.66,6.86l12.36,55.63a8,8,0,0,0,12.81,4.51L94.81,192",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const PhoneX = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"152",y1,"56",x2,"200",y2,"104",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"200",y1,"56",x2,"152",y2,"104",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M156.39,153.34a8,8,0,0,1,7.59-.69l47.16,21.13a8,8,0,0,1,4.8,8.3A48.33,48.33,0,0,1,168,224,136,136,0,0,1,32,88,48.33,48.33,0,0,1,73.92,40.06a8,8,0,0,1,8.3,4.8l21.13,47.2a8,8,0,0,1-.66,7.53L81.32,125a7.93,7.93,0,0,0-.54,7.81c8.27,16.93,25.77,34.22,42.75,42.41a7.92,7.92,0,0,0,7.83-.59Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Lectern = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M24,136a8,8,0,0,1-7.16-11.58l40-80A8,8,0,0,1,64,40H192a8,8,0,0,1,7.16,4.42l40,80A8,8,0,0,1,232,136Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"76",y1,"100",x2,"180",y2,"100",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"136",x2,"128",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"96",y1,"216",x2,"160",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const PottedPlant = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M147.9,108.1c-23.94-39.91,8-79.81,75.82-75.82C227.71,100.11,187.81,132,147.9,108.1Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M94.35,110.35c17.11-28.5-5.7-57-54.15-54.15C37.35,104.65,65.85,127.46,94.35,110.35Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"56",y1,"156",x2,"200",y2,"156",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M183.11,156l-13.72,61.74a8,8,0,0,1-7.81,6.26H94.42a8,8,0,0,1-7.81-6.26L72.89,156",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"147.9",y1,"108.1",x2,"100",y2,"156",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"94.35",y1,"110.35",x2,"120",y2,"136",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const MapPinSimpleLine = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"80",r,"48",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"216",x2,"128",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40",y1,"216",x2,"216",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ThermometerSimple = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"128",y1,"188",x2,"128",y2,"92",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M88,154.78V56a40,40,0,0,1,80,0v98.77h0a52,52,0,1,1-80,0Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"128",cy,"188",r,"24"))

export const RowsPlusTop = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"40",y,"168",w,"176",h,"40",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"40",y,"92",w,"176",h,"40",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"108",y1,"36",x2,"148",y2,"36",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"16",x2,"128",y2,"56",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Power = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"128",y1,"48",x2,"128",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M176,56c24.08,15.7,40,41.11,40,72a88,88,0,0,1-176,0c0-30.89,15.92-56.3,40-72",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Gauge = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M24,176V153.13C24,95.65,70.15,48.2,127.63,48A104,104,0,0,1,232,152v24a8,8,0,0,1-8,8H32A8,8,0,0,1,24,176Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"48",x2,"128",y2,"80",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"104",y1,"184",x2,"164",y2,"100",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"200",y1,"136",x2,"230.78",y2,"136",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"25.39",y1,"136",x2,"56",y2,"136",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Garage = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"16",y1,"200",x2,"240",y2,"200",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M224,200V98.67A8,8,0,0,0,220.44,92l-88-58.67a8,8,0,0,0-8.88,0L35.56,92A8,8,0,0,0,32,98.67V200",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"72 200 72 120 184 120 184 200",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"120",x2,"128",y2,"200",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"72",y1,"160",x2,"184",y2,"160",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Scroll = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M200,176V64a24,24,0,0,0-24-24H40",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"104",y1,"92",x2,"164",y2,"92",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"104",y1,"132",x2,"164",y2,"132",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M24,80s-8-6-8-16a24,24,0,0,1,48,0V192a24,24,0,0,0,48,0c0-10-8-16-8-16H216s8,6,8,16a24,24,0,0,1-24,24H88",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const FileHtml = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"148 32 148 92 208 92",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M48,116V40a8,8,0,0,1,8-8h96l56,56v28",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"20",y1,"160",x2,"20",y2,"208",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"56",y1,"160",x2,"56",y2,"208",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"100",y1,"160",x2,"100",y2,"208",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"116",y1,"160",x2,"84",y2,"160",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"56",y1,"184",x2,"20",y2,"184",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"144 208 144 160 166 192 188 160 188 208",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"220 160 220 208 244 208",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const FishSimple = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"156",cy,"76",r,"16"),s(p,d,"M16,183.87C272,240,220,38.7,219,37,217.29,36,16-16,72.1,240",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M202.45,151.85a104,104,0,0,1-98.3-98.3",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Swatches = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M110.84,186.25a35.71,35.71,0,0,1-41.34,29.2h0a36,36,0,0,1-28.95-41.71l25-143.13a8,8,0,0,1,9.19-6.49l54.67,9.73a8,8,0,0,1,6.44,9.26Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M232,156.19V208a8,8,0,0,1-8,8H76",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M121.42,125.76l80.79-29.28a8,8,0,0,1,10.22,4.75l19.09,52.21a7.93,7.93,0,0,1-4.77,10.17L88.16,213.84A35.07,35.07,0,0,1,76,216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"76",y1,"180",x2,"77.4",y2,"172",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Handbag = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M209.67,72H46.33a8.06,8.06,0,0,0-8,7.07l-14.25,120a8,8,0,0,0,8,8.93H223.92a8,8,0,0,0,8-8.93l-14.25-120A8.06,8.06,0,0,0,209.67,72Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M88,104V64a40,40,0,0,1,80,0v40",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Bone = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M56.32,199.68a28,28,0,1,1,10.51-51.42,8,8,0,0,0,10-1.07l70.38-70.38a8,8,0,0,0,1.07-10,28,28,0,1,1,51.42-10.51,28,28,0,1,1-10.51,51.42,8,8,0,0,0-10,1.07l-70.38,70.38a8,8,0,0,0-1.07,10,28,28,0,1,1-51.42,10.51Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Pentagram = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M60.75,205.49a8,8,0,0,0,12.31,8.95l155.63-112A8,8,0,0,0,224,88H32a8,8,0,0,0-4.71,14.47l155.63,112a8,8,0,0,0,12.31-8.95L135.61,21.68a7.94,7.94,0,0,0-15.22,0Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const SpeakerSimpleX = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M88,168H40a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H88l72-56V224Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"248",y1,"104",x2,"200",y2,"152",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"248",y1,"152",x2,"200",y2,"104",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Seatbelt = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"68",r,"36",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"200 224 56 224 192 112",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M193.67,162.44A71.51,71.51,0,0,1,199.56,184",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M59.71,169.13a72,72,0,0,1,108-37.17",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ArrowElbowUpRight = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"168 128 216 80 168 32",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"72 224 72 80 216 80",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ToiletPaper = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"64",cy,"120",r,"16"),s(e,cx,"64",cy,"120",rx,"40",ry,"80",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M104,120v88a8,8,0,0,0,8,8H224a8,8,0,0,0,8-8V120c0-44.18-17.91-80-40-80H64",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"104",y1,"120",x2,"124",y2,"120",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"164",y1,"120",x2,"172",y2,"120",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"212",y1,"120",x2,"232",y2,"120",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const MoonStars = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"208",y1,"120",x2,"208",y2,"72",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"232",y1,"96",x2,"184",y2,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"160",y1,"32",x2,"160",y2,"64",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"176",y1,"48",x2,"144",y2,"48",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M210.69,158.18A96.78,96.78,0,0,1,192,160,96.08,96.08,0,0,1,97.82,45.31,88,88,0,1,0,210.69,158.18Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Spiral = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M124,136a8,8,0,0,1-8-8,16,16,0,0,1,16-16,26,26,0,0,1,26,26,36,36,0,0,1-36,36,46,46,0,0,1-46-46,56,56,0,0,1,56-56,66,66,0,0,1,66,66,76,76,0,0,1-76,76,86,86,0,0,1-86-86,96,96,0,0,1,96-96A106,106,0,0,1,238,138",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ChartScatter = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"224 208 32 208 32 48",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"132",cy,"148",r,"16"),s(c,cx,"108",cy,"92",r,"16"),s(c,cx,"76",cy,"164",r,"16"),s(c,cx,"172",cy,"116",r,"16"),s(c,cx,"196",cy,"76",r,"16"),s(c,cx,"188",cy,"164",r,"16"))

export const NumberCircleThree = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M104,84h48l-28,40a28,28,0,1,1-20,47.6",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const FlowerLotus = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M128,200s40-22,40-80.82c0-46-24.55-69.54-35.19-77.56a8,8,0,0,0-9.62,0C112.55,49.64,88,73.14,88,119.18,88,178,128,200,128,200Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M94.6,80.8C81.28,70,68.56,65.79,61,64.18a8.2,8.2,0,0,0-9.52,5.52c-3.88,12-8.78,39.66,11.11,74.27s53.07,53.4,65.37,56",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M161.4,80.8c13.32-10.82,26-15,33.56-16.62a8.2,8.2,0,0,1,9.52,5.52c3.88,12,8.78,39.66-11.11,74.27S140.3,197.37,128,200",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M128,200c15.37,0,40.77-.18,70-17.64s38.69-39.34,41.72-50.54a7.94,7.94,0,0,0-5.46-9.78,69.59,69.59,0,0,0-30.82-.64",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M52.56,121.4a69.59,69.59,0,0,0-30.82.64,7.94,7.94,0,0,0-5.46,9.78c3,11.2,12.49,33.07,41.72,50.54S112.63,200,128,200",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Flower = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"32",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M111.71,100.45C103.81,85.56,96,67.85,96,56a32,32,0,0,1,64,0c0,11.85-7.81,29.56-15.71,44.45",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M96,128.33c-16.85-.6-36.09-2.69-46.35-8.62a32,32,0,1,1,32-55.42c10.26,5.92,21.7,21.54,30.64,35.83",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M112.29,155.88c-8.94,14.29-20.38,29.91-30.64,35.83a32,32,0,1,1-32-55.42c10.26-5.93,29.5-8,46.35-8.62",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M144.29,155.55C152.19,170.44,160,188.15,160,200a32,32,0,0,1-64,0c0-11.85,7.81-29.56,15.71-44.45",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M160,127.67c16.85.6,36.09,2.69,46.35,8.62a32,32,0,1,1-32,55.42c-10.26-5.92-21.7-21.54-30.64-35.83",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M143.71,100.12c8.94-14.29,20.38-29.91,30.64-35.83a32,32,0,1,1,32,55.42c-10.26,5.93-29.5,8-46.35,8.62",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const FilePy = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"148 32 148 92 208 92",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M172,224h28a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8v68",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M48,192H64a20,20,0,0,0,0-40H48v56",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"112 152 132 184 152 152",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"132",y1,"184",x2,"132",y2,"208",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Playlist = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"40",y1,"64",x2,"216",y2,"64",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40",y1,"128",x2,"156",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40",y1,"192",x2,"108",y2,"192",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"176",cy,"192",r,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"200 192 200 112 240 124",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Alien = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M216,112c0,48.6-56,120-88,120S40,160.6,40,112a88,88,0,0,1,176,0Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(e,cx,"92",cy,"124",rx,"16.97",ry,"29.39",t,"translate(-60.74 101.37) rotate(-45)"),s(e,cx,"164",cy,"124",rx,"29.39",ry,"16.97",t,"translate(-39.65 152.28) rotate(-45)"),s(l,x1,"116",y1,"184",x2,"140",y2,"184",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const MagnetStraight = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"48",y1,"96",x2,"104",y2,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"152",y1,"96",x2,"208",y2,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M104,144a24,24,0,0,0,48,0V56a8,8,0,0,1,8-8h40a8,8,0,0,1,8,8v87c0,44.11-35.28,80.67-79.39,81A80,80,0,0,1,48,144V56a8,8,0,0,1,8-8H96a8,8,0,0,1,8,8Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const FileArchive = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M200,224a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"148 32 148 92 208 92",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"104",y1,"224",x2,"104",y2,"116",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"84",y1,"180",x2,"124",y2,"180",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"84",y1,"140",x2,"124",y2,"140",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CurrencyGbp = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"56",y1,"128",x2,"136",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M184,208H60a36,36,0,0,0,36-36V84a44,44,0,0,1,72-33.95",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const FunnelSimple = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"64",y1,"136",x2,"192",y2,"136",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"24",y1,"88",x2,"232",y2,"88",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"104",y1,"184",x2,"152",y2,"184",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const LightningA = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(pl,ps,"127.2 24 112 88 168 113.14 72.8 216 88 152 32 126.86 127.2 24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"232 216 196 144 160 216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"224",y1,"200",x2,"168",y2,"200",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Vibrate = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"40",y,"76",w,"176",h,"104",rx,"16",t,"translate(256) rotate(90)",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"220",y1,"100",x2,"220",y2,"156",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"36",y1,"100",x2,"36",y2,"156",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const MusicNotes = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"180",cy,"164",r,"28",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"52",cy,"196",r,"28",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"208",y1,"72",x2,"80",y2,"104",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"80 196 80 56 208 24 208 164",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ExcludeSquare = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"40",y,"40",w,"120",h,"120",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"96",y,"96",w,"120",h,"120",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40",y1,"40",x2,"96",y2,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"96",y1,"40",x2,"152",y2,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40",y1,"96",x2,"96",y2,"152",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"160",y1,"160",x2,"216",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"160",y1,"104",x2,"216",y2,"160",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"104",y1,"160",x2,"160",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Rectangle = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"32",y,"48",w,"192",h,"160",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const PencilLine = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"164",y1,"92",x2,"76",y2,"180",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M96,216H48a8,8,0,0,1-8-8V163.31a8,8,0,0,1,2.34-5.65L165.66,34.34a8,8,0,0,1,11.31,0L221.66,79a8,8,0,0,1,0,11.31Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"136",y1,"64",x2,"192",y2,"120",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"104",y1,"208",x2,"48",y2,"152",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"96",y1,"216",x2,"216",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Chalkboard = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M32,200V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V200",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"16",y1,"200",x2,"240",y2,"200",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"120 200 120 160 184 160 184 200",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"72 200 72 88 184 88 184 120",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Blueprint = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M24,176V64A24,24,0,0,1,48,40H64V152H48a24,24,0,0,0,0,48H232V60H64",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"96",x2,"128",y2,"164",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"168",y1,"96",x2,"168",y2,"164",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"104",y1,"112",x2,"192",y2,"112",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"104",y1,"148",x2,"192",y2,"148",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Terminal = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"40 64 112 128 40 192",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"120",y1,"192",x2,"216",y2,"192",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const IdentificationBadge = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"136",r,"32",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"32",y,"48",w,"192",h,"160",rx,"8",t,"translate(256) rotate(90)",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"96",y1,"68",x2,"160",y2,"68",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M84,187.21a60,60,0,0,1,88,0",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ArrowArcLeft = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"88 152 24 152 24 88",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M224,184A96,96,0,0,0,60.12,116.12L24,152",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Island = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M24,224s40-32,104-32,104,32,104,32",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M176,72c-80,40-48,120-48,120",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M176,72s-17.2-8.58-36-8c-17.46.57-36.3,9.19-44,40",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M176,72S160,3.25,104,37.62",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M232,136c0-64-56-64-56-64",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M176,72s16-52.9,56-22.67",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M184,136s22.61-32-7.95-64",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"52",cy,"144",r,"20",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const PaperclipHorizontal = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M184,120H44a28,28,0,0,0,0,56H192a48,48,0,0,0,0-96H80",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Baseball = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M60,60.24A96.45,96.45,0,0,1,75.16,80",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M75.16,176A96.45,96.45,0,0,1,60,195.76",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M196,60.24A96.45,96.45,0,0,0,180.84,80",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M180.84,176A96.45,96.45,0,0,0,196,195.76",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M87.26,116A97,97,0,0,1,88,128a97,97,0,0,1-.74,12",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M168.74,116a97.67,97.67,0,0,0,0,24",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Gift = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"32",y,"80",w,"192",h,"48",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M208,128v72a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"80",x2,"128",y2,"208",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M176.79,31.21c9.34,9.34,9.89,25.06,0,33.82C159.88,80,128,80,128,80s0-31.88,15-48.79C151.73,21.32,167.45,21.87,176.79,31.21Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M79.21,31.21c-9.34,9.34-9.89,25.06,0,33.82C96.12,80,128,80,128,80s0-31.88-15-48.79C104.27,21.32,88.55,21.87,79.21,31.21Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Cat = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"128",y1,"192",x2,"128",y2,"224",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"144 176 128 192 112 176",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M67.6,67.6h0a102.87,102.87,0,0,1,120.8,0h0l21.94-25.24A8,8,0,0,1,224,48v88c0,48.6-43,88-96,88s-96-39.4-96-88V48a8,8,0,0,1,13.66-5.66Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"84",cy,"140",r,"16"),s(c,cx,"172",cy,"140",r,"16"),s(l,x1,"148",y1,"49.91",x2,"148",y2,"88",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"108",y1,"49.91",x2,"108",y2,"88",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Tractor = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"212",cy,"188",r,"28",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"64",cy,"176",r,"40",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"64",cy,"176",r,"16"),s(p,d,"M232,168V134a8,8,0,0,0-5.7-7.66L144,104V48H56V96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40",y1,"48",x2,"56",y2,"48",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"144",y1,"48",x2,"160",y2,"48",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M40,96H68a76,76,0,0,1,76,76v12h40.28",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"144",y1,"104",x2,"144",y2,"184",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"184",y1,"114.83",x2,"184",y2,"76",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const PaintBrushHousehold = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"72",y1,"104",x2,"152",y2,"184",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"42",y1,"186",x2,"68",y2,"160",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"70",y1,"214",x2,"96",y2,"188",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M158,126l14.69,14.69a16,16,0,0,1,0,22.62L96,240,16,160,92.69,83.31a16,16,0,0,1,22.62,0L130,98l61-67A24,24,0,0,1,225,65Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CameraSlash = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"48",y1,"40",x2,"208",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M154.14,156.75a36,36,0,1,1-48.3-53.12",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M200.73,208H48a16,16,0,0,1-16-16V80A16,16,0,0,1,48,64H69.82",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M102.06,40H160l16,24h32a16,16,0,0,1,16,16v94.14",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Radio = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M32,72H216a8,8,0,0,1,8,8V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V72A0,0,0,0,1,32,72Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"32",y1,"72",x2,"192",y2,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"160",cy,"136",r,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"72",y1,"116",x2,"96",y2,"116",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"72",y1,"156",x2,"96",y2,"156",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const NotMemberOf = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"208",y1,"40",x2,"48",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M200,48H128a80,80,0,0,0-80,80h0a80,80,0,0,0,80,80h72",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"200",y1,"128",x2,"48",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const HandDeposit = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"120",y1,"128",x2,"120",y2,"16",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"92 44 120 16 148 44",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M184,128h0a82.38,82.38,0,0,1,40,70.65V240",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M76,88H64a8,8,0,0,0-8,8V200",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M160.94,240l-22.26-34a20,20,0,0,1,34.64-20L184,202.31V96a8,8,0,0,0-8-8H164",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const PaperPlaneTilt = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"108",y1,"148",x2,"160",y2,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M223.69,42.18a8,8,0,0,0-9.87-9.87l-192,58.22a8,8,0,0,0-1.25,14.93L108,148l42.54,87.42a8,8,0,0,0,14.93-1.25Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Repeat = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"200 88 224 64 200 40",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M32,128A64,64,0,0,1,96,64H224",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"56 168 32 192 56 216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M224,128a64,64,0,0,1-64,64H32",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CursorText = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M128,80a32,32,0,0,1,32-32h16",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M176,208H160a32,32,0,0,1-32-32",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M80,208H96a32,32,0,0,0,32-32V80A32,32,0,0,0,96,48H80",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"104",y1,"128",x2,"152",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const MusicNotesMinus = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"224",y1,"48",x2,"176",y2,"48",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"180",cy,"164",r,"28",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"52",cy,"196",r,"28",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"80 196 80 56 136 42",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"208",y1,"88",x2,"208",y2,"164",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"160",y1,"84",x2,"80",y2,"104",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Divide = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"40",y1,"128",x2,"216",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"128",cy,"64",r,"20"),s(c,cx,"128",cy,"192",r,"20"))

export const DotsSix = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"60",cy,"92",r,"16"),s(c,cx,"128",cy,"92",r,"16"),s(c,cx,"196",cy,"92",r,"16"),s(c,cx,"60",cy,"164",r,"16"),s(c,cx,"128",cy,"164",r,"16"),s(c,cx,"196",cy,"164",r,"16"))

export const AppStoreLogo = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"104",y1,"32",x2,"128",y2,"72.62",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"152",y1,"32",x2,"76.36",y2,"160",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"179.64",y1,"160",x2,"232",y2,"160",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"151.23",y1,"111.93",x2,"208",y2,"208",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"24",y1,"160",x2,"133.15",y2,"160",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"52.73",y1,"200",x2,"48",y2,"208",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Sliders = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"56",cy,"136",r,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"128",cy,"88",r,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"200",cy,"168",r,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"56",y1,"40",x2,"56",y2,"112",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"200",y1,"40",x2,"200",y2,"144",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"40",x2,"128",y2,"64",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"56",y1,"160",x2,"56",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"200",y1,"192",x2,"200",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"112",x2,"128",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Horse = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M176,120a48,48,0,0,1-48,48",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"128",cy,"104",r,"16"),s(p,d,"M64,200c17.43,15.6,40.59,24.48,65.94,24,51.48-1,93.33-43.13,94.05-94.61A96,96,0,0,0,128,32h-8V60L16,128l13.79,22a24,24,0,0,0,23.51,9.62c17.47-3,48.06-7.64,74.7,8.34h0L92.13,217.32",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const BookOpen = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M128,88a32,32,0,0,1,32-32h72V200H160a32,32,0,0,0-32,32",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M24,200H96a32,32,0,0,1,32,32V88A32,32,0,0,0,96,56H24Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CaretDoubleRight = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"56 48 136 128 56 208",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"136 48 216 128 136 208",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const DiceFour = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"40",y,"40",w,"176",h,"176",rx,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"96",cy,"96",r,"16"),s(c,cx,"160",cy,"96",r,"16"),s(c,cx,"96",cy,"160",r,"16"),s(c,cx,"160",cy,"160",r,"16"))

export const PaintBrush = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M16,216H92a52,52,0,1,0-52-52C40,200,16,216,16,216Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M112.41,116.16C131.6,90.29,179.46,32,224,32c0,44.54-58.29,92.4-84.16,111.59",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M138.4,84.54a92.55,92.55,0,0,1,33,33",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const AddressBook = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"136",cy,"112",r,"32",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"32",y1,"72",x2,"56",y2,"72",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"32",y1,"128",x2,"56",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"32",y1,"184",x2,"56",y2,"184",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"40",y,"48",w,"192",h,"160",rx,"8",t,"translate(264 -8) rotate(90)",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M92,163.21a60,60,0,0,1,88,0",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Popsicle = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M128,16h0a64,64,0,0,1,64,64v96a8,8,0,0,1-8,8H72a8,8,0,0,1-8-8V80A64,64,0,0,1,128,16Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M148,184v40a20,20,0,0,1-20,20h0a20,20,0,0,1-20-20V184",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"108",y1,"76",x2,"108",y2,"144",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"148",y1,"76",x2,"148",y2,"144",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Notepad = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"96",y1,"124",x2,"160",y2,"124",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"96",y1,"164",x2,"160",y2,"164",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M48,40H208a0,0,0,0,1,0,0V200a24,24,0,0,1-24,24H72a24,24,0,0,1-24-24V40A0,0,0,0,1,48,40Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"84",y1,"24",x2,"84",y2,"56",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"24",x2,"128",y2,"56",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"172",y1,"24",x2,"172",y2,"56",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const SketchLogo = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(pl,ps,"72 40 184 40 240 104 128 224 16 104 72 40",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(pl,ps,"176 104 128 224 80 104 128 40 176 104",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"16",y1,"104",x2,"240",y2,"104",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Megaphone = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M40,200a8,8,0,0,0,13.15,6.12C105.55,162.16,160,160,160,160h40a40,40,0,0,0,0-80H160S105.55,77.84,53.15,33.89A8,8,0,0,0,40,40Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M156,79.67v121a8,8,0,0,0,3.56,6.65l15,7.33a8,8,0,0,0,12.2-4.72L200,160",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const WarningDiamond = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"128",y1,"132",x2,"128",y2,"80",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"128",cy,"172",r,"16"),s(rt,x,"52.13",y,"52.13",w,"151.73",h,"151.73",rx,"7.95",t,"translate(-53.02 128) rotate(-45)",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const IceCream = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M192.07,136,135,236a8,8,0,0,1-13.9,0L63.93,136",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"154.89",y1,"201.06",x2,"117.71",y2,"136",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M60,136a20,20,0,0,1-4-39.6V96a72,72,0,0,1,144,0v.4a20,20,0,0,1-4,39.6Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const MonitorArrowUp = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"32",y,"48",w,"192",h,"144",rx,"16",t,"translate(256 240) rotate(180)",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"160",y1,"228",x2,"96",y2,"228",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"104 112 128 88 152 112",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"88",x2,"128",y2,"152",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ThermometerHot = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"108",y1,"188",x2,"108",y2,"56",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M68,154.78V56a40,40,0,0,1,80,0v98.77h0a52,52,0,1,1-80,0Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"108",cy,"188",r,"24"),s(p,d,"M184,76.4c22.91-14.92,33.09,14.12,56-.8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M184,116.4c22.91-14.92,33.09,14.12,56-.8",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ArrowClockwise = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"184 104 232 104 232 56",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M188.4,192a88,88,0,1,1,1.83-126.23L232,104",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const LinkSimpleHorizontal = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"80",y1,"128",x2,"176",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M104,176H64a48,48,0,0,1,0-96h40",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M152,80h40a48,48,0,0,1,48,48h0a48,48,0,0,1-48,48H152",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const WheelchairMotion = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"176",cy,"48",r,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M44,104.11a88,88,0,0,1,104-5.88L124,140h72l-16,80",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M151.85,176A52,52,0,1,1,92,120.61",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const TerminalWindow = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"80 96 120 128 80 160",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"144",y1,"160",x2,"176",y2,"160",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"32",y,"48",w,"192",h,"160",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CastleTurret = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M192,224V112l13.66-13.66A8,8,0,0,0,208,92.69V48a8,8,0,0,0-8-8H56a8,8,0,0,0-8,8V92.69a8,8,0,0,0,2.34,5.65L64,112V224",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"100",y1,"76",x2,"100",y2,"40",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"156",y1,"76",x2,"156",y2,"40",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M104,224V168a24,24,0,0,1,48,0v56",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40",y1,"224",x2,"216",y2,"224",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const UsersFour = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"80",cy,"172",r,"28",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"80",cy,"60",r,"28",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"176",cy,"172",r,"28",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"176",cy,"60",r,"28",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M32,224a60,60,0,0,1,96,0,60,60,0,0,1,96,0",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M32,112a60,60,0,0,1,96,0h0a60,60,0,0,1,96,0",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const WebhooksLogo = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M24.8,148A44,44,0,1,0,108,168h84",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M196,211.82a44,44,0,1,0-27.06-81.3L128,64",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M167.2,44a44,44,0,1,0-62.26,57.48L64,168",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ShieldCheckered = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M216,112V56a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8v56c0,96,88,120,88,120S216,208,216,112Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"232",x2,"128",y2,"48",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40.86",y1,"128",x2,"215.14",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const EjectSimple = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"224",y1,"200",x2,"32",y2,"200",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M33.82,138.8,115.48,38a16.1,16.1,0,0,1,25,0L222.18,138.8a8.1,8.1,0,0,1-6.26,13.2H40.08A8.1,8.1,0,0,1,33.82,138.8Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CloudX = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M80,128a80,80,0,1,1,80,80H72A56,56,0,1,1,85.92,97.74",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"184",y1,"108",x2,"136",y2,"156",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"136",y1,"108",x2,"184",y2,"156",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const MicrosoftPowerpointLogo = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"152",y1,"128",x2,"232",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"32",y,"64",w,"120",h,"124",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M76,152V100H94a18,18,0,0,1,0,36H76",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M64.44,64a96,96,0,1,1-3.38,124",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const PlugsConnected = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"63.03",y,"88.4",w,"129.94",h,"79.2",rx,"24",t,"translate(-53.02 128) rotate(-45)",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"88",y1,"88",x2,"168",y2,"168",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"232",y1,"24",x2,"173.94",y2,"82.06",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"82.06",y1,"173.94",x2,"24",y2,"232",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"96",y1,"28",x2,"104",y2,"44",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"28",y1,"96",x2,"44",y2,"104",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"212",y1,"152",x2,"228",y2,"160",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"152",y1,"212",x2,"160",y2,"228",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Hamburger = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"24 180 68 164 108 180 148 164 188 180 232 164",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"24",y1,"128",x2,"232",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M208,172.73V184a32,32,0,0,1-32,32H80a32,32,0,0,1-32-32V171.27",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M48.2,92a8,8,0,0,1-7.83-10.29C49.49,53.24,85.26,32,128,32s78.52,21.25,87.63,49.73A8,8,0,0,1,207.8,92Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ArrowSquareDown = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"40",y,"40",w,"176",h,"176",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"96 136 128 168 160 136",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"88",x2,"128",y2,"168",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Airplane = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M152,96l80,40v32l-80-16v32l16,16v32l-40-16L88,232V200l16-16V152L24,168V136l80-40V48a24,24,0,0,1,48,0Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const StackOverflowLogo = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"48 152 48 216 208 216 208 152",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"88",y1,"172",x2,"168",y2,"172",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"100.3",y1,"102.23",x2,"175.48",y2,"129.59",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"135.73",y1,"40.87",x2,"197.01",y2,"92.29",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const NewspaperClipping = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M32,216V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V216l-32-16-32,16-32-16L96,216,64,200Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"148",y1,"108",x2,"184",y2,"108",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"148",y1,"148",x2,"184",y2,"148",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"72",y,"96",w,"40",h,"64",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CoinVertical = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(e,cx,"104",cy,"128",rx,"56",ry,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M104,32h48c30.93,0,56,43,56,96s-25.07,96-56,96H104",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"160",y1,"128",x2,"208",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"149.49",y1,"184",x2,"197.49",y2,"184",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"149.49",y1,"72",x2,"197.49",y2,"72",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const FireExtinguisher = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M160,240H112a8,8,0,0,1-8-8V104a32,32,0,0,1,32-32h0a32,32,0,0,1,32,32V232A8,8,0,0,1,160,240Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"64",y1,"168",x2,"168",y2,"168",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"136",y1,"72",x2,"136",y2,"32",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"180 12 136 32 216 56",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M64,208V104a72,72,0,0,1,72-72h0",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const SoccerBall = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(pl,ps,"128 88 88 115.5 103.28 160 152.72 160 168 115.5 128 88",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"64",x2,"128",y2,"88",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"65.17",y1,"108.09",x2,"88",y2,"115.5",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"89.17",y1,"179.42",x2,"103.28",y2,"160",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"166.83",y1,"179.42",x2,"152.72",y2,"160",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"190.83",y1,"108.09",x2,"168",y2,"115.5",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M209,62.77a8,8,0,0,0-13.9,2.75l-11.94,40.29a8,8,0,0,0,2.8,8.62l33,25.33a8,8,0,0,0,12.85-5.9c.11-2,.17-4,.17-5.86A104.27,104.27,0,0,0,209,62.77Z"),s(p,d,"M72.84,105.81,60.9,65.52A8,8,0,0,0,47,62.77,104.27,104.27,0,0,0,24,128c0,1.89.06,3.86.17,5.86A8,8,0,0,0,37,139.76l33-25.33A8,8,0,0,0,72.84,105.81Z"),s(p,d,"M172.19,38.23a8,8,0,0,0-4.93-6.55,104.19,104.19,0,0,0-78.52,0,8,8,0,0,0-1.51,14l36.24,24.91a8,8,0,0,0,9.06,0l36.24-24.91A8,8,0,0,0,172.19,38.23Z"),s(p,d,"M216.09,175.56a8,8,0,0,0-7-4.14H166.83a8,8,0,0,0-7.54,5.33l-14.7,41.52a8,8,0,0,0,7.54,10.67,7.7,7.7,0,0,0,2-.26,103.66,103.66,0,0,0,61.69-45A8,8,0,0,0,216.09,175.56Z"),s(p,d,"M111.41,218.27l-14.7-41.52a8,8,0,0,0-7.54-5.33H46.92a8,8,0,0,0-6.75,12.29,103.66,103.66,0,0,0,61.69,45,7.7,7.7,0,0,0,2,.26,8,8,0,0,0,7.54-10.67Z"))

export const GoogleChromeLogo = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"128",cy,"128",r,"40",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"88",x2,"215.29",y2,"88",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"162.64",y1,"148",x2,"118.99",y2,"223.6",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"93.36",y1,"148",x2,"49.71",y2,"72.4",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const DotOutline = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"20",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const PencilSimple = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M92.69,216H48a8,8,0,0,1-8-8V163.31a8,8,0,0,1,2.34-5.65L165.66,34.34a8,8,0,0,1,11.31,0L221.66,79a8,8,0,0,1,0,11.31L98.34,213.66A8,8,0,0,1,92.69,216Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"136",y1,"64",x2,"192",y2,"120",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const GlobeSimpleX = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"168",y1,"168",x2,"216",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"216",y1,"168",x2,"168",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"32",y1,"128",x2,"224",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M128,224a96,96,0,1,1,96-96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M128,224s-40-32-40-96,40-96,40-96,40,32,40,96",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const BoxingGlove = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M72,104V72a48,48,0,0,1,48-48h48a48,48,0,0,1,48,48v46.88a7.85,7.85,0,0,1-.31,2.2L200,176v40a8,8,0,0,1-8,8H80a8,8,0,0,1-8-8V176L33.75,138.19a8,8,0,0,1-1.75-5V104A24,24,0,0,1,56,80H72",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"112",y1,"152",x2,"160",y2,"184",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"160",y1,"152",x2,"112",y2,"184",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const SwimmingPool = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"88",y1,"52",x2,"168",y2,"52",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"88",y1,"88",x2,"168",y2,"88",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"88",y1,"124",x2,"168",y2,"124",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"88",y1,"32",x2,"88",y2,"137.39",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"168",y1,"32",x2,"168",y2,"139.29",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M32,164c24,0,24,16,48,16s24-16,48-16,24,16,48,16,24-16,48-16",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M32,208c24,0,24,16,48,16s24-16,48-16,24,16,48,16,24-16,48-16",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Globe = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M168,128c0,64-40,96-40,96s-40-32-40-96,40-96,40-96S168,64,168,128Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"37.46",y1,"96",x2,"218.54",y2,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"37.46",y1,"160",x2,"218.54",y2,"160",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Queue = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"40",y1,"64",x2,"216",y2,"64",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40",y1,"128",x2,"132",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40",y1,"192",x2,"132",y2,"192",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(pl,ps,"240 160 176 200 176 120 240 160",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ArrowsOutLineVertical = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"216",y1,"128",x2,"40",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"88",x2,"128",y2,"16",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"96 48 128 16 160 48",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"168",x2,"128",y2,"240",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"160 208 128 240 96 208",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const GitDiff = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M200,168V110.63a16,16,0,0,0-4.69-11.32L144,48",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"144 96 144 48 192 48",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M56,88v57.37a16,16,0,0,0,4.69,11.32L112,208",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"112 160 112 208 64 208",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"56",cy,"64",r,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"200",cy,"192",r,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const HandHeart = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M48,208H20a8,8,0,0,1-8-8V160a8,8,0,0,1,8-8H48",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M112,160h32l67-15.41a16.61,16.61,0,0,1,21,16h0a16.59,16.59,0,0,1-9.18,14.85L184,192l-64,16H48V152l25-25a24,24,0,0,1,17-7H140a20,20,0,0,1,20,20h0a20,20,0,0,1-20,20Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M96.73,120C87,107.72,80,94.56,80,80c0-21.69,17.67-40,39.46-40A39.12,39.12,0,0,1,156,64a39.12,39.12,0,0,1,36.54-24C214.33,40,232,58.31,232,80c0,29.23-28.18,55.07-50.22,71.32",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const PersonSimpleThrow = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"56",r,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"64",cy,"96",r,"20"),s(p,d,"M216,113.6s-32-25.67-80,7c-50.47,34.3-80,20.85-80,20.85",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"139.94 145.95 176 176 160 224",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M143.56,115.8c-1.3,27.56-8.3,94.82-79.56,116.2",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CarProfile = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"66",cy,"178",r,"22",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"190",cy,"178",r,"22",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"88",y1,"176",x2,"168",y2,"176",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M212,176h24a8,8,0,0,0,8-8V128a8,8,0,0,0-8-8H208L162.34,74.34A8,8,0,0,0,156.69,72H48.28a8,8,0,0,0-6.65,3.56L12,120v48a8,8,0,0,0,8,8H44",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"208",y1,"120",x2,"12",y2,"120",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const NumberThree = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M88,48h80l-48,64a48,48,0,1,1-32,83.78",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Palette = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M128,192a24,24,0,0,1,24-24h46.21a24,24,0,0,0,23.4-18.65A96.48,96.48,0,0,0,224,127.17c-.45-52.82-44.16-95.7-97-95.17a96,96,0,0,0-95,96c0,41.81,26.73,73.44,64,86.61A24,24,0,0,0,128,192Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"128",cy,"76",r,"16"),s(c,cx,"84",cy,"100",r,"16"),s(c,cx,"84",cy,"156",r,"16"),s(c,cx,"172",cy,"100",r,"16"))

export const FolderOpen = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M32,208V64a8,8,0,0,1,8-8H93.33a8,8,0,0,1,4.8,1.6L128,80h72a8,8,0,0,1,8,8v28",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M32,208l30.18-86.53A8,8,0,0,1,69.77,116H232a8,8,0,0,1,7.59,10.53L211.09,208Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const DeviceRotate = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M200,216H80a16,16,0,0,1-16-16V108",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M56,40H176a16,16,0,0,1,16,16v92",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"176 192 200 216 176 240",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"80 16 56 40 80 64",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CrownCross = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"128",y1,"176",x2,"128",y2,"12",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"104",y1,"32",x2,"152",y2,"32",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M24,120A52,52,0,0,1,76,68c28.72,0,52,19.28,52,48,0-28.72,23.28-48,52-48a52,52,0,0,1,52,52c0,52-48,64-48,64v24a8,8,0,0,1-8,8H80a8,8,0,0,1-8-8V184S24,172,24,120Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Oven = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"40",y,"40",w,"176",h,"176",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"84",cy,"80",r,"16"),s(c,cx,"128",cy,"80",r,"16"),s(c,cx,"172",cy,"80",r,"16"),s(rt,x,"76",y,"120",w,"104",h,"60",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const TextColumns = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"40",y1,"64",x2,"108",y2,"64",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40",y1,"104",x2,"108",y2,"104",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40",y1,"144",x2,"108",y2,"144",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40",y1,"184",x2,"108",y2,"184",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"148",y1,"64",x2,"216",y2,"64",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"148",y1,"104",x2,"216",y2,"104",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"148",y1,"144",x2,"216",y2,"144",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"148",y1,"184",x2,"216",y2,"184",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Basketball = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M60,60.24A95.7,95.7,0,0,1,88,128a95.7,95.7,0,0,1-28,67.76",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M196,60.24a96,96,0,0,0,0,135.52",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"32",y1,"128",x2,"224",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"32",x2,"128",y2,"224",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Upload = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"188",cy,"168",r,"16"),s(p,d,"M180,128h44a8,8,0,0,1,8,8v64a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V136a8,8,0,0,1,8-8H76",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"128",x2,"128",y2,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"80 72 128 24 176 72",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Toolbox = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"24",y,"76",w,"208",h,"124",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"24",y1,"132",x2,"232",y2,"132",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"72",y1,"116",x2,"72",y2,"148",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"184",y1,"116",x2,"184",y2,"148",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M168,76V56a16,16,0,0,0-16-16H104A16,16,0,0,0,88,56V76",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Mouse = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"56",y,"24",w,"144",h,"208",rx,"56",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"112",x2,"128",y2,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"56",y1,"112",x2,"200",y2,"112",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const GooglePodcastsLogo = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"128",y1,"16",x2,"128",y2,"48",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"176",y1,"64",x2,"176",y2,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"208",x2,"128",y2,"240",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"88",x2,"128",y2,"168",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"80",y1,"64",x2,"80",y2,"120",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"176",y1,"136",x2,"176",y2,"192",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"32",y1,"112",x2,"32",y2,"144",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"80",y1,"160",x2,"80",y2,"192",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"224",y1,"112",x2,"224",y2,"144",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const FileSvg = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"148 32 148 92 208 92",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M48,108V40a8,8,0,0,1,8-8h96l56,56v20",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M71.9,153.6s-29.43-7.78-31.8,11,38.43,10.12,35.78,30.72c-2.47,19.16-31.78,11-31.78,11",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"104 152 124 208 144 152",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M208,188h4v12.87A22.12,22.12,0,0,1,196,208c-13.25,0-24-12.54-24-28s10.75-28,24-28a21.28,21.28,0,0,1,12,3.75",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Record = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"128",cy,"128",r,"52",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const BatteryChargingVertical = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"128 172 144 140 112 140 128 108",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"104",y1,"12",x2,"152",y2,"12",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"64",y,"44",w,"128",h,"200",rx,"16",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ToggleRight = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"16",y,"64",w,"224",h,"128",rx,"64",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"176",cy,"128",r,"28",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const PlayPause = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"176",y1,"64",x2,"176",y2,"192",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"224",y1,"64",x2,"224",y2,"192",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M32,71.85v112.3a7.91,7.91,0,0,0,12.18,6.59l88.19-56.15a7.8,7.8,0,0,0,0-13.18L44.18,65.26A7.91,7.91,0,0,0,32,71.85Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Eye = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"128",cy,"128",r,"32",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Basket = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"128",y1,"128",x2,"128",y2,"168",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"180",y1,"128",x2,"176",y2,"168",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"76",y1,"128",x2,"80",y2,"168",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"184 88 128 24 72 88",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M24,88H232L216.93,201.06A8,8,0,0,1,209,208H47a8,8,0,0,1-7.93-6.94Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const FolderStar = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M98.39,46.69,128,80H32V52a8,8,0,0,1,8-8H92.41A8,8,0,0,1,98.39,46.69Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M112.56,208H39.38A7.4,7.4,0,0,1,32,200.62V80H216a8,8,0,0,1,8,8v24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(pl,ps,"184 198.54 213.67 216 205.6 183.41 232 161.61 197.35 158.94 184 128 170.65 158.94 136 161.61 162.4 183.41 154.33 216 184 198.54",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Rainbow = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M12,180v-8a116,116,0,0,1,232,0v8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M152,180v-4a24,24,0,0,0-48,0v4",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M200,180v-4a72,72,0,0,0-144,0v4",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Sneaker = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M32,192a8,8,0,0,0,8,8H236a8,8,0,0,0,8-8V167.06a32,32,0,0,0-21.88-30.35l-56.73-20.25A32,32,0,0,1,146.27,99.1L123,44.75a8,8,0,0,0-10-4.27L37.27,68A8,8,0,0,0,32,75.54Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"32",y1,"164",x2,"243.85",y2,"164",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"124",y1,"116",x2,"150.68",y2,"106.3",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"108",y1,"84",x2,"135.53",y2,"73.99",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const EscalatorDown = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"176 80 200 104 224 80",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"200",y1,"48",x2,"200",y2,"104",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M32,48H88l96,104h40a8,8,0,0,1,8,8v40a8,8,0,0,1-8,8H168L72,104H32a8,8,0,0,1-8-8V56A8,8,0,0,1,32,48Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CopySimple = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"40",y,"76",w,"140",h,"140",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"76 40 216 40 216 180",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Bridge = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"64",y1,"56",x2,"64",y2,"200",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"192",y1,"56",x2,"192",y2,"200",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M24,115.35A64,64,0,0,0,64,56a64,64,0,0,0,128,0,64,64,0,0,0,40,59.35",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"152",y1,"115.35",x2,"152",y2,"168",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"104",y1,"115.35",x2,"104",y2,"168",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"24",y1,"168",x2,"232",y2,"168",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Rows = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"40",y,"148",w,"176",h,"52",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"40",y,"56",w,"176",h,"52",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const EyeClosed = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M32,104c16.81,20.81,47.63,48,96,48s79.19-27.19,96-48",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"224",y1,"168",x2,"200.62",y2,"127.09",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"160",y1,"192",x2,"152.91",y2,"149.45",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"96",y1,"192",x2,"103.09",y2,"149.45",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"32",y1,"168",x2,"55.38",y2,"127.09",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Exclude = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"96",cy,"96",r,"72",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"160",cy,"160",r,"72",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"161.64",y1,"125.64",x2,"225.64",y2,"189.64",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"66.36",y1,"30.36",x2,"130.36",y2,"94.36",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"125.64",y1,"161.64",x2,"189.64",y2,"225.64",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"30.36",y1,"66.36",x2,"94.36",y2,"130.36",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Crop = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"64 24 64 192 232 192",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"24",y1,"64",x2,"64",y2,"64",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"104 64 192 64 192 152",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"192",y1,"192",x2,"192",y2,"232",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Atom = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(e,cx,"128",cy,"128",rx,"44.13",ry,"116.33",t,"translate(-53.02 128) rotate(-45)",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(e,cx,"128",cy,"128",rx,"116.33",ry,"44.13",t,"translate(-53.02 128) rotate(-45)",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"128",cy,"128",r,"16"))

export const PinterestLogo = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"128",y1,"88",x2,"96",y2,"224",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M66.7,152A80,80,0,1,1,216,112c0,44.18-32,72-64,72s-41.63-21.07-41.63-21.07",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CirclesThreePlus = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"78",cy,"78",r,"30",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"178",cy,"78",r,"30",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"78",cy,"178",r,"30",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"178",y1,"148",x2,"178",y2,"208",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"208",y1,"178",x2,"148",y2,"178",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const SupersetOf = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"208",y1,"200",x2,"56",y2,"200",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M56,48h96a56,56,0,0,1,0,112H56",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Toilet = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M64,108V40a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8v68",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"100",y1,"68",x2,"116",y2,"68",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M216,108a88,88,0,0,1-176,0Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M93,188.74l-4.88,34.13A8,8,0,0,0,96,232h64a8,8,0,0,0,7.92-9.13L163,188.75",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const BracketsSquare = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"80 40 40 40 40 216 80 216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"176 40 216 40 216 216 176 216",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CurrencyJpy = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"80",y1,"176",x2,"176",y2,"176",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"80",y1,"136",x2,"176",y2,"136",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"136",x2,"128",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"200 48 128 136 56 48",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Stop = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"48",y,"48",w,"160",h,"160",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ArrowLineDownLeft = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"48",y1,"48",x2,"224",y2,"48",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"72",y1,"208",x2,"184",y2,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"72 112 72 208 168 208",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const House = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M104,216V152h48v64h64V120a8,8,0,0,0-2.34-5.66l-80-80a8,8,0,0,0-11.32,0l-80,80A8,8,0,0,0,40,120v96Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ArrowElbowLeftDown = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"136 168 88 216 40 168",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"232 72 88 72 88 216",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const LessThan = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"200 56 48 128 200 200",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Champagne = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"96",y1,"240",x2,"144",y2,"240",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M97.7,16h44.6s52,160-22.3,160S97.7,16,97.7,16Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"120",y1,"176",x2,"120",y2,"240",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"224",cy,"56",r,"16"),s(c,cx,"196",cy,"20",r,"16"),s(c,cx,"200",cy,"104",r,"16"),s(l,x1,"84.2",y1,"72",x2,"155.8",y2,"72",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Exam = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M32,216V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V216l-32-16-32,16-32-16L96,216,64,200Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"68 160 100 96 132 160",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"156",y1,"128",x2,"188",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"172",y1,"112",x2,"172",y2,"144",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"74",y1,"148",x2,"126",y2,"148",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Desktop = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"32",y,"48",w,"192",h,"140",rx,"16",t,"translate(256 236) rotate(180)",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"160",y1,"224",x2,"96",y2,"224",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"32",y1,"148",x2,"224",y2,"148",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"192",x2,"128",y2,"224",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Shapes = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(pl,ps,"60 64 24 184 96 184 60 64",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"158",cy,"74",r,"42",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"136",y,"156",w,"88",h,"52",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const LineVertical = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"128",y1,"24",x2,"128",y2,"232",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Crane = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"24",y1,"168",x2,"128",y2,"168",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M24,200V96a8,8,0,0,1,8-8h72l24,80v32a8,8,0,0,1-8,8H32A8,8,0,0,1,24,200Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"64",y1,"88",x2,"64",y2,"168",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M104,88,224,24V160a8,8,0,0,1-8,8H196a8,8,0,0,1-8-8v-8",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Shield = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M216,112V56a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8v56c0,96,88,120,88,120S216,208,216,112Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ChefHat = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"96",y1,"160",x2,"88",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"160",y1,"160",x2,"168",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"160",x2,"128",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M173.65,65.12A48,48,0,1,1,184,160H72A48,48,0,1,1,82.35,65.12",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M80,80a48,48,0,0,1,96,0",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M200,157.27V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V157.27",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ArrowULeftDown = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"136 176 88 224 40 176",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M200,176V88a56,56,0,0,0-56-56h0A56,56,0,0,0,88,88V224",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const FalloutShelter = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M162.58,78.34A12,12,0,0,0,152,72H104A12,12,0,0,0,94,90.66l24,36a12,12,0,0,0,20,0l24-36A12,12,0,0,0,162.58,78.34Z"),s(p,d,"M194.58,126.34A12,12,0,0,0,184,120H136a12,12,0,0,0-10,18.66l24,36a12,12,0,0,0,20,0l24-36A12,12,0,0,0,194.58,126.34Z"),s(p,d,"M130.58,126.34A12,12,0,0,0,120,120H72a12,12,0,0,0-10,18.66l24,36a12,12,0,0,0,20,0l24-36A12,12,0,0,0,130.58,126.34Z"))

export const WifiSlash = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"204",r,"16"),s(l,x1,"48",y1,"40",x2,"208",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M71.6,66A163.53,163.53,0,0,0,24,93.19",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M107.78,105.76A115.46,115.46,0,0,0,56,129",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M154.81,157.49A68.1,68.1,0,0,0,88,165",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M232,93.19A163.31,163.31,0,0,0,128,56q-5.58,0-11.06.37",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M200,129a115.84,115.84,0,0,0-34-18.66",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const PhonePlus = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M156.39,153.34a8,8,0,0,1,7.59-.69l47.16,21.13a8,8,0,0,1,4.8,8.3A48.33,48.33,0,0,1,168,224,136,136,0,0,1,32,88,48.33,48.33,0,0,1,73.92,40.06a8,8,0,0,1,8.3,4.8l21.13,47.2a8,8,0,0,1-.66,7.53L81.32,125a7.93,7.93,0,0,0-.54,7.81c8.27,16.93,25.77,34.22,42.75,42.41a7.92,7.92,0,0,0,7.83-.59Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"144",y1,"80",x2,"208",y2,"80",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"176",y1,"48",x2,"176",y2,"112",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ArrowBendDownLeft = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"80 104 32 152 80 200",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M224,56a96,96,0,0,1-96,96H32",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const EyedropperSample = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M182.43,113.17l4.88,4.89a16,16,0,0,1,0,22.63l-9,9a8,8,0,0,1-11.31,0L106.34,89a8,8,0,0,1,0-11.31l9-9a16,16,0,0,1,22.63,0l4.89,4.88,25-25.1c10.79-10.79,28.37-11.45,39.44-1a28,28,0,0,1,.57,40.15Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M159.31,141.94l-56.68,56.69a32,32,0,0,1-32.06,8h0l-20,8.74a8,8,0,0,1-8.86-1.67h0a5.74,5.74,0,0,1-1.2-6.36l9.19-21.06h0a32,32,0,0,1,7.7-32.87l56.69-56.68",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"52.28",y1,"160",x2,"141.25",y2,"160",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const GenderMale = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"104",cy,"152",r,"72",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"154.91",y1,"101.09",x2,"216",y2,"40",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"168 40 216 40 216 88",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const NumberSquareFour = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"40",y,"40",w,"176",h,"176",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"160 152 88 152 144 80 144 176",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const BoxArrowDown = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M208,216H48a8,8,0,0,1-8-8V72L56,40H200l16,32V208A8,8,0,0,1,208,216Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40",y1,"76",x2,"216",y2,"76",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"112",x2,"128",y2,"180",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"96 148 128 180 160 148",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ShieldSlash = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"48",y1,"40",x2,"208",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M55.27,48H48a8,8,0,0,0-8,8v56c0,96,88,120,88,120s33.59-9.16,59.27-38.81",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M208.49,157.07A131.21,131.21,0,0,0,216,112V56a8,8,0,0,0-8-8H109.33",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const WarningCircle = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"132",x2,"128",y2,"80",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"128",cy,"172",r,"16"))

export const LineSegment = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"64",cy,"192",r,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"192",cy,"64",r,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"175.03",y1,"80.97",x2,"80.97",y2,"175.03",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const HourglassSimpleHigh = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M50.36,53.66A8,8,0,0,1,56,40H200a8,8,0,0,1,5.66,13.66L128,128Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M50.36,202.34A8,8,0,0,0,56,216H200a8,8,0,0,0,5.66-13.66L128,128Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"73.69",y1,"76",x2,"182.31",y2,"76",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Flag = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"48",y1,"224",x2,"48",y2,"56",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M48,176c64-55.43,112,55.43,176,0V56C160,111.43,112,.57,48,56",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Martini = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(pl,ps,"24 40 232 40 128 144 24 40",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"144",x2,"128",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"88",y1,"216",x2,"168",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"60",y1,"76",x2,"196",y2,"76",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const DotsNine = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"60",cy,"60",r,"16"),s(c,cx,"128",cy,"60",r,"16"),s(c,cx,"196",cy,"60",r,"16"),s(c,cx,"60",cy,"128",r,"16"),s(c,cx,"128",cy,"128",r,"16"),s(c,cx,"196",cy,"128",r,"16"),s(c,cx,"60",cy,"196",r,"16"),s(c,cx,"128",cy,"196",r,"16"),s(c,cx,"196",cy,"196",r,"16"))

export const FilePpt = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"220",y1,"152",x2,"180",y2,"152",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"200",y1,"152",x2,"200",y2,"208",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M44,192H60a20,20,0,0,0,0-40H44v56",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M116,192h16a20,20,0,0,0,0-40H116v56",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"148 32 148 92 208 92",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M48,108V40a8,8,0,0,1,8-8h96l56,56v20",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Password = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"36",y1,"56",x2,"36",y2,"200",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"108",y1,"96",x2,"108",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"77.57",y1,"118.11",x2,"108",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"89.19",y1,"153.89",x2,"108",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"126.81",y1,"153.89",x2,"108",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"138.43",y1,"118.11",x2,"108",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"208",y1,"96",x2,"208",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"177.57",y1,"118.11",x2,"208",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"189.19",y1,"153.89",x2,"208",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"226.81",y1,"153.89",x2,"208",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"238.43",y1,"118.11",x2,"208",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const PushPin = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M229.66,98.34a8,8,0,0,0,0-11.31L169,26.34a8,8,0,0,0-11.31,0L100.39,83.8S72.64,69.93,43,93.85a8,8,0,0,0-.65,11.91l107.9,107.89a8,8,0,0,0,12-.83c8.39-11.16,21.57-34.09,10.11-57Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"96.29",y1,"159.71",x2,"48",y2,"208",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Asclepius = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"128",y1,"24",x2,"128",y2,"232",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M80,48v8A32,32,0,0,1,48,88H28V80A32,32,0,0,1,60,48H92",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M164,48h17a31,31,0,0,1,31,31v1a32,32,0,0,1-32,32H100a24,24,0,0,0-24,24h0a24,24,0,0,0,16,22.63",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M164,166.11A24,24,0,0,1,172,184h0a24,24,0,0,1-24,24H92",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const SkipBackCircle = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(pl,ps,"96 128 160 88 160 168 96 128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"96",y1,"88",x2,"96",y2,"168",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Desk = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"28",y1,"72",x2,"28",y2,"192",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"228",y1,"72",x2,"228",y2,"192",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"72",x2,"128",y2,"136",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"12",y1,"72",x2,"244",y2,"72",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"28",y1,"144",x2,"228",y2,"144",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"68",y1,"108",x2,"88",y2,"108",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"168",y1,"108",x2,"188",y2,"108",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CellTower = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"56 232 128 92 200 232",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"72",y1,"204",x2,"184",y2,"204",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M91.85,74.85a40,40,0,0,1,71.93-.74",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M60.11,138.34a80,80,0,1,1,135.78,0",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"90.97",y1,"164",x2,"165.03",y2,"164",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const UserCircleMinus = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"120",r,"40",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M63.8,199.37a72,72,0,0,1,128.4,0",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"176",y1,"56",x2,"224",y2,"56",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M218.54,96A95.93,95.93,0,1,1,144,33.33",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const GlobeSimple = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"32",y1,"128",x2,"224",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M168,128c0,64-40,96-40,96s-40-32-40-96,40-96,40-96S168,64,168,128Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Tooth = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"88",y1,"72",x2,"168",y2,"104",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"168",y1,"72",x2,"88",y2,"104",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M40,79.76C39.93,151.18,63.48,208,84,222.54a8,8,0,0,0,12.52-6C98,196.31,104,160,128,160s30,36.31,31.51,56.53a8,8,0,0,0,12.52,6c20.49-14.55,44-71.36,44-142.78A47.94,47.94,0,0,0,168,32H88A47.94,47.94,0,0,0,40,79.76Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const NumberZero = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(e,cx,"128",cy,"128",rx,"64",ry,"88",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const GlobeX = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M128,224a96,96,0,1,1,96-96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M128,224s-40-32-40-96,40-96,40-96,40,32,40,96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"37.46",y1,"96",x2,"218.54",y2,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"37.46",y1,"160",x2,"128",y2,"160",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"168",y1,"168",x2,"216",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"216",y1,"168",x2,"168",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const PaintBucket = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M208,139.48l-79.83,79.83a16,16,0,0,1-22.63,0L20.69,134.46a16,16,0,0,1,0-22.63L116.52,16,232,131.48Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"124",cy,"116",r,"20",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"109.86",y1,"101.86",x2,"39.99",y2,"32",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M244,208a12,12,0,0,1-24,0c0-16,12-32,12-32S244,192,244,208Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const SkipForward = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"200",y1,"40",x2,"200",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M56,47.88V208.12a8,8,0,0,0,12.19,6.65L196.3,134.65a7.83,7.83,0,0,0,0-13.3L68.19,41.23A8,8,0,0,0,56,47.88Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const IntersectThree = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"92",r,"60",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"164",cy,"156",r,"60",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"92",cy,"156",r,"60",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const UserFocus = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"180 40 216 40 216 76",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"180 216 216 216 216 180",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"76 216 40 216 40 180",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"76 40 40 40 40 76",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"128",cy,"112",r,"32",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M80,168a60,60,0,0,1,96,0",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CodeBlock = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"60 32 28 64 60 96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"108 32 140 64 108 96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M180,48h20a8,8,0,0,1,8,8V200a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V140",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const PicnicTable = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"64",y1,"64",x2,"192",y2,"64",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"12",y1,"136",x2,"244",y2,"136",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"96",y1,"64",x2,"32",y2,"192",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"160",y1,"64",x2,"224",y2,"192",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Key = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"180",cy,"76",r,"16"),s(p,d,"M93.17,122.83A71.68,71.68,0,0,1,88,95.91c0-38.58,31.08-70.64,69.64-71.87A72,72,0,0,1,232,98.36C230.73,136.92,198.67,168,160.09,168a71.68,71.68,0,0,1-26.92-5.17h0L120,176H96v24H72v24H40a8,8,0,0,1-8-8V187.31a8,8,0,0,1,2.34-5.65l58.83-58.83Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const SpeakerNone = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M80,168H32a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H80l72-56V224Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"79.98",y1,"88",x2,"79.98",y2,"168",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Headset = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M224,200v8a32,32,0,0,1-32,32H136",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M224,128H192a16,16,0,0,0-16,16v40a16,16,0,0,0,16,16h32V128a96,96,0,1,0-192,0v56a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16V144a16,16,0,0,0-16-16H32",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Disc = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"128",cy,"128",r,"32",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"224",y1,"128",x2,"160",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"195.88",y1,"60.12",x2,"150.63",y2,"105.37",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const BookmarksSimple = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M164,228l-56-40L52,228V76a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M92,28H196a8,8,0,0,1,8,8V188",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ChatCircleSlash = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"48",y1,"40",x2,"208",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M63.42,57a96,96,0,0,0-18.53,119.1h0L32.42,213.46a8,8,0,0,0,10.12,10.12l37.39-12.47h0A96,96,0,0,0,192.58,199",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M216.32,165.69A96.07,96.07,0,0,0,98.87,36.5",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const TreeEvergreen = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(pl,ps,"128 16 48 120 88 120 32 192 224 192 168 120 208 120 128 16",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"192",x2,"128",y2,"240",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const MagicWand = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"216",y1,"128",x2,"216",y2,"176",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"192",y1,"152",x2,"240",y2,"152",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"80",y1,"40",x2,"80",y2,"88",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"56",y1,"64",x2,"104",y2,"64",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"168",y1,"184",x2,"168",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"152",y1,"200",x2,"184",y2,"200",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"144",y1,"80",x2,"176",y2,"112",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"21.49",y,"105.37",w,"213.02",h,"45.25",rx,"8",t,"translate(-53.02 128) rotate(-45)",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ArrowSquareDownRight = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"40",y,"40",w,"176",h,"176",rx,"8",t,"translate(256 0) rotate(90)",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"160",y1,"160",x2,"96",y2,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"160 112 160 160 112 160",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const AsteriskSimple = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"128",y1,"40",x2,"128",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"48",y1,"96",x2,"128",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"72",y1,"200",x2,"128",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"184",y1,"200",x2,"128",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"208",y1,"96",x2,"128",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Files = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M164,224H56a8,8,0,0,1-8-8V76a8,8,0,0,1,8-8h76l40,40V216A8,8,0,0,1,164,224Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M84,68V36a8,8,0,0,1,8-8h80l40,40V176a8,8,0,0,1-8,8H172",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"88",y1,"144",x2,"132",y2,"144",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"88",y1,"184",x2,"132",y2,"184",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CaretCircleDoubleDown = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"160 88 128 120 96 88",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"160 144 128 176 96 144",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Network = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"104",y,"32",w,"48",h,"48",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"40",y,"168",w,"48",h,"48",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"168",y,"168",w,"48",h,"48",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"80",x2,"128",y2,"120",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"192",y1,"120",x2,"192",y2,"168",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"64",y1,"168",x2,"64",y2,"120",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"24",y1,"120",x2,"232",y2,"120",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const SunDim = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"128",y1,"36",x2,"128",y2,"32",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"128",cy,"128",r,"56",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"60",y1,"60",x2,"56",y2,"56",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"60",y1,"196",x2,"56",y2,"200",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"196",y1,"60",x2,"200",y2,"56",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"196",y1,"196",x2,"200",y2,"200",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"36",y1,"128",x2,"32",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"220",x2,"128",y2,"224",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"220",y1,"128",x2,"224",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const FigmaLogo = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"168",cy,"128",r,"32",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M136,96h32a32,32,0,0,0,0-64H136",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M136,32H96a32,32,0,0,0,0,64h40Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M136,96H96a32,32,0,0,0,0,64h40Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M136,160H100a36,36,0,1,0,36,36Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CloudSlash = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"48",y1,"40",x2,"208",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M193.89,200.49A79.66,79.66,0,0,1,160,208H72A56,56,0,1,1,85.92,97.74",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M80,128A79.68,79.68,0,0,1,91.07,87.37",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M119.39,59.06A80,80,0,0,1,224.76,175",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CellSignalFull = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"160",y1,"72",x2,"160",y2,"200",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"200",y1,"32",x2,"200",y2,"200",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"120",y1,"112",x2,"120",y2,"200",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"80",y1,"152",x2,"80",y2,"200",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40",y1,"192",x2,"40",y2,"200",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ShootingStar = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M164,129.66l35.78,21.53a5.46,5.46,0,0,0,8.19-5.86l-9.73-40.19,31.84-26.88A5.38,5.38,0,0,0,227,68.78l-41.79-3.31-16.1-38.14a5.51,5.51,0,0,0-10.12,0l-16.1,38.14-41.79,3.31a5.38,5.38,0,0,0-3.13,9.48l31.84,26.88L120,145.33a5.46,5.46,0,0,0,8.19,5.86Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"75.75",y1,"124.25",x2,"24",y2,"176",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"87.6",y1,"184.4",x2,"40",y2,"232",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"150.04",y1,"193.96",x2,"112",y2,"232",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Monitor = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"32",y,"48",w,"192",h,"144",rx,"16",t,"translate(256 240) rotate(180)",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"160",y1,"228",x2,"96",y2,"228",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ArrowsVertical = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"96 56 128 24 160 56",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"232",x2,"128",y2,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"160 200 128 232 96 200",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CaretLineRight = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"64 48 144 128 64 208",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"184",y1,"48",x2,"184",y2,"208",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Plug = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"144",y1,"64",x2,"184",y2,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"232",y1,"72",x2,"192",y2,"112",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"224",y1,"144",x2,"112",y2,"32",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M212,132l-58.63,58.63a32,32,0,0,1-45.25,0L65.37,147.88a32,32,0,0,1,0-45.25L124,44",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"86.75",y1,"169.25",x2,"32",y2,"224",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const FileCSharp = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"148 32 148 92 208 92",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M208,224V88L152,32H56a8,8,0,0,0-8,8v68",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M68,200.87A22.12,22.12,0,0,1,52,208c-13.26,0-24-12.54-24-28s10.74-28,24-28a22.12,22.12,0,0,1,16,7.13",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"104",y1,"160",x2,"172",y2,"160",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"104",y1,"196",x2,"172",y2,"196",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"120",y1,"144",x2,"120",y2,"212",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"156",y1,"144",x2,"156",y2,"212",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const UserList = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"80",cy,"104",r,"40",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"164",y1,"80",x2,"244",y2,"80",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"164",y1,"128",x2,"244",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"188",y1,"176",x2,"244",y2,"176",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M16,192c7.1-27.6,34.18-48,64-48s56.9,20.4,64,48",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ChatCenteredSlash = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"48",y1,"40",x2,"208",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M55.27,48H40a8,8,0,0,0-8,8V184a8,8,0,0,0,8,8h65.07l16,28a8,8,0,0,0,13.9,0l16-28h35.25",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M224,174.14V56a8,8,0,0,0-8-8H109.33",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const BluetoothSlash = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"64",y1,"176",x2,"128",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"56",y1,"40",x2,"216",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"184.65 181.51 128 224 128 128 153.14 146.86",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"128 59.74 128 32 192 80 164.9 100.33",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Shuffle = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M32,72H55.06a64,64,0,0,1,52.08,26.8l41.72,58.4A64,64,0,0,0,200.94,184H232",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"208 48 232 72 208 96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"208 160 232 184 208 208",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M152.77,93.86A64,64,0,0,1,200.94,72H232",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M32,184H55.06a64,64,0,0,0,48.17-21.86",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const BoxArrowUp = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M208,216H48a8,8,0,0,1-8-8V72L56,40H200l16,32V208A8,8,0,0,1,208,216Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40",y1,"76",x2,"216",y2,"76",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"112",x2,"128",y2,"180",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"96 144 128 112 160 144",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const AlignTopSimple = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"56",y1,"32",x2,"200",y2,"32",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"88",y,"72",w,"80",h,"160",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const UserCircle = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"128",cy,"120",r,"40",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M63.8,199.37a72,72,0,0,1,128.4,0",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Chair = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"56",y,"32",w,"144",h,"64",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"40",y,"140",w,"176",h,"40",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"88",y1,"96",x2,"88",y2,"140",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"168",y1,"96",x2,"168",y2,"140",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"188",y1,"180",x2,"188",y2,"224",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"68",y1,"180",x2,"68",y2,"224",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const SpotifyLogo = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M72,122a119,119,0,0,1,112,0",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M88,158a85,85,0,0,1,80,0",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const SmileyWink = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"92",cy,"108",r,"16"),s(l,x1,"152",y1,"108",x2,"176",y2,"108",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M168,152c-8.3,14.35-22.23,24-40,24s-31.7-9.65-40-24",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const SpeakerHifi = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"32",y,"56",w,"192",h,"144",rx,"8",t,"translate(256 0) rotate(90)",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"128",cy,"76",r,"16"),s(c,cx,"128",cy,"152",r,"32",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const BaseballCap = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M32,128a96,96,0,0,1,192,0v56a16,16,0,0,1-25.48,12.88C182.53,185.26,159,176,128,176s-54.53,9.26-70.52,20.88A16,16,0,0,1,32,184Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M32,152a160,160,0,0,1,192,0",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M88.4,124.94C92.57,67.43,128,32,128,32s35.43,35.43,39.6,92.94",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Hockey = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M32,48,165.6,205.18a8,8,0,0,0,6.1,2.82H224a8,8,0,0,0,8-8V168a8,8,0,0,0-8-8H127.2",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"192",y1,"208",x2,"192",y2,"160",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"64",y1,"208",x2,"64",y2,"160",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"224",y1,"48",x2,"162.8",y2,"120",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M101.75,191.82,90.4,205.18A8,8,0,0,1,84.3,208H32a8,8,0,0,1-8-8V168a8,8,0,0,1,8-8H74.7",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const PaperPlaneRight = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"144",y1,"128",x2,"80",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M48.49,221.28A8,8,0,0,0,59.93,231l168-96.09a8,8,0,0,0,0-14l-168-95.85a8,8,0,0,0-11.44,9.67L80,128Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Aperture = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"32",x2,"164.68",y2,"134.7",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"44.86",y1,"80",x2,"152.14",y2,"99.58",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"44.86",y1,"176",x2,"115.46",y2,"92.89",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"224",x2,"91.32",y2,"121.3",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"211.14",y1,"176",x2,"103.86",y2,"156.42",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"211.14",y1,"80",x2,"140.54",y2,"163.11",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const SidebarSimple = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"88",y1,"48",x2,"88",y2,"208",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"32",y,"48",w,"192",h,"160",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ArrowFatLineRight = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(pl,ps,"136 32 232 128 136 224 136 176 80 176 80 80 136 80 136 32",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40",y1,"176",x2,"40",y2,"80",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const NumberSquareEight = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"40",y,"40",w,"176",h,"176",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"128",cy,"100",r,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"128",cy,"152",r,"28",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Octagon = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M164.45,32H91.55a8,8,0,0,0-5.66,2.34L34.34,85.89A8,8,0,0,0,32,91.55v72.9a8,8,0,0,0,2.34,5.66l51.55,51.55A8,8,0,0,0,91.55,224h72.9a8,8,0,0,0,5.66-2.34l51.55-51.55a8,8,0,0,0,2.34-5.66V91.55a8,8,0,0,0-2.34-5.66L170.11,34.34A8,8,0,0,0,164.45,32Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const TextHThree = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M192,112h48l-28,40a28,28,0,1,1-20,47.6",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40",y1,"56",x2,"40",y2,"176",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"144",y1,"116",x2,"40",y2,"116",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"144",y1,"56",x2,"144",y2,"176",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Lighthouse = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"80",y1,"56",x2,"176",y2,"56",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M80,56,64,215.24A8,8,0,0,0,72,224H184a8,8,0,0,0,8-8.76L176,56,133.12,17.85a8,8,0,0,0-10.24,0Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"96",x2,"128",y2,"116",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"220 96 220 116 36 116 36 96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"68.77",y1,"168",x2,"187.23",y2,"168",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const SelectionSlash = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"144",y1,"40",x2,"112",y2,"40",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"112",y1,"216",x2,"144",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M184,40h24a8,8,0,0,1,8,8V72",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"216",y1,"144",x2,"216",y2,"112",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40",y1,"112",x2,"40",y2,"144",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M72,216H48a8,8,0,0,1-8-8V184",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"48",y1,"40",x2,"208",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const PencilCircle = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"176 211.16 176 176 128 72 80 176 80 211.16",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M128,200a24,24,0,0,1,48,0",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M128,224V200a24,24,0,0,0-48,0",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"98.46",y1,"136",x2,"157.54",y2,"136",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const LinkSimpleHorizontalBreak = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M104,176H64a48,48,0,0,1,0-96h40",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M152,80h40a48,48,0,0,1,48,48h0a48,48,0,0,1-48,48H152",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const SupersetProperOf = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M64,208h72a80,80,0,0,0,0-160H64",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const NumberSquareZero = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(e,cx,"128",cy,"128",rx,"36",ry,"48",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"40",y,"40",w,"176",h,"176",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const SuitcaseSimple = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"32",y,"60",w,"192",h,"144",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M168,60V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V60",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"32",y1,"148",x2,"224",y2,"148",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const GooglePlayLogo = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M56,224.14a8,8,0,0,0,12.06,6.77L235.9,134.84a7.75,7.75,0,0,0,0-13.68L68.06,25.09A8,8,0,0,0,56,31.86Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"58.33",y1,"26.33",x2,"192",y2,"160",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"58.33",y1,"229.67",x2,"191.98",y2,"96.02",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const SmileySticker = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M156.22,219.79a95.9,95.9,0,1,1,63.57-63.58Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"92",cy,"108",r,"16"),s(c,cx,"164",cy,"108",r,"16"),s(p,d,"M168,152c-8.3,14.35-22.23,24-40,24s-31.7-9.65-40-24",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const XCircle = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"160",y1,"96",x2,"96",y2,"160",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"96",y1,"96",x2,"160",y2,"160",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const PlusSquare = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"40",y,"40",w,"176",h,"176",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"88",y1,"128",x2,"168",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"88",x2,"128",y2,"168",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Tornado = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"60",y1,"44",x2,"220",y2,"44",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"44",y1,"88",x2,"164",y2,"88",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"76",y1,"132",x2,"164",y2,"132",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"132",y1,"176",x2,"172",y2,"176",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"124",y1,"220",x2,"140",y2,"220",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const FlagPennant = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"56 168 240 104 56 40 56 216",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Control = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"56 120 128 48 200 120",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Coin = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(e,cx,"128",cy,"104",rx,"104",ry,"48",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"152",x2,"128",y2,"200",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M24,104v48c0,24,40,48,104,48s104-24,104-48V104",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"192",y1,"142.11",x2,"192",y2,"190.11",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"64",y1,"142.11",x2,"64",y2,"190.11",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Synagogue = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M196,64h0a20,20,0,0,1,20,20V216a0,0,0,0,1,0,0H176a0,0,0,0,1,0,0V84A20,20,0,0,1,196,64Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"176",y1,"112",x2,"216",y2,"112",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M60,64h0A20,20,0,0,1,80,84V216a0,0,0,0,1,0,0H40a0,0,0,0,1,0,0V84A20,20,0,0,1,60,64Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40",y1,"112",x2,"80",y2,"112",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"60",y1,"64",x2,"60",y2,"32",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"196",y1,"64",x2,"196",y2,"32",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"104",x2,"128",y2,"72",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"176 131.43 128 104 80 131.43",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"80",y1,"216",x2,"176",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"216",x2,"128",y2,"172",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CassetteTape = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"24",y,"56",w,"208",h,"144",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M64,200l21.6-28.8A8,8,0,0,1,92,168h72a8,8,0,0,1,6.4,3.2L192,200Z"),s(c,cx,"174",cy,"118",r,"22",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"82",cy,"118",r,"22",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"82",y1,"96",x2,"174",y2,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"174",y1,"140",x2,"82",y2,"140",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ArrowSquareUpRight = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"40",y,"40",w,"176",h,"176",rx,"8",t,"translate(0 256) rotate(-90)",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"160",y1,"96",x2,"96",y2,"160",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"112 96 160 96 160 144",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const RepeatOnce = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"200 88 224 64 200 40",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M32,128A64,64,0,0,1,96,64H224",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"56 168 32 192 56 216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M224,128a64,64,0,0,1-64,64H32",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"120 111.99 136 104 136 152",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const StarFour = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M159.82,159.82l-24.34,66.94a8,8,0,0,1-15,0L96.18,159.82,29.24,135.48a8,8,0,0,1,0-15L96.18,96.18l24.34-66.94a8,8,0,0,1,15,0l24.34,66.94,66.94,24.34a8,8,0,0,1,0,15Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const PersonSimpleSnowboard = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M29.82,182l153.6,45.21A19.23,19.23,0,0,0,208,208.61h0A19.37,19.37,0,0,0,194.18,190L40.58,144.79A19.23,19.23,0,0,0,16,163.39h0A19.37,19.37,0,0,0,29.82,182Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"168",cy,"48",r,"20",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"80",y1,"80",x2,"216",y2,"120",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"109.71 127.43 160 142 138.74 173.69",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"131.28",y1,"95.08",x2,"88.7",y2,"158.95",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const NumberCircleTwo = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M152,176H104l43.17-57.56A24,24,0,1,0,105.37,96",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CaretCircleDoubleLeft = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"168 160 136 128 168 96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"112 160 80 128 112 96",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CurrencyKzt = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"56",y1,"100",x2,"200",y2,"100",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"56",y1,"52",x2,"200",y2,"52",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"100",x2,"128",y2,"212",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const MusicNote = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"88",cy,"184",r,"40",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"128 184 128 40 208 64 208 112 128 88",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const WindowsLogo = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(pl,ps,"92 108 92 61.09 32 72 32 108 92 108",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(pl,ps,"208 108 208 40 132 53.82 132 108 208 108",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(pl,ps,"92 148 92 194.91 32 184 32 148 92 148",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(pl,ps,"208 148 208 216 132 202.18 132 148 208 148",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Onigiri = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M88,224V168a8,8,0,0,1,8-8h64a8,8,0,0,1,8,8v56",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M31.29,150.69C11.45,182.66,34.44,224,72.08,224H183.92c37.64,0,60.63-41.34,40.79-73.31l-55.93-96C150,24.44,106,24.44,87.22,54.69Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Wheelchair = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"104 68 104 136 192 136 224 200 244 192",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"104",cy,"46",r,"22",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M168,96H112a64,64,0,1,0,57.57,92",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const NumberFour = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"184 168 64 168 160 48 160 208",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Bomb = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M88,64h48a8,8,0,0,1,8,8V86.66a80,80,0,1,1-64,0V72A8,8,0,0,1,88,64Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M112,64s0-40,32-40,36,56,68,56,32-40,32-40",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M100,198.17A40,40,0,0,1,72,160",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Sock = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M200,32V145.37a16,16,0,0,1-4.69,11.32l-68.4,68.4a50.92,50.92,0,0,1-72,0h0a50.92,50.92,0,0,1,0-72L96,112V32a8,8,0,0,1,8-8h88A8,8,0,0,1,200,32Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"200",y1,"64",x2,"96",y2,"64",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M200,112a48,48,0,0,0-37.71,77.71",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ProjectorScreenChart = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"92",y1,"128",x2,"92",y2,"136",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"124",x2,"128",y2,"136",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"164",y1,"120",x2,"164",y2,"136",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"48",y1,"176",x2,"48",y2,"80",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"208",y1,"80",x2,"208",y2,"176",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"32",y,"40",w,"192",h,"40",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"176",x2,"128",y2,"232",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"128",cy,"232",r,"24"),s(l,x1,"32",y1,"176",x2,"224",y2,"176",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ArrowElbowUpLeft = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"96 128 48 80 96 32",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"192 224 192 80 48 80",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Park = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"32",y1,"128",x2,"116",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"24",y1,"200",x2,"232",y2,"200",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"44",y1,"128",x2,"44",y2,"200",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"104",y1,"128",x2,"104",y2,"200",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"32",y1,"164",x2,"116",y2,"164",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"192",y1,"200",x2,"192",y2,"160",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(pl,ps,"192 32 224 160 160 160 192 32",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"116",cy,"68",r,"20",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const PushPinSimpleSlash = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"128",y1,"176",x2,"128",y2,"240",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"48",y1,"40",x2,"208",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"171.64",y1,"176",x2,"40",y2,"176",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"56",y1,"176",x2,"74.8",y2,"69.48",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"102.06",y1,"40",x2,"192",y2,"40",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"176",y1,"40",x2,"193.81",y2,"140.93",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ChatDots = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"104",cy,"128",r,"16"),s(c,cx,"152",cy,"128",r,"16"),s(p,d,"M45.15,230.11A8,8,0,0,1,32,224V64a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V192a8,8,0,0,1-8,8H80Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const BracketsAngle = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"80 40 24 128 80 216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"176 40 232 128 176 216",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CodesandboxLogo = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M131.84,25l88,48.18a8,8,0,0,1,4.16,7v95.64a8,8,0,0,1-4.16,7l-88,48.18a8,8,0,0,1-7.68,0l-88-48.18a8,8,0,0,1-4.16-7V80.18a8,8,0,0,1,4.16-7l88-48.18A8,8,0,0,1,131.84,25Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"128",x2,"128",y2,"232",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"32.03 125.73 80 152 80 206.84",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"224 125.72 176 152 176 206.84",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"83.14 47.44 128 72 172.86 47.44",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"33.14 76.06 128 128 222.86 76.06",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const MessengerLogo = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"80 144 112 112 144 144 176 112",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M79.93,211.11a96,96,0,1,0-35-35h0L32.42,213.46a8,8,0,0,0,10.12,10.12l37.39-12.47Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const BellZ = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"112 92 144 92 112 140 144 140",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M96,184v8a32,32,0,0,0,64,0v-8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M56,104a72,72,0,0,1,144,0c0,35.82,8.3,56.6,14.9,68A8,8,0,0,1,208,184H48a8,8,0,0,1-6.88-12C47.71,160.6,56,139.81,56,104Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Database = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(e,cx,"128",cy,"80",rx,"88",ry,"48",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M40,80v48c0,26.51,39.4,48,88,48s88-21.49,88-48V80",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M40,128v48c0,26.51,39.4,48,88,48s88-21.49,88-48V128",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const GoogleCardboardLogo = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M24,192V64a8,8,0,0,1,8-8H224a8,8,0,0,1,8,8V192a8,8,0,0,1-8,8H160l-26.34-26.34a8,8,0,0,0-11.32,0L96,200H32A8,8,0,0,1,24,192Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"82",cy,"126",r,"22",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"174",cy,"126",r,"22",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Train = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"48",y1,"128",x2,"208",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"48",y1,"72",x2,"208",y2,"72",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"96",y1,"208",x2,"72",y2,"240",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"160",y1,"208",x2,"184",y2,"240",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"48",y,"32",w,"160",h,"176",rx,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"72",x2,"128",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"88",cy,"168",r,"16"),s(c,cx,"168",cy,"168",r,"16"))

export const NumberSquareSix = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"40",y,"40",w,"176",h,"176",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"128",cy,"148",r,"28",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"103.75",y1,"134",x2,"136",y2,"80",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CrosshairSimple = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"32",x2,"128",y2,"72",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"184",x2,"128",y2,"224",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"32",y1,"128",x2,"72",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"184",y1,"128",x2,"224",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const UserSquare = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"120",r,"40",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"40",y,"40",w,"176",h,"176",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M57.78,216a72,72,0,0,1,140.44,0",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const HourglassHigh = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M128,128,67.2,82.4A8,8,0,0,1,64,76V40a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8V75.64A8,8,0,0,1,188.82,82L128,128h0",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M128,128,67.2,173.6A8,8,0,0,0,64,180v36a8,8,0,0,0,8,8H184a8,8,0,0,0,8-8V180.36a8,8,0,0,0-3.18-6.38L128,128h0",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"64",y1,"72",x2,"192",y2,"72",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const BookmarkSimple = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M192,224l-64-40L64,224V48a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CaretCircleDoubleUp = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"96 168 128 136 160 168",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"96 112 128 80 160 112",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const FingerprintSimple = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M159.73,92A48,48,0,0,0,80,128a143.41,143.41,0,0,1-18,69.73",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M176,132a239.17,239.17,0,0,1-17.91,87.21",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M108.68,212q-2.22,4.56-4.68,9",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M128,128a192.72,192.72,0,0,1-5.07,44",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M100,36.15A96.07,96.07,0,0,1,224,128a288.93,288.93,0,0,1-7.14,64",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M23.28,168A95.66,95.66,0,0,0,32,128,95.71,95.71,0,0,1,60,60.23",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Note = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"96",y1,"108",x2,"160",y2,"108",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"96",y1,"148",x2,"116",y2,"148",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M156.69,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8V156.69a8,8,0,0,1-2.34,5.65l-51.32,51.32A8,8,0,0,1,156.69,216Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"215.28 155.99 156 155.99 156 215.27",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ArrowLineRight = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"32",y1,"128",x2,"176",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"104 56 176 128 104 200",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"216",y1,"40",x2,"216",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Jar = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"48",y,"60",w,"160",h,"172",rx,"32",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M80,60V32a8,8,0,0,1,8-8h80a8,8,0,0,1,8,8V60",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"60",x2,"128",y2,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Popcorn = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M32,80,62.55,209.83A8,8,0,0,0,70.34,216H185.66a8,8,0,0,0,7.79-6.17L224,80,168,96,131,81.19a8,8,0,0,0-5.94,0L88,96Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"88",y1,"96",x2,"104",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"168",y1,"96",x2,"152",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M216,82.3a36,36,0,0,0-52.82-30.11,36,36,0,0,0-70.28,0A36,36,0,0,0,40,82.29",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const HandSoap = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M80,108h96a32,32,0,0,1,32,32v76a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V140A32,32,0,0,1,80,108Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M80,108V92a24,24,0,0,1,24-24h48a24,24,0,0,1,24,24v16",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M184,40a16,16,0,0,0-16-16H104",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"24",x2,"128",y2,"68",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const RowsPlusBottom = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"40",y,"124",w,"176",h,"40",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"40",y,"48",w,"176",h,"40",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"108",y1,"220",x2,"148",y2,"220",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"200",x2,"128",y2,"240",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const TextH = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"56",y1,"56",x2,"56",y2,"200",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"200",y1,"128",x2,"56",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"200",y1,"56",x2,"200",y2,"200",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Orange = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"152",r,"80",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M128,72h0a56,56,0,0,1,56-56h8a56,56,0,0,1-56,56Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M128,72h0A56,56,0,0,0,72,16H64",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M166.17,164A40.11,40.11,0,0,1,140,190.17",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Gif = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"136",y1,"72",x2,"136",y2,"184",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"232 72 176 72 176 184",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"224",y1,"128",x2,"176",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M72,128H96v24a32,32,0,0,1-64,0V104A32,32,0,0,1,64,72c14.91,0,28.45,10.2,32,24",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const FolderLock = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"152",y,"164",w,"72",h,"44",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M168,164V148a20,20,0,0,1,40,0v16",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M104.56,208H39.38A7.4,7.4,0,0,1,32,200.62V80H216a8,8,0,0,1,8,8v4",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M98.39,46.69,128,80H32V52a8,8,0,0,1,8-8H92.41A8,8,0,0,1,98.39,46.69Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Gps = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"128",y1,"240",x2,"128",y2,"208",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"128",cy,"128",r,"80",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"16",x2,"128",y2,"48",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"16",y1,"128",x2,"48",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"240",y1,"128",x2,"208",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Detective = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"12",y1,"116",x2,"244",y2,"116",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"76",cy,"180",r,"28",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"180",cy,"180",r,"28",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"104",y1,"180",x2,"152",y2,"180",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M42.9,116l47-64.71a8,8,0,0,1,12.7-.29l12.94,15a16,16,0,0,0,24.94,0l12.94-15a8,8,0,0,1,12.7.29l47,64.71",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Planet = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"84",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M180,62.06c29.49-8.58,51.79-8.35,58.16,2.63,11,18.93-29.45,62.61-90.32,97.58s-119.1,48-130.08,29c-6.4-11,4.65-30.44,27-51.64",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const NumberSquareOne = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"40",y,"40",w,"176",h,"176",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"132 176 132 80 108 96",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const DeviceTablet = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"32",y,"48",w,"192",h,"160",rx,"16",t,"translate(256) rotate(90)",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"48",y1,"72",x2,"208",y2,"72",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"48",y1,"184",x2,"208",y2,"184",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Grains = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M128,224h0a80,80,0,0,1-80-80V120h0a80,80,0,0,1,80,80Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M208,120h0a0,0,0,0,1,0,0v24a80,80,0,0,1-80,80h0a0,0,0,0,1,0,0V200a80,80,0,0,1,80-80Z",t,"translate(336 344) rotate(180)",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M208,120V64h0a80,80,0,0,0-80,80v56",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M48,120V64h0a80,80,0,0,1,80,80v56",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M84.05,72.57C95.62,40.19,128,24,128,24S160.38,40.19,172,72.58",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ExclamationMark = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"200",r,"20"),s(l,x1,"128",y1,"48",x2,"128",y2,"148",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const VectorThree = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"232 136 120 136 120 24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"120",y1,"136",x2,"48",y2,"208",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"200 104 232 136 200 168",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"88 56 120 24 152 56",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"48 160 48 208 96 208",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const UserCircleDashed = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M104,35a95.51,95.51,0,0,1,48,0",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M35.49,102.3a95.54,95.54,0,0,1,24-41.56",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M152,221a95.51,95.51,0,0,1-48,0",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M196.51,60.73a95.54,95.54,0,0,1,24,41.58",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"128",cy,"120",r,"40",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M220.52,153.7a96,96,0,0,1-28.32,45.67,72,72,0,0,0-128.4,0A96,96,0,0,1,35.48,153.7",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const XSquare = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"40",y,"40",w,"176",h,"176",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"160",y1,"96",x2,"96",y2,"160",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"96",y1,"96",x2,"160",y2,"160",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const LockLaminatedOpen = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"40",y1,"132",x2,"216",y2,"132",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40",y1,"172",x2,"216",y2,"172",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"40",y,"88",w,"176",h,"128",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M88,88V56a40,40,0,0,1,40-40c19.35,0,36.29,13.74,40,32",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const HandPalm = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M128,60a20,20,0,0,1,40,0v56",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M88,76V44a20,20,0,0,1,40,0v64",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M128,176a40,40,0,0,1,40-40V116a20,20,0,0,1,40,0v36a80,80,0,0,1-160,0V76a20,20,0,0,1,40,0v40",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const LadderSimple = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"64",y1,"32",x2,"64",y2,"224",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"192",y1,"32",x2,"192",y2,"224",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"64",y1,"72",x2,"192",y2,"72",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"64",y1,"128",x2,"192",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"64",y1,"184",x2,"192",y2,"184",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const TextAlignJustify = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"40",y1,"64",x2,"216",y2,"64",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40",y1,"104",x2,"216",y2,"104",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40",y1,"144",x2,"216",y2,"144",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40",y1,"184",x2,"216",y2,"184",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const OpenAiLogo = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M108,139.55V74.88L148.5,51.5a48,48,0,0,1,66.4,64.08",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M128,151.09,72,118.76V72a48,48,0,0,1,88.69-25.47",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M148,139.55,92,171.88,51.5,148.5A48,48,0,0,1,73.79,59",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M148,116.45v64.67L107.5,204.5a48,48,0,0,1-66.4-64.08",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M128,104.91l56,32.33V184a48,48,0,0,1-88.69,25.47",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M108,116.45l56-32.33,40.5,23.38a48,48,0,0,1-22.29,89.55",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Envelope = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"224 56 128 144 32 56",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56a0,0,0,0,1,0,0Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"110.55",y1,"128",x2,"34.47",y2,"197.74",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"221.53",y1,"197.74",x2,"145.45",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const SpeakerSimpleLow = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M88,168H40a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H88l72-56V224Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"200",y1,"104",x2,"200",y2,"152",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const AlignCenterVertical = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"224",y1,"128",x2,"204",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"52",y1,"128",x2,"32",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"148",y1,"128",x2,"108",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"112",y,"100",w,"128",h,"56",rx,"8",t,"translate(304 -48) rotate(90)",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"52",y,"40",w,"56",h,"176",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Pentagon = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M35.27,93.93a8,8,0,0,0-2.88,8.9l32,107.62A8,8,0,0,0,72,216H184a8,8,0,0,0,7.62-5.55l32-107.62a8,8,0,0,0-2.88-8.9l-88-68.38a8,8,0,0,0-9.46,0Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CaretCircleDoubleRight = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"88 160 120 128 88 96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"144 160 176 128 144 96",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Towel = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"56",y1,"184",x2,"176",y2,"184",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M216,148V52.48c0-10.85-8.43-20.08-19.27-20.47A20,20,0,0,0,176,52V216a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V48A16,16,0,0,1,72,32H196",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ListHeart = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"40",y1,"192",x2,"112",y2,"192",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40",y1,"64",x2,"216",y2,"64",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40",y1,"128",x2,"96",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M192,144a24,24,0,0,1,48,0c0,32-48,56-48,56s-48-24-48-56a24,24,0,0,1,48,0Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const HandPeace = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M72,131.6a20,20,0,0,1,8-39.19l20.81,4a20,20,0,1,1-8,39.19Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M56,152.72V160a72,72,0,0,0,72.55,72c39.7-.3,71.45-33.2,71.45-72.9v-3.34a48,48,0,0,0-38.59-47.07L140,104.41a20,20,0,0,0-8,39.19l15.37,3.07A28,28,0,0,0,152,179.6",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M72,172.32a20,20,0,0,1,8-39.19l10,2a20,20,0,0,1-8,39.2Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M101.37,96.53,88.69,49.18a20,20,0,1,1,38.63-10.35l17.85,66.61",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M150.54,106.51l18.14-67.68a20,20,0,0,1,38.63,10.35l-19.88,74.19",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const GraduationCap = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(pl,ps,"12 96 128 32 244 96 128 160 12 96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"180 240 180 124.69 128 96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M216,111.45v54.84a8,8,0,0,1-2,5.31c-11.3,12.59-38.9,36.4-86,36.4s-74.68-23.81-86-36.4a8,8,0,0,1-2-5.31V111.45",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const SubsetOf = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"200",y1,"208",x2,"48",y2,"208",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M200,56H104a56,56,0,0,0,0,112h96",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const PlusCircle = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"88",y1,"128",x2,"168",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"88",x2,"128",y2,"168",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Bank = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(pl,ps,"24 96 232 96 128 32 24 96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"56",y1,"96",x2,"56",y2,"168",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"104",y1,"96",x2,"104",y2,"168",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"152",y1,"96",x2,"152",y2,"168",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"200",y1,"96",x2,"200",y2,"168",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"32",y1,"168",x2,"224",y2,"168",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"16",y1,"208",x2,"240",y2,"208",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const DeviceTabletCamera = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"32",y,"48",w,"192",h,"160",rx,"16",t,"translate(256) rotate(90)",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"128",cy,"76",r,"16"))

export const Export = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M180,104h20a8,8,0,0,1,8,8v96a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V112a8,8,0,0,1,8-8H76",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"88 64 128 24 168 64",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"24",x2,"128",y2,"136",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const BellRinging = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M96,188v8a32,32,0,0,0,64,0v-8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M184,24a102.71,102.71,0,0,1,36.29,40",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M35.71,64A102.71,102.71,0,0,1,72,24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M52,188a8,8,0,0,1-6.38-12.81C53.85,164.49,63.84,144.6,64,112a64,64,0,0,1,128,0c.16,32.6,10.15,52.49,18.35,63.19A8,8,0,0,1,204,188Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Speedometer = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"128",y1,"152",x2,"216",y2,"64",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M64,152a64,64,0,0,1,64-64,65.75,65.75,0,0,1,7.05.38",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M224.19,112.38a104.48,104.48,0,0,1,1.91,74.25,8,8,0,0,1-7.57,5.37H37.46a8.05,8.05,0,0,1-7.57-5.41A104.06,104.06,0,0,1,24,151.19C24.44,94,71.73,47.49,129,48a103.77,103.77,0,0,1,38.66,7.81",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ArrowLineDownRight = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"40",y1,"40",x2,"216",y2,"40",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"80",y1,"88",x2,"192",y2,"200",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"192 104 192 200 96 200",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Cards = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"28",y,"84",w,"160",h,"128",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M64,44H220a8,8,0,0,1,8,8V176",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ArrowCircleUp = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"96 120 128 88 160 120",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"168",x2,"128",y2,"88",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const SignOut = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"112 40 48 40 48 216 112 216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"112",y1,"128",x2,"224",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"184 88 224 128 184 168",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const SpeakerX = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M80,168H32a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H80l72-56V224Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"240",y1,"104",x2,"192",y2,"152",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"240",y1,"152",x2,"192",y2,"104",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"79.98",y1,"88",x2,"79.98",y2,"168",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const TextAlignLeft = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"40",y1,"64",x2,"216",y2,"64",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40",y1,"104",x2,"168",y2,"104",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40",y1,"144",x2,"216",y2,"144",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40",y1,"184",x2,"168",y2,"184",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CaretCircleUpDown = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"96 104 128 72 160 104",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"160 152 128 184 96 152",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const PencilSlash = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"136",y1,"64",x2,"192",y2,"120",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"48",y1,"40",x2,"208",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M154.67,157.33,98.34,213.66A8,8,0,0,1,92.69,216H48a8,8,0,0,1-8-8V163.31a8,8,0,0,1,2.34-5.65l59-59",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"128",x2,"72",y2,"184",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M129.65,70.35l36-36a8,8,0,0,1,11.31,0L221.66,79a8,8,0,0,1,0,11.31L183,129",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"164",y1,"92",x2,"156.32",y2,"99.68",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"44",y1,"156",x2,"100",y2,"212",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const TestTube = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M94.77,213.23a36.77,36.77,0,0,1-52,0h0a36.77,36.77,0,0,1,0-52L172,32l60,60-24,8Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M72.82,131.18c9.37-3.65,25.78-6.36,47.18,4.82s37.81,8.47,47.18,4.82",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ArrowSquareOut = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"136",y1,"120",x2,"216",y2,"40",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"216 104 215.99 40.01 152 40",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M184,140v68a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8h68",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const BatteryFull = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"12",y,"64",w,"200",h,"128",rx,"16",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"172",y1,"104",x2,"172",y2,"152",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"132",y1,"104",x2,"132",y2,"152",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"92",y1,"104",x2,"92",y2,"152",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"52",y1,"104",x2,"52",y2,"152",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"244",y1,"104",x2,"244",y2,"152",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Pipe = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M112,164V144a32,32,0,0,1,32-32h20",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M164,48H144a96,96,0,0,0-96,96v20",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"164",y,"40",w,"40",h,"80",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"40",y,"164",w,"80",h,"40",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"112",y1,"204",x2,"112",y2,"232",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"48",y1,"204",x2,"48",y2,"232",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"232",y1,"48",x2,"204",y2,"48",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"232",y1,"112",x2,"204",y2,"112",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Columns = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"-6",y,"102",w,"176",h,"52",rx,"8",t,"translate(210 46) rotate(90)",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"86",y,"102",w,"176",h,"52",rx,"8",t,"translate(302 -46) rotate(90)",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const PersonSimpleSwim = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M40,137.61c72-59.69,104,56.47,176-3.22",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"176",cy,"72",r,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M40,193.61c72-59.69,104,56.47,176-3.22",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"94.53",y1,"121.47",x2,"115.51",y2,"100.49",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M167.61,151.61l-43.49-43.49A96,96,0,0,0,56.24,80H40",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const MicrophoneStage = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"168",cy,"88",r,"64",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"213.25",y1,"133.25",x2,"122.75",y2,"42.75",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M105,99.5,33.55,197a8,8,0,0,0,.79,10.38l14.3,14.3a8,8,0,0,0,10.38.79L156.5,151",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Needle = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M182.63,118.63l24-24a32,32,0,0,0-45.26-45.26l-24,24C128,128,40,216,40,216S128,128,182.63,118.63Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const GitlabLogoSimple = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M175.35,96,195,42.62a3.93,3.93,0,0,1,7.53.38l19.89,76.12a49,49,0,0,1-18.87,52.4l-73.26,51.76a3.91,3.91,0,0,1-4.52,0L52.48,171.52a49,49,0,0,1-18.87-52.4L53.5,43A3.93,3.93,0,0,1,61,42.62L80.65,96Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const NumberSix = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"160",r,"48",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"86.43",y1,"136",x2,"136",y2,"48",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const LetterCircleP = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M104,144h32a28,28,0,0,0,0-56H104v80",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Subway = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M40,208V96a64,64,0,0,1,64-64h48a64,64,0,0,1,64,64V208",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"80",y,"80",w,"96",h,"104",rx,"16",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"80",y1,"144",x2,"176",y2,"144",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"96",y1,"204",x2,"104",y2,"184",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"152",y1,"184",x2,"160",y2,"204",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"152",x2,"128",y2,"184",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const FilmStrip = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"32",y,"48",w,"192",h,"160",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"48",x2,"128",y2,"208",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"32",y1,"88",x2,"224",y2,"88",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"32",y1,"168",x2,"224",y2,"168",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"80",y1,"48",x2,"80",y2,"88",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"176",y1,"48",x2,"176",y2,"88",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"80",y1,"168",x2,"80",y2,"208",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"176",y1,"168",x2,"176",y2,"208",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const MicrosoftExcelLogo = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"156",y1,"96",x2,"208",y2,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"156",y1,"160",x2,"208",y2,"160",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M64,68V40a8,8,0,0,1,8-8H200a8,8,0,0,1,8,8V216a8,8,0,0,1-8,8H72a8,8,0,0,1-8-8V188",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"136",y1,"188",x2,"136",y2,"224",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"136",y1,"32",x2,"136",y2,"68",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"28",y,"68",w,"128",h,"120",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"72",y1,"104",x2,"112",y2,"152",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"112",y1,"104",x2,"72",y2,"152",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Subtitles = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"24",y,"56",w,"208",h,"144",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"60",y1,"128",x2,"76",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"116",y1,"128",x2,"196",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"60",y1,"164",x2,"140",y2,"164",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"196",y1,"164",x2,"180",y2,"164",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ChatCircleDots = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"104",cy,"128",r,"16"),s(c,cx,"152",cy,"128",r,"16"),s(p,d,"M79.93,211.11a96,96,0,1,0-35-35h0L32.42,213.46a8,8,0,0,0,10.12,10.12l37.39-12.47Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const DiceSix = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"40",y,"40",w,"176",h,"176",rx,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"96",cy,"84",r,"16"),s(c,cx,"160",cy,"84",r,"16"),s(c,cx,"96",cy,"128",r,"16"),s(c,cx,"160",cy,"128",r,"16"),s(c,cx,"96",cy,"172",r,"16"),s(c,cx,"160",cy,"172",r,"16"))

export const ArrowSquareRight = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"40",y,"40",w,"176",h,"176",rx,"8",t,"translate(256) rotate(90)",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"88",y1,"128",x2,"168",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"136 96 168 128 136 160",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CaretCircleUp = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"88 144 128 104 168 144",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ArrowsOutLineHorizontal = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"128",y1,"40",x2,"128",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"88",y1,"128",x2,"16",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"48 160 16 128 48 96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"168",y1,"128",x2,"240",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"208 96 240 128 208 160",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const NumberOne = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"96 72 136 48 136 208",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ChatSlash = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"48",y1,"40",x2,"208",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M193.45,200H80L45.15,230.11A8,8,0,0,1,32,224V64a8,8,0,0,1,8-8H62.55",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M116.6,56H216a8,8,0,0,1,8,8V174.14",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ListStar = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"40",y1,"64",x2,"216",y2,"64",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40",y1,"128",x2,"88",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40",y1,"192",x2,"104",y2,"192",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(pl,ps,"184 174.54 213.67 192 205.6 159.41 232 137.61 197.35 134.94 184 104 170.65 134.94 136 137.61 162.4 159.41 154.33 192 184 174.54",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ArrowElbowRight = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"160 80 232 80 232 152",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"24 96 120 192 232 80",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const TextAa = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"144 192 80 56 16 192",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(e,cx,"200",cy,"164",rx,"32",ry,"28",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M232,192V124c0-15.46-14.33-28-32-28-9.56,0-18.14,2.18-24,8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"125.18",y1,"152",x2,"34.82",y2,"152",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const SquareLogo = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"40",y,"40",w,"176",h,"176",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"96",y,"96",w,"64",h,"64",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Gavel = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"50.75",y,"44.69",w,"106.51",h,"38.63",rx,"8",t,"translate(-14.79 92.28) rotate(-45)",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"138.75",y,"132.69",w,"106.51",h,"38.63",rx,"8",t,"translate(-51.24 180.28) rotate(-45)",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"145.66",y1,"49.66",x2,"206.34",y2,"110.34",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"89.66",y1,"105.66",x2,"150.34",y2,"166.34",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M134.14,150.14l-68,68a20,20,0,0,1-28.28-28.28l68-68",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const NumberSquareThree = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"40",y,"40",w,"176",h,"176",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M104,80h48l-28,40a28,28,0,1,1-20,47.6",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const PaypalLogo = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M144,128a48,48,0,0,0,46.56-36.36h0A48,48,0,0,0,144,32H84a8,8,0,0,0-7.76,6.06l-36,144A8,8,0,0,0,48,192H79.51a8,8,0,0,0,7.76-6.06l13-51.88A8,8,0,0,1,108,128Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M87.27,185.94l-7,28.12A8,8,0,0,0,88,224h31.51a8,8,0,0,0,7.76-6.06l9-35.88A8,8,0,0,1,144,176h32a48,48,0,0,0,46.56-36.36h0A48,48,0,0,0,176,80H120a8,8,0,0,0-7.76,6.06l-12,48",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const MagnifyingGlass = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"112",cy,"112",r,"80",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"168.57",y1,"168.57",x2,"224",y2,"224",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CalendarX = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"152",y1,"128",x2,"104",y2,"176",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"152",y1,"176",x2,"104",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"40",y,"40",w,"176",h,"176",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"176",y1,"24",x2,"176",y2,"52",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"80",y1,"24",x2,"80",y2,"52",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40",y1,"88",x2,"216",y2,"88",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const BracketsRound = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M72,40S32,64,32,128s40,88,40,88",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M184,40s40,24,40,88-40,88-40,88",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ArrowFatLineLeft = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(pl,ps,"120 32 24 128 120 224 120 176 176 176 176 80 120 80 120 32",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"216",y1,"176",x2,"216",y2,"80",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CalendarDots = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"40",y,"40",w,"176",h,"176",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"176",y1,"24",x2,"176",y2,"52",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"80",y1,"24",x2,"80",y2,"52",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40",y1,"88",x2,"216",y2,"88",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"128",cy,"128",r,"16"),s(c,cx,"176",cy,"128",r,"16"),s(c,cx,"80",cy,"176",r,"16"),s(c,cx,"128",cy,"176",r,"16"),s(c,cx,"176",cy,"176",r,"16"))

export const DiceOne = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"40",y,"40",w,"176",h,"176",rx,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"128",cy,"128",r,"16"))

export const EarSlash = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"48",y1,"40",x2,"208",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M160,216c-8.07,9.77-18.34,16-32,16a44,44,0,0,1-44-44c0-41.49-36-28-36-84A79.63,79.63,0,0,1,63.34,56.88",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M91.43,87.77A39.76,39.76,0,0,0,88,104",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M169.07,173.18A16,16,0,0,1,144,160a33.16,33.16,0,0,1,2.2-12",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M94.27,31.44A80,80,0,0,1,208,104",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M167.14,111.59A33.15,33.15,0,0,0,168,104a40,40,0,0,0-40-40c-1.33,0-2.65.07-4,.19",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const SmileyXEyes = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"176",y1,"100",x2,"148",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"176",y1,"128",x2,"148",y2,"100",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"108",y1,"100",x2,"80",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"108",y1,"128",x2,"80",y2,"100",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"128",cy,"180",r,"16"))

export const CarSimple = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"16",y1,"112",x2,"240",y2,"112",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M216,208H188a8,8,0,0,1-8-8V176H76v24a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V112L61.89,44.75A8,8,0,0,1,69.2,40H186.8a8,8,0,0,1,7.31,4.75L224,112v88A8,8,0,0,1,216,208Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ChatCircle = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M79.93,211.11a96,96,0,1,0-35-35h0L32.42,213.46a8,8,0,0,0,10.12,10.12l37.39-12.47Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const LinkSimpleBreak = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M112,76.11l30.06-30a48,48,0,0,1,67.88,67.88L179.88,144",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M76.11,112l-30,30.06a48,48,0,0,0,67.88,67.88L144,179.88",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const PhoneDisconnect = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M225.94,95.83c17.29,17.29,18.63,42.29,4,61.12a8,8,0,0,1-9.26,2.47L171.58,142a8,8,0,0,1-4.86-5.8l-6.21-29.74a7.94,7.94,0,0,0-5.14-5.9,84.39,84.39,0,0,0-55.1.13,7.93,7.93,0,0,0-5.12,6l-5.9,29.51A8,8,0,0,1,84.38,142L35.29,159.42A8,8,0,0,1,26,157c-14.6-18.83-13.26-43.83,4-61.12C83.17,42.72,172.83,42.72,225.94,95.83Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40",y1,"200",x2,"216",y2,"200",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Brain = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M72,172H64A48,48,0,0,1,48,78.73V72a40,40,0,0,1,80,0V176",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M184,172h8a48,48,0,0,0,16-93.27V72a40,40,0,0,0-80,0",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M196,116a28,28,0,0,1-28-28V84",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M60,116A28,28,0,0,0,88,88V84",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M152,139.33A40,40,0,1,0,208,176v-6.73",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M104,139.33A40,40,0,1,1,48,176v-6.73",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Ranking = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M32,208V104a8,8,0,0,1,8-8H88",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M88,208V56a8,8,0,0,1,8-8h64a8,8,0,0,1,8,8V208",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M224,208V144a8,8,0,0,0-8-8H168",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"120 100 132 96 132 136",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"16",y1,"208",x2,"240",y2,"208",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const BugBeetle = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"56",y,"40",w,"144",h,"192",rx,"72",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"200",y1,"148",x2,"224",y2,"148",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"32",y1,"148",x2,"56",y2,"148",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"32",y1,"108",x2,"224",y2,"108",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"148",x2,"128",y2,"232",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"200",y1,"32",x2,"174.75",y2,"57.25",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"56",y1,"32",x2,"81.25",y2,"57.25",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"194.35",y1,"188",x2,"224",y2,"188",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"32",y1,"188",x2,"61.65",y2,"188",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Recycle = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"152 232 128 208 152 184",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"194.63 75.19 185.84 107.98 153.06 99.19",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"78.96 140.77 70.16 108 37.39 116.77",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M70.16,108l-44,76A16,16,0,0,0,40,208H88",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M128,208h88a16,16,0,0,0,13.84-24l-23.14-40",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M185.84,108l-44-76a16,16,0,0,0-27.7,0L91,72",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const LockSimpleOpen = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"40",y,"88",w,"176",h,"128",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M88,88V56a40,40,0,0,1,40-40c19.35,0,36.29,13.74,40,32",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const SnapchatLogo = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M167.77,223.44c-12.08,3.09-26.72-7.56-39.77-7.56s-27.69,10.65-39.77,7.56c-12.5-3.2-18.53-22.69-29.57-28.76-11.21-6.17-33.4-2.09-42.66-10.78,0,0,56-20,56-103.93a56,56,0,0,1,112,0c0,83.89,56,103.93,56,103.93-9.26,8.69-31.45,4.61-42.66,10.78C186.3,200.75,180.27,220.24,167.77,223.44Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"66.31",y1,"122.53",x2,"40",y2,"112",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"189.69",y1,"122.53",x2,"216",y2,"112",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const EnvelopeOpen = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M224,96V200a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V96l96-64Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"110.55",y1,"152",x2,"34.47",y2,"205.74",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"221.53",y1,"205.74",x2,"145.45",y2,"152",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"224 96 145.46 152 110.55 152 32 96",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Tilde = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M40,130.42c72-89.55,104,84.71,176-4.84",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Brandy = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M201.77,40A88,88,0,1,1,54.23,40Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"176",x2,"128",y2,"224",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"88",y1,"224",x2,"168",y2,"224",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40",y1,"88",x2,"216",y2,"88",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Radical = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"240 104 240 80 128 80 80 208 32 80",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Image = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"160",cy,"96",r,"16"),s(rt,x,"32",y,"48",w,"192",h,"160",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M147.31,164,173,138.34a8,8,0,0,1,11.31,0L224,178.06",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M32,168.69l54.34-54.35a8,8,0,0,1,11.32,0L191.31,208",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const FileArrowUp = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M200,224H56a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h96l56,56V216A8,8,0,0,1,200,224Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"148 32 148 92 208 92",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"104 148 128 124 152 148",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"184",x2,"128",y2,"124",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Lifebuoy = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"128",cy,"128",r,"40",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"99.72",y1,"99.72",x2,"60.12",y2,"60.12",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"156.28",y1,"99.72",x2,"195.88",y2,"60.12",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"156.28",y1,"156.28",x2,"195.88",y2,"195.88",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"99.72",y1,"156.28",x2,"60.12",y2,"195.88",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const SplitHorizontal = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"104",y1,"48",x2,"104",y2,"208",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"152",y1,"48",x2,"152",y2,"208",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"152",y1,"128",x2,"232",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"24",y1,"128",x2,"104",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"200 96 232 128 200 160",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"56 96 24 128 56 160",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ArrowsOutCardinal = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"128",y1,"160",x2,"128",y2,"232",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"96",x2,"128",y2,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"96 56 128 24 160 56",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"96 200 128 232 160 200",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"96",y1,"128",x2,"24",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"160",y1,"128",x2,"232",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"200 96 232 128 200 160",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"56 96 24 128 56 160",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const GenderNeuter = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"104",r,"72",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"176",x2,"128",y2,"232",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Sticker = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M136,216H88a48,48,0,0,1-48-48V88A48,48,0,0,1,88,40h80a48,48,0,0,1,48,48v48C208,160,160,208,136,216Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M136,216V184a48,48,0,0,1,48-48h32",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const FileDoc = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"148 32 148 92 208 92",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M48,108V40a8,8,0,0,1,8-8h96l56,56v20",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M32,152v56H48a28,28,0,0,0,0-56Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M220,200.87A22.12,22.12,0,0,1,204,208c-13.26,0-24-12.54-24-28s10.74-28,24-28a22.12,22.12,0,0,1,16,7.13",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(e,cx,"128",cy,"180",rx,"24",ry,"28",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const MetaLogo = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M105.11,155.55C90.66,180.34,75.67,200,58.56,200-3.16,200,27.7,56,74,56s77.15,144,123.45,144C259.16,200,228.3,56,182,56c-10.65,0-20.47,7.61-29.86,19.33",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const SecurityCamera = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"244",y1,"144",x2,"244",y2,"192",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"192",y1,"44.69",x2,"60.69",y2,"176",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M165.66,141.66l24,24a8,8,0,0,0,5.65,2.34H244",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M15,158.93A10,10,0,0,0,22,176H60.69l29.65,29.66a8,8,0,0,0,11.32,0l120-120a8,8,0,0,0,0-11.32l-56-56a8,8,0,0,0-11.32,0Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ComputerTower = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"160",y1,"76",x2,"96",y2,"76",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"160",y1,"116",x2,"96",y2,"116",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"32",y,"56",w,"192",h,"144",rx,"8",t,"translate(256 0) rotate(90)",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"128",cy,"184",r,"16"))

export const Camera = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M208,208H48a16,16,0,0,1-16-16V80A16,16,0,0,1,48,64H80L96,40h64l16,24h32a16,16,0,0,1,16,16V192A16,16,0,0,1,208,208Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"128",cy,"132",r,"36",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CircleDashed = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M104,35a95.51,95.51,0,0,1,48,0",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M35.49,102.3a95.54,95.54,0,0,1,24-41.56",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M59.49,195.27a95.54,95.54,0,0,1-24-41.58",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M152,221a95.51,95.51,0,0,1-48,0",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M220.51,153.7a95.54,95.54,0,0,1-24,41.56",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M196.51,60.73a95.54,95.54,0,0,1,24,41.58",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Yarn = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"128",y1,"224",x2,"232",y2,"223.97",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M92.3,217.14A176.3,176.3,0,0,1,214.81,87",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M57.34,193A216.52,216.52,0,0,1,188.59,53.53",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M131.8,223.93A136.3,136.3,0,0,1,224,126",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M32.31,120.25a135.07,135.07,0,0,1,53,14.33",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M44.19,81.15a175,175,0,0,1,67.17,22",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M77.12,46.58A215,215,0,0,1,144,76.37",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const MouseScroll = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"56",y,"24",w,"144",h,"208",rx,"56",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"152 88 128 64 104 88",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"152 168 128 192 104 168",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"64",x2,"128",y2,"192",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ScanSmiley = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"188 40 216 40 216 68",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"188 216 216 216 216 188",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"68 216 40 216 40 188",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"68 40 40 40 40 68",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"128",cy,"128",r,"68",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"104",cy,"120",r,"16"),s(c,cx,"152",cy,"120",r,"16"))

export const SquareSplitVertical = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"48",y,"48",w,"160",h,"160",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"48",y1,"128",x2,"208",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ArrowsOut = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"160 48 208 48 208 96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"152",y1,"104",x2,"208",y2,"48",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"96 208 48 208 48 160",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"104",y1,"152",x2,"48",y2,"208",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"208 160 208 208 160 208",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"152",y1,"152",x2,"208",y2,"208",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"48 96 48 48 96 48",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"104",y1,"104",x2,"48",y2,"48",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const DropSimple = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M208,144c0-72-80-128-80-128S48,72,48,144a80,80,0,0,0,160,0Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const QuestionMark = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M128,156V144c30.93,0,56-21.49,56-48s-25.07-48-56-48S72,69.49,72,96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"128",cy,"208",r,"20"))

export const CornersIn = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"208 96 160 96 160 48",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"48 160 96 160 96 208",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"160 208 160 160 208 160",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"96 48 96 96 48 96",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const AlignLeft = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"40",y1,"40",x2,"40",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"80",y,"56",w,"104",h,"52",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"80",y,"148",w,"144",h,"52",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const MouseLeftClick = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"56",y,"24",w,"144",h,"208",rx,"56",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"112",x2,"128",y2,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"56",y1,"112",x2,"200",y2,"112",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"66.86",y1,"46.86",x2,"128",y2,"108",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Meteor = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"96",cy,"160",r,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"168",y1,"176",x2,"216",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"160",y1,"128",x2,"180",y2,"108",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"208",y1,"80",x2,"224",y2,"64",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"96",x2,"200",y2,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M141.25,205.25a64,64,0,1,1-90.5-90.5L133.49,32",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const TShirt = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M192,120h26.32a7.77,7.77,0,0,0,7-4.42l17.9-36.81a8.12,8.12,0,0,0-3.1-10.52L192,40",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M64,120H37.68a7.77,7.77,0,0,1-7-4.42L12.82,78.77a8.12,8.12,0,0,1,3.1-10.52L64,40",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M160,40a32,32,0,0,1-64,0H64V208a8,8,0,0,0,8,8H184a8,8,0,0,0,8-8V40Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const MathOperations = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"40",y1,"72",x2,"104",y2,"72",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"72",y1,"152",x2,"72",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40",y1,"184",x2,"104",y2,"184",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"152",y1,"164",x2,"216",y2,"164",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"152",y1,"204",x2,"216",y2,"204",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"160",y1,"48",x2,"208",y2,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"208",y1,"48",x2,"160",y2,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const SortAscending = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"48",y1,"128",x2,"116",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"48",y1,"64",x2,"180",y2,"64",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"48",y1,"192",x2,"100",y2,"192",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"144 168 184 208 224 168",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"184",y1,"208",x2,"184",y2,"112",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ArrowFatRight = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M136,32l96,96-96,96V176H48a8,8,0,0,1-8-8V88a8,8,0,0,1,8-8h88Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Folders = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M196,116v88.89a7.11,7.11,0,0,1-7.11,7.11H36a8,8,0,0,1-8-8V92a8,8,0,0,1,8-8H81.33a8,8,0,0,1,4.8,1.6L116,108h72A8,8,0,0,1,196,116Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M68,84V52a8,8,0,0,1,8-8h45.33a8,8,0,0,1,4.8,1.6L156,68h72a8,8,0,0,1,8,8v88.89a7.11,7.11,0,0,1-7.11,7.11H196",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const WifiLow = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"204",r,"16"),s(p,d,"M168,165a68,68,0,0,0-80,0",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const FolderSimplePlus = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M224,88V200.89a7.11,7.11,0,0,1-7.11,7.11H40a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H93.33a8,8,0,0,1,4.8,1.6L128,80h88A8,8,0,0,1,224,88Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"104",y1,"144",x2,"152",y2,"144",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"120",x2,"128",y2,"168",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const DropHalf = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M208,144c0-72-80-128-80-128S48,72,48,144a80,80,0,0,0,160,0Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"224",x2,"128",y2,"16",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"132",x2,"207.27",y2,"132",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"92",x2,"194.69",y2,"92",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"172",x2,"202.96",y2,"172",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Radioactive = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"16"),s(p,d,"M105.77,90l-22-38a8,8,0,0,0-11.55-2.54A95.94,95.94,0,0,0,32,119.14,8.1,8.1,0,0,0,40,128H84",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M150.23,90l22-38a8,8,0,0,1,11.55-2.54A95.94,95.94,0,0,1,224,119.14a8.1,8.1,0,0,1-8,8.86H172",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M150,166.11l21.83,37.8a8,8,0,0,1-3.56,11.26,96.24,96.24,0,0,1-80.54,0,8,8,0,0,1-3.56-11.26L106,166.11",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const FileCsv = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"148 32 148 92 208 92",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M48,108V40a8,8,0,0,1,8-8h96l56,56v20",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M76,200.87A22.12,22.12,0,0,1,60,208c-13.26,0-24-12.54-24-28s10.74-28,24-28a22.12,22.12,0,0,1,16,7.13",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M139.9,153.6s-29.43-7.78-31.8,11,38.43,10.12,35.78,30.72c-2.47,19.16-31.78,11-31.78,11",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"172 152 192 208 212 152",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ProjectorScreen = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"48",y1,"176",x2,"48",y2,"80",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"208",y1,"80",x2,"208",y2,"176",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"32",y,"40",w,"192",h,"40",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"176",x2,"128",y2,"232",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"128",cy,"232",r,"24"),s(l,x1,"32",y1,"176",x2,"224",y2,"176",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const TreeView = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"56",y,"24",w,"48",h,"48",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"168",y,"96",w,"48",h,"48",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"168",y,"184",w,"48",h,"48",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"80",y1,"120",x2,"168",y2,"120",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M80,72V192a16,16,0,0,0,16,16h72",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Bathtub = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"72",y1,"192",x2,"72",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"184",y1,"192",x2,"184",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"136",y,"96",w,"64",h,"48",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M200,104h40v40a48,48,0,0,1-48,48H64a48,48,0,0,1-48-48V104H136",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M56,104V52A20,20,0,0,1,76,32,20.44,20.44,0,0,1,96,48",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Check = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"40 144 96 200 224 72",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const MusicNotesPlus = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"200",y1,"24",x2,"200",y2,"72",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"224",y1,"48",x2,"176",y2,"48",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"180",cy,"164",r,"28",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"52",cy,"196",r,"28",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"80 196 80 56 136 42",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"208",y1,"112",x2,"208",y2,"164",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"160",y1,"84",x2,"80",y2,"104",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Cookie = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"156",cy,"172",r,"16"),s(c,cx,"92",cy,"164",r,"16"),s(c,cx,"84",cy,"108",r,"16"),s(c,cx,"132",cy,"124",r,"16"),s(p,d,"M224,128a48,48,0,0,1-48-48,48,48,0,0,1-48-48,96,96,0,1,0,96,96Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const TextHSix = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"212",cy,"180",r,"28",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"187.75",y1,"166",x2,"220",y2,"112",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40",y1,"56",x2,"40",y2,"176",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"144",y1,"116",x2,"40",y2,"116",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"144",y1,"56",x2,"144",y2,"176",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const SubtractSquare = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"40",y,"40",w,"120",h,"120",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"160 96 216 96 216 216 96 216 96 160",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"160",y1,"160",x2,"216",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"160",y1,"104",x2,"216",y2,"160",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"104",y1,"160",x2,"160",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CircleNotch = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M168,40a97,97,0,0,1,56,88,96,96,0,0,1-192,0A97,97,0,0,1,88,40",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Sailboat = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M16,176H240l-29.6,37a8,8,0,0,1-6.24,3H51.84a8,8,0,0,1-6.24-3Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"136 136 216 136 136 48",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"136 176 136 12 32 136 136 136",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const IntersectSquare = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"40",y,"40",w,"120",h,"120",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"96",y,"96",w,"120",h,"120",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"96",y1,"96",x2,"160",y2,"160",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Kanban = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M40,56H216V176a8,8,0,0,1-8,8H168a8,8,0,0,1-8-8V152H96v56a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"96",y1,"120",x2,"40",y2,"120",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"96",y1,"56",x2,"96",y2,"152",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"160",y1,"120",x2,"216",y2,"120",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"160",y1,"56",x2,"160",y2,"152",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Hospital = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"32",y1,"216",x2,"244",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M48,216V48a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8V216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M160,120h60a8,8,0,0,1,8,8v88",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"104",y1,"76",x2,"104",y2,"116",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"84",y1,"96",x2,"124",y2,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"124 216 124 160 84 160 84 216",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ThreeD = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M52,80h48L72,120a28,28,0,1,1-20,47.6",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M140,176h24a48,48,0,0,0,0-96H140Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"32",y1,"44",x2,"224",y2,"44",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"32",y1,"212",x2,"224",y2,"212",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ListBullets = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"88",y1,"64",x2,"216",y2,"64",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"88",y1,"128",x2,"216",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"88",y1,"192",x2,"216",y2,"192",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"44",cy,"128",r,"16"),s(c,cx,"44",cy,"64",r,"16"),s(c,cx,"44",cy,"192",r,"16"))

export const ToteSimple = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M209.67,208H46.33a8.06,8.06,0,0,1-8-7.07l-14.25-120a8,8,0,0,1,8-8.93H223.92a8,8,0,0,1,8,8.93l-14.25,120A8.06,8.06,0,0,1,209.67,208Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M88,72V64a40,40,0,0,1,80,0v8",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Suitcase = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"32",y,"60",w,"192",h,"144",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M168,204V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V204",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const FileVideo = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"148 32 148 92 208 92",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M196,224h4a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8v68",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"40",y,"152",w,"76",h,"64",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"116 172 152 152 152 216 116 196",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Option = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M32,80H95.06a8,8,0,0,1,7.15,4.42l51.58,103.16a8,8,0,0,0,7.15,4.42H224",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"152",y1,"80",x2,"224",y2,"80",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ChatTeardropSlash = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"48",y1,"40",x2,"208",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M189.59,195.75A91.6,91.6,0,0,1,132,216H48a8,8,0,0,1-8-8V124A91.72,91.72,0,0,1,66.05,59.85",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M100,37.72A91.8,91.8,0,0,1,132,32h0a92,92,0,0,1,92,92h0a91.59,91.59,0,0,1-9.16,40.06",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CameraPlus = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"128",y1,"104",x2,"128",y2,"168",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"96",y1,"136",x2,"160",y2,"136",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M80,64,93.63,43.56A8,8,0,0,1,100.28,40h55.44a8,8,0,0,1,6.65,3.56L176,64h32a16,16,0,0,1,16,16V192a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V80A16,16,0,0,1,48,64Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const FlipHorizontal = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M92.63,36.89C96,28.86,108,31.29,108,40V200a8,8,0,0,1-8,8H40a8,8,0,0,1-7.37-11.12Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M163.37,36.89C160,28.86,148,31.29,148,40V200a8,8,0,0,0,8,8h60a8,8,0,0,0,7.37-11.12Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const BeerBottle = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"208",y1,"16",x2,"240",y2,"48",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M216,24,152,72l-40,8L28.69,163.31a16,16,0,0,0,0,22.63l41.37,41.37a16,16,0,0,0,22.63,0L176,144l8-40,48-64",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"96",y1,"96",x2,"160",y2,"160",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"112",y1,"208",x2,"48",y2,"144",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Cpu = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"100",y,"100",w,"56",h,"56",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"48",y,"48",w,"160",h,"160",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"208",y1,"104",x2,"232",y2,"104",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"208",y1,"152",x2,"232",y2,"152",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"24",y1,"104",x2,"48",y2,"104",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"24",y1,"152",x2,"48",y2,"152",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"152",y1,"208",x2,"152",y2,"232",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"104",y1,"208",x2,"104",y2,"232",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"152",y1,"24",x2,"152",y2,"48",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"104",y1,"24",x2,"104",y2,"48",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Cactus = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"40",y1,"216",x2,"216",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M96,216V136H84A60,60,0,0,1,24,76h0A20,20,0,0,1,44,56h0A20,20,0,0,1,64,76h0A20,20,0,0,0,84,96H96V56a32,32,0,0,1,32-32h0a32,32,0,0,1,32,32v80h12a20,20,0,0,0,20-20h0a20,20,0,0,1,20-20h0a20,20,0,0,1,20,20h0a60,60,0,0,1-60,60H160v40",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Campfire = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"40",y1,"172",x2,"216",y2,"224",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"216",y1,"172",x2,"40",y2,"224",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M152,132a24,24,0,0,1-48,0c0-24,24-36,24-36S152,108,152,132Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M180,104a52,52,0,0,1-104,0c0-44,52-72,52-72S180,60,180,104Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const TextHOne = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"224 208 224 112 200 128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40",y1,"56",x2,"40",y2,"176",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"144",y1,"116",x2,"40",y2,"116",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"144",y1,"56",x2,"144",y2,"176",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Elevator = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"40",y,"40",w,"176",h,"176",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"176 216 176 116 80 116 80 216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"216",x2,"128",y2,"116",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"112",y1,"76",x2,"144",y2,"76",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ArrowsLeftRight = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"176 144 208 176 176 208",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"48",y1,"176",x2,"208",y2,"176",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"80 112 48 80 80 48",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"208",y1,"80",x2,"48",y2,"80",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Butterfly = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"128",y1,"56",x2,"128",y2,"180",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M187.76,151.94c8.05.48,29.5-1.29,37.36-32.23C233.21,87.84,240.22,48,208.93,48S128,95.8,128,127.67C128,95.8,78.36,48,47.07,48S22.79,87.84,30.88,119.71c7.86,30.94,29.31,32.71,37.36,32.23",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M88,144a36.11,36.11,0,1,0,40,36,36,36,0,1,0,40-36",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const HandGrabbing = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M128,92a20,20,0,0,0-40,0v28",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M168,108V92a20,20,0,0,0-40,0v28",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M88,152V120H68a20,20,0,0,0-20,20v12a80,80,0,0,0,160,0V108a20,20,0,0,0-40,0v12",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CookingPot = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M40,80H216V184a24,24,0,0,1-24,24H64a24,24,0,0,1-24-24Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"244",y1,"100",x2,"216",y2,"120",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"12",y1,"100",x2,"40",y2,"120",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"88",y1,"16",x2,"88",y2,"40",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"16",x2,"128",y2,"40",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"168",y1,"16",x2,"168",y2,"40",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Clipboard = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M160,40h40a8,8,0,0,1,8,8V216a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M88,72V64a40,40,0,0,1,80,0v8Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Tram = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"96",y1,"208",x2,"72",y2,"240",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"160",y1,"208",x2,"184",y2,"240",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"48",y1,"128",x2,"208",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"48",y,"56",w,"160",h,"152",rx,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"16",x2,"128",y2,"56",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"88",cy,"168",r,"16"),s(c,cx,"168",cy,"168",r,"16"),s(l,x1,"88",y1,"16",x2,"168",y2,"16",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const FinnTheHuman = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"56",y,"108",w,"144",h,"80",rx,"40",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"96",cy,"148",r,"16"),s(c,cx,"160",cy,"148",r,"16"),s(p,d,"M20,72a24,24,0,0,1,48,0H188a24,24,0,0,1,48,0v76a76,76,0,0,1-76,76H96a76,76,0,0,1-76-76Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Percent = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"200",y1,"56",x2,"56",y2,"200",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"76",cy,"76",r,"28",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"180",cy,"180",r,"28",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const LampPendant = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"128",y1,"16",x2,"128",y2,"64",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M96,176v8a32,32,0,0,0,64,0v-8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M88,72a8,8,0,0,1,8-8h64a8,8,0,0,1,8,8v8a104,104,0,0,1,64,96H24A104,104,0,0,1,88,80Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ChartPolar = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"128",cy,"128",r,"56",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"32",x2,"128",y2,"224",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"32",y1,"128",x2,"224",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const MediumLogo = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"68",cy,"128",r,"56",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(e,cx,"184",cy,"128",rx,"24",ry,"56",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"244",y1,"72",x2,"244",y2,"184",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const StackMinus = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"188",y1,"200",x2,"228",y2,"200",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"32 128 128 184 224 128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(pl,ps,"32 80 128 136 224 80 128 24 32 80",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"32 176 128 232 144 222.67",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Asterisk = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"128",y1,"40",x2,"128",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"48",y1,"80",x2,"208",y2,"176",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"48",y1,"176",x2,"208",y2,"80",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Heart = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M128,224S24,168,24,102A54,54,0,0,1,78,48c22.59,0,41.94,12.31,50,32,8.06-19.69,27.41-32,50-32a54,54,0,0,1,54,54C232,168,128,224,128,224Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Jeep = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M224,168v32a8,8,0,0,1-8,8H188a8,8,0,0,1-8-8V168",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M76,168v32a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V168",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"16",y1,"96",x2,"240",y2,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"132",x2,"128",y2,"168",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"168",y1,"132",x2,"168",y2,"168",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"88",y1,"132",x2,"88",y2,"168",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M224,168H32V96L42.64,46.32A8,8,0,0,1,50.47,40H205.53a8,8,0,0,1,7.83,6.32L224,96Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const FileJsx = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"148 32 148 92 208 92",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M48,108V40a8,8,0,0,1,8-8h96l56,56v20",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M135.9,153.6s-29.43-7.78-31.8,11,38.43,10.12,35.78,30.72c-2.47,19.16-31.78,11-31.78,11",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M32,190a18,18,0,0,0,36,0V152",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"172",y1,"152",x2,"212",y2,"208",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"212",y1,"152",x2,"172",y2,"208",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const MaskSad = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M216,48a8,8,0,0,0-10.89-7.47C190,46.41,160.89,55.71,128,55.71s-62-9.3-77.11-15.16A8,8,0,0,0,40,48v55.77C40,174.6,79.4,232,128,232s88-57.4,88-128.21Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M148,181.5a39.11,39.11,0,0,0-40,0",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M148,120a29.59,29.59,0,0,0,28,2.12",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M80,122.12A29.61,29.61,0,0,0,108,120",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Person = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"40",r,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M149.17,80a24,24,0,0,1,18,8.13l45.32,51.38a12,12,0,0,1-17,17L160,128l22.87,86.93a12,12,0,0,1-21.75,10.14L128,168,94.88,225.07a12,12,0,0,1-21.75-10.14L96,128,60.49,156.49a12,12,0,0,1-17-17L88.83,88.13a24,24,0,0,1,18-8.13Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const DesktopTower = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M140,180H32a16,16,0,0,1-16-16V96A16,16,0,0,1,32,80H140",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"108",y1,"216",x2,"68",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"204",y1,"76",x2,"180",y2,"76",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"204",y1,"112",x2,"180",y2,"112",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"144",y,"40",w,"96",h,"176",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"88",y1,"180",x2,"88",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"192",cy,"176",r,"16"))

export const TipJar = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"48",y,"60",w,"160",h,"172",rx,"32",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M80,60V32a8,8,0,0,1,8-8h80a8,8,0,0,1,8,8V60",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"60",x2,"128",y2,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"108",x2,"128",y2,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"196",x2,"128",y2,"180",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M108,180h30a18,18,0,0,0,0-36H118a18,18,0,0,1,0-36h30",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Mosque = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"200",y1,"128",x2,"56",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M200,156a20,20,0,0,1,20-20h0a20,20,0,0,1,20,20v52H200",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M56,208H16V156a20,20,0,0,1,20-20h0a20,20,0,0,1,20,20",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M56,208V128c0-64,72-72,72-104,0,32,72,40,72,104v80Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"104",y1,"208",x2,"104",y2,"168",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"152",y1,"208",x2,"152",y2,"168",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ArrowFatLinesUp = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(pl,ps,"32 120 128 24 224 120 176 120 176 136 80 136 80 120 32 120",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"176",y1,"216",x2,"80",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"176",y1,"176",x2,"80",y2,"176",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Wind = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M101.22,52A27.1,27.1,0,0,1,120,44a24,24,0,0,1,0,48H24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M189.22,88A27.1,27.1,0,0,1,208,80a24,24,0,0,1,0,48H32",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M133.22,204A27.1,27.1,0,0,0,152,212a24,24,0,0,0,0-48H40",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const PatreonLogo = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M151.75,158.5C175.83,142.16,224,142.16,224,93.16c0-65.34-104.36-81.67-152.53-32.67C25.78,107,55.41,232,87.52,232S121.88,178.76,151.75,158.5Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ArrowsClockwise = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"168 96 216 96 216 48",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M216,96,187.72,67.72A88,88,0,0,0,64,67",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"88 160 40 160 40 208",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M40,160l28.28,28.28A88,88,0,0,0,192,189",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const TriangleDashed = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"152",y1,"216",x2,"104",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M225.21,184l4.66,8.09C236,202.79,228.08,216,215.46,216H192",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M64,216H40.54C27.92,216,20,202.79,26.13,192.09L30.79,184",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"179.14",y1,"104",x2,"202.18",y2,"144",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M99.89,64l13.7-23.78c6.3-11,22.52-11,28.82,0L156.11,64",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"53.82",y1,"144",x2,"76.86",y2,"104",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const FilmSlate = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M40,112H216a0,0,0,0,1,0,0v88a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V112A0,0,0,0,1,40,112Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M40.43,112,208,67.77l-8.16-30a7.9,7.9,0,0,0-9.66-5.49L37.85,72.47A7.76,7.76,0,0,0,32.27,82Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"67.71",y1,"64.59",x2,"115.5",y2,"92.19",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"126.61",y1,"49.05",x2,"174.4",y2,"76.64",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ArrowUp = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"128",y1,"216",x2,"128",y2,"40",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"56 112 128 40 200 112",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const FileZip = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M172,192h16a20,20,0,0,0,0-40H172v56",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"152",x2,"128",y2,"208",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"52 152 84 152 52 208 84 208",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"148 32 148 92 208 92",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M48,108V40a8,8,0,0,1,8-8h96l56,56v20",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Phone = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M164.39,145.34a8,8,0,0,1,7.59-.69l47.16,21.13a8,8,0,0,1,4.8,8.3A48.33,48.33,0,0,1,176,216,136,136,0,0,1,40,80,48.33,48.33,0,0,1,81.92,32.06a8,8,0,0,1,8.3,4.8l21.13,47.2a8,8,0,0,1-.66,7.53L89.32,117a7.93,7.93,0,0,0-.54,7.81c8.27,16.93,25.77,34.22,42.75,42.41a7.92,7.92,0,0,0,7.83-.59Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const TidalLogo = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"23.13",y,"69.13",w,"53.74",h,"53.74",t,"translate(-53.24 63.47) rotate(-45)",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"99.72",y,"67.72",w,"56.57",h,"56.57",t,"translate(-30.39 118.63) rotate(-45)",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"99.72",y,"147.72",w,"56.57",h,"56.57",t,"translate(-86.96 142.06) rotate(-45)",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"179.13",y,"69.13",w,"53.74",h,"53.74",t,"translate(-7.55 173.78) rotate(-45)",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const PencilRuler = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"152",y,"40",w,"64",h,"176",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"152",y1,"88",x2,"180",y2,"88",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"152",y1,"128",x2,"180",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"152",y1,"168",x2,"180",y2,"168",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M40,64,72,32l32,32V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"104",y1,"80",x2,"40",y2,"80",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"104",y1,"176",x2,"40",y2,"176",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Fish = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"156",cy,"76",r,"16"),s(p,d,"M12,175.87l52.07,16.06,16,52.07,24-52.07C258.51,188.26,220,38.68,219,37c-1.73-1-151.25-39.46-155,114.9Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M185.82,167.62A44,44,0,0,1,136.2,119.8,44,44,0,0,1,88.38,70.21",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Funnel = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M34.1,61.38A8,8,0,0,1,40,48H216a8,8,0,0,1,5.92,13.38L152,136v58.65a8,8,0,0,1-3.56,6.66l-32,21.33A8,8,0,0,1,104,216V136Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Pi = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M224,64H72a48,48,0,0,0-48,48",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"88",y1,"64",x2,"88",y2,"200",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M224,172a28,28,0,0,1-56,0V64",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Angle = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"72 32 72 200 240 200",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"32",y1,"72",x2,"72",y2,"72",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M112,72.33A96,96,0,0,1,199.67,160",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const FireTruck = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"192",y1,"120",x2,"244",y2,"120",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M192,80h30.58A8,8,0,0,1,230,85l14,35v64a8,8,0,0,1-8,8H216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"192",cy,"192",r,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"80",cy,"192",r,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"168",y1,"192",x2,"104",y2,"192",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M56,192H32a8,8,0,0,1-8-8V144",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"24",y1,"104",x2,"152",y2,"104",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"24",y1,"64",x2,"152",y2,"64",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"48",y1,"64",x2,"48",y2,"104",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"88",y1,"64",x2,"88",y2,"104",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"64",x2,"128",y2,"104",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"192",y1,"64",x2,"192",y2,"168",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ImageBroken = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M137.73,208l7.94-23.8,39-15.58,15.58-39,23.8-7.94V200a8,8,0,0,1-8,8Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M95.57,208l18-54.05,40.27-16.1L170,97.58l54.05-18V56a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M32,168.69l54.34-54.35a8,8,0,0,1,11.32,0l32.84,32.84",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CellSignalLow = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"80",y1,"152",x2,"80",y2,"200",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40",y1,"192",x2,"40",y2,"200",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Lightning = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(pl,ps,"160 16 148 96 208 120 96 240 108 160 48 136 160 16",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const PenNib = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"122",cy,"134",r,"22",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40.01",y1,"216",x2,"106.44",y2,"149.56",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M40,216l139.45-23.24a8,8,0,0,0,6.17-5.08L208,128,128,48,68.32,70.38a8,8,0,0,0-5.08,6.17Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M208,128l29.66-29.66a8,8,0,0,0,0-11.31L169,18.34a8,8,0,0,0-11.31,0L128,48",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const SimCard = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M200,224H56a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h96l56,56V216A8,8,0,0,1,200,224Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"88",y,"124",w,"80",h,"60",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"124",x2,"128",y2,"184",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CurrencyRub = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"56",y1,"184",x2,"144",y2,"184",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M88,216V40h60a52,52,0,0,1,0,104H56",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const FileVue = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"148 32 148 92 208 92",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M48,108V40a8,8,0,0,1,8-8h96l56,56v20",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"204",y1,"180",x2,"180",y2,"180",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"36 152 56 208 76 152",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"212 208 180 208 180 152 212 152",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M108,152v38a18,18,0,0,0,36,0V152",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const PushPinSimple = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"128",y1,"176",x2,"128",y2,"240",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"64",y1,"40",x2,"192",y2,"40",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40",y1,"176",x2,"216",y2,"176",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"56",y1,"176",x2,"80",y2,"40",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"176",y1,"40",x2,"200",y2,"176",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Trophy = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"96",y1,"224",x2,"160",y2,"224",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"184",x2,"128",y2,"224",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M58,128H48A32,32,0,0,1,16,96V80a8,8,0,0,1,8-8H56",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M198,128h10a32,32,0,0,0,32-32V80a8,8,0,0,0-8-8H200",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M56,48H200v63.1c0,39.7-31.75,72.6-71.45,72.9A72,72,0,0,1,56,112Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Panorama = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M16,64a8,8,0,0,1,10.05-7.74C43.35,60.89,81.44,72,128,72S212.65,60.89,230,56.27A8,8,0,0,1,240,64V192a8,8,0,0,1-10.06,7.73C212.63,195.08,174.55,184,128,184S43.37,195.08,26.06,199.72A8,8,0,0,1,16,192Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"200",cy,"108",r,"16"),s(p,d,"M16,164.69l54.34-54.35a8,8,0,0,1,11.32,0l75,75",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M131.31,160,157,134.34a8,8,0,0,1,11.31,0l65.47,65.47",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const OrangeSlice = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M12,88H244v4A116,116,0,0,1,12,92Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M52,88v4a76,76,0,0,0,152,0V88",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"88",x2,"88.28",y2,"156.8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"88",x2,"167.72",y2,"156.8",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const SpeakerSimpleNone = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M88,168H40a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H88l72-56V224Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Tree = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"128",y1,"232",x2,"128",y2,"88",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"152",x2,"80",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"128",x2,"176",y2,"104",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M128,177.94a63.72,63.72,0,0,0,41.66,14c33.93-.86,62.43-30.22,62.34-64.16a64,64,0,0,0-40.13-59.2,68,68,0,0,0-127.74,0A64,64,0,0,0,24,127.82c-.09,33.94,28.42,63.3,62.35,64.16A63.71,63.71,0,0,0,128,177.94Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ChatsTeardrop = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M96,176H32a8,8,0,0,1-8-8V104A72,72,0,0,1,96,32h0a72,72,0,0,1,72,72h0A72,72,0,0,1,96,176Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M92.1,176A72,72,0,0,0,160,224h64a8,8,0,0,0,8-8V152a72,72,0,0,0-68.06-71.89",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ChalkboardTeacher = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"104",cy,"148",r,"28",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"188 172 188 84 68 84",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M149.26,208H216a8,8,0,0,0,8-8V56a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8H58.73a48,48,0,0,1,90.54,0Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Storefront = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"48 139.59 48 216 208 216 208 139.59",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M54,40H202a8,8,0,0,1,7.69,5.8L224,96H32L46.34,45.8A8,8,0,0,1,54,40Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M96,96v16a32,32,0,0,1-64,0V96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M160,96v16a32,32,0,0,1-64,0V96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M224,96v16a32,32,0,0,1-64,0V96",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const SealPercent = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M54.46,201.54c-9.2-9.2-3.1-28.53-7.78-39.85C41.82,150,24,140.5,24,128s17.82-22,22.68-33.69C51.36,83,45.26,63.66,54.46,54.46S83,51.36,94.31,46.68C106.05,41.82,115.5,24,128,24S150,41.82,161.69,46.68c11.32,4.68,30.65-1.42,39.85,7.78s3.1,28.53,7.78,39.85C214.18,106.05,232,115.5,232,128S214.18,150,209.32,161.69c-4.68,11.32,1.42,30.65-7.78,39.85s-28.53,3.1-39.85,7.78C150,214.18,140.5,232,128,232s-22-17.82-33.69-22.68C83,204.64,63.66,210.74,54.46,201.54Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"96",cy,"96",r,"16"),s(c,cx,"160",cy,"160",r,"16"),s(l,x1,"88",y1,"168",x2,"168",y2,"88",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ChartPie = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"128",x2,"128",y2,"32",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"211.14",y1,"80",x2,"44.86",y2,"176",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const PencilSimpleLine = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M96,216H48a8,8,0,0,1-8-8V163.31a8,8,0,0,1,2.34-5.65L165.66,34.34a8,8,0,0,1,11.31,0L221.66,79a8,8,0,0,1,0,11.31Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"216",y1,"216",x2,"96",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"136",y1,"64",x2,"192",y2,"120",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const TextOutdent = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"120",y1,"128",x2,"216",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"120",y1,"64",x2,"216",y2,"64",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40",y1,"192",x2,"216",y2,"192",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"72 56 32 96 72 136",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Cheese = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M24,160h7.46c13.45,0,24.79-11,24.54-24.46A24,24,0,0,0,32,112H24V88H232v96a8,8,0,0,1-8,8H24Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M24,88,184,40a48,48,0,0,1,48,48",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M140,88v16a28,28,0,0,0,56,0V88",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M84,192V180a28,28,0,0,1,56,0v12",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const TextAlignCenter = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"40",y1,"64",x2,"216",y2,"64",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"64",y1,"104",x2,"192",y2,"104",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40",y1,"144",x2,"216",y2,"144",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"64",y1,"184",x2,"192",y2,"184",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const MicrosoftOutlookLogo = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"28",y,"68",w,"120",h,"120",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"88",cy,"128",r,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M200,112h24V216a8,8,0,0,1-8,8H88a8,8,0,0,1-8-8V188",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"221.35",y1,"221.94",x2,"148",y2,"164.89",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"224",y1,"112",x2,"152",y2,"168",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"104 68 104 32 200 32 200 130.67",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Cylinder = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(e,cx,"128",cy,"60",rx,"64",ry,"36",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M64,60V196c0,19.88,28.65,36,64,36s64-16.12,64-36V60",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const NuclearPlant = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M152,12a48,48,0,0,0-47.34,40",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M148,52h4a40,40,0,0,0,40-40h0",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"16",y1,"216",x2,"240",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M128.15,92h40a8,8,0,0,1,8,7.63c2.37,51.77,28,100,37.56,116.37",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M39.69,216C53,189.23,70.12,146.16,71.86,99.64a8,8,0,0,1,8-7.64h48.3a8,8,0,0,1,8,7.64c1.74,46.52,18.9,89.59,32.17,116.36",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const SquareHalf = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"48",y,"48",w,"160",h,"160",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"48",x2,"128",y2,"208",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"88",x2,"208",y2,"88",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"128",x2,"208",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"168",x2,"208",y2,"168",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const FrameCorners = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"152 88 184 88 184 120",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"104 168 72 168 72 136",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"32",y,"48",w,"192",h,"160",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CheckFat = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M104,147.43l98.34-97.09a8,8,0,0,1,11.32,0l24,23.6a8,8,0,0,1,0,11.32l-128.4,128.4a8,8,0,0,1-11.32,0l-71.6-72a8,8,0,0,1,0-11.31l24-24a8,8,0,0,1,11.32,0Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const TrendUp = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"232 56 136 152 96 112 24 184",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"232 120 232 56 168 56",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const MaskHappy = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M216,48a8,8,0,0,0-10.89-7.47C190,46.41,160.89,55.71,128,55.71s-62-9.3-77.11-15.16A8,8,0,0,0,40,48v55.77C40,174.6,79.4,232,128,232s88-57.4,88-128.21Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M156,174.21a44.94,44.94,0,0,1-56,0",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M148,124.68a29.59,29.59,0,0,1,28-2.12",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M80,122.56a29.61,29.61,0,0,1,28,2.12",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ArrowFatLineDown = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(pl,ps,"32 136 128 232 224 136 176 136 176 80 80 80 80 136 32 136",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"176",y1,"40",x2,"80",y2,"40",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ArrowDownLeft = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"192",y1,"64",x2,"64",y2,"192",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"168 192 64 192 64 88",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Cloud = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M80,128a80,80,0,1,1,80,80H72A56,56,0,1,1,85.92,97.74",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Moon = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M108.11,28.11A96.09,96.09,0,0,0,227.89,147.89,96,96,0,1,1,108.11,28.11Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Circuitry = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"168",cy,"104",r,"24"),s(c,cx,"88",cy,"168",r,"24"),s(py,ps,"152 216 152 160 88 96 88 40",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"88",y1,"168",x2,"88",y2,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"40",y,"40",w,"176",h,"176",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"136 40 136 72 168 104",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const PingPong = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M134.58,206.59A31.78,31.78,0,0,1,106,215.41C63.4,207,31.38,167.92,32,122.69c.69-49.55,41.13-90,90.68-90.68,45.23-.63,84.27,31.39,92.72,74a31.78,31.78,0,0,1-8.82,28.58L185,156.21l43.69,34.64a8,8,0,0,1,1,12.16L203,229.66a8,8,0,0,1-12.16-1L156.21,185Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"203.68",y1,"76.32",x2,"76.32",y2,"203.68",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const NotionLogo = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"40 48 60 48 148 208 196 208 196 48",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40",y1,"208",x2,"80",y2,"208",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"176",y1,"48",x2,"216",y2,"48",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"196 208 108 48 60 48 60 208",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CloudRain = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"96",y1,"208",x2,"128",y2,"160",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M88,88a68.06,68.06,0,1,1,68,72H76A44,44,0,1,1,90.2,74.34",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"120",y1,"240",x2,"146.67",y2,"200",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Steps = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"16 200 72 200 72 152 128 152 128 104 184 104 184 56 240 56",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const TeaBag = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M160,216V122.22a8,8,0,0,0-1.14-4.12L138.33,83.88A8,8,0,0,0,131.47,80H76.53a8,8,0,0,0-6.86,3.88L49.14,118.1A8,8,0,0,0,48,122.22V216a8,8,0,0,0,8,8h96A8,8,0,0,0,160,216Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M224,168h0a24,24,0,0,1-24-24V64a48,48,0,0,0-48-48h0a48,48,0,0,0-48,48v72",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Ghost = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"100",cy,"116",r,"16"),s(c,cx,"156",cy,"116",r,"16"),s(p,d,"M216,216l-29.33-24-29.34,24L128,192,98.67,216,69.33,192,40,216V120a88,88,0,0,1,176,0Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const TrafficCone = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M48,216,110.13,37.37A8,8,0,0,1,117.69,32h20.62a8,8,0,0,1,7.56,5.37L208,216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"232",y1,"216",x2,"24",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"166.26",y1,"96",x2,"89.74",y2,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"188.52",y1,"160",x2,"67.48",y2,"160",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const StarHalf = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M224,113.15l5.06-4.36A8.46,8.46,0,0,0,224.27,94L216,93.29",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"184.44 168 180.37 150.78 192 140.75",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"189.09",x2,"128",y2,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M176,218.61l6.72,4.13a8.4,8.4,0,0,0,12.52-9.17L193.92,208",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M176,90.07,160.36,88.8,135.74,29.2a8.36,8.36,0,0,0-15.48,0L95.64,88.8,31.73,94a8.46,8.46,0,0,0-4.79,14.83l48.7,42L60.76,213.57a8.4,8.4,0,0,0,12.52,9.17L128,189.09,139.24,196",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Bug = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"156",cy,"88",r,"16"),s(c,cx,"100",cy,"88",r,"16"),s(l,x1,"128",y1,"128",x2,"128",y2,"224",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M208,144a80,80,0,0,1-160,0V112a80,80,0,0,1,160,0Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"232",y1,"184",x2,"203.18",y2,"171.41",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"232",y1,"72",x2,"203.18",y2,"84.59",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"24",y1,"72",x2,"52.82",y2,"84.59",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"24",y1,"184",x2,"52.82",y2,"171.41",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"16",y1,"128",x2,"240",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const LightningSlash = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"48",y1,"40",x2,"208",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"119.59 59.29 160 16 148 96 208 120 191.17 138.03",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"163.79 167.37 96 240 108 160 48 136 92.21 88.63",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const DeviceMobileSlash = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"48",y1,"40",x2,"208",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M192,198.4V216a16,16,0,0,1-16,16H80a16,16,0,0,1-16-16V57.6",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M87.51,24H176a16,16,0,0,1,16,16v98.94",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Command = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M180,48h0a28,28,0,0,1,28,28v0a28,28,0,0,1-28,28H152a0,0,0,0,1,0,0V76a28,28,0,0,1,28-28Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M48,48H76a28,28,0,0,1,28,28v0a28,28,0,0,1-28,28h0A28,28,0,0,1,48,76V48A0,0,0,0,1,48,48Z",t,"translate(152 152) rotate(180)",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M152,152h28a28,28,0,0,1,28,28v0a28,28,0,0,1-28,28h0a28,28,0,0,1-28-28V152A0,0,0,0,1,152,152Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M76,152h0a28,28,0,0,1,28,28v0a28,28,0,0,1-28,28H48a0,0,0,0,1,0,0V180A28,28,0,0,1,76,152Z",t,"translate(152 360) rotate(-180)",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"104",y,"104",w,"48",h,"48",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CaretDoubleDown = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"208 136 128 216 48 136",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"208 56 128 136 48 56",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CaretLineUp = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"48 192 128 112 208 192",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"48",y1,"72",x2,"208",y2,"72",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const FolderMinus = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M216.89,208H39.38A7.4,7.4,0,0,1,32,200.62V80H216a8,8,0,0,1,8,8V200.89A7.11,7.11,0,0,1,216.89,208Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M32,80V52a8,8,0,0,1,8-8H92.41a8,8,0,0,1,6,2.69L128,80",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"104",y1,"144",x2,"152",y2,"144",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const FolderSimpleUser = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M160,224c3.67-13.8,16.6-24,32-24s28.33,10.2,32,24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"192",cy,"176",r,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M112,208H40a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H93.33a8,8,0,0,1,4.8,1.6l27.74,20.8a8,8,0,0,0,4.8,1.6H216a8,8,0,0,1,8,8v20",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Mailbox = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"88",y1,"148",x2,"64",y2,"148",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"168 144 168 24 200 24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M232,176V116a52,52,0,0,0-52-52H76a52,52,0,0,1,52,52v68h96A8,8,0,0,0,232,176Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M128,224V184H32a8,8,0,0,1-8-8V116A52,52,0,0,1,76,64",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const SkypeLogo = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M96.44,156c2.54,11.35,15.7,20,31.56,20,17.67,0,32-10.75,32-24,0-32-62.22-20-62.22-48,0-13.25,12.55-24,30.22-24,13.25,0,23.63,6,28,14.66",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M214,146.69A48,48,0,0,1,146.69,214,88.07,88.07,0,0,1,42,109.31,48,48,0,0,1,109.31,42,88.07,88.07,0,0,1,214,146.69Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ShieldStar = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"128",y1,"96",x2,"128",y2,"136",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"88",y1,"120",x2,"128",y2,"136",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"104",y1,"168",x2,"128",y2,"136",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"152",y1,"168",x2,"128",y2,"136",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"168",y1,"120",x2,"128",y2,"136",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M216,112V56a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8v56c0,96,88,120,88,120S216,208,216,112Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const HandFist = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M128,104a24,24,0,0,1-48,0V64a24,24,0,0,1,48,0Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M128,64a24,24,0,0,1,48,0V88",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M128,176a40,40,0,0,1,40-40H152a24,24,0,0,1-24-24V96a8,8,0,0,1,8-8h64a24,24,0,0,1,24,24v16a96,96,0,0,1-192,0V88a24,24,0,0,1,48,0v16a24,24,0,0,1-48,0",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Receipt = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"80",y1,"100",x2,"176",y2,"100",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"80",y1,"140",x2,"176",y2,"140",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M32,208V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V208l-32-16-32,16-32-16L96,208,64,192Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const FramerLogo = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(pl,ps,"56 104 56 168 128 240 128 168 200 168 56 40 200 40 200 104 56 104",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const SignIn = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"24",y1,"128",x2,"136",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"96 88 136 128 96 168",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"136 40 200 40 200 216 136 216",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const FileCloud = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"148 32 148 92 208 92",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M180,224h20a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8v84",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M65.66,168H60a28,28,0,0,0,0,56h48a44,44,0,1,0-43.82-48",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CalendarHeart = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"40",y,"40",w,"176",h,"176",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"176",y1,"24",x2,"176",y2,"52",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"80",y1,"24",x2,"80",y2,"52",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M128,120a24,24,0,0,1,48,0c0,32-48,56-48,56s-48-24-48-56a24,24,0,0,1,48,0Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const GraphicsCard = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M16,184H232a8,8,0,0,0,8-8V64a8,8,0,0,0-8-8H16V208",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"176",cy,"120",r,"28",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"96",y1,"208",x2,"96",y2,"184",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"56",y1,"184",x2,"56",y2,"208",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"136",y1,"208",x2,"136",y2,"184",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"80",cy,"120",r,"28",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const FileText = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M200,224H56a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h96l56,56V216A8,8,0,0,1,200,224Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"148 32 148 92 208 92",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"96",y1,"132",x2,"160",y2,"132",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"96",y1,"172",x2,"160",y2,"172",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const FlagCheckered = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"168",y1,"69.48",x2,"168",y2,"189.48",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M48,116c64-55.43,112,55.43,176,0",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"104",y1,"42.52",x2,"104",y2,"162.52",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M48,176c64-55.43,112,55.43,176,0V56C160,111.43,112,.57,48,56V224",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const FaceMask = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"92",y1,"100",x2,"164",y2,"100",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"92",y1,"140",x2,"164",y2,"140",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M209.41,152H220a24,24,0,0,0,24-24V104a24,24,0,0,0-24-24h-8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M46.59,152H36a24,24,0,0,1-24-24V104A24,24,0,0,1,36,80h8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M48,76.8a8,8,0,0,1,5-7.43l72-28.8a8,8,0,0,1,5.94,0l72,28.8a8,8,0,0,1,5,7.43V136c0,56-80,72-80,72s-80-16-80-72Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CalendarPlus = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"40",y,"40",w,"176",h,"176",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"176",y1,"24",x2,"176",y2,"52",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"80",y1,"24",x2,"80",y2,"52",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40",y1,"88",x2,"216",y2,"88",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"152",y1,"152",x2,"104",y2,"152",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"128",x2,"128",y2,"176",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const RadioButton = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"128",cy,"128",r,"44",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const SoundcloudLogo = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"20",y1,"120",x2,"20",y2,"168",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"60",y1,"96",x2,"60",y2,"192",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"100",y1,"56",x2,"100",y2,"192",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M140,192h64a40,40,0,0,0,7.64-79.27A72,72,0,0,0,140,48",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CalendarCheck = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"40",y,"40",w,"176",h,"176",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"176",y1,"24",x2,"176",y2,"52",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"80",y1,"24",x2,"80",y2,"52",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40",y1,"88",x2,"216",y2,"88",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"92 152 116 176 164 128",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Carrot = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"224",y1,"32",x2,"183.6",y2,"72.4",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M43.81,223A8,8,0,0,1,33,212.19S64,112,104.4,72.4a56,56,0,0,1,79.2,79.2C144,192,43.81,223,43.81,223Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"232",y1,"72",x2,"183.19",y2,"72",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"184",y1,"72.81",x2,"184",y2,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"112",y1,"152",x2,"141.7",y2,"181.7",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"104.4",y1,"72.4",x2,"144",y2,"112",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Alarm = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"136",r,"88",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"56",y1,"32",x2,"24",y2,"64",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"200",y1,"32",x2,"232",y2,"64",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"128 88 128 136 176 136",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const HandWaving = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M96.65,62a20,20,0,0,1,34.64-20l30,52",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M69.32,94.67,55.08,70A20,20,0,0,1,89.73,50l31.17,54",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M158.87,160A40,40,0,0,1,168,105.58L161.32,94A20,20,0,0,1,196,74l17.31,30A80,80,0,0,1,74.7,184l-40-69.32a20,20,0,0,1,34.64-20L88.57,128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M220.11,40.63a60.21,60.21,0,0,0-24-14",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M58.23,228a121,121,0,0,1-18.16-24",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ArrowBendLeftUp = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"152 80 104 32 56 80",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M200,224a96,96,0,0,1-96-96V32",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Farm = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M128,142a255,255,0,0,1,104-22",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M24,120a255.5,255.5,0,0,1,199.85,96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"80 126.14 80 80 144 32 208 80 208 121.11",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"120 138.61 120 96 168 96 168 128.06",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M24,160a215.21,215.21,0,0,1,145.11,56",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M24,200a175.33,175.33,0,0,1,73.42,16",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M173.35,168.06A216.14,216.14,0,0,1,232,160",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const MedalMilitary = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"192",r,"40",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M128,152l82.72-37.6a9,9,0,0,0,5.28-8.2V57a9,9,0,0,0-9-9H49a9,9,0,0,0-9,9v49.2a9,9,0,0,0,5.28,8.2Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"168",y1,"48",x2,"168",y2,"133.82",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"88",y1,"48",x2,"88",y2,"133.82",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const SmileyMeh = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"88",y1,"160",x2,"168",y2,"160",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"92",cy,"108",r,"16"),s(c,cx,"164",cy,"108",r,"16"))

export const DeviceTabletSpeaker = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"32",y,"48",w,"192",h,"160",rx,"16",t,"translate(256) rotate(90)",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"96",y1,"72",x2,"160",y2,"72",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Lock = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"40",y,"88",w,"176",h,"128",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"128",cy,"152",r,"16"),s(p,d,"M88,88V56a40,40,0,0,1,80,0V88",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const BehanceLogo = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M32,124H90a34,34,0,0,1,0,68H32V64H86a30,30,0,0,1,0,60",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"168",y1,"76",x2,"232",y2,"76",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M217.45,188A40,40,0,1,1,240,152H160",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Money = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"16",y,"64",w,"224",h,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M240,112a48,48,0,0,1-48-48",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"128",cy,"128",r,"28",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M64,64a48,48,0,0,1-48,48",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M192,192a48,48,0,0,1,48-48",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M16,144a48,48,0,0,1,48,48",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const TextAUnderline = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"192 168 128 32 64 168",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"173.18",y1,"128",x2,"82.82",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40",y1,"216",x2,"216",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Barricade = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"24",y,"72",w,"208",h,"88",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"84",y1,"72",x2,"172",y2,"160",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"156",y1,"72",x2,"232",y2,"148",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"24",y1,"84",x2,"100",y2,"160",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"192",y1,"160",x2,"192",y2,"200",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"64",y1,"160",x2,"64",y2,"200",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Barcode = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"180 52 220 52 220 92",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"76 204 36 204 36 164",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"220 164 220 204 180 204",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"36 92 36 52 76 52",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"88",y1,"92",x2,"88",y2,"164",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"168",y1,"92",x2,"168",y2,"164",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"92",x2,"128",y2,"164",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const UserMinus = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"204",y1,"136",x2,"244",y2,"136",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"108",cy,"100",r,"60",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M24,200c20.55-24.45,49.56-40,84-40s63.45,15.55,84,40",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const PictureInPicture = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"32",y,"56",w,"192",h,"144",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"136 200 136 128 224 128",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Magnet = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M26.34,128.88,55,157.54a8,8,0,0,0,11.37-.06L127.29,95a24,24,0,0,1,33.61-.33c9.69,9.34,9.46,25.14-.05,34.65L98.54,189.6a8,8,0,0,0-.08,11.4l28.66,28.66a8,8,0,0,0,11.26.05l61.74-60.43c31.19-31.19,32.1-82,1.14-113.42a80,80,0,0,0-113.57-.43L26.31,117.6A8,8,0,0,0,26.34,128.88Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128.57",y1,"160.57",x2,"168.36",y2,"200.36",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"55.77",y1,"87.77",x2,"95.56",y2,"127.56",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CoffeeBean = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(e,cx,"128",cy,"128",rx,"110.47",ry,"78.91",t,"translate(-53.02 128) rotate(-45)",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M206.11,49.89c-24.51,5-66.9,22-78.11,78.11s-53.6,73.09-78.11,78.11",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Belt = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"144",y1,"128",x2,"184",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"104",y,"80",w,"80",h,"96",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"104",y1,"88",x2,"12",y2,"88",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"104",y1,"168",x2,"12",y2,"168",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"244",y1,"88",x2,"184",y2,"88",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"244",y1,"168",x2,"184",y2,"168",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"56",y1,"80",x2,"56",y2,"176",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ArticleMedium = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"24",y1,"56",x2,"40",y2,"56",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"120",y1,"56",x2,"136",y2,"56",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"24",y1,"132",x2,"44",y2,"132",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"116",y1,"132",x2,"136",y2,"132",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"176",y1,"92",x2,"232",y2,"92",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"176",y1,"132",x2,"232",y2,"132",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"80",y1,"172",x2,"232",y2,"172",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"80",y1,"212",x2,"232",y2,"212",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"40 132 40 56 80 116 120 56 120 132",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Checkerboard = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"40",y,"40",w,"176",h,"176",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"40",x2,"128",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"216",y1,"128",x2,"40",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40",y1,"156",x2,"100",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"68",y1,"128",x2,"128",y2,"188",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"68",x2,"188",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"156",y1,"40",x2,"216",y2,"100",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const LockKey = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"40",y,"88",w,"176",h,"128",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M88,88V56a40,40,0,0,1,80,0V88",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"128",cy,"144",r,"20",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"164",x2,"128",y2,"180",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CloudLightning = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M88,88a68.06,68.06,0,1,1,68,72H76A44,44,0,1,1,90.2,74.34",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"120 240 144 200 104 200 128 160",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ArrowDown = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"128",y1,"40",x2,"128",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"56 144 128 216 200 144",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const StripeLogo = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"40",y,"40",w,"176",h,"176",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M96.44,156c2.54,11.35,15.7,20,31.56,20,17.67,0,32-10.75,32-24,0-32-62.22-20-62.22-48,0-13.25,12.55-24,30.22-24,13.25,0,23.63,6,28,14.66",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Avocado = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"160",r,"40",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M82.73,48a48,48,0,0,1,90.9,1l29.82,84.28a80,80,0,1,1-150.26-1.74Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Hexagon = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M131.84,25l88,48.18a8,8,0,0,1,4.16,7v95.64a8,8,0,0,1-4.16,7l-88,48.18a8,8,0,0,1-7.68,0l-88-48.18a8,8,0,0,1-4.16-7V80.18a8,8,0,0,1,4.16-7l88-48.18A8,8,0,0,1,131.84,25Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const NumberEight = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"168",r,"48",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"128",cy,"80",r,"40",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const NumberSquareNine = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"40",y,"40",w,"176",h,"176",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"128",cy,"108",r,"28",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"152.25",y1,"122",x2,"120",y2,"176",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const HourglassMedium = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M128,128,67.2,82.4A8,8,0,0,1,64,76V40a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8V75.64A8,8,0,0,1,188.82,82L128,128h0",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M128,128,67.2,173.6A8,8,0,0,0,64,180v36a8,8,0,0,0,8,8H184a8,8,0,0,0,8-8V180.36a8,8,0,0,0-3.18-6.38L128,128h0",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"168",x2,"128",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"69.33",y1,"84",x2,"186.21",y2,"84",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ChatCenteredText = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"96",y1,"100",x2,"160",y2,"100",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"96",y1,"140",x2,"160",y2,"140",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M105.07,192l16,28a8,8,0,0,0,13.9,0l16-28H216a8,8,0,0,0,8-8V56a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V184a8,8,0,0,0,8,8Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ArrowURightUp = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"120 80 168 32 216 80",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M56,80v88a56,56,0,0,0,56,56h0a56,56,0,0,0,56-56V32",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ArrowCounterClockwise = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"24 56 24 104 72 104",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M67.59,192A88,88,0,1,0,65.77,65.77L24,104",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Hurricane = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M148.62,50.68A80,80,0,0,1,208,128c0,96-112,116-112,116l11.38-38.68A80,80,0,0,1,48,128C48,32,160,12,160,12Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Eyes = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"56",cy,"128",r,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"152",cy,"128",r,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(e,cx,"176",cy,"128",rx,"48",ry,"88",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(e,cx,"80",cy,"128",rx,"48",ry,"88",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const MapPinSimple = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"72",r,"48",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"232",x2,"128",y2,"120",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CreditCard = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"24",y,"56",w,"208",h,"144",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"164",y1,"164",x2,"196",y2,"164",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"116",y1,"164",x2,"128",y2,"164",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"24",y1,"100",x2,"232",y2,"100",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Translate = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"240 216 184 104 128 216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"144",y1,"184",x2,"224",y2,"184",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"96",y1,"32",x2,"96",y2,"56",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"32",y1,"56",x2,"160",y2,"56",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M128,56a96,96,0,0,1-96,96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M72.7,96A96,96,0,0,0,160,152",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const AlignTop = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"216",y1,"40",x2,"40",y2,"40",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"122",y,"106",w,"104",h,"52",rx,"8",t,"translate(306 -42) rotate(90)",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"56",y,"80",w,"52",h,"144",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Virus = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"88",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"108",cy,"108",r,"20"),s(c,cx,"168",cy,"128",r,"20"),s(c,cx,"128",cy,"168",r,"20"),s(l,x1,"128",y1,"16",x2,"128",y2,"40",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"240",y1,"128",x2,"216",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"16",y1,"128",x2,"40",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"216",x2,"128",y2,"240",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"48",y1,"48",x2,"65.77",y2,"65.77",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"190.23",y1,"65.77",x2,"208",y2,"48",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"208",y1,"208",x2,"190.23",y2,"190.23",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"48",y1,"208",x2,"65.77",y2,"190.23",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const RedditLogo = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"184",cy,"32",r,"12",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M59.41,89.88C77.72,78.75,101.72,72,128,72s50.28,6.75,68.59,17.88h0a24,24,0,1,1,31.62,34.79h0A51.6,51.6,0,0,1,232,144c0,39.76-46.56,72-104,72S24,183.76,24,144a51.6,51.6,0,0,1,3.79-19.33h0A24,24,0,1,1,59.41,89.88Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"88",cy,"128",r,"20"),s(c,cx,"168",cy,"128",r,"20"),s(p,d,"M156,172a100,100,0,0,1-56,0",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"128 72 136 24 172.16 30.03",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Infinity = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M101.28,158.17l-3.34,3.77a48,48,0,1,1,0-67.88l60.12,67.88a48,48,0,1,0,0-67.88l-3.34,3.77",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Binoculars = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"104",y1,"88",x2,"152",y2,"88",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M229.59,154.32,185.94,55A24,24,0,0,0,152,55V168",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M104,168V55a24,24,0,0,0-33.94,0L26.41,154.32",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"64",cy,"168",r,"40",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"192",cy,"168",r,"40",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Lego = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"80",y1,"168",x2,"80",y2,"224",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(e,cx,"80",cy,"100",rx,"32",ry,"20",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(e,cx,"160",cy,"60",rx,"32",ry,"20",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"16 136 80 168 240 88",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"240 88 240 144 80 224 16 192 16 136",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"58.44",y1,"114.78",x2,"16",y2,"136",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"138.44",y1,"74.78",x2,"107.81",y2,"90.1",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"240",y1,"88",x2,"191.45",y2,"63.72",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CellSignalNone = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"40",y1,"192",x2,"40",y2,"200",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const FloppyDiskBack = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M40,83.31V208a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V48a8,8,0,0,0-8-8H83.31a8,8,0,0,0-5.65,2.34L42.34,77.66A8,8,0,0,0,40,83.31Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"128",cy,"150",r,"30",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M80,40.72V76a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V40",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Video = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"32",y,"48",w,"192",h,"120",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"32",y1,"208",x2,"224",y2,"208",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(pl,ps,"148 108 116 88 116 128 148 108",st,cc,sc,ro,sj,ro,sw,"24"))

export const Church = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M72,216h36V172a20,20,0,0,1,20-20h0a20,20,0,0,1,20,20v44h36V104L128,72,72,104Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"72",x2,"128",y2,"16",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"104",y1,"40",x2,"152",y2,"40",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"184 128 224 152 224 216 184 216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"72 128 32 152 32 216 72 216",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ArrowULeftUp = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"136 80 88 32 40 80",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M200,80v88a56,56,0,0,1-56,56h0a56,56,0,0,1-56-56V32",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Plant = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M142.54,153.46C110.62,100.25,153.18,47.05,243.63,52.37,249,142.82,195.75,185.38,142.54,153.46Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M88.47,164.47c22.8-38-7.6-76-72.21-72.21C12.46,156.87,50.47,187.27,88.47,164.47Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"64",y1,"140",x2,"124",y2,"200",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M192,104l-49.25,49.25A64,64,0,0,0,124,198.51V228",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const MastodonLogo = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M160,224H72a32,32,0,0,1-32-32V72A32,32,0,0,1,72,40H184a32,32,0,0,1,32,32v72a32,32,0,0,1-32,32H40",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M128,136V104a24,24,0,0,0-48,0v32",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M176,136V104a24,24,0,0,0-48,0",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const MoneyWavy = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M240,186.79c-91.64,44.77-132.36-42.35-224,2.42v-120c91.64-44.77,132.36,42.35,224-2.42Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"128",cy,"128",r,"20",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"52",y1,"100",x2,"52",y2,"140",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"204",y1,"116",x2,"204",y2,"156",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Factory = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M153.55,125.16,167,30.87A8,8,0,0,1,174.94,24h18.12A8,8,0,0,1,201,30.87L216,136v80",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"80",y1,"176",x2,"108",y2,"176",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"148",y1,"176",x2,"176",y2,"176",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"216 136 168 136 104 88 104 136 40 88 40 216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"24",y1,"216",x2,"232",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ChatCentered = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M105.07,192l16,28a8,8,0,0,0,13.9,0l16-28H216a8,8,0,0,0,8-8V56a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V184a8,8,0,0,0,8,8Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const HeartStraightBreak = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M128,80.6l-18.64-18a50,50,0,0,0-70.72,70.72L128,224l89.36-90.64a50,50,0,1,0-70.72-70.72L112,96l32,32-16,16",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ClockUser = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"176 104 128 128 128 72",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M160,224c3.67-13.8,16.6-24,32-24s28.33,10.2,32,24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"192",cy,"176",r,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M116,223.26A96,96,0,1,1,223.26,116",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const HourglassSimple = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M50.36,53.66A8,8,0,0,1,56,40H200a8,8,0,0,1,5.66,13.66L128,128Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M50.36,202.34A8,8,0,0,0,56,216H200a8,8,0,0,0,5.66-13.66L128,128Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const GenderIntersex = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"120",cy,"112",r,"56",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"120",y1,"168",x2,"120",y2,"232",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"88",y1,"204",x2,"152",y2,"204",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"168 32 208 32 208 72",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"163.4",y1,"76.6",x2,"208",y2,"32",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const RoadHorizon = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"96",y1,"64",x2,"24",y2,"192",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"160",y1,"64",x2,"232",y2,"192",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"64",x2,"128",y2,"80",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"120",x2,"128",y2,"136",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"176",x2,"128",y2,"192",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"24",y1,"64",x2,"232",y2,"64",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Seal = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M54.46,201.54c-9.2-9.2-3.1-28.53-7.78-39.85C41.82,150,24,140.5,24,128s17.82-22,22.68-33.69C51.36,83,45.26,63.66,54.46,54.46S83,51.36,94.31,46.68C106.05,41.82,115.5,24,128,24S150,41.82,161.69,46.68c11.32,4.68,30.65-1.42,39.85,7.78s3.1,28.53,7.78,39.85C214.18,106.05,232,115.5,232,128S214.18,150,209.32,161.69c-4.68,11.32,1.42,30.65-7.78,39.85s-28.53,3.1-39.85,7.78C150,214.18,140.5,232,128,232s-22-17.82-33.69-22.68C83,204.64,63.66,210.74,54.46,201.54Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Voicemail = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"60",cy,"128",r,"48",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"196",cy,"128",r,"48",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"60",y1,"176",x2,"196",y2,"176",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const FileTxt = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"148 32 148 92 208 92",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M48,108V40a8,8,0,0,1,8-8h96l56,56v20",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"108",y1,"152",x2,"148",y2,"208",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"148",y1,"152",x2,"108",y2,"208",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"80",y1,"152",x2,"40",y2,"152",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"60",y1,"152",x2,"60",y2,"208",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"216",y1,"152",x2,"176",y2,"152",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"196",y1,"152",x2,"196",y2,"208",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ArrowLeft = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"216",y1,"128",x2,"40",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"112 56 40 128 112 200",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const MagnifyingGlassMinus = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"80",y1,"112",x2,"144",y2,"112",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"112",cy,"112",r,"80",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"168.57",y1,"168.57",x2,"224",y2,"224",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Barbell = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"60",y,"56",w,"40",h,"144",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"156",y,"56",w,"40",h,"144",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M196,80h28a8,8,0,0,1,8,8v80a8,8,0,0,1-8,8H196",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M60,176H32a8,8,0,0,1-8-8V88a8,8,0,0,1,8-8H60",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"100",y1,"128",x2,"156",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"232",y1,"128",x2,"244",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"12",y1,"128",x2,"24",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Beanie = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"32",y,"168",w,"192",h,"48",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"72",y1,"168",x2,"72",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"168",x2,"128",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"184",y1,"168",x2,"184",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M40,168V144a88,88,0,0,1,176,0v24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"128",cy,"36",r,"20",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Racquet = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(e,cx,"168",cy,"88",rx,"79.51",ry,"63.61",t,"translate(-13.02 144.57) rotate(-45)",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"23.86",y,"179.37",w,"60.28",h,"45.25",rx,"8",t,"translate(-127.02 97.35) rotate(-45)",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"75.31",y1,"180.69",x2,"111.78",y2,"144.22",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"196",y1,"17.13",x2,"196",y2,"146.58",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"140",y1,"29.41",x2,"140",y2,"158.87",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"109.42",y1,"60",x2,"238.87",y2,"60",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"97.13",y1,"116",x2,"226.58",y2,"116",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const GitFork = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M64,88v24a16,16,0,0,0,16,16h96a16,16,0,0,0,16-16V88",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"128",x2,"128",y2,"168",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"64",cy,"64",r,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"128",cy,"192",r,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"192",cy,"64",r,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ArrowUpLeft = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"192",y1,"192",x2,"64",y2,"64",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"168 64 64 64 64 168",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const TelegramLogo = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M80,134.87,170.26,214a8,8,0,0,0,13.09-4.21L224,33.22a1,1,0,0,0-1.34-1.15L20,111.38A6.23,6.23,0,0,0,21,123.3Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"80",y1,"134.87",x2,"223.41",y2,"32.09",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M124.37,173.78,93.76,205.54A8,8,0,0,1,80,200V134.87",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const BatteryVerticalFull = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"104",y1,"12",x2,"152",y2,"12",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"64",y,"44",w,"128",h,"200",rx,"16",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"100",y1,"84",x2,"156",y2,"84",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"100",y1,"124",x2,"156",y2,"124",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"100",y1,"164",x2,"156",y2,"164",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"100",y1,"204",x2,"156",y2,"204",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const TrayArrowUp = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M40,156H76.69a8,8,0,0,1,5.65,2.34l19.32,19.32a8,8,0,0,0,5.65,2.34h41.38a8,8,0,0,0,5.65-2.34l19.32-19.32a8,8,0,0,1,5.65-2.34H216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"40",y,"40",w,"176",h,"176",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"76",x2,"128",y2,"140",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"96 108 128 76 160 108",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Laptop = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M40,168V72A16,16,0,0,1,56,56H200a16,16,0,0,1,16,16v96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M24,168H232a0,0,0,0,1,0,0v24a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V168a0,0,0,0,1,0,0Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"144",y1,"96",x2,"112",y2,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Target = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"128",y1,"128",x2,"224",y2,"32",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M195.88,60.12A95.92,95.92,0,1,0,218,94.56",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M161.94,94.06a48,48,0,1,0,13.11,43.46",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const GoogleDriveLogo = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M93.65,35.76A8,8,0,0,1,100.43,32h55.14a8,8,0,0,1,6.78,3.76l68.43,112.18a8,8,0,0,1,.17,8.21L203.62,204a8,8,0,0,1-6.94,4H59.32a8,8,0,0,1-6.94-4L25.05,156.15a8,8,0,0,1,.17-8.21Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"55.12",y1,"206.8",x2,"159.41",y2,"32.98",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"200.88",y1,"206.8",x2,"96.59",y2,"32.98",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"24",y1,"152",x2,"232",y2,"152",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const List = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"40",y1,"128",x2,"216",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40",y1,"64",x2,"216",y2,"64",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40",y1,"192",x2,"216",y2,"192",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const SpinnerBall = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M32,129.61c78.55-59.69,113.45,56.47,192-3.22",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M177.4,210.33c-91-38.17-7.82-126.49-98.8-164.66",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M174.6,44.05C187,141.93,69,114.07,81.4,212",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const SortDescending = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"48",y1,"128",x2,"116",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"48",y1,"64",x2,"100",y2,"64",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"48",y1,"192",x2,"180",y2,"192",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"144 88 184 48 224 88",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"184",y1,"48",x2,"184",y2,"144",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ArrowRight = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"40",y1,"128",x2,"216",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"144 56 216 128 144 200",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const PersonSimpleHike = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"152",cy,"48",r,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"152 232 152 176 109.54 145.67",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M192,232V144c-40,0-38.06-24.33-56-39.91a32.47,32.47,0,0,0-6.47-4.4L72,232",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"93.62 86.98 68 76 44 132 69.32 142.85",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Equalizer = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"28",y1,"108",x2,"68",y2,"108",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"28",y1,"148",x2,"68",y2,"148",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"28",y1,"188",x2,"68",y2,"188",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"108",y1,"148",x2,"148",y2,"148",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"108",y1,"188",x2,"148",y2,"188",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"188",y1,"68",x2,"228",y2,"68",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"188",y1,"108",x2,"228",y2,"108",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"188",y1,"148",x2,"228",y2,"148",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"188",y1,"188",x2,"228",y2,"188",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const FileArrowDown = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M200,224H56a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h96l56,56V216A8,8,0,0,1,200,224Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"148 32 148 92 208 92",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"124",x2,"128",y2,"184",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"104 160 128 184 152 160",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Microphone = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"88",y,"24",w,"80",h,"144",rx,"40",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"208",x2,"128",y2,"240",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M208,128a80,80,0,0,1-160,0",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Parachute = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M224,120a96,96,0,0,0-192,0Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"224 120 128 192 32 120",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"120",x2,"128",y2,"224",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"112",y1,"224",x2,"144",y2,"224",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M88,120c0-72,40-96,40-96s40,24,40,96",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const BookBookmark = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"168 32 168 128 137.99 104 108 128 108 32",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M48,208a24,24,0,0,1,24-24H208V32H72A24,24,0,0,0,48,56Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"48 208 48 224 192 224",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const MapPinLine = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"56",y1,"232",x2,"200",y2,"232",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"128",cy,"104",r,"32",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M208,104c0,72-80,128-80,128S48,176,48,104a80,80,0,0,1,160,0Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const NumberNine = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"96",r,"48",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"120",y1,"208",x2,"169.57",y2,"120",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const NetworkX = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"104",y,"32",w,"48",h,"48",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"40",y,"168",w,"48",h,"48",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"80",x2,"128",y2,"120",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"64",y1,"168",x2,"64",y2,"120",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"192",y1,"140",x2,"192",y2,"120",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"24",y1,"120",x2,"232",y2,"120",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"168",y1,"168",x2,"216",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"216",y1,"168",x2,"168",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Plugs = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"140",y1,"148",x2,"120",y2,"168",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"140",y1,"148",x2,"120",y2,"168",f,"#231f20"),s(l,x1,"108",y1,"116",x2,"88",y2,"136",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"108",y1,"116",x2,"88",y2,"136",f,"#231f20"),s(l,x1,"64",y1,"112",x2,"144",y2,"192",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"58.06",y1,"197.94",x2,"24",y2,"232",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M132,180l-29,29a24,24,0,0,1-33.94,0L47,186.91A24,24,0,0,1,47,153l29-29",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"112",y1,"64",x2,"192",y2,"144",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"197.94",y1,"58.06",x2,"232",y2,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M180,132l29-29a24,24,0,0,0,0-33.94L186.91,47A24,24,0,0,0,153,47L124,76",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const WifiMedium = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"204",r,"16"),s(p,d,"M200,129a116,116,0,0,0-144,0",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M168,165a68,68,0,0,0-80,0",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const FileLock = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"48",y,"180",w,"72",h,"44",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M64,180V164a20,20,0,0,1,40,0v16",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"148 32 148 92 208 92",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M164,224h36a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8v68",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Peace = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"128",x2,"206.64",y2,"183.06",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"128",x2,"49.36",y2,"183.06",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"32",x2,"128",y2,"224",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const DribbbleLogo = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M71,205.27A159.93,159.93,0,0,1,208,128c5.39,0,10.73.27,16,.79",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M188,53.09A159.69,159.69,0,0,1,64,112a161.14,161.14,0,0,1-30.16-2.84",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M85.93,41.69a159.91,159.91,0,0,1,79,138,160.45,160.45,0,0,1-4.73,38.78",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Prescription = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M72,128h52a44,44,0,0,0,0-88H72V192",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"112",y1,"128",x2,"200",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"200",y1,"160",x2,"144",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const FirstAidKit = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"32",y,"64",w,"192",h,"144",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M168,64V44a16,16,0,0,0-16-16H104A16,16,0,0,0,88,44V64",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"112",x2,"128",y2,"160",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"152",y1,"136",x2,"104",y2,"136",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const FileImage = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(pl,ps,"62.32 164.39 24 224 152 224 104 152 79.03 189.46 62.32 164.39",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"148 32 148 92 208 92",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M196,224h4a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8v84",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const MonitorPlay = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(pl,ps,"156 120 116 92 116 148 156 120",st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"32",y,"48",w,"192",h,"144",rx,"16",t,"translate(256 240) rotate(180)",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"160",y1,"228",x2,"96",y2,"228",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Clover = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M128,120s90-96,0-96S128,120,128,120Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M128,120s-96-90-96,0S128,120,128,120Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M128,120s-90,96,0,96S128,120,128,120Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M128,120s96,90,96,0S128,120,128,120Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M128,120s64,56,80,120",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const GoodreadsLogo = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M72,88a56,56,0,0,1,112,0v24a56,56,0,0,1-112,0Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M184,32V168a56,56,0,0,1-56,56c-19,0-37.88-9.49-48-24",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const VirtualReality = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"68 100 92 156 116 100",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"12",y,"56",w,"232",h,"144",rx,"72",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M148,140h20a20,20,0,0,0,0-40H148v56",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"188",y1,"156",x2,"175.53",y2,"138.54",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const EnvelopeSimpleOpen = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M224,96V200a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V96l96-64Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"224 96 145.46 152 110.55 152 32 96",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ChartPieSlice = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M32.42,137q-.42-4.44-.42-9A95.93,95.93,0,0,1,88,40.74v65.41Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M128,128.42V32A96,96,0,1,1,45.22,176.64Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const FolderSimple = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M224,88V200.89a7.11,7.11,0,0,1-7.11,7.11H40a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H93.33a8,8,0,0,1,4.8,1.6L128,80h88A8,8,0,0,1,224,88Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CaretDoubleLeft = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"200 208 120 128 200 48",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"120 208 40 128 120 48",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const SmileyMelting = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"164",cy,"136",r,"16"),s(c,cx,"120",cy,"92",r,"16"),s(p,d,"M56.44,192A95.67,95.67,0,0,1,32,126.06C33,74.58,75.15,32.73,126.63,32a96,96,0,0,1,72.93,160",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M80,236a20,20,0,0,1,20-20h40a20,20,0,0,0,0-40h-4c-26.51,0-56-21.49-56-48a49,49,0,0,1,.66-8",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const PokerChip = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"128",cy,"128",r,"48",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"80",x2,"128",y2,"32",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"94.06",y1,"94.06",x2,"60.12",y2,"60.12",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"80",y1,"128",x2,"32",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"94.06",y1,"161.94",x2,"60.12",y2,"195.88",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"176",x2,"128",y2,"224",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"161.94",y1,"161.94",x2,"195.88",y2,"195.88",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"176",y1,"128",x2,"224",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"161.94",y1,"94.06",x2,"195.88",y2,"60.12",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CloudArrowDown = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M84,208H72A56,56,0,1,1,85.92,97.74",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"120 176 152 208 184 176",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"152",y1,"128",x2,"152",y2,"208",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M80,128a80,80,0,1,1,151.46,36",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Newspaper = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M16,88v92a20,20,0,0,0,20,20",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"104",y1,"108",x2,"176",y2,"108",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"104",y1,"148",x2,"176",y2,"148",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M56,180V64a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V184a16,16,0,0,1-16,16H36A20,20,0,0,0,56,180Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CodepenLogo = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"24",y1,"96",x2,"24",y2,"160",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"232",y1,"96",x2,"232",y2,"160",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"40",x2,"128",y2,"104",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"152",x2,"128",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(pl,ps,"24 160 128 104 232 160 128 216 24 160",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(pl,ps,"24 96 128 40 232 96 128 152 24 96",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const NumberCircleEight = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"128",cy,"100",r,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"128",cy,"152",r,"28",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const SpeakerSlash = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"48",y1,"40",x2,"208",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"80",y1,"88",x2,"80",y2,"168",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M152,154.4V224L80,168H32a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H80l6.82-5.3",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"118.48 58.07 152 32 152 94.94",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M192,106.87a32,32,0,0,1,4,36.5",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M221.67,80a72,72,0,0,1,2,93.72",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ApplePodcastsLogo = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M131.23,224h-6.46a16,16,0,0,1-15.62-12.45l-12.74-56A16,16,0,0,1,112,136H144a16,16,0,0,1,15.62,19.55l-12.74,56A16,16,0,0,1,131.23,224Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"128",cy,"108",r,"28",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M65.74,201.08a96,96,0,1,1,124.52,0",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Path = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"200",cy,"200",r,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M72,56h96a32,32,0,0,1,0,64H72a40,40,0,0,0,0,80H176",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const BellSimpleRinging = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"96",y1,"228",x2,"160",y2,"228",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M184,24a102.71,102.71,0,0,1,36.29,40",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M35.71,64A102.71,102.71,0,0,1,72,24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M52,188a8,8,0,0,1-6.38-12.81C53.85,164.49,63.84,144.6,64,112a64,64,0,0,1,128,0c.16,32.6,10.15,52.49,18.35,63.19A8,8,0,0,1,204,188Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const GitPullRequest = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"72",cy,"192",r,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"72",cy,"64",r,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"72",y1,"88",x2,"72",y2,"168",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"200",cy,"192",r,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M200,168V110.63a16,16,0,0,0-4.69-11.32L144,48",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"144 96 144 48 192 48",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Smiley = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M168,152c-8.3,14.35-22.23,24-40,24s-31.7-9.65-40-24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"92",cy,"108",r,"16"),s(c,cx,"164",cy,"108",r,"16"))

export const ChatTeardropText = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"96",y1,"108",x2,"164",y2,"108",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"96",y1,"148",x2,"164",y2,"148",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M132,216H48a8,8,0,0,1-8-8V124a92,92,0,0,1,92-92h0a92,92,0,0,1,92,92h0A92,92,0,0,1,132,216Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const TrolleySuitcase = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"88",y,"68",w,"136",h,"76",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M132,68V40a8,8,0,0,1,8-8h32a8,8,0,0,1,8,8V68",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"72",cy,"224",r,"20"),s(c,cx,"216",cy,"224",r,"20"),s(p,d,"M24,48,45.66,69.66A8,8,0,0,1,48,75.31V180",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"32",y1,"180",x2,"240",y2,"180",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ArrowCircleUpRight = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"160",y1,"96",x2,"96",y2,"160",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"112 96 160 96 160 144",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const PersonSimpleWalk = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"152",cy,"48",r,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M48,133s56-52.65,88-24.87C153.94,123.67,168,148,208,148",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"152 232 152 176 109.54 145.67",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128.09",y1,"102.99",x2,"72",y2,"232",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const NotSupersetOf = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M56,48h96a56,56,0,0,1,0,112H56",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"208",y1,"40",x2,"48",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"208",y1,"200",x2,"62.55",y2,"200",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const MouseMiddleClick = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"108",y,"80",w,"40",h,"64",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"56",y,"24",w,"144",h,"208",rx,"56",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"80",x2,"128",y2,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"56",y1,"112",x2,"108",y2,"112",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"148",y1,"112",x2,"200",y2,"112",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Question = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"180",r,"16"),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M128,140v-8c17.67,0,32-12.54,32-28s-14.33-28-32-28S96,88.54,96,104v4",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Sphere = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M128,32c17.67,0,32,43,32,96s-14.33,96-32,96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M224,128c0,17.67-43,32-96,32s-96-14.33-96-32",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const FlowArrow = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"48",cy,"176",r,"32",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"208 48 240 80 208 112",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M80,176c88,0,40-96,128-96h32",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Copyright = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M160,152a40,40,0,1,1,0-48",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const FastForward = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M36,71.85v112.3a7.91,7.91,0,0,0,12.18,6.59l88.19-56.15a7.8,7.8,0,0,0,0-13.18L48.18,65.26A7.91,7.91,0,0,0,36,71.85Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M140,71.85v112.3a7.91,7.91,0,0,0,12.18,6.59l88.19-56.15a7.8,7.8,0,0,0,0-13.18L152.18,65.26A7.91,7.91,0,0,0,140,71.85Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Dog = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"92",cy,"136",r,"16"),s(c,cx,"164",cy,"136",r,"16"),s(l,x1,"128",y1,"192",x2,"128",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"144 176 128 192 112 176",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"104",y1,"48",x2,"152",y2,"48",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M104,48,50.37,32.24a8,8,0,0,0-9.8,6.29l-16.42,88c-1.54,8.23,9,13,14.16,6.42Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M152,48l53.63-15.76a8,8,0,0,1,9.8,6.29l16.42,88c1.54,8.23-9,13-14.16,6.42Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M208,120.38V184a32,32,0,0,1-32,32H80a32,32,0,0,1-32-32V120.38",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const PawPrint = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"212",cy,"108",r,"24"),s(c,cx,"44",cy,"108",r,"24"),s(c,cx,"92",cy,"60",r,"24"),s(c,cx,"164",cy,"60",r,"24"),s(p,d,"M128,104A36,36,0,0,0,93.43,130a43.49,43.49,0,0,1-20.67,25.9,32,32,0,0,0,27.73,57.62,72.49,72.49,0,0,1,55,0,32,32,0,0,0,27.73-57.62A43.46,43.46,0,0,1,162.57,130,36,36,0,0,0,128,104Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const UniteSquare = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(pl,ps,"96 216 216 216 216 96 160 96 160 40 40 40 40 160 96 160 96 216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40",y1,"40",x2,"216",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"96",y1,"40",x2,"216",y2,"160",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40",y1,"96",x2,"160",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const SquareHalfBottom = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"48",y,"48",w,"160",h,"160",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"48",y1,"128",x2,"208",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"88",y1,"128",x2,"88",y2,"208",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"128",x2,"128",y2,"208",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"168",y1,"128",x2,"168",y2,"208",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const GlobeHemisphereWest = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M75.88,123.26,89.2,100a8,8,0,0,1,6.94-4h16.71a7.9,7.9,0,0,0,3.86-1L129,88.24a7.12,7.12,0,0,0,1.49-1.07l26.92-24.33A8,8,0,0,0,159,53l-10.5-18.81",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M67.78,53.23,56,81.08A8,8,0,0,0,55.88,87l11.5,30.67a8,8,0,0,0,5.81,5l21.43,4.61a8,8,0,0,1,5.52,4.33l3.8,7.87a8,8,0,0,0,7.2,4.51h13.8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M213.09,172.48l-52.38-32.22a8.11,8.11,0,0,0-3.12-1.11l-22.82-3.08a8,8,0,0,0-8.38,4.67l-13.7,30.74a8,8,0,0,0,1.44,8.69l19.74,20.33a8,8,0,0,1,2,6.95l-3.17,16.44",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const EggCrack = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M208,152a80,80,0,0,1-160,0C48,88,96,24,128,24S208,88,208,152Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"152 152 160 112 128 104 172.68 53.93",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const PaperPlane = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"128",y1,"120",x2,"128",y2,"184",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M128,184l93.28,31.51A8,8,0,0,0,231,204.07l-96.09-168a8,8,0,0,0-14,0l-95.85,168a8,8,0,0,0,9.67,11.44Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const FileC = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"148 32 148 92 208 92",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M124,224h76a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8v68",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M76,200.87A22.12,22.12,0,0,1,60,208c-13.26,0-24-12.54-24-28s10.74-28,24-28a22.12,22.12,0,0,1,16,7.13",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const TextSubscript = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M240,208H192l43.17-57.56A24,24,0,1,0,193.37,128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40",y1,"56",x2,"144",y2,"176",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"144",y1,"56",x2,"40",y2,"176",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ArrowSquareDownLeft = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"40",y,"40",w,"176",h,"176",rx,"8",t,"translate(0 256) rotate(-90)",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"96 112 96 160 144 160",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"160",y1,"96",x2,"96",y2,"160",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Star = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M128,189.09l54.72,33.65a8.4,8.4,0,0,0,12.52-9.17l-14.88-62.79,48.7-42A8.46,8.46,0,0,0,224.27,94L160.36,88.8,135.74,29.2a8.36,8.36,0,0,0-15.48,0L95.64,88.8,31.73,94a8.46,8.46,0,0,0-4.79,14.83l48.7,42L60.76,213.57a8.4,8.4,0,0,0,12.52,9.17Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const GasCan = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M131.31,32H200a8,8,0,0,1,8,8V216a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V115.31a8,8,0,0,1,2.34-5.65l75.32-75.32A8,8,0,0,1,131.31,32Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"148",y1,"68",x2,"168",y2,"68",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"88",y1,"124",x2,"168",y2,"188",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"168",y1,"124",x2,"88",y2,"188",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M70.34,89.66l-24-24a8,8,0,0,1,0-11.32l24-24a8,8,0,0,1,11.32,0l24,24",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Numpad = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"64",cy,"48",r,"20"),s(c,cx,"128",cy,"48",r,"20"),s(c,cx,"192",cy,"48",r,"20"),s(c,cx,"64",cy,"104",r,"20"),s(c,cx,"128",cy,"104",r,"20"),s(c,cx,"192",cy,"104",r,"20"),s(c,cx,"64",cy,"160",r,"20"),s(c,cx,"128",cy,"160",r,"20"),s(c,cx,"128",cy,"216",r,"20"),s(c,cx,"192",cy,"160",r,"20"))

export const Balloon = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M208,104c0,44.18-35.82,92-80,92s-80-47.82-80-92a80,80,0,0,1,160,0Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"143.7 193.97 160 232 96 232 112.3 193.97",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M140,65.84A40.1,40.1,0,0,1,167.8,100",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const DropHalfBottom = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M208,144c0-72-80-128-80-128S48,72,48,144a80,80,0,0,0,160,0Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"56.54",y1,"180",x2,"199.46",y2,"180",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"48.08",y1,"140",x2,"207.92",y2,"140",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const PersonSimpleTaiChi = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"48",r,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40",y1,"108",x2,"216",y2,"108",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"128 108 128 144 48 216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"128 144 184 168 184 216",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Swap = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M84,160H208a8,8,0,0,0,8-8V48a8,8,0,0,0-8-8H96a8,8,0,0,0-8,8v4",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"104 140 84 160 104 180",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M172,96H48a8,8,0,0,0-8,8V208a8,8,0,0,0,8,8H160a8,8,0,0,0,8-8v-4",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"152 116 172 96 152 76",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const TrayArrowDown = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M40,156H76.69a8,8,0,0,1,5.65,2.34l19.32,19.32a8,8,0,0,0,5.65,2.34h41.38a8,8,0,0,0,5.65-2.34l19.32-19.32a8,8,0,0,1,5.65-2.34H216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"40",y,"40",w,"176",h,"176",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"76",x2,"128",y2,"140",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"96 108 128 140 160 108",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const IdentificationCard = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"160",y1,"108",x2,"188",y2,"108",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"168",y1,"148",x2,"188",y2,"148",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"32",y,"48",w,"192",h,"160",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"100",cy,"120",r,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M69.34,164c4.91-11.73,17.23-20,30.66-20s25.75,8.26,30.66,20",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Triangle = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M142.41,40.22l87.46,151.87C236,202.79,228.08,216,215.46,216H40.54C27.92,216,20,202.79,26.13,192.09L113.59,40.22C119.89,29.26,136.11,29.26,142.41,40.22Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Checks = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"16 130.29 54.4 168 144 80",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"134.11 152 150.4 168 240 80",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const NumberCircleFive = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M152,80H112l-8,48a27.57,27.57,0,0,1,20-8,28,28,0,0,1,0,56,27.57,27.57,0,0,1-20-8",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const FileSql = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"148 32 148 92 208 92",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M48,108V40a8,8,0,0,1,8-8h96l56,56v20",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"224 208 196 208 196 152",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M75.9,153.6s-29.43-7.78-31.8,11,38.43,10.12,35.78,30.72c-2.47,19.16-31.78,11-31.78,11",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(e,cx,"136",cy,"180",rx,"24",ry,"28",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"144",y1,"192",x2,"160",y2,"208",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Cheers = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M128,56l32-8s26.48,41.35,38.9,87.71a32,32,0,1,1-61.82,16.56C124.66,105.91,128,56,128,56Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"176.27",y1,"174.9",x2,"190.63",y2,"228.47",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"216",y1,"221.67",x2,"168",y2,"234.53",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M128,32,96,24S69.52,65.35,57.1,111.71a32,32,0,1,0,61.82,16.56C130.29,81.8,128,32,128,32Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"79.73",y1,"150.9",x2,"65.37",y2,"204.47",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40",y1,"197.67",x2,"88",y2,"210.53",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M128.49,97.88,179.94,85",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M126.92,75.73,75.23,62.81",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"196",y1,"36",x2,"208",y2,"32",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"212",y1,"72",x2,"224",y2,"72",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"52",y1,"28",x2,"40",y2,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"36",y1,"64",x2,"24",y2,"64",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const BellSlash = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M96,184v8a32,32,0,0,0,64,0v-8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"48",y1,"40",x2,"208",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M99.94,37.67A72,72,0,0,1,200,104c0,23.24,3.49,40.15,7.75,52.26",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M178.91,184H48a8,8,0,0,1-6.88-12C47.71,160.6,56,139.81,56,104A71.65,71.65,0,0,1,68.85,62.94",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const BookOpenUser = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M128,116a32,32,0,0,1,32-32h72V200H160a32,32,0,0,0-32,32",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M24,200H96a32,32,0,0,1,32,32V116A32,32,0,0,0,96,84H24Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M96,48a40,40,0,0,1,64,0",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Pizza = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M25.16,70.9a8,8,0,0,1,2.7-11,193.49,193.49,0,0,1,200.28,0,8,8,0,0,1,2.7,11l-96,157.26a8,8,0,0,1-13.7,0Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M42.07,98.6a152.1,152.1,0,0,1,171.86,0",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M160,187a32,32,0,1,1,31.91-52.28",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M47.47,107.45a32,32,0,1,1,31.6,51.77",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const SneakerMove = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M168,80a56,56,0,0,1-56-56L35,82.41a8,8,0,0,0-.63,11.87L148.06,208H224a8,8,0,0,0,8-8V180.94a8,8,0,0,0-4.42-7.15L199,159.48a56,56,0,0,1-31-50.09Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"32",y1,"172",x2,"55.49",y2,"172",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"48",y1,"208",x2,"91.49",y2,"208",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"108.63",y1,"112",x2,"60.03",y2,"63.4",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const TrainRegional = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M70.11,32H185.89a8,8,0,0,1,7.72,5.9L216,120l-22.39,82.1a8,8,0,0,1-7.72,5.9H70.11a8,8,0,0,1-7.72-5.9L40,120,62.39,37.9A8,8,0,0,1,70.11,32Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"208",x2,"128",y2,"136",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"40 120 128 136 216 120",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"96",y1,"88",x2,"160",y2,"88",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"96",y1,"208",x2,"72",y2,"240",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"160",y1,"208",x2,"184",y2,"240",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const HandWithdraw = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"120",y1,"136",x2,"120",y2,"16",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M184,128h0a82.38,82.38,0,0,1,40,70.65V240",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M76,56H64a8,8,0,0,0-8,8V200",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M160.94,240l-22.26-34a20,20,0,0,1,34.64-20L184,202.31V64a8,8,0,0,0-8-8H164",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"92 108 120 136 148 108",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Tire = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(e,cx,"168",cy,"128",rx,"16",ry,"40"),s(e,cx,"164",cy,"128",rx,"52",ry,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M232,224H92c-28.72,0-52-43-52-96S63.28,32,92,32h72",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"40.38 116.3 80 88 112.77 111.41",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"46.85 175.68 80 152 120.65 181.03",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const TextUnderline = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"64",y1,"224",x2,"192",y2,"224",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M184,56v72a56,56,0,0,1-112,0V56",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const HardDrive = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"24",y,"72",w,"208",h,"112",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"180",cy,"128",r,"16"))

export const AppleLogo = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M216,73.52C204.53,62.66,185,56,168,56a63.72,63.72,0,0,0-40,14h0A63.71,63.71,0,0,0,88.88,56C52,55.5,23.06,86.3,24,123.19a119.62,119.62,0,0,0,37.65,84.12A31.92,31.92,0,0,0,83.6,216h87.7a31.75,31.75,0,0,0,23.26-10c15.85-17,21.44-33.2,21.44-33.2h0c-16.79-11.53-24-30.87-24-52.78,0-18.3,11.68-34.81,24-46.48Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M148,12a32.12,32.12,0,0,0-9.77,8.37",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const TiktokLogo = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M168,102a95.55,95.55,0,0,0,56,18V80a56,56,0,0,1-56-56H128V156a28,28,0,1,1-40-25.31V88c-31.83,5.67-56,34.54-56,68a68,68,0,0,0,136,0Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CoatHanger = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M96.25,68A32,32,0,0,1,160,72L19.22,177.6A8,8,0,0,0,24,192H232a8,8,0,0,0,4.79-14.4L128,96",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const AlignRight = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"216",y1,"40",x2,"216",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"72",y,"56",w,"104",h,"52",rx,"8",t,"translate(248 164) rotate(180)",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"32",y,"148",w,"144",h,"52",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Briefcase = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"112",y1,"100",x2,"144",y2,"100",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"32",y,"60",w,"192",h,"144",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M168,60V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V60",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M224,114.31A191.09,191.09,0,0,1,128,140a191.14,191.14,0,0,1-96-25.68",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ForkKnife = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"80",y1,"40",x2,"80",y2,"88",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"80",y1,"128",x2,"80",y2,"224",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M208,168H152s0-104,56-128V224",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M44,40,40,88a40,40,0,0,0,80,0l-4-48",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Hoodie = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M172,184v24a8,8,0,0,0,8,8h26.57a8,8,0,0,0,7.71-5.9l21.44-78.59a8,8,0,0,0-1.06-6.54L180.38,43.56A8,8,0,0,0,173.73,40H82.27a8,8,0,0,0-6.65,3.56L21.34,125a8,8,0,0,0-1.06,6.54L41.72,210.1a8,8,0,0,0,7.71,5.9H76a8,8,0,0,0,8-8V184",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M128,84l56-35V176a8,8,0,0,1-8,8H80a8,8,0,0,1-8-8V49Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"148",y1,"71.49",x2,"148",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"108",y1,"71.49",x2,"108",y2,"136",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CurrencyDollarSimple = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"128",y1,"24",x2,"128",y2,"48",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"208",x2,"128",y2,"232",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M184,88a40,40,0,0,0-40-40H112a40,40,0,0,0,0,80h40a40,40,0,0,1,0,80H104a40,40,0,0,1-40-40",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const StackPlus = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"188",y1,"200",x2,"228",y2,"200",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"208",y1,"180",x2,"208",y2,"220",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"32 128 128 184 224 128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(pl,ps,"32 80 128 136 224 80 128 24 32 80",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"32 176 128 232 144 222.67",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Axe = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M164.47,185.65a8,8,0,0,1-13.6-4.68c-7.09-53.14-42.41-83.8-59.45-95.76A8,8,0,0,1,90.33,73L129,34.33a8,8,0,0,1,12.2,1.09c12,17,42.62,52.36,95.76,59.45a8,8,0,0,1,4.68,13.6Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M128.93,123.35,46.14,206.14a20,20,0,0,1-28.28-28.28l84.31-84.32",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M149.54,46.17l16.32-16.31a20,20,0,0,1,28.28,28.28L179.35,72.93",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Unite = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"109.09",y1,"109.09",x2,"146.91",y2,"146.91",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"96",cy,"96",r,"72",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"160",cy,"160",r,"72",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"161.64",y1,"125.64",x2,"225.64",y2,"189.64",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"66.36",y1,"30.36",x2,"130.36",y2,"94.36",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"125.64",y1,"161.64",x2,"189.64",y2,"225.64",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"30.36",y1,"66.36",x2,"94.36",y2,"130.36",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const SuitcaseRolling = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"88",y1,"216",x2,"88",y2,"240",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"168",y1,"216",x2,"168",y2,"240",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"104",y1,"96",x2,"104",y2,"176",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"152",y1,"96",x2,"152",y2,"176",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"56",y,"56",w,"144",h,"160",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M160,56V28a16,16,0,0,0-16-16H112A16,16,0,0,0,96,28V56",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const TumblrLogo = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M192,184v48H152a56,56,0,0,1-56-56V112H64V72h0a48,48,0,0,0,48-48h32V72h48v40H144v56a16,16,0,0,0,16,16Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const HandArrowUp = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M48,208H20a8,8,0,0,1-8-8V160a8,8,0,0,1,8-8H48",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M112,160h32l67-15.41a16.61,16.61,0,0,1,21,16h0a16.59,16.59,0,0,1-9.18,14.85L184,192l-64,16H48V152l25-25a24,24,0,0,1,17-7H140a20,20,0,0,1,20,20h0a20,20,0,0,1-20,20Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"192",y1,"24",x2,"192",y2,"104",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"160 56 192 24 224 56",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Wine = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"128",y1,"184",x2,"128",y2,"240",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"88",y1,"240",x2,"168",y2,"240",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M80.09,32h95.82l21.79,73.93a55.84,55.84,0,0,1-15.22,56.56,79.76,79.76,0,0,1-109,0A55.86,55.86,0,0,1,58.3,105.93Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M59.86,100.62C72.49,95.21,95.2,91.4,128,108c35.86,18.16,59.67,11.89,71.42,5.84",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ChatCenteredDots = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"104",cy,"120",r,"16"),s(c,cx,"152",cy,"120",r,"16"),s(p,d,"M105.07,192l16,28a8,8,0,0,0,13.9,0l16-28H216a8,8,0,0,0,8-8V56a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V184a8,8,0,0,0,8,8Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Intersection = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M56,200V120a72,72,0,0,1,144,0v80",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ArrowLineUp = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"128",y1,"224",x2,"128",y2,"80",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"56 152 128 80 200 152",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40",y1,"40",x2,"216",y2,"40",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const NumberFive = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M88,195.78a48,48,0,1,0,.92-72.36L104,48h64",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const MusicNoteSimple = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"88",cy,"184",r,"40",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"128 184 128 40 208 64",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Drop = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M208,144c0-72-80-128-80-128S48,72,48,144a80,80,0,0,0,160,0Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M166.17,156A40.11,40.11,0,0,1,140,182.17",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const NumberSquareSeven = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"40",y,"40",w,"176",h,"176",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"104 88 152 88 120 176",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ArrowsDownUp = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"112 176 80 208 48 176",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"80",y1,"48",x2,"80",y2,"208",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"144 80 176 48 208 80",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"176",y1,"208",x2,"176",y2,"48",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Eject = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"110",y,"94",w,"36",h,"176",rx,"8",t,"translate(-54 310) rotate(-90)",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M42.32,110l73.76-76.93a16.53,16.53,0,0,1,23.84,0L213.68,110a8.27,8.27,0,0,1-6,14H48.27A8.27,8.27,0,0,1,42.32,110Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ListPlus = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"40",y1,"64",x2,"216",y2,"64",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40",y1,"128",x2,"216",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40",y1,"192",x2,"144",y2,"192",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"184",y1,"192",x2,"232",y2,"192",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"208",y1,"168",x2,"208",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Warning = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M142.41,40.22l87.46,151.87C236,202.79,228.08,216,215.46,216H40.54C27.92,216,20,202.79,26.13,192.09L113.59,40.22C119.89,29.26,136.11,29.26,142.41,40.22Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"136",x2,"128",y2,"104",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"128",cy,"176",r,"16"))

export const TextAlignRight = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"40",y1,"64",x2,"216",y2,"64",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"88",y1,"104",x2,"216",y2,"104",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40",y1,"144",x2,"216",y2,"144",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"88",y1,"184",x2,"216",y2,"184",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const GearFine = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"80",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"128",x2,"232",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"128",x2,"76",y2,"37.93",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"128",x2,"76",y2,"218.07",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"48",x2,"128",y2,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"58.72",y1,"88",x2,"37.93",y2,"76",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"48",y1,"128",x2,"24",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"58.72",y1,"168",x2,"37.93",y2,"180",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"208",x2,"128",y2,"232",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"168",y1,"197.28",x2,"180",y2,"218.07",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"197.28",y1,"168",x2,"218.07",y2,"180",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"197.28",y1,"88",x2,"218.07",y2,"76",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"168",y1,"58.72",x2,"180",y2,"37.93",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ArrowElbowDownRight = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"168 128 216 176 168 224",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"72 32 72 176 216 176",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const LinkSimple = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"96",y1,"160",x2,"160",y2,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M112,76.11l30.06-30a48,48,0,0,1,67.88,67.88L179.88,144",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M76.11,112l-30,30.06a48,48,0,0,0,67.88,67.88L144,179.88",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ShippingContainer = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"128",y1,"48",x2,"128",y2,"208",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M128,208l106.2-30.34A8,8,0,0,0,240,170V86a8,8,0,0,0-5.8-7.69L128,48,22.87,63A8,8,0,0,0,16,70.94V185.06A8,8,0,0,0,22.87,193Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"92",y1,"128",x2,"52",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"72",y1,"56",x2,"72",y2,"200",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Trash = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"216",y1,"60",x2,"40",y2,"60",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"104",y1,"104",x2,"104",y2,"168",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"152",y1,"104",x2,"152",y2,"168",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M200,60V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V60",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M168,60V36a16,16,0,0,0-16-16H104A16,16,0,0,0,88,36V60",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ShoppingCartSimple = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M20,32H40L76.75,164.28A16,16,0,0,0,92.16,176H191a16,16,0,0,0,15.42-11.72L232,72H51.11",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"88",cy,"220",r,"20"),s(c,cx,"192",cy,"220",r,"20"))

export const PlusMinus = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"200",y1,"56",x2,"56",y2,"200",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"32",y1,"72",x2,"112",y2,"72",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"72",y1,"32",x2,"72",y2,"112",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"144",y1,"184",x2,"224",y2,"184",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Minus = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"40",y1,"128",x2,"216",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Dna = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"104",y1,"40",x2,"192",y2,"40",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M64,24V51.5a72,72,0,0,0,39.8,64.4l48.4,24.2A72,72,0,0,1,192,204.5V232",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"64",y1,"216",x2,"152",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"69.88",y1,"176",x2,"134.56",y2,"176",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M86.67,152.05A72,72,0,0,0,64,204.5V232",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M192,24V51.5A72,72,0,0,1,169.33,104",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"121.44",y1,"80",x2,"186.12",y2,"80",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Seat = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"112",y1,"232",x2,"216",y2,"232",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M100.84,76.42a8,8,0,0,0,0,7.16l31.78,64a8,8,0,0,0,7.16,4.42H208a8,8,0,0,1,8,8v28a8,8,0,0,1-8,8H112.11a8,8,0,0,1-7.15-4.42l-56.12-112a8,8,0,0,1,0-7.16L71,28.42a8,8,0,0,1,10.73-3.57l29.89,14.31a8,8,0,0,1,3.57,10.73Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Code = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"64 88 16 128 64 168",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"192 88 240 128 192 168",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"160",y1,"40",x2,"96",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Broadcast = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"32",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M181.67,80a71.94,71.94,0,0,1,0,96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M74.33,176a71.94,71.94,0,0,1,0-96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M208,49.62a111.88,111.88,0,0,1,0,156.76",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M48,206.38A111.88,111.88,0,0,1,48,49.62",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Scan = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"176 40 216 40 216 80",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"80 216 40 216 40 176",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"216 176 216 216 176 216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"40 80 40 40 80 40",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"84",y,"84",w,"88",h,"88",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const GlobeStand = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"136",cy,"104",r,"60",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"104",y1,"240",x2,"168",y2,"240",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"136",y1,"204",x2,"136",y2,"240",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M204,177.32A100,100,0,0,1,62.68,36",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const FirstAid = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M96,160H40a8,8,0,0,1-8-8V104a8,8,0,0,1,8-8H96V40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8V96h56a8,8,0,0,1,8,8v48a8,8,0,0,1-8,8H160v56a8,8,0,0,1-8,8H104a8,8,0,0,1-8-8V160Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const PhoneTransfer = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"144",y1,"72",x2,"216",y2,"72",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M156.39,153.34a8,8,0,0,1,7.59-.69l47.16,21.13a8,8,0,0,1,4.8,8.3A48.33,48.33,0,0,1,168,224,136,136,0,0,1,32,88,48.33,48.33,0,0,1,73.92,40.06a8,8,0,0,1,8.3,4.8l21.13,47.2a8,8,0,0,1-.66,7.53L81.32,125a7.93,7.93,0,0,0-.54,7.81c8.27,16.93,25.77,34.22,42.75,42.41a7.92,7.92,0,0,0,7.83-.59Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"184 40 216 72 184 104",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const HeartHalf = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M128,224S24,168,24,102A54,54,0,0,1,78,48c22.59,0,41.94,12.31,50,32Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M128,80c6.84-16.71,21.81-27.67,40-31.08",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M208,57.09A54,54,0,0,1,231.67,96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M223.3,136c-5.8,11.65-14.05,22.63-23.3,32.63",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M168,197.49A328.1,328.1,0,0,1,128,224",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ArrowArcRight = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"168 152 232 152 232 88",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M32,184a96,96,0,0,1,163.88-67.88L232,152",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const GoogleLogo = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M128,128h88a88,88,0,1,1-20.11-56",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ChartBarHorizontal = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"48",y1,"216",x2,"48",y2,"40",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"48 56 176 56 176 104",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"48 104 224 104 224 152 48 152",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"144 152 144 200 48 200",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Cigarette = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"24",y,"136",w,"208",h,"48",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"88",y1,"184",x2,"88",y2,"136",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M212,100s-18-7.6,0-38,0-38,0-38",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M164,100s-18-7.6,0-38,0-38,0-38",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const LessThanOrEqual = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"200 48 48 104 200 160",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"200",y1,"200",x2,"48",y2,"200",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const MicrosoftTeamsLogo = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"28",y,"68",w,"120",h,"120",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"104",y1,"104",x2,"72",y2,"104",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"88",y1,"152",x2,"88",y2,"104",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M106.33,68A32,32,0,1,1,148,85.67",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M148,88h36a8,8,0,0,1,8,8v72a56,56,0,0,1-56,56h0a56,56,0,0,1-52.32-36",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M184,88h39.26A4.74,4.74,0,0,1,228,92.74V152a32,32,0,0,1-38.15,31.41",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M167.65,51.27A24,24,0,1,1,188,88",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const FolderSimpleDashed = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M32,80V64a8,8,0,0,1,8-8H93.33a8,8,0,0,1,4.8,1.6L128,80",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M88,208H39.38A7.4,7.4,0,0,1,32,200.62V192",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"160",y1,"208",x2,"128",y2,"208",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M224,152v48.89a7.11,7.11,0,0,1-7.11,7.11H200",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M168,80h48a8,8,0,0,1,8,8v24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"32",y1,"120",x2,"32",y2,"152",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const TreePalm = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M128,104a65.47,65.47,0,0,1,17.84-45.25,58.87,58.87,0,0,1,86.16,0Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M128,104.52a64.26,64.26,0,0,1,87.42,23.26A63,63,0,0,1,221.81,176Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M128,104a65.47,65.47,0,0,0-17.84-45.25,58.87,58.87,0,0,0-86.16,0Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M128,104.52a64.26,64.26,0,0,0-87.42,23.26A63,63,0,0,0,34.19,176Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"104.52",x2,"128",y2,"224",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Tabs = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M12,168,34.29,93.7A8,8,0,0,1,42,88h60.1a8,8,0,0,1,7.66,5.7L132,168",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M148,88h10.05a8,8,0,0,1,7.66,5.7L188,168",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M204,88h10.05a8,8,0,0,1,7.66,5.7L244,168",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"12",y1,"168",x2,"244",y2,"168",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const QrCode = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"48",y,"48",w,"60",h,"60",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"48",y,"148",w,"60",h,"60",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"148",y,"48",w,"60",h,"60",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"148",y1,"148",x2,"148",y2,"172",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"148 208 184 208 184 148",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"184",y1,"164",x2,"208",y2,"164",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Keyboard = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"24",y,"56",w,"208",h,"144",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"64",y1,"128",x2,"192",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"64",y1,"92",x2,"192",y2,"92",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"64",y1,"164",x2,"72",y2,"164",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"108",y1,"164",x2,"148",y2,"164",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"184",y1,"164",x2,"192",y2,"164",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Usb = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"132",cy,"64",r,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"12",y1,"128",x2,"196",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(pl,ps,"196 92 196 164 244 128 196 92",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"108",y,"168",w,"48",h,"48",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M108,64H72a8,8,0,0,0-8,8V184a8,8,0,0,0,8,8h36",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const HandCoins = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M48,208H20a8,8,0,0,1-8-8V160a8,8,0,0,1,8-8H48",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"204",cy,"80",r,"28",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M112,160h32l67-15.41a16.61,16.61,0,0,1,21,16h0a16.59,16.59,0,0,1-9.18,14.85L184,192l-64,16H48V152l25-25a24,24,0,0,1,17-7H140a20,20,0,0,1,20,20h0a20,20,0,0,1-20,20Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M176.46,85.08a28,28,0,1,1,15.08-30.16",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Eyedropper = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M182.43,113.17l4.88,4.89a16,16,0,0,1,0,22.63l-9,9a8,8,0,0,1-11.31,0L106.34,89a8,8,0,0,1,0-11.31l9-9a16,16,0,0,1,22.63,0l4.89,4.88,25-25.1c10.79-10.79,28.37-11.45,39.44-1a28,28,0,0,1,.57,40.15Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M159.31,141.94l-56.68,56.69a32,32,0,0,1-32.06,8h0l-20,8.74a8,8,0,0,1-8.86-1.67h0a5.74,5.74,0,0,1-1.2-6.36l9.19-21.06h0a32,32,0,0,1,7.7-32.87l56.69-56.68",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const DeviceMobileCamera = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"24",y,"64",w,"208",h,"128",rx,"16",t,"translate(256) rotate(90)",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"128",cy,"68",r,"16"))

export const CircleHalfTilt = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128.01",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"195.89",y1,"60.12",x2,"60.12",y2,"195.88",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"188",y1,"68",x2,"188",y2,"202.94",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"148",y1,"108",x2,"148",y2,"221.9",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"108",y1,"148",x2,"108",y2,"221.9",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const TagChevron = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M32,200H187.72a8,8,0,0,0,6.65-3.56L240,128,194.37,59.56A8,8,0,0,0,187.72,56H32l48,72Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const FourK = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"32",y1,"44",x2,"224",y2,"44",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"32",y1,"212",x2,"224",y2,"212",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"148",y1,"80",x2,"148",y2,"176",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"204",y1,"80",x2,"148",y2,"144",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"204",y1,"176",x2,"170.4",y2,"118.4",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"108 152 36 152 92 80 92 176",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CrownSimple = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M54.71,200H201.29a8,8,0,0,0,7.88-6.61l22.7-104A8,8,0,0,0,218,82.76L176,128,135.26,36.65a8,8,0,0,0-14.52,0L80,128,38,82.76a8,8,0,0,0-13.9,6.66l22.7,104A8,8,0,0,0,54.71,200Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const PipeWrench = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M74.14,230.14a20,20,0,0,1-28.28-28.28L113.72,134,73.86,94.14a20,20,0,0,1,28.28-28.28l63.36,60.5a8,8,0,0,1,.16,11.45Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M81.88,102.16l-23.54,23.5a8,8,0,0,0,0,11.31l26.2,26.2",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M143.6,105.44l23.3-23.1a8,8,0,0,1,11.25-.06L195.6,97.66a8,8,0,0,0,11.31,0l3.72-3.72a32,32,0,0,0,0-45.25l-33-30.35a8,8,0,0,0-11.32,0L110.63,73.78",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const SealCheck = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M54.46,201.54c-9.2-9.2-3.1-28.53-7.78-39.85C41.82,150,24,140.5,24,128s17.82-22,22.68-33.69C51.36,83,45.26,63.66,54.46,54.46S83,51.36,94.31,46.68C106.05,41.82,115.5,24,128,24S150,41.82,161.69,46.68c11.32,4.68,30.65-1.42,39.85,7.78s3.1,28.53,7.78,39.85C214.18,106.05,232,115.5,232,128S214.18,150,209.32,161.69c-4.68,11.32,1.42,30.65-7.78,39.85s-28.53,3.1-39.85,7.78C150,214.18,140.5,232,128,232s-22-17.82-33.69-22.68C83,204.64,63.66,210.74,54.46,201.54Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"88 136 112 160 168 104",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const FileIni = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"36",y1,"152",x2,"36",y2,"208",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"120 152 120 208 80 152 80 208",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"164",y1,"152",x2,"164",y2,"208",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"148 32 148 92 208 92",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M208,224V88L152,32H56a8,8,0,0,0-8,8v68",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CloudArrowUp = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M100,208H72A56,56,0,1,1,85.92,97.74",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"124 160 156 128 188 160",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"156",y1,"208",x2,"156",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M80,128a80,80,0,1,1,156,25.05",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Backspace = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M61.67,204.12,16,128,61.67,51.88A8,8,0,0,1,68.53,48H216a8,8,0,0,1,8,8V200a8,8,0,0,1-8,8H68.53A8,8,0,0,1,61.67,204.12Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"160",y1,"104",x2,"112",y2,"152",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"160",y1,"152",x2,"112",y2,"104",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Pencil = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M92.69,216H48a8,8,0,0,1-8-8V163.31a8,8,0,0,1,2.34-5.65L165.66,34.34a8,8,0,0,1,11.31,0L221.66,79a8,8,0,0,1,0,11.31L98.34,213.66A8,8,0,0,1,92.69,216Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"136",y1,"64",x2,"192",y2,"120",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"164",y1,"92",x2,"76",y2,"180",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"104",y1,"208",x2,"48",y2,"152",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const YoutubeLogo = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(pl,ps,"164 128 108 92 108 164 164 128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M24,128c0,29.91,3.07,47.45,5.41,56.47A16,16,0,0,0,39,195.42C72.52,208.35,128,208,128,208s55.48.35,89-12.58a16,16,0,0,0,9.63-10.95c2.34-9,5.41-26.56,5.41-56.47s-3.07-47.45-5.41-56.47a16,16,0,0,0-9.63-11C183.48,47.65,128,48,128,48s-55.48-.35-89,12.58a16,16,0,0,0-9.63,11C27.07,80.54,24,98.09,24,128Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const SpeakerLow = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M80,168H32a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H80l72-56V224Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"80",y1,"88",x2,"80",y2,"168",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M192,106.87a32,32,0,0,1,0,42.3",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ReplitLogo = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M144,40V216a8,8,0,0,1-8,8H72a8,8,0,0,1-8-8V168a8,8,0,0,1,8-8H216a8,8,0,0,0,8-8V104a8,8,0,0,0-8-8H72a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h64A8,8,0,0,1,144,40Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CurrencyEth = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"128",y1,"16",x2,"128",y2,"240",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"216 128 128 168 40 128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(pl,ps,"128 16 216 128 128 240 40 128 128 16",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const WaveSawtooth = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"24 128 128 64 128 192 232 128",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const KeyReturn = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"176 104 176 136 80 136",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"104 112 80 136 104 160",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"32",y,"48",w,"192",h,"160",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CaretDown = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"208 96 128 176 48 96",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Headlights = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"176",y1,"80",x2,"240",y2,"80",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"176",y1,"176",x2,"240",y2,"176",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"176",y1,"128",x2,"240",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M88,200a72,72,0,0,1-72-72.55C16.3,87.75,49.2,56,88.9,56H128a8,8,0,0,1,8,8V192a8,8,0,0,1-8,8Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CaretUpDown = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"80 176 128 224 176 176",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"80 80 128 32 176 80",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const BatteryMedium = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"12",y,"64",w,"200",h,"128",rx,"16",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"92",y1,"104",x2,"92",y2,"152",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"52",y1,"104",x2,"52",y2,"152",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"244",y1,"104",x2,"244",y2,"152",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const BluetoothConnected = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(pl,ps,"128 32 192 80 128 128 128 32",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(pl,ps,"128 128 192 176 128 224 128 128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"64",y1,"80",x2,"128",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"64",y1,"176",x2,"128",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"56",cy,"128",r,"16"),s(c,cx,"208",cy,"128",r,"16"))

export const ProhibitInset = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"96",y1,"96",x2,"160",y2,"160",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Trolley = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"72",cy,"224",r,"20"),s(c,cx,"216",cy,"224",r,"20"),s(p,d,"M24,48,45.66,69.66A8,8,0,0,1,48,75.31V180",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"32",y1,"180",x2,"240",y2,"180",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ArrowFatDown = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M32,136l96,96,96-96H176V48a8,8,0,0,0-8-8H88a8,8,0,0,0-8,8v88Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CurrencyKrw = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"16",y1,"136",x2,"240",y2,"136",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"24 72 76 200 128 72 180 200 232 72",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const FolderSimpleStar = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M108,208H40a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H93.33a8,8,0,0,1,4.8,1.6L128,80h88a8,8,0,0,1,8,8v20",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(pl,ps,"184 198.54 213.67 216 205.6 183.41 232 161.61 197.35 158.94 184 128 170.65 158.94 136 161.61 162.4 183.41 154.33 216 184 198.54",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Bed = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M112,168V80H212a32,32,0,0,1,32,32v56",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"24",y1,"208",x2,"24",y2,"48",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"24 168 244 168 244 208",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"112",y1,"80",x2,"24",y2,"80",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Trademark = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"72",y1,"108",x2,"124",y2,"108",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"88",y1,"108",x2,"88",y2,"148",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"124 148 124 108 152 132 180 108 180 148",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Play = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M72,39.88V216.12a8,8,0,0,0,12.15,6.69l144.08-88.12a7.82,7.82,0,0,0,0-13.38L84.15,33.19A8,8,0,0,0,72,39.88Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const NumberCircleNine = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"128",cy,"108",r,"28",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"152.25",y1,"122",x2,"120",y2,"176",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const LockLaminated = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"40",y1,"132",x2,"216",y2,"132",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40",y1,"172",x2,"216",y2,"172",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"40",y,"88",w,"176",h,"128",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M88,88V56a40,40,0,0,1,80,0V88",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ShoppingBag = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"32",y,"48",w,"192",h,"160",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M168,88a40,40,0,0,1-80,0",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const SealWarning = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M54.46,201.54c-9.2-9.2-3.1-28.53-7.78-39.85C41.82,150,24,140.5,24,128s17.82-22,22.68-33.69C51.36,83,45.26,63.66,54.46,54.46S83,51.36,94.31,46.68C106.05,41.82,115.5,24,128,24S150,41.82,161.69,46.68c11.32,4.68,30.65-1.42,39.85,7.78s3.1,28.53,7.78,39.85C214.18,106.05,232,115.5,232,128S214.18,150,209.32,161.69c-4.68,11.32,1.42,30.65-7.78,39.85s-28.53,3.1-39.85,7.78C150,214.18,140.5,232,128,232s-22-17.82-33.69-22.68C83,204.64,63.66,210.74,54.46,201.54Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"80",x2,"128",y2,"132",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"128",cy,"172",r,"16"))

export const Vault = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"192",y1,"200",x2,"192",y2,"224",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"64",y1,"200",x2,"64",y2,"224",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"32",y,"48",w,"192",h,"152",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"180",y1,"124",x2,"224",y2,"124",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"148",cy,"124",r,"32",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Spade = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M150.54,176.7A48,48,0,0,0,224,136c0-64-96-112-96-112S32,72,32,136a48,48,0,0,0,73.46,40.7L96,224h64Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const SteeringWheel = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"144",r,"16"),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M33.6,145.55a128,128,0,0,1,188.8,0",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M139.26,223.35l18.79-50.16a8,8,0,0,1,7.5-5.19H215.3",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M116.69,223.34,97.94,173.2a8,8,0,0,0-7.49-5.2H40.7",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Subtract = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"96",cy,"96",r,"72",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M167.6,88.4a72,72,0,1,1-79.2,79.2",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"161.64",y1,"125.64",x2,"225.64",y2,"189.64",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"125.64",y1,"161.64",x2,"189.64",y2,"225.64",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const UsersThree = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"144",r,"40",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M72,216a65,65,0,0,1,112,0",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M164,72.55a32,32,0,1,1,39.63,45.28c14.33,3.1,27.89,14.84,36.4,26.17",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M16,144c8.51-11.33,22.06-23.07,36.4-26.17A32,32,0,1,1,92,72.55",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const UserSwitch = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"120",r,"36",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"204 128 224 148 244 128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"12 128 32 108 52 128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M32,108v20a96,96,0,0,0,174,56",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M224,148V128A96,96,0,0,0,50,72",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M66.62,201.82a64,64,0,0,1,122.76,0",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Cross = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M112,24h32a8,8,0,0,1,8,8V80h48a8,8,0,0,1,8,8v32a8,8,0,0,1-8,8H152v96a8,8,0,0,1-8,8H112a8,8,0,0,1-8-8V128H56a8,8,0,0,1-8-8V88a8,8,0,0,1,8-8h48V32A8,8,0,0,1,112,24Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ArrowsSplit = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"96 184 64 216 32 184",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"224 184 192 216 160 184",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"128 24 128 72 64 136 64 216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"128 72 192 136 192 216",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const PauseCircle = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"104",y1,"96",x2,"104",y2,"160",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"152",y1,"96",x2,"152",y2,"160",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const DiscoBall = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"112",y1,"16",x2,"112",y2,"72",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"112",cy,"152",r,"80",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M144,152c0,56-32,80-32,80s-32-24-32-80,32-80,32-80S144,96,144,152Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"32",y1,"152",x2,"192",y2,"152",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"228",y1,"72",x2,"228",y2,"104",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"244",y1,"88",x2,"212",y2,"88",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"180",y1,"16",x2,"180",y2,"56",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"200",y1,"36",x2,"160",y2,"36",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const FileDashed = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"148 32 148 92 208 92",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M72,224H56a8,8,0,0,1-8-8V184",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"120 32 152 32 208 88 208 136",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M48,64V40a8,8,0,0,1,8-8H80",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M208,176v40a8,8,0,0,1-8,8h-8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"48",y1,"104",x2,"48",y2,"144",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"112",y1,"224",x2,"152",y2,"224",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const BracketsCurly = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M80,40c-64,0,0,88-64,88,64,0,0,88,64,88",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M176,40c64,0,0,88,64,88-64,0,0,88-64,88",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const WifiX = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"204",r,"16"),s(l,x1,"224",y1,"56",x2,"176",y2,"104",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"224",y1,"104",x2,"176",y2,"56",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M168,165a68,68,0,0,0-80,0",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M128,56A163.31,163.31,0,0,0,24,93.19",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M128,104a115.51,115.51,0,0,0-72,25",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const NumberSquareTwo = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"40",y,"40",w,"176",h,"176",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M152,176H104l43.17-57.56A24,24,0,1,0,105.37,96",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CalendarSlash = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"176",y1,"24",x2,"176",y2,"52",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M48,40,208,216H48a8,8,0,0,1-8-8V48A8,8,0,0,1,48,40Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M102.06,40H208a8,8,0,0,1,8,8V165.34",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"145.69",y1,"88",x2,"216",y2,"88",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Bell = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M96,184v8a32,32,0,0,0,64,0v-8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M56,104a72,72,0,0,1,144,0c0,35.82,8.3,56.6,14.9,68A8,8,0,0,1,208,184H48a8,8,0,0,1-6.88-12C47.71,160.6,56,139.81,56,104Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const SelectionAll = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"144",y1,"40",x2,"112",y2,"40",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"112",y1,"216",x2,"144",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M184,40h24a8,8,0,0,1,8,8V72",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"216",y1,"144",x2,"216",y2,"112",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M184,216h24a8,8,0,0,0,8-8V184",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40",y1,"112",x2,"40",y2,"144",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M72,216H48a8,8,0,0,1-8-8V184",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M72,40H48a8,8,0,0,0-8,8V72",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"80",y,"80",w,"96",h,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Copy = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"168 168 216 168 216 40 88 40 88 88",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"40",y,"88",w,"128",h,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ImagesSquare = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"80",y,"40",w,"136",h,"136",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"128",cy,"88",r,"20"),s(p,d,"M184,176v32a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H80",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M108.69,176l65.65-65.66a8,8,0,0,1,11.32,0L216,140.69",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CheckCircle = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"88 136 112 160 168 104",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const HandsClapping = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M83.54,87,77.81,77A18,18,0,1,0,46.63,95l19,32.91",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M109.55,132l-26-45a18,18,0,1,1,31.17-18l36.45,63",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M102,47,96.28,37A18,18,0,1,0,65.1,55L77.81,77",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M114.71,69,102,47a18,18,0,1,1,31.17-18l37,64",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M199,175.76a72,72,0,0,0,10.7-86.19L188.61,53a18,18,0,0,0-31.18,18",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M81.81,156,61.59,121a18,18,0,1,0-31.18,18L40,155.59,65.63,200a72,72,0,0,0,124.71-72l-20.2-35A18,18,0,1,0,139,111",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Taxi = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M160,56,146,21a8,8,0,0,0-7.43-5H117.42A8,8,0,0,0,110,21L96,56",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"16",y1,"112",x2,"240",y2,"112",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M224,168v32a8,8,0,0,1-8,8H188a8,8,0,0,1-8-8V168",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M76,168v32a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V168",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M224,112,194.3,60a8,8,0,0,0-6.94-4H68.64a8,8,0,0,0-6.94,4L32,112v56H224Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Scales = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"128",y1,"40",x2,"128",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"104",y1,"216",x2,"152",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"56",y1,"88",x2,"200",y2,"56",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M24,168c0,17.67,20,24,32,24s32-6.33,32-24L56,88Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M168,136c0,17.67,20,24,32,24s32-6.33,32-24L200,56Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Union = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M200,64v80a72,72,0,0,1-144,0V64",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const GrainsSlash = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M128,224h0a80,80,0,0,1-80-80v-8h0a80,80,0,0,1,80,80Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"48",y1,"40",x2,"208",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M48,136V64h0a79.92,79.92,0,0,1,25.63,4.19",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M103.94,42.07A103.5,103.5,0,0,1,128,24S160.39,40.19,172,72.58",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M208,136V64h0a79.79,79.79,0,0,0-59.75,26.81",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M207.16,155.61A80.84,80.84,0,0,0,208,144v-8h0a80.9,80.9,0,0,0-17,1.81",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M154.19,156.8A79.81,79.81,0,0,0,128,216v8h0a79.86,79.86,0,0,0,61.29-28.58",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const LinkBreak = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M192,120l12.28-11.72a40,40,0,0,0-56.56-56.56L136,64",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M64,136,51.72,147.72a40,40,0,0,0,56.56,56.56L120,192",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"192",y1,"160",x2,"216",y2,"160",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40",y1,"96",x2,"64",y2,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"160",y1,"192",x2,"160",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"96",y1,"40",x2,"96",y2,"64",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ColumnsPlusLeft = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"24",y,"108",w,"176",h,"40",rx,"8",t,"translate(240 16) rotate(90)",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"100",y,"108",w,"176",h,"40",rx,"8",t,"translate(316 -60) rotate(90)",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"16",y1,"128",x2,"56",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"36",y1,"108",x2,"36",y2,"148",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const User = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"96",r,"64",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M32,216c19.37-33.47,54.55-56,96-56s76.63,22.53,96,56",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const FileRs = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M188,224h12a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8v68",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"148 32 148 92 208 92",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M48,192H64a20,20,0,0,0,0-40H48v56",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"84",y1,"208",x2,"73.32",y2,"189.7",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M147.9,153.6s-29.43-7.78-31.8,11,38.43,10.12,35.78,30.72c-2.47,19.16-31.78,11-31.78,11",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ReadCvLogo = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"53.87",y,"34.21",w,"148.27",h,"187.59",rx,"8",t,"translate(24.22 -20.31) rotate(10.02)",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"103.71 69.08 128 73.37 170.94 80.96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"96.78",y1,"108.48",x2,"164",y2,"120.35",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"89.84",y1,"147.87",x2,"123.46",y2,"153.81",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CaretUp = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"48 160 128 80 208 160",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const File = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M200,224H56a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h96l56,56V216A8,8,0,0,1,200,224Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"148 32 148 92 208 92",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const WaveSquare = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"232 128 232 184 128 184 128 72 24 72 24 128",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Square = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"40",y,"40",w,"176",h,"176",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Club = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M105,178.82a48,48,0,1,1-16.87-80,48,48,0,1,1,79.66,0,48,48,0,1,1-16.87,80L160,224H96Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const AirplaneLanding = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"104",y1,"216",x2,"244",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M232,180,55.37,130.54A32,32,0,0,1,32,99.73V48a8,8,0,0,1,10.53-7.59L48,42.24,60,75.46,104,88V48a8,8,0,0,1,10.53-7.59L120,42.24l24,57.2,64.56,18A32,32,0,0,1,232,148.32Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ArrowUDownRight = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"176 120 224 168 176 216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M176,56H88a56,56,0,0,0-56,56h0a56,56,0,0,0,56,56H224",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Motorcycle = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"48",cy,"160",r,"36",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"208",cy,"160",r,"36",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"144 52 176 52 208 160",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M20,72s43.31,18.34,68.56,29.81a24,24,0,0,0,25.16-3.18C121.64,92.09,134.4,88,152,88h56",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M48,160h88a72,72,0,0,1,72-72",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CurrencyCny = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"64",y1,"56",x2,"192",y2,"56",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"48",y1,"112",x2,"208",y2,"112",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M152,112v56a24,24,0,0,0,24,24h40V168",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M104,112v16a64,64,0,0,1-64,64",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Package = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"32.7 76.92 128 129.08 223.3 76.92",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"129.09",x2,"128",y2,"231.97",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M219.84,182.84l-88,48.18a8,8,0,0,1-7.68,0l-88-48.18a8,8,0,0,1-4.16-7V80.18a8,8,0,0,1,4.16-7l88-48.18a8,8,0,0,1,7.68,0l88,48.18a8,8,0,0,1,4.16,7v95.64A8,8,0,0,1,219.84,182.84Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"81.56 48.31 176 100 176 152",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const FolderSimpleLock = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M104,208H40a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H93.33a8,8,0,0,1,4.8,1.6l27.74,20.8a8,8,0,0,0,4.8,1.6H216a8,8,0,0,1,8,8v4",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"152",y,"164",w,"72",h,"44",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M168,164V148a20,20,0,0,1,40,0v16",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Sun = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"128",y1,"36",x2,"128",y2,"20",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"128",cy,"128",r,"56",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"60",y1,"60",x2,"48",y2,"48",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"60",y1,"196",x2,"48",y2,"208",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"196",y1,"60",x2,"208",y2,"48",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"196",y1,"196",x2,"208",y2,"208",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"36",y1,"128",x2,"20",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"220",x2,"128",y2,"236",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"220",y1,"128",x2,"236",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const PhoneSlash = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"48",y1,"40",x2,"208",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M114.45,113.09a83.51,83.51,0,0,0-14.18,3.6,7.93,7.93,0,0,0-5.12,6l-5.9,29.51A8,8,0,0,1,84.38,158L35.29,175.42A8,8,0,0,1,26,173c-14.6-18.83-13.26-43.83,4-61.12A135.14,135.14,0,0,1,83.53,79.08",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M131.18,72c34.63.76,69,14,94.76,39.79,17.29,17.29,18.63,42.29,4,61.12a7.87,7.87,0,0,1-4.46,2.84",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Knife = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M146,90l54,54s-72,92-176,68L198.2,37.8a19.8,19.8,0,0,1,28,0h0a19.8,19.8,0,0,1,0,28L174,118",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const PhoneOutgoing = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"160 56 200 56 200 96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"152",y1,"104",x2,"200",y2,"56",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M156.39,153.34a8,8,0,0,1,7.59-.69l47.16,21.13a8,8,0,0,1,4.8,8.3A48.33,48.33,0,0,1,168,224,136,136,0,0,1,32,88,48.33,48.33,0,0,1,73.92,40.06a8,8,0,0,1,8.3,4.8l21.13,47.2a8,8,0,0,1-.66,7.53L81.32,125a7.93,7.93,0,0,0-.54,7.81c8.27,16.93,25.77,34.22,42.75,42.41a7.92,7.92,0,0,0,7.83-.59Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CaretLeft = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"160 208 80 128 160 48",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const NotSubsetOf = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"208",y1,"40",x2,"48",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M200,48H128a80,80,0,0,0-80,80h0a80,80,0,0,0,80,80h72",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Visor = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"80",y1,"104",x2,"176",y2,"104",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M180,64a64,64,0,0,1,2.05,128c-14.9.47-28.71-7.19-39.8-15.31a24.13,24.13,0,0,0-28.5,0C102.66,184.79,88.85,192.45,74,192A64,64,0,0,1,76,64Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ArrowFatLeft = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M120,32,24,128l96,96V176h88a8,8,0,0,0,8-8V88a8,8,0,0,0-8-8H120Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ContactlessPayment = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M142,72a119,119,0,0,1,0,112",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M106,88a85,85,0,0,1,0,80",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CallBell = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"24",y1,"168",x2,"232",y2,"168",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"24",y1,"208",x2,"232",y2,"208",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"72",x2,"128",y2,"32",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M104,32h48",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M40,168v-8a88,88,0,0,1,176,0v8",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Quotes = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M108,144H40a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8h60a8,8,0,0,1,8,8v88a40,40,0,0,1-40,40",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M224,144H156a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8h60a8,8,0,0,1,8,8v88a40,40,0,0,1-40,40",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CloudSnow = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"168",cy,"208",r,"16"),s(c,cx,"120",cy,"208",r,"16"),s(c,cx,"72",cy,"208",r,"16"),s(p,d,"M88,88a68.06,68.06,0,1,1,68,72H76A44,44,0,1,1,90.2,74.34",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Stool = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"64",y,"32",w,"128",h,"40",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"168",y1,"72",x2,"192",y2,"224",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"64",y1,"224",x2,"88",y2,"72",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"72.84",y1,"168",x2,"183.16",y2,"168",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ChatTeardropDots = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M132,216H48a8,8,0,0,1-8-8V124a92,92,0,0,1,92-92h0a92,92,0,0,1,92,92h0A92,92,0,0,1,132,216Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"108",cy,"128",r,"16"),s(c,cx,"156",cy,"128",r,"16"))

export const Compass = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(pl,ps,"168 88 112 112 88 168 144 144 168 88",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Chat = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M45.15,230.11A8,8,0,0,1,32,224V64a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V192a8,8,0,0,1-8,8H80Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const BatteryVerticalEmpty = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"104",y1,"12",x2,"152",y2,"12",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"64",y,"44",w,"128",h,"200",rx,"16",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Cow = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M56,24h0a48,48,0,0,0,48,48h48a48,48,0,0,0,48-48h0",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"48",y,"172",w,"160",h,"52",rx,"26",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"104",cy,"128",r,"16"),s(c,cx,"152",cy,"128",r,"16"),s(p,d,"M160,72h32.78a48,48,0,0,1,47.07,38.53A8,8,0,0,1,232,120H192",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M96,72H63.22a48,48,0,0,0-47.07,38.53A8,8,0,0,0,24,120H64",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M64,174V104A32,32,0,0,1,96,72h64a32,32,0,0,1,32,32v70",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const VideoCamera = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"24",y,"64",w,"176",h,"128",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"200 112 244 80 244 176 200 144",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CheckSquareOffset = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M40,140V48a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H140",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"40 192 64 216 120 160",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const VideoConference = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"64",cy,"120",r,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M32,168c3.55-13.8,17.09-24,32-24s28.46,10.19,32,24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"32",y,"48",w,"192",h,"160",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"144",y1,"48",x2,"144",y2,"208",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"144",y1,"128",x2,"224",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"184",cy,"88",r,"16"),s(c,cx,"184",cy,"168",r,"16"))

export const Cursor = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M164.35,136.35a8,8,0,0,1,2.46-13l44.41-15.82a8,8,0,0,0-.71-14.85L50.44,40.41a8,8,0,0,0-10,10L92.68,210.51a8,8,0,0,0,14.85.71l15.82-44.41a8,8,0,0,1,13-2.46l51.31,51.31a8,8,0,0,0,11.31,0L215.66,199a8,8,0,0,0,0-11.31Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ArrowSquareUp = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"40",y,"40",w,"176",h,"176",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"96 120 128 88 160 120",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"168",x2,"128",y2,"88",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const HandArrowDown = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M48,208H20a8,8,0,0,1-8-8V160a8,8,0,0,1,8-8H48",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M112,160h32l67-15.41a16.61,16.61,0,0,1,21,16h0a16.59,16.59,0,0,1-9.18,14.85L184,192l-64,16H48V152l25-25a24,24,0,0,1,17-7H140a20,20,0,0,1,20,20h0a20,20,0,0,1-20,20Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"192",y1,"24",x2,"192",y2,"104",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"224 72 192 104 160 72",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Shower = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"52",cy,"236",r,"16"),s(c,cx,"84",cy,"204",r,"16"),s(c,cx,"20",cy,"204",r,"16"),s(c,cx,"52",cy,"172",r,"16"),s(p,d,"M244,40H216L184,72,161.91,201.31a8,8,0,0,1-13.54,4.34l-98-98a8,8,0,0,1,4.34-13.54L184,72",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const MicrosoftWordLogo = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"156",y1,"96",x2,"208",y2,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"156",y1,"160",x2,"208",y2,"160",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M64,68V40a8,8,0,0,1,8-8H200a8,8,0,0,1,8,8V216a8,8,0,0,1-8,8H72a8,8,0,0,1-8-8V188",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"64 104 76 152 92 120 108 152 120 104",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"28",y,"68",w,"128",h,"120",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const HeartBreak = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M128,75.63,116.18,63.82A54,54,0,0,0,24,102c0,66,104,122,104,122s104-56,104-122a54,54,0,0,0-92.18-38.18L112,91.63l30.18,30.19L120,144",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const GlobeHemisphereEast = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M184.42,205.68l-9.36-9.37a8,8,0,0,0-3.63-2.09L150,188.59a8,8,0,0,1-5.88-8.9l2.38-16.2a8,8,0,0,1,4.85-6.22l30.45-12.66a8,8,0,0,1,8.47,1.49L215,168.71",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M50.49,184.65l9.92-6.52A8,8,0,0,0,64,171.49l.21-36.23a8.06,8.06,0,0,1,1.35-4.41l20.94-31.3a8,8,0,0,1,11.34-2l19.81,13a8.06,8.06,0,0,0,5.77,1.45l31.46-4.26a8,8,0,0,0,5-2.71L182.06,79.2A8,8,0,0,0,184,74V50",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CursorClick = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M164.35,136.35a8,8,0,0,1,2.46-13l44.41-15.82a8,8,0,0,0-.71-14.85L50.44,40.41a8,8,0,0,0-10,10L92.68,210.51a8,8,0,0,0,14.85.71l15.82-44.41a8,8,0,0,1,13-2.46l51.31,51.31a8,8,0,0,0,11.31,0L215.66,199a8,8,0,0,0,0-11.31Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"96",y1,"12",x2,"96",y2,"16",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"12",y1,"96",x2,"16",y2,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"132",y1,"28",x2,"136",y2,"16",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"28",y1,"132",x2,"16",y2,"136",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Engine = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"16",y1,"108",x2,"16",y2,"172",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"100",y1,"32",x2,"164",y2,"32",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M220,176l-37.66,37.66a8,8,0,0,1-5.65,2.34H103.31a8,8,0,0,1-5.65-2.34L58.34,174.34A8,8,0,0,1,56,168.69V80a8,8,0,0,1,8-8H176.69a8,8,0,0,1,5.65,2.34L220,112h16a8,8,0,0,1,8,8v48a8,8,0,0,1-8,8Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"16",y1,"140",x2,"56",y2,"140",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"132",y1,"32",x2,"132",y2,"72",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const AirplaneTilt = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M88,224l24-24V176l24-24,48,72,24-24-32-88,33-31A24,24,0,0,0,175,47L144,80,56,48,32,72l72,48L80,144H56L32,168l40,16Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Chats = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M71.58,144,32,176V48a8,8,0,0,1,8-8H168a8,8,0,0,1,8,8v88a8,8,0,0,1-8,8Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M80,144v40a8,8,0,0,0,8,8h96.42L224,224V96a8,8,0,0,0-8-8H176",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const NumberCircleOne = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"132 176 132 80 108 96",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CheckSquare = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"88 136 112 160 168 104",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"40",y,"40",w,"176",h,"176",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const NotePencil = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(pl,ps,"128 160 96 160 96 128 192 32 224 64 128 160",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"164",y1,"60",x2,"196",y2,"92",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M216,140.57V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h67.43",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const FileCode = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"148 128 172 152 148 176",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"108 128 84 152 108 176",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M200,224a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"148 32 148 92 208 92",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const SubtitlesSlash = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"60",y1,"128",x2,"76",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"48",y1,"40",x2,"208",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M193.45,200H32a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H62.55",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M116.6,56H224a8,8,0,0,1,8,8V182.94",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"60",y1,"164",x2,"160.73",y2,"164",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"182.06",y1,"128",x2,"196",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"116",y1,"128",x2,"128",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Snowflake = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"128",y1,"64",x2,"128",y2,"192",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"104 40 128 64 152 40",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"104 216 128 192 152 216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"72.57",y1,"96",x2,"183.43",y2,"160",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"40 104 72.57 96 64 64",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"192 192 183.43 160 216 152",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"72.57",y1,"160",x2,"183.43",y2,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"64 192 72.57 160 40 152",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"216 104 183.43 96 192 64",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Moped = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"212",cy,"168",r,"32",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M28,164v4a32,32,0,0,0,64,0v-4",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"28 96 108 96 133.5 164",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M44,96v22.73A48,48,0,0,0,12,164H180.25",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"132 40 164 40 200.76 138.03",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const NumberSquareFive = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"40",y,"40",w,"176",h,"176",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M152,80H112l-8,48a27.57,27.57,0,0,1,20-8,28,28,0,0,1,0,56,27.57,27.57,0,0,1-20-8",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Warehouse = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"16",y1,"192",x2,"240",y2,"192",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"240",y1,"48",x2,"16",y2,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"76 192 76 120 180 120 180 192",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"76",y1,"156",x2,"180",y2,"156",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"32",y1,"92.57",x2,"32",y2,"192",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"224",y1,"51.43",x2,"224",y2,"192",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const WaveformSlash = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"48",y1,"96",x2,"48",y2,"160",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"48",y1,"40",x2,"208",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"88",y1,"84",x2,"88",y2,"224",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"128",x2,"128",y2,"192",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"64",x2,"128",y2,"68.54",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"168",y1,"96",x2,"168",y2,"112.54",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"208",y1,"80",x2,"208",y2,"156.54",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const AlignLeftSimple = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"32",y1,"56",x2,"32",y2,"200",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"72",y,"88",w,"160",h,"80",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Circle = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Television = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"32",y,"72",w,"192",h,"136",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"80 24 128 72 176 24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"184",cy,"116",r,"16"),s(c,cx,"184",cy,"164",r,"16"),s(l,x1,"140",y1,"208",x2,"140",y2,"72",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Invoice = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M64,56H40A16,16,0,0,0,24,72h0A16,16,0,0,0,40,88H56a16,16,0,0,1,16,16h0a16,16,0,0,1-16,16H28",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"48",y1,"48",x2,"48",y2,"56",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"48",y1,"120",x2,"48",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M104,56H224V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V164",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"112",y1,"104",x2,"224",y2,"104",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"88",y1,"152",x2,"224",y2,"152",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"168",y1,"104",x2,"168",y2,"200",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const SpeakerSimpleHigh = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M88,168H40a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H88l72-56V224Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"200",y1,"104",x2,"200",y2,"152",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"236",y1,"88",x2,"236",y2,"168",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CodeSimple = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"88 64 16 128 88 192",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"168 64 240 128 168 192",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Pinwheel = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M94.68,27.15a52,52,0,0,1,35.57,97.73Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M27.15,145.32a52,52,0,0,1,97.73-35.57Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M145.32,212.85a52,52,0,1,1-35.57-97.73Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M212.85,94.68a52,52,0,1,1-97.73,35.57Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"164.48",y1,"164.48",x2,"224",y2,"224",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ArrowsInLineHorizontal = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"128",y1,"40",x2,"128",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"16",y1,"128",x2,"88",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"56 96 88 128 56 160",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"240",y1,"128",x2,"168",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"200 160 168 128 200 96",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const BookOpenText = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M128,88a32,32,0,0,1,32-32h72V200H160a32,32,0,0,0-32,32",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M24,200H96a32,32,0,0,1,32,32V88A32,32,0,0,0,96,56H24Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"164",y1,"108",x2,"196",y2,"108",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"164",y1,"148",x2,"196",y2,"148",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Confetti = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M40.49,205.52,93,61.14a7.79,7.79,0,0,1,12.84-2.85l91.88,91.88A7.79,7.79,0,0,1,194.86,163L50.48,215.51A7.79,7.79,0,0,1,40.49,205.52Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"140",y1,"16",x2,"140",y2,"40",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"220",y1,"116",x2,"236",y2,"132",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"216",y1,"80",x2,"240",y2,"72",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"78.09",y1,"102.09",x2,"153.91",y2,"177.91",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"101.11",y1,"197.11",x2,"58.89",y2,"154.89",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M168.42,68c1.19-6.83,5.8-20,23.58-20,24,0,24-24,24-24",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const FileJpg = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"148 32 148 92 208 92",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M48,108V40a8,8,0,0,1,8-8h96l56,56v20",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M104,192h16a20,20,0,0,0,0-40H104v56",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M208,188h4v12.87A22.12,22.12,0,0,1,196,208c-13.25,0-24-12.54-24-28s10.75-28,24-28a21.28,21.28,0,0,1,12,3.75",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M32,190a18,18,0,0,0,36,0V152",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Handshake = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"76.68 72.63 128 56 179.32 72.63",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M38.37,62.42,12.85,113.48a8,8,0,0,0,3.57,10.73L44,138,76.68,72.63,49.11,58.85A8,8,0,0,0,38.37,62.42Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M212,138l27.58-13.79a8,8,0,0,0,3.57-10.73L217.63,62.42a8,8,0,0,0-10.74-3.57L179.32,72.63Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M177.36,72H144L98.34,116.29a8,8,0,0,0,1.38,12.42C117.23,139.9,141,139.13,160,120l36,34,16-16",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"196 154 158 192 96 176 44 138",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"106.93 216 80.33 209.13 56 191.36",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Truck = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M184,80h38.58A8,8,0,0,1,230,85l14,35",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"24",y1,"128",x2,"184",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"192",cy,"192",r,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"80",cy,"192",r,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"168",y1,"192",x2,"104",y2,"192",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M184,120h60v64a8,8,0,0,1-8,8H216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M56,192H32a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8H184V169.37",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const FunnelX = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M34.1,61.38A8,8,0,0,1,40,48H216a8,8,0,0,1,5.92,13.38L152,136v58.65a8,8,0,0,1-3.56,6.66l-32,21.33A8,8,0,0,1,104,216V136Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"192",y1,"168",x2,"240",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"240",y1,"168",x2,"192",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ArrowElbowLeftUp = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"136 96 88 48 40 96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"232 192 88 192 88 48",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Cake = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"128",y1,"72",x2,"128",y2,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M48,96H208a16,16,0,0,1,16,16v23.33c0,17.44-13.67,32.18-31.1,32.66A32,32,0,0,1,160,136a32,32,0,0,1-64,0,32,32,0,0,1-32.9,32C45.67,167.51,32,152.77,32,135.33V112A16,16,0,0,1,48,96Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M216,156.9V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V156.9",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M152,48a24,24,0,0,1-48,0c0-24,24-36,24-36S152,24,152,48Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const TextT = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"128",y1,"56",x2,"128",y2,"200",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"56 88 56 56 200 56 200 88",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"96",y1,"200",x2,"160",y2,"200",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CodaLogo = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M176,176a48,48,0,1,1,25.85-88.64A4,4,0,0,0,208,84V48a8,8,0,0,0-8-8H56a8,8,0,0,0-8,8V208a8,8,0,0,0,8,8H200a8,8,0,0,0,8-8V172a4,4,0,0,0-6.12-3.38C193.9,173.74,186.27,176.41,176,176Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const HighlighterCircle = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"104 148 104 104 152 80 152 148",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M168,215.3V156a8,8,0,0,0-8-8H96a8,8,0,0,0-8,8v59.3",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const GitlabLogo = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M175.35,96,195,42.62a3.93,3.93,0,0,1,7.53.38l19.89,76.12a49,49,0,0,1-18.87,52.4l-73.26,51.76a3.91,3.91,0,0,1-4.52,0L52.48,171.52a49,49,0,0,1-18.87-52.4L53.5,43A3.93,3.93,0,0,1,61,42.62L80.65,96Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"220.23",y1,"110.84",x2,"93.41",y2,"200.44",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"162.59",y1,"200.44",x2,"35.77",y2,"110.84",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const WashingMachine = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"176",cy,"80",r,"16"),s(rt,x,"36",y,"36",w,"184",h,"184",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"132",y1,"148",x2,"148",y2,"132",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"108",y1,"124",x2,"116",y2,"116",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M183.33,119.32a56,56,0,1,1-46.66-46.65",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const MarkerCircle = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M176,211.16V176a8,8,0,0,0-8-8H88a8,8,0,0,0-8,8v35.16",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M96,168V136a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v32",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M147.84,128,135.71,84.44a8,8,0,0,0-15.42,0L108.16,128Z",st,cc,sc,ro,sj,ro,sw,"24"))

export const DotsThreeVertical = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"60",r,"16"),s(c,cx,"128",cy,"128",r,"16"),s(c,cx,"128",cy,"196",r,"16"))

export const TwitchLogo = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M165.1,200H120L72,240V200H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8V156.25a8,8,0,0,1-2.88,6.15l-42.89,35.75A8.05,8.05,0,0,1,165.1,200Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"168",y1,"88",x2,"168",y2,"136",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"120",y1,"88",x2,"120",y2,"136",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Bread = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M48,112a32,32,0,0,1,0-64h92a32,32,0,0,1,0,64",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M128,48h72a32,32,0,0,1,0,64",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M148,111v89a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V111",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M208,111v89a8,8,0,0,1-8,8H140",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const NumberCircleSix = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"128",cy,"148",r,"28",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"103.75",y1,"134",x2,"136",y2,"80",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const HouseSimple = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M40,216H216V120a8,8,0,0,0-2.34-5.66l-80-80a8,8,0,0,0-11.32,0l-80,80A8,8,0,0,0,40,120Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const GasPump = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M56,216V56A16,16,0,0,1,72,40h80a16,16,0,0,1,16,16V216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"32",y1,"216",x2,"192",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M168,112h24a16,16,0,0,1,16,16v38a18,18,0,0,0,18,18h0a18,18,0,0,0,18-18V86.63a16,16,0,0,0-4.69-11.32L220,56",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"112",x2,"96",y2,"112",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Lasso = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(e,cx,"128",cy,"112",rx,"104",ry,"64",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M57.8,159.22C69,118.43,128,121.63,128,181.44c0,40.12-48,56.52-80,40.47",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ShirtFolded = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M128,80,97.66,109.64A8,8,0,0,1,84,104V48l16-16",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"80",x2,"128",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M172,48h28a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8H84",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"100",y1,"32",x2,"156",y2,"32",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M156,32l16,16v56a8,8,0,0,1-13.66,5.66L128,80",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M159.47,30A4,4,0,0,0,156,28H100a4,4,0,0,0-3.46,6l28,48a4,4,0,0,0,6.92,0l28-48A4,4,0,0,0,159.47,30Z"))

export const ArrowCircleUpLeft = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"144 96 96 96 96 144",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"160",y1,"160",x2,"96",y2,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ArrowsMerge = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"128 232 128 160 72 104 72 40",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"160 200 128 232 96 200",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"184 40 184 104 128 160",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const DotsThreeCircleVertical = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"128",cy,"96",r,"16"),s(c,cx,"128",cy,"160",r,"16"))

export const LastfmLogo = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M108.67,168A40,40,0,0,1,72,192H64a48,48,0,0,1-48-48V120A48,48,0,0,1,64,72h9.43a48,48,0,0,1,43.5,27.7l30.14,64.6a48,48,0,0,0,43.5,27.7H208a32,32,0,0,0,32-32h0a32,32,0,0,0-32-32H188a28,28,0,0,1-28-28h0a28,28,0,0,1,28-28h20a24,24,0,0,1,24,24h0",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Leaf = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M63.81,192.19c-47.89-79.81,16-159.62,151.64-151.64C223.43,176.23,143.62,240.08,63.81,192.19Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"160",y1,"96",x2,"40",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ShieldPlus = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"96",y1,"128",x2,"160",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"96",x2,"128",y2,"160",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M216,112V56a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8v56c0,96,88,120,88,120S216,208,216,112Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const SmileyAngry = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"92",cy,"140",r,"16"),s(c,cx,"164",cy,"140",r,"16"),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"92 92 128 116 164 92",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M108,177.5a39.11,39.11,0,0,1,40,0",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const DotsThreeCircle = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"96",cy,"128",r,"16"),s(c,cx,"160",cy,"128",r,"16"))

export const CaretDoubleUp = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"48 200 128 120 208 200",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"48 120 128 40 208 120",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const PhoneIncoming = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M156.39,153.34a8,8,0,0,1,7.59-.69l47.16,21.13a8,8,0,0,1,4.8,8.3A48.33,48.33,0,0,1,168,224,136,136,0,0,1,32,88,48.33,48.33,0,0,1,73.92,40.06a8,8,0,0,1,8.3,4.8l21.13,47.2a8,8,0,0,1-.66,7.53L81.32,125a7.93,7.93,0,0,0-.54,7.81c8.27,16.93,25.77,34.22,42.75,42.41a7.92,7.92,0,0,0,7.83-.59Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"152 64 152 104 192 104",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"152",y1,"104",x2,"200",y2,"56",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const MatrixLogo = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"64 40 40 40 40 216 64 216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"192 40 216 40 216 216 192 216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M128,160V120a24,24,0,0,0-48,0",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M176,160V120a24,24,0,0,0-48,0",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"80",y1,"96",x2,"80",y2,"160",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const AddressBookTabs = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"176",y1,"160",x2,"216",y2,"160",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"176",y1,"96",x2,"216",y2,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"40",y,"40",w,"176",h,"176",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"108",cy,"120",r,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M76,168c3.55-13.8,17.09-24,32-24s28.46,10.19,32,24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"176",y1,"40",x2,"176",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const MagnifyingGlassPlus = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"80",y1,"112",x2,"144",y2,"112",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"112",cy,"112",r,"80",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"168.57",y1,"168.57",x2,"224",y2,"224",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"112",y1,"80",x2,"112",y2,"144",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Pants = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M92,68H57.94a4,4,0,0,0-4,3.5l-6,48a4,4,0,0,0,4,4.5A44.05,44.05,0,0,0,96,80V72A4,4,0,0,0,92,68Z"),s(p,d,"M208,119.5l-6-48a4,4,0,0,0-4-3.5H164a4,4,0,0,0-4,4v8a44.06,44.06,0,0,0,44.06,44,4,4,0,0,0,4-4.5Z"),s(p,d,"M186,32a8,8,0,0,1,7.94,7l22,176a8,8,0,0,1-7.94,9H167.31a8,8,0,0,1-7.76-6.06L128,96,96.45,217.94A8,8,0,0,1,88.69,224H48a8,8,0,0,1-7.94-9l22-176A8,8,0,0,1,70,32Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"96",x2,"128",y2,"72",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"57.94",y1,"72",x2,"198.06",y2,"72",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Baby = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"92",cy,"128",r,"16"),s(c,cx,"164",cy,"128",r,"16"),s(p,d,"M156,172a53,53,0,0,1-56,0",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M123.93,32.08C108,52.06,108,72,108,72a20,20,0,0,0,40,0",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const PersonSimpleCircle = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"128",cy,"80",r,"20"),s(l,x1,"84",y1,"120",x2,"172",y2,"120",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"156 180 128 136 100 180",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"120",x2,"128",y2,"136",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const MicrophoneSlash = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"48",y1,"48",x2,"208",y2,"224",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"208",x2,"128",y2,"240",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M177.71,190.68A80,80,0,0,1,48,128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M208,128a79.86,79.86,0,0,1-5.85,30.1",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M150.68,161A39.77,39.77,0,0,1,128,168h0a40,40,0,0,1-40-40V92",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M95.46,40.74A39.93,39.93,0,0,1,128,24h0a40,40,0,0,1,40,40v56.54",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ArrowBendRightDown = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"104 176 152 224 200 176",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M56,32a96,96,0,0,1,96,96v96",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Heartbeat = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"32 136 72 136 88 112 120 160 136 136 160 136",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M24.33,96A54,54,0,0,1,78,48c22.59,0,41.94,12.31,50,32,8.06-19.69,27.41-32,50-32a54,54,0,0,1,54,54c0,66-104,122-104,122s-35.36-19-64.84-48",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const PersonSimple = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"48",r,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"108",x2,"128",y2,"152",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"64 224 128 152 192 224",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M32,132s40-24,96-24,96,24,96,24",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Signpost = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M200.44,152H40a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H200.44a8,8,0,0,1,5.94,2.65L240,112l-33.62,37.35A8,8,0,0,1,200.44,152Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"32",x2,"128",y2,"72",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"152",x2,"128",y2,"224",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Pepper = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M216,104a56,56,0,0,0-112,0c0,48.1-25.64,84-82.27,100.7-8.11,2.39-7.43,14.11.9,15.58C88,231.84,216,222.48,216,104Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"105.17 92.58 128 104 160 88 192 104 214.84 92.58",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M128,16a32,32,0,0,1,32,32",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const HandsPraying = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M141.78,16h0A13.77,13.77,0,0,1,155,25.78L192,148l16.27,16.27-45,43-25.94-25.94A32,32,0,0,1,128,158.75v-129A13.78,13.78,0,0,1,141.78,16Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M163.31,207.31l22.35,22.35a8,8,0,0,0,11.31,0L229.66,197a8,8,0,0,0,0-11.31l-22.35-22.35",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M118.63,181.37,92.69,207.31l-44-44L64,148,101,25.78A13.77,13.77,0,0,1,114.22,16h0A13.78,13.78,0,0,1,128,29.78v129A32,32,0,0,1,118.63,181.37Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M48.69,163.31,26.34,185.66a8,8,0,0,0,0,11.31L59,229.66a8,8,0,0,0,11.31,0l22.35-22.35",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const TrainSimple = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"96",y1,"208",x2,"72",y2,"240",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"160",y1,"208",x2,"184",y2,"240",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"48",y1,"128",x2,"208",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"48",y,"32",w,"160",h,"176",rx,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"88",cy,"168",r,"16"),s(c,cx,"168",cy,"168",r,"16"))

export const ClockCounterClockwise = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"128 80 128 128 168 152",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"72 104 32 104 32 64",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M67.6,192A88,88,0,1,0,65.77,65.77C54,77.69,44.28,88.93,32,104",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const DiceFive = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"40",y,"40",w,"176",h,"176",rx,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"88",cy,"88",r,"16"),s(c,cx,"128",cy,"128",r,"16"),s(c,cx,"168",cy,"88",r,"16"),s(c,cx,"88",cy,"168",r,"16"),s(c,cx,"168",cy,"168",r,"16"))

export const CaretLineLeft = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"192 208 112 128 192 48",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"72",y1,"48",x2,"72",y2,"208",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CalendarStar = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"40",y,"40",w,"176",h,"176",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"176",y1,"24",x2,"176",y2,"52",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"80",y1,"24",x2,"80",y2,"52",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(pl,ps,"128 158.54 157.67 176 149.6 143.41 176 121.61 141.35 118.94 128 88 114.65 118.94 80 121.61 106.4 143.41 98.33 176 128 158.54",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Student = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"32",y1,"64",x2,"32",y2,"144",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M56,216c15.7-24.08,41.11-40,72-40s56.3,15.92,72,40",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(pl,ps,"224 64 128 96 32 64 128 32 224 64",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M169.34,82.22a56,56,0,1,1-82.68,0",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Hourglass = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M128,128,67.2,82.4A8,8,0,0,1,64,76V40a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8V75.64A8,8,0,0,1,188.82,82L128,128h0",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M128,128,67.2,173.6A8,8,0,0,0,64,180v36a8,8,0,0,0,8,8H184a8,8,0,0,0,8-8V180.36a8,8,0,0,0-3.18-6.38L128,128h0",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const FileTs = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M180,224h20a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8v68",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"148 32 148 92 208 92",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M139.9,153.6s-29.43-7.78-31.8,11,38.43,10.12,35.78,30.72c-2.47,19.16-31.78,11-31.78,11",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"80",y1,"152",x2,"40",y2,"152",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"60",y1,"152",x2,"60",y2,"208",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const RewindCircle = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M117.2,85.18a12,12,0,0,0-12.7,1.45l-40,32a12,12,0,0,0,0,18.74l40,32A12,12,0,0,0,124,160V96A12,12,0,0,0,117.2,85.18Z"),s(p,d,"M173.2,85.18a12,12,0,0,0-12.7,1.45l-40,32a12,12,0,0,0,0,18.74l40,32A12,12,0,0,0,180,160V96A12,12,0,0,0,173.2,85.18Z"))

export const GpsFix = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"128",y1,"240",x2,"128",y2,"208",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"128",cy,"128",r,"80",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"16",x2,"128",y2,"48",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"16",y1,"128",x2,"48",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"240",y1,"128",x2,"208",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"128",cy,"128",r,"32",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const HeartStraight = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M128,224l89.36-90.64a50,50,0,1,0-70.72-70.72L128,80,109.36,62.64a50,50,0,0,0-70.72,70.72Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const UserCircleGear = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"200",y1,"56",x2,"200",y2,"36",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"200",y1,"56",x2,"180.98",y2,"49.82",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"200",y1,"56",x2,"188.24",y2,"72.18",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"200",y1,"56",x2,"211.76",y2,"72.18",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"200",y1,"56",x2,"219.02",y2,"49.82",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"128",cy,"120",r,"40",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M63.8,199.37a72,72,0,0,1,128.4,0",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M222.67,112A95.92,95.92,0,1,1,144,33.33",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CellSignalSlash = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"80",y1,"152",x2,"80",y2,"200",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40",y1,"192",x2,"40",y2,"200",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"48",y1,"40",x2,"208",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"160",y1,"163.2",x2,"160",y2,"200",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"120",y1,"119.2",x2,"120",y2,"200",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"160",y1,"72",x2,"160",y2,"103.74",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"200",y1,"32",x2,"200",y2,"147.74",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const HeadCircuit = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M124,100a24,24,0,1,1,24-24A24,24,0,0,1,124,100Z"),s(p,d,"M144,160a24,24,0,1,1,24-24A24,24,0,0,1,144,160Z"),s(p,d,"M120,216H72a8,8,0,0,1-8-8V171.81L36.42,159.18a8,8,0,0,1-3.77-10.3L56,104a80,80,0,1,1,128,64l8,64",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"214.38 88 184 88 144 136",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"124",y1,"76",x2,"124",y2,"24.89",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ChartLineUp = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"224 208 32 208 32 48",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"200 72 128 144 96 112 32 176",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"200 112 200 72 160 72",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const MusicNotesSimple = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"180",cy,"164",r,"28",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"52",cy,"196",r,"28",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"80 196 80 56 208 24 208 164",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const HairDryer = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"168",cy,"88",r,"20",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M24,113.22V62.78a8,8,0,0,1,6.68-7.89L168,32a56,56,0,0,1,0,112L30.68,121.11A8,8,0,0,1,24,113.22Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M152,208v4a32,32,0,0,0,32,32h16",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M202.49,132.12l-32.36,71.19a8,8,0,0,1-7.28,4.69H144a8,8,0,0,1-8-8V138.67",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const UploadSimple = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"128",y1,"144",x2,"128",y2,"32",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"216 144 216 208 40 208 40 144",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"88 72 128 32 168 72",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Folder = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M216.89,208H39.38A7.4,7.4,0,0,1,32,200.62V80H216a8,8,0,0,1,8,8V200.89A7.11,7.11,0,0,1,216.89,208Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M32,80V52a8,8,0,0,1,8-8H92.41a8,8,0,0,1,6,2.69L128,80",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const LinkedinLogo = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"32",y,"32",w,"192",h,"192",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"124",y1,"120",x2,"124",y2,"176",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"84",y1,"120",x2,"84",y2,"176",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M124,148a28,28,0,0,1,56,0v28",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"84",cy,"80",r,"16"))

export const Rabbit = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"104",cy,"160",r,"16"),s(c,cx,"152",cy,"160",r,"16"),s(py,ps,"144 200 128 213.31 112 200",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M146.56,98.73C152.16,72.39,167,16,190.94,16c28.22,0,18.27,65.06-6.91,113",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M109.44,98.73C103.84,72.39,89,16,65.06,16,36.84,16,46.79,81.06,72,129",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M191.71,153.82A44,44,0,1,1,128,213.3a44,44,0,1,1-63.71-59.48,64,64,0,0,1,127.42,0Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const GithubLogo = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M119.83,56A52,52,0,0,0,76,32a51.92,51.92,0,0,0-3.49,44.7A49.28,49.28,0,0,0,64,104v8a48,48,0,0,0,48,48h48a48,48,0,0,0,48-48v-8a49.28,49.28,0,0,0-8.51-27.3A51.92,51.92,0,0,0,196,32a52,52,0,0,0-43.83,24Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M104,232V192a32,32,0,0,1,32-32h0a32,32,0,0,1,32,32v40",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M104,208H76a32,32,0,0,1-32-32,32,32,0,0,0-32-32",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Pen = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M92.69,216H48a8,8,0,0,1-8-8V163.31a8,8,0,0,1,2.34-5.65L165.66,34.34a8,8,0,0,1,11.31,0L221.66,79a8,8,0,0,1,0,11.31L98.34,213.66A8,8,0,0,1,92.69,216Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"136",y1,"64",x2,"192",y2,"120",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"104",y1,"208",x2,"48",y2,"152",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"164 200 204 160 192 120",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CellSignalHigh = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"160",y1,"72",x2,"160",y2,"200",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"120",y1,"112",x2,"120",y2,"200",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"80",y1,"152",x2,"80",y2,"200",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40",y1,"192",x2,"40",y2,"200",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Printer = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"64 80 64 40 192 40 192 80",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"64",y,"160",w,"128",h,"56",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M64,176H24V96c0-8.84,7.76-16,17.33-16H214.67C224.24,80,232,87.16,232,96v80H192",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"188",cy,"120",r,"16"))

export const TrademarkRegistered = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M104,136h32a24,24,0,0,0,0-48H104v80",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"138.58",y1,"135.86",x2,"160",y2,"168",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const UserRectangle = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"40",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"32",y,"48",w,"192",h,"160",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M63.48,208a72,72,0,0,1,129,0",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Vignette = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"32",y,"48",w,"192",h,"160",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(e,cx,"128",cy,"128",rx,"56",ry,"40",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const MapPinArea = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"80",r,"20"),s(p,d,"M184,80c0,56-56,88-56,88S72,136,72,80a56,56,0,0,1,112,0Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M204,156.69c17.37,7.15,28,16.75,28,27.31,0,22.09-46.56,40-104,40S24,206.09,24,184c0-10.56,10.63-20.16,28-27.31",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const GenderTransgender = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"96",cy,"160",r,"64",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"141.25",y1,"114.75",x2,"216",y2,"40",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"172 40 216 40 216 84",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"144",y1,"64",x2,"192",y2,"112",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const MouseRightClick = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"56",y,"24",w,"144",h,"208",rx,"56",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"112",x2,"128",y2,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"56",y1,"112",x2,"200",y2,"112",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"189.14",y1,"46.86",x2,"128",y2,"108",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const HighDefinition = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M156,176h24a48,48,0,0,0,0-96H156Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"116",y1,"80",x2,"116",y2,"176",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"44",y1,"80",x2,"44",y2,"176",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"32",y1,"44",x2,"224",y2,"44",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"32",y1,"212",x2,"224",y2,"212",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"44",y1,"128",x2,"116",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const BellSimpleSlash = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"48",y1,"40",x2,"208",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"96",y1,"224",x2,"160",y2,"224",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M99.94,37.67A72,72,0,0,1,200,104c0,23.24,3.49,40.15,7.75,52.26",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M178.91,184H48a8,8,0,0,1-6.88-12C47.71,160.6,56,139.81,56,104A71.65,71.65,0,0,1,68.85,62.94",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const YinYang = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"128",cy,"176",r,"16"),s(p,d,"M128,224a48,48,0,0,1,0-96,48,48,0,0,0,0-96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"128",cy,"80",r,"16"))

export const ArrowElbowLeft = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"96 80 24 80 24 152",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"232 96 136 192 24 80",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ArrowsCounterClockwise = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"88 96 40 96 40 48",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M40,96,68.28,67.72A88,88,0,0,1,192,67",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"168 160 216 160 216 208",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M216,160l-28.28,28.28A88,88,0,0,1,64,189",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CaretCircleLeft = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"144 88 104 128 144 168",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ChatCircleText = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"96",y1,"108",x2,"160",y2,"108",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"96",y1,"148",x2,"160",y2,"148",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M79.93,211.11a96,96,0,1,0-35-35h0L32.42,213.46a8,8,0,0,0,10.12,10.12l37.39-12.47Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const DotsSixVertical = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"92",cy,"60",r,"16"),s(c,cx,"164",cy,"60",r,"16"),s(c,cx,"92",cy,"128",r,"16"),s(c,cx,"164",cy,"128",r,"16"),s(c,cx,"92",cy,"196",r,"16"),s(c,cx,"164",cy,"196",r,"16"))

export const CubeTransparent = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"104",y,"104",w,"112",h,"112",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"40",y,"40",w,"112",h,"112",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"152",y1,"40",x2,"216",y2,"104",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40",y1,"40",x2,"104",y2,"104",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40",y1,"152",x2,"104",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"152",y1,"152",x2,"216",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const WebcamSlash = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"128",y1,"176",x2,"128",y2,"208",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"48",y1,"40",x2,"208",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M163.26,166.79A72,72,0,0,1,68.85,62.94",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"32",y1,"208",x2,"200.73",y2,"208",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M134.64,135.31a32,32,0,0,1-37.18-40.9",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M99.94,37.67a72,72,0,0,1,91.42,100.56",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M131.27,72.17A32,32,0,0,1,160,103.74",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CurrencyCircleDollar = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"128",y1,"72",x2,"128",y2,"88",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"168",x2,"128",y2,"184",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M104,168h36a20,20,0,0,0,0-40H116a20,20,0,0,1,0-40h36",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Cube = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"32.7 76.92 128 129.08 223.3 76.92",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M131.84,25l88,48.18a8,8,0,0,1,4.16,7v95.64a8,8,0,0,1-4.16,7l-88,48.18a8,8,0,0,1-7.68,0l-88-48.18a8,8,0,0,1-4.16-7V80.18a8,8,0,0,1,4.16-7l88-48.18A8,8,0,0,1,131.84,25Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"129.09",x2,"128",y2,"232",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ClosedCaptioning = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"24",y,"56",w,"208",h,"144",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M112,155.72a32,32,0,1,1,0-55.44",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M192,155.72a32,32,0,1,1,0-55.44",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const GooglePhotosLogo = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M128,128V24a64,64,0,0,1,50,104",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M128,128H24A64,64,0,0,1,128,78",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M128,128V232A64,64,0,0,1,78,128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M128,128H232a64,64,0,0,1-104,50",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Scooter = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"44",cy,"172",r,"28",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"212",cy,"172",r,"28",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"136 40 168 40 203.14 145.43",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"187.75 99.25 120 176 72 176",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Calculator = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"32",y,"48",w,"192",h,"160",rx,"8",t,"translate(256) rotate(90)",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"92",y1,"76",x2,"164",y2,"76",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"104",cy,"128",r,"16"),s(c,cx,"152",cy,"128",r,"16"),s(c,cx,"104",cy,"176",r,"16"),s(c,cx,"152",cy,"176",r,"16"))

export const Hammer = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"108",y1,"116",x2,"140",y2,"148",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M40,64,53.77,49.77a88,88,0,0,1,124.46,0l63.43,63.89a8,8,0,0,1,0,11.31L213,153.66a8,8,0,0,1-11.31,0L168,120,66.34,221.66a8,8,0,0,1-11.31,0L34.34,201a8,8,0,0,1,0-11.31L136,88,79.78,31.78",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"218.08",y1,"89.92",x2,"178",y2,"130",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Polygon = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"120",cy,"48",r,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"40",cy,"120",r,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"160",cy,"208",r,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"208",cy,"72",r,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"184.85",y1,"65.69",x2,"143.15",y2,"54.31",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"102.16",y1,"64.06",x2,"57.84",y2,"103.94",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"59.36",y1,"134.19",x2,"140.64",y2,"193.81",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"167.99",y1,"185.36",x2,"200.01",y2,"94.64",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Cherries = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"88",cy,"160",r,"64",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M176,128C168,16,56,32,56,32c48,32,32,112,32,112",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M123.81,107a64,64,0,1,1,16.41,90.12",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M188,126.34a44.33,44.33,0,0,1-24,0",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M100,142.34a44.33,44.33,0,0,1-24,0",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Article = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"32",y,"48",w,"192",h,"160",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"80",y1,"92",x2,"176",y2,"92",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"80",y1,"128",x2,"176",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"80",y1,"164",x2,"176",y2,"164",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ColumnsPlusRight = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"-20",y,"108",w,"176",h,"40",rx,"8",t,"translate(196 60) rotate(90)",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"56",y,"108",w,"176",h,"40",rx,"8",t,"translate(272 -16) rotate(90)",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"200",y1,"128",x2,"240",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"220",y1,"108",x2,"220",y2,"148",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Robot = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"88",cy,"104",r,"16"),s(c,cx,"168",cy,"104",r,"16"),s(rt,x,"32",y,"56",w,"192",h,"160",rx,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"56",x2,"128",y2,"16",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"68",y,"144",w,"120",h,"36",rx,"18",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"148",y1,"144",x2,"148",y2,"180",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"108",y1,"144",x2,"108",y2,"180",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const FilePlus = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M200,224H56a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h96l56,56V216A8,8,0,0,1,200,224Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"148 32 148 92 208 92",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"104",y1,"152",x2,"152",y2,"152",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"128",x2,"128",y2,"176",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const SmileySad = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"92",cy,"108",r,"16"),s(c,cx,"164",cy,"108",r,"16"),s(p,d,"M167,172a48,48,0,0,0-78,0",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CirclesThree = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"76",r,"36",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"188",cy,"172",r,"36",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"68",cy,"172",r,"36",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const FileCpp = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M76,200.87A22.12,22.12,0,0,1,60,208c-13.26,0-24-12.54-24-28s10.74-28,24-28a22.12,22.12,0,0,1,16,7.13",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"148 32 148 92 208 92",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M48,108V40a8,8,0,0,1,8-8h96l56,56v20",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"108",y1,"180",x2,"148",y2,"180",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"160",x2,"128",y2,"200",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"180",y1,"180",x2,"220",y2,"180",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"200",y1,"160",x2,"200",y2,"200",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const TextStrikethrough = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"40",y1,"128",x2,"216",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M72,168c0,22.09,25.07,40,56,40s56-17.91,56-40c0-23.77-21.62-33-45.6-40",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M75.11,88c0-22.09,22-40,52.89-40,23,0,40.24,9.87,48,24",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Hand = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M168,76a20,20,0,0,1,40,0v76a80,80,0,0,1-80,80c-44.18,0-60.75-21.28-93.32-90a20,20,0,0,1,34.64-20L88,152V60a20,20,0,0,1,40,0",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M128,120V44a20,20,0,0,1,40,0v76",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CameraRotate = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M208,208H48a16,16,0,0,1-16-16V80A16,16,0,0,1,48,64H80L96,40h64l16,24h32a16,16,0,0,1,16,16V192A16,16,0,0,1,208,208Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"168 100 168 120 148 120",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"108 144 88 144 88 164",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M168,120l-11.72-12.28A40,40,0,0,0,104,104",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M152,160a40,40,0,0,1-52.28-3.73L88,144",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ChartDonut = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"128",y1,"168",x2,"128",y2,"224",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M44.85,80A96,96,0,1,0,128,32V88a40,40,0,1,1-34.65,20Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"89.35",y1,"138.36",x2,"35.25",y2,"152.85",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Anchor = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"128",y1,"232",x2,"128",y2,"80",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"128",cy,"56",r,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"88",y1,"120",x2,"168",y2,"120",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M216,144c0,64-88,24-88,88,0-64-88-24-88-88",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const EscalatorUp = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M32,208H88l96-104h40a8,8,0,0,0,8-8V56a8,8,0,0,0-8-8H168L72,152H32a8,8,0,0,0-8,8v40A8,8,0,0,0,32,208Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"176 176 200 152 224 176",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"200",y1,"152",x2,"200",y2,"208",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Stairs = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"48 176 104 176 104 136 152 136 152 96 208 96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"48",y,"32",w,"160",h,"192",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"104",y1,"176",x2,"208",y2,"176",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"152",y1,"136",x2,"208",y2,"136",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const HourglassLow = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M128,128,67.2,82.4A8,8,0,0,1,64,76V40a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8V75.64A8,8,0,0,1,188.82,82L128,128h0",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M128,128,67.2,173.6A8,8,0,0,0,64,180v36a8,8,0,0,0,8,8H184a8,8,0,0,0,8-8V180.36a8,8,0,0,0-3.18-6.38L128,128h0",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"64",y1,"184",x2,"192",y2,"184",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Ear = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M160,216c-8.07,9.77-18.34,16-32,16a44,44,0,0,1-44-44c0-41.49-36-28-36-84a80,80,0,0,1,160,0",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M173.86,168A16,16,0,0,1,144,160c0-24,24-32,24-56a40,40,0,0,0-80,0",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ArrowsInLineVertical = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"128",y1,"16",x2,"128",y2,"88",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"216",y1,"128",x2,"40",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"160 56 128 88 96 56",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"240",x2,"128",y2,"168",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"96 200 128 168 160 200",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const DropboxLogo = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(pl,ps,"76 48 24 84 76 120 128 84 76 48",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(pl,ps,"180 48 128 84 180 120 232 84 180 48",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(pl,ps,"76 120 24 156 76 192 128 156 76 120",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(pl,ps,"180 120 128 156 180 192 232 156 180 120",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"111.14 216.32 128 228 144.86 216.32",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Intersect = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"96",cy,"96",r,"72",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"160",cy,"160",r,"72",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"109.09",y1,"109.09",x2,"146.91",y2,"146.91",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const AirplaneTaxiing = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M144,100h64a32,32,0,0,1,32,32v24H61.06a32,32,0,0,1-30.65-22.8L16.34,86.3A8,8,0,0,1,24,76h8l24,24H92.91L80.42,62.53A8,8,0,0,1,88,52h8Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"208",cy,"204",r,"20"),s(c,cx,"112",cy,"204",r,"20"))

export const Ticket = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"100",y1,"56",x2,"100",y2,"200",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M24,160a32,32,0,0,0,0-64V64a8,8,0,0,1,8-8H224a8,8,0,0,1,8,8V96a32,32,0,0,0,0,64v32a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Stack = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"32 176 128 232 224 176",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"32 128 128 184 224 128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(pl,ps,"32 80 128 136 224 80 128 24 32 80",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CalendarMinus = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"40",y,"40",w,"176",h,"176",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"176",y1,"24",x2,"176",y2,"52",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"80",y1,"24",x2,"80",y2,"52",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40",y1,"88",x2,"216",y2,"88",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"104",y1,"152",x2,"152",y2,"152",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CraneTower = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"24",y1,"216",x2,"128",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"24",y1,"88",x2,"240",y2,"88",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"48",y1,"152",x2,"104",y2,"152",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M216,88v96a8,8,0,0,1-8,8H188a8,8,0,0,1-8-8v-8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"48 216 48 40 80 40 104 88 104 216",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CubeFocus = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"184 48 224 48 224 88",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"72 208 32 208 32 168",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"224 168 224 208 184 208",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"32 88 32 48 72 48",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(pl,ps,"128 64 184 96 184 160 128 192 72 160 72 96 128 64",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"72 96 128 128 184 96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"128",x2,"128",y2,"192",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Fan = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M104.31,124.14a52,52,0,1,1,47.69-92l-18.17,72.54",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M136.5,150.45A52,52,0,1,1,33,155.13l71.91-20.54",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M143.19,109.41A52,52,0,1,1,199,196.7l-53.74-52",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Textbox = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"112",y1,"48",x2,"112",y2,"208",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M152,72h80a8,8,0,0,1,8,8v96a8,8,0,0,1-8,8H152",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M112,184H24a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8h88",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"52",y1,"112",x2,"76",y2,"112",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"64",y1,"112",x2,"64",y2,"144",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Bandaids = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M49.37,94.63A32,32,0,0,1,94.63,49.37l112,112a32,32,0,0,1-45.26,45.26Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M161.37,49.37a32,32,0,0,1,45.26,45.26l-112,112a32,32,0,0,1-45.26-45.26Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Sword = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"70.19",y,"104.75",w,"39.62",h,"122.49",rx,"8.01",t,"translate(-91.02 112.26) rotate(-45)",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"160",y1,"96",x2,"104",y2,"152",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"80.44 128.43 152 40 216 40 216 104 127.57 175.56",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M62,166,32.34,195.65a8,8,0,0,0,0,11.32L49,223.66a8,8,0,0,0,11.32,0L90,194",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const BuildingOffice = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"24",y1,"216",x2,"244",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"84",y1,"80",x2,"92",y2,"80",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"132",y1,"80",x2,"140",y2,"80",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"84",y1,"120",x2,"92",y2,"120",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"132",y1,"120",x2,"140",y2,"120",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"88 216 88 160 136 160 136 216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"48",y1,"40",x2,"48",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"176",y1,"216",x2,"176",y2,"40",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40",y1,"40",x2,"184",y2,"40",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"220",y1,"216",x2,"220",y2,"88",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"176",y1,"88",x2,"228",y2,"88",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const FlowerTulip = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"128",y1,"232",x2,"128",y2,"176",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M48,56h0a80,80,0,0,1,80,80v40a0,0,0,0,1,0,0h0A80,80,0,0,1,48,96V56A0,0,0,0,1,48,56Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M208,56h0a0,0,0,0,1,0,0V96a80,80,0,0,1-80,80h0a0,0,0,0,1,0,0V136a80,80,0,0,1,80-80Z",t,"translate(336 232) rotate(180)",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"80 208 128 232 176 208",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M86.77,66C100,38,128,24,128,24s28,14,41.23,42",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const TextB = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M80,120h80a40,40,0,0,1,0,80H80V48h68a36,36,0,0,1,0,72",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CaretCircleDown = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"88 112 128 152 168 112",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Screencast = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M36,68V60a8,8,0,0,1,8-8H212a8,8,0,0,1,8,8V196a8,8,0,0,1-8,8H172",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M36,188a16,16,0,0,1,16,16",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M36,148a56,56,0,0,1,56,56",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M36,108a96,96,0,0,1,96,96",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ShareFat = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M30.93,198.72C47.39,181.19,90.6,144,152,144v48l80-80L152,32V80C99.2,80,31.51,130.45,24,195.54A4,4,0,0,0,30.93,198.72Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Dresser = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"136",y1,"176",x2,"120",y2,"176",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"136",y1,"80",x2,"120",y2,"80",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"48",y,"32",w,"160",h,"192",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"48",y1,"128",x2,"208",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const StarOfDavid = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(pl,ps,"128 240 224 72 32 72.04 128 240",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(pl,ps,"128 16 224 184 32 183.96 128 16",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Flashlight = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M72,24H184a8,8,0,0,1,8,8V77.33a8,8,0,0,1-1.6,4.8l-20.8,27.74a8,8,0,0,0-1.6,4.8V224a8,8,0,0,1-8,8H96a8,8,0,0,1-8-8V114.67a8,8,0,0,0-1.6-4.8L65.6,82.13a8,8,0,0,1-1.6-4.8V32A8,8,0,0,1,72,24Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"120",x2,"128",y2,"152",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"64",y1,"64",x2,"192",y2,"64",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const BatteryVerticalLow = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"104",y1,"12",x2,"152",y2,"12",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"64",y,"44",w,"128",h,"200",rx,"16",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"100",y1,"204",x2,"156",y2,"204",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const GitCommit = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"48",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"12",y1,"128",x2,"80",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"176",y1,"128",x2,"244",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const PersonArmsSpread = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"40",r,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M39,102.9C27.31,97.5,31.15,80,44,80H212c12.87,0,16.71,17.5,5,22.9L160,128l22.87,86.93a12,12,0,0,1-21.75,10.14L128,168,94.88,225.07a12,12,0,0,1-21.75-10.14L96,128Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Flask = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"88",y1,"32",x2,"168",y2,"32",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M152,32V99.14l62.85,104.74A8,8,0,0,1,208,216H48a8,8,0,0,1-6.86-12.12L104,99.14V32",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M71.63,153.08c13.23-2.48,32-1.41,56.37,10.92,32.25,16.33,54.75,12.91,67.5,7.65",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const PushPinSlash = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"96.29",y1,"159.71",x2,"48",y2,"208",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"48",y1,"40",x2,"208",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M84.32,80C73.54,79.16,58.53,81.32,43,93.85a8,8,0,0,0-.65,11.91l107.9,107.89a8,8,0,0,0,12-.83c5.21-6.93,12.27-18.39,14.12-31.58",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M190.66,137.47l39-39.13a8,8,0,0,0,0-11.31L169,26.34a8,8,0,0,0-11.31,0L122.09,62",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const SealQuestion = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M54.46,201.54c-9.2-9.2-3.1-28.53-7.78-39.85C41.82,150,24,140.5,24,128s17.82-22,22.68-33.69C51.36,83,45.26,63.66,54.46,54.46S83,51.36,94.31,46.68C106.05,41.82,115.5,24,128,24S150,41.82,161.69,46.68c11.32,4.68,30.65-1.42,39.85,7.78s3.1,28.53,7.78,39.85C214.18,106.05,232,115.5,232,128S214.18,150,209.32,161.69c-4.68,11.32,1.42,30.65-7.78,39.85s-28.53,3.1-39.85,7.78C150,214.18,140.5,232,128,232s-22-17.82-33.69-22.68C83,204.64,63.66,210.74,54.46,201.54Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"128",cy,"180",r,"16"),s(p,d,"M128,144v-8c17.67,0,32-12.54,32-28s-14.33-28-32-28S96,92.54,96,108v4",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const SquaresFour = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"48",y,"48",w,"60",h,"60",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"148",y,"48",w,"60",h,"60",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"48",y,"148",w,"60",h,"60",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"148",y,"148",w,"60",h,"60",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CircleHalf = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"32",x2,"128",y2,"224",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"176",y1,"44.84",x2,"176",y2,"211.16",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const SolarPanel = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"44",y1,"100",x2,"52",y2,"100",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"16",x2,"128",y2,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"68.6",y1,"40.6",x2,"74.26",y2,"46.26",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"187.4",y1,"40.6",x2,"181.74",y2,"46.26",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"212",y1,"100",x2,"204",y2,"100",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M88,100a40,40,0,0,1,80,0",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"46.61",y1,"176",x2,"209.39",y2,"176",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(pl,ps,"189.04 140 232 216 24 216 66.96 140 189.04 140",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"140",x2,"128",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Download = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"128",y1,"24",x2,"128",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"80 80 128 128 176 80",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M188,128h36a8,8,0,0,1,8,8v64a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V136a8,8,0,0,1,8-8H68",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"188",cy,"168",r,"16"))

export const Archive = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"24",y,"56",w,"208",h,"40",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M216,96v96a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"104",y1,"136",x2,"152",y2,"136",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const LegoSmiley = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"100",cy,"112",r,"16"),s(c,cx,"156",cy,"112",r,"16"),s(p,d,"M156,152a53,53,0,0,1-56,0",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"48",y,"60",w,"160",h,"136",rx,"24",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M96,60V32a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8V60",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M72,196v28a8,8,0,0,0,8,8h96a8,8,0,0,0,8-8V196",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const LightbulbFilament = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"128",y1,"192",x2,"128",y2,"144",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"96 112 128 144 160 112",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"88",y1,"232",x2,"168",y2,"232",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M80,168a79.86,79.86,0,0,1-32-63.53C47.76,61.09,82.72,25,126.07,24a80,80,0,0,1,49.77,144.1A19.81,19.81,0,0,0,168,184h0a8,8,0,0,1-8,8H96a8,8,0,0,1-8-8v-.23A19.8,19.8,0,0,0,80,168Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Umbrella = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M176,200a24,24,0,0,1-48,0V136",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M32,136a8,8,0,0,1-8-8.71,104.37,104.37,0,0,1,207.94,0,8,8,0,0,1-8,8.71Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M88,136c0-72,40-104,40-104s40,32,40,104",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const PianoKeys = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"40",y,"40",w,"176",h,"176",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"100",y1,"216",x2,"100",y2,"144",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"156",y1,"216",x2,"156",y2,"144",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"144",x2,"128",y2,"40",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"176 40 176 144 80 144 80 40",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const LetterCircleH = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"96",y1,"88",x2,"96",y2,"168",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"160",y1,"88",x2,"160",y2,"168",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"96",y1,"128",x2,"160",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Empty = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"88",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"208",y1,"40",x2,"48",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ListChecks = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"128",y1,"128",x2,"216",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"64",x2,"216",y2,"64",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"192",x2,"216",y2,"192",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"40 64 56 80 88 48",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"40 128 56 144 88 112",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"40 192 56 208 88 176",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const LockOpen = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"40",y,"88",w,"176",h,"128",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"128",cy,"152",r,"16"),s(p,d,"M88,88V56a40,40,0,0,1,40-40c19.35,0,36.29,13.74,40,32",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const MegaphoneSimple = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M226.24,145.68A8,8,0,0,0,232,138V102a8,8,0,0,0-5.76-7.68l-176-54A8,8,0,0,0,40,48V192a8,8,0,0,0,10.24,7.68Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M192,156.18V196a8,8,0,0,1-8,8H152a8,8,0,0,1-8-8V69.09",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const GameController = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"152",y1,"104",x2,"176",y2,"104",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"72",y1,"104",x2,"104",y2,"104",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"88",y1,"88",x2,"88",y2,"120",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M105.91,152,63.8,199.8a28,28,0,0,1-47.37-24.66L32.79,91a52,52,0,0,1,51.1-43H172a52,52,0,1,1,0,104Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M150.09,152l42.11,47.8a28,28,0,0,0,47.37-24.66L223.21,91",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const FileMinus = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M200,224H56a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h96l56,56V216A8,8,0,0,1,200,224Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"148 32 148 92 208 92",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"104",y1,"152",x2,"152",y2,"152",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const HandSwipeRight = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M60,216,34.68,174a20,20,0,0,1,34.64-20L88,184V76a20,20,0,0,1,40,0v56a20,20,0,0,1,40,0v16a20,20,0,0,1,40,0v36c0,13.84-1.75,25-4,32",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"212 24 244 56 212 88",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"172",y1,"56",x2,"244",y2,"56",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const BatteryWarningVertical = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"128",y1,"100",x2,"128",y2,"136",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"128",cy,"176",r,"16"),s(l,x1,"104",y1,"12",x2,"152",y2,"12",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"64",y,"44",w,"128",h,"200",rx,"16",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Guitar = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M60.07,112a16.23,16.23,0,0,0,14.72-10A34.21,34.21,0,0,1,82.4,90.4c17.23-17.23,49.82-12.57,72.8,10.4s27.63,55.57,10.4,72.8a34.21,34.21,0,0,1-11.66,7.61,16.23,16.23,0,0,0-10,14.72C143.56,208,139.39,219,131.2,227.2,110,248.4,69.88,242.67,41.6,214.4S7.6,146,28.8,124.8C37,116.61,48,112.44,60.07,112Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"60",y1,"172",x2,"84",y2,"196",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"112",cy,"144",r,"24"),s(l,x1,"204",y1,"12",x2,"244",y2,"52",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"174",y1,"54",x2,"202",y2,"82",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"139.39",y1,"88.61",x2,"210",y2,"18",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"167.39",y1,"116.61",x2,"238",y2,"46",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Rss = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M56,136a64,64,0,0,1,64,64",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M56,88A112,112,0,0,1,168,200",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M56,40A160,160,0,0,1,216,200",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"60",cy,"196",r,"16"))

export const Watch = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"68",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"128 100 128 128 156 128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M87,73.76l7.83-43.19A8,8,0,0,1,102.68,24h50.64a8,8,0,0,1,7.87,6.57L169,73.76",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M87,182.24l7.83,43.19a8,8,0,0,0,7.87,6.57h50.64a8,8,0,0,0,7.87-6.57L169,182.24",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ArrowElbowRightUp = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"120 96 168 48 216 96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"24 192 168 192 168 48",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Siren = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"128",y1,"20",x2,"128",y2,"12",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"200",y1,"44",x2,"208",y2,"36",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"56",y1,"44",x2,"48",y2,"36",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M48,168V140a80,80,0,0,1,80.61-80c44.11.33,79.39,36.89,79.39,81v27",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"32",y,"168",w,"192",h,"40",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M140,101.83A40.11,40.11,0,0,1,166.17,128",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Certificate = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"72",y1,"140",x2,"116",y2,"140",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"72",y1,"100",x2,"116",y2,"100",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"196",cy,"128",r,"44",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"168 161.94 168 228 196 212 224 228 224 161.94",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M168,192H40a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V94.06",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Syringe = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"184",y1,"24",x2,"232",y2,"72",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"48",x2,"208",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M140,60,50.34,149.66A8,8,0,0,0,48,155.31V208h52.69a8,8,0,0,0,5.65-2.34L196,116",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"102",y1,"98",x2,"128",y2,"124",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"74",y1,"126",x2,"100",y2,"152",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"168",y1,"88",x2,"208",y2,"48",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"48",y1,"208",x2,"24",y2,"232",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Bookmark = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M192,224l-64-40L64,224V48a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"192 176 127.99 136 64 176",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const LetterCircleV = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"160 96 128 176 96 96",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const FadersHorizontal = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"188",y1,"80",x2,"216",y2,"80",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40",y1,"80",x2,"148",y2,"80",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"124",y1,"176",x2,"216",y2,"176",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40",y1,"176",x2,"84",y2,"176",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"148",y1,"56",x2,"148",y2,"104",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"84",y1,"152",x2,"84",y2,"200",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Scissors = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"60",cy,"76",r,"28",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"60",cy,"180",r,"28",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"136",y1,"128",x2,"83.11",y2,"164.19",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"232",y1,"193.68",x2,"83.11",y2,"91.81",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"232",y1,"62.32",x2,"171.42",y2,"103.77",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const BugDroid = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M48,112a80,80,0,0,1,160,0v40a80,80,0,0,1-160,0Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"208",y1,"128",x2,"48",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"156",cy,"88",r,"16"),s(c,cx,"100",cy,"88",r,"16"),s(l,x1,"200",y1,"32",x2,"180.43",y2,"51.57",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"56",y1,"32",x2,"75.57",y2,"51.57",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Cardholder = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"32",y,"56",w,"192",h,"144",rx,"16",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M32,100H96a32,32,0,0,0,64,0h64",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CurrencyInr = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"72",y1,"80",x2,"200",y2,"80",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"72",y1,"40",x2,"200",y2,"40",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M108,40a52,52,0,0,1,0,104H72l88,80",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CaretCircleRight = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"112 88 152 128 112 168",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Memory = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M24,64H232a8,8,0,0,1,8,8V176a0,0,0,0,1,0,0H16a0,0,0,0,1,0,0V72A8,8,0,0,1,24,64Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"16",y1,"176",x2,"16",y2,"200",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"60",y1,"176",x2,"60",y2,"200",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"104",y1,"176",x2,"104",y2,"200",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"152",y1,"176",x2,"152",y2,"200",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"196",y1,"176",x2,"196",y2,"200",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"240",y1,"176",x2,"240",y2,"200",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"56",y,"100",w,"52",h,"40",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(rt,x,"148",y,"100",w,"52",h,"40",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const AlignCenterVerticalSimple = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"88",y,"40",w,"80",h,"176",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"208",y1,"128",x2,"168",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"88",y1,"128",x2,"48",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const At = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"40",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M184,208c-15.21,10.11-36.37,16-56,16a96,96,0,1,1,96-96c0,22.09-8,40-28,40s-28-17.91-28-40V88",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const UserGear = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"104",cy,"100",r,"60",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M20,200c20.55-24.45,49.56-40,84-40s63.45,15.55,84,40",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"220",y1,"136",x2,"220",y2,"112",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"220",y1,"136",x2,"197.17",y2,"128.58",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"220",y1,"136",x2,"205.89",y2,"155.42",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"220",y1,"136",x2,"234.11",y2,"155.42",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"220",y1,"136",x2,"242.83",y2,"128.58",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Books = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"48",y,"40",w,"64",h,"176",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M217.67,205.77l-46.81,10a8,8,0,0,1-9.5-6.21L128.18,51.8a8.07,8.07,0,0,1,6.15-9.57l46.81-10a8,8,0,0,1,9.5,6.21L223.82,196.2A8.07,8.07,0,0,1,217.67,205.77Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"48",y1,"76",x2,"112",y2,"76",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"48",y1,"180",x2,"112",y2,"180",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"133.99",y1,"79.42",x2,"196.44",y2,"66",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"141.45",y1,"114.93",x2,"203.91",y2,"101.51",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"155.56",y1,"182",x2,"218.01",y2,"168.58",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const GreaterThanOrEqual = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"56 48 208 104 56 160",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"208",y1,"200",x2,"56",y2,"200",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const MemberOf = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M200,48H128a80,80,0,0,0-80,80h0a80,80,0,0,0,80,80h72",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"200",y1,"128",x2,"48",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Plus = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"40",y1,"128",x2,"216",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"40",x2,"128",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Hash = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"48",y1,"96",x2,"224",y2,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"176",y1,"40",x2,"144",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"112",y1,"40",x2,"80",y2,"216",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"32",y1,"160",x2,"208",y2,"160",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CaretLineDown = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"208 72 128 152 48 72",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"48",y1,"192",x2,"208",y2,"192",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Ruler = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"21.49",y,"82.75",w,"213.02",h,"90.51",rx,"8",t,"translate(-53.02 128) rotate(-45)",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"64",x2,"160",y2,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"96",y1,"96",x2,"128",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"64",y1,"128",x2,"96",y2,"160",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const TextHFour = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"40",y1,"56",x2,"40",y2,"176",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"144",y1,"116",x2,"40",y2,"116",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"144",y1,"56",x2,"144",y2,"176",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"244 184 180 184 232 112 232 208",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const HandSwipeLeft = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"172",y1,"56",x2,"244",y2,"56",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"204 24 172 56 204 88",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M60,216,34.68,174a20,20,0,0,1,34.64-20L88,184V76a20,20,0,0,1,40,0v56a20,20,0,0,1,40,0v16a20,20,0,0,1,40,0v36c0,13.84-1.75,25-4,32",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const Rewind = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M224,71.85v112.3a7.91,7.91,0,0,1-12.18,6.59l-88.19-56.15a7.8,7.8,0,0,1,0-13.18l88.19-56.15A7.91,7.91,0,0,1,224,71.85Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M120,71.85v112.3a7.91,7.91,0,0,1-12.18,6.59L19.63,134.59a7.8,7.8,0,0,1,0-13.18l88.19-56.15A7.91,7.91,0,0,1,120,71.85Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const UserCheck = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"108",cy,"100",r,"60",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M24,200c20.55-24.45,49.56-40,84-40s63.45,15.55,84,40",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"196 144 212 160 244 128",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const CompassRose = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(pl,ps,"128 12 104 104 128 128 152 104 128 12",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(pl,ps,"128 244 104 152 128 128 152 152 128 244",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"152 104 244 128 152 152",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"104 104 12 128 104 152",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"128",cy,"128",r,"88",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ClockAfternoon = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(c,cx,"128",cy,"128",r,"96",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"184 128 128 128 168 168",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const VectorTwo = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"224 192 80 192 80 40",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"192 160 224 192 192 224",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(py,ps,"48 72 80 40 112 72",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const SquareSplitHorizontal = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"48",y,"48",w,"160",h,"160",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"48",x2,"128",y2,"208",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const HighHeel = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(p,d,"M32,120c50.38,0,93.51,31.28,111.3,75.08a8,8,0,0,0,7.42,4.92H236a8,8,0,0,0,8-8v-4.73A23.92,23.92,0,0,0,225.21,164L176,152,64,40C44.59,61.22,32,89,32,120Z",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M80,130v62a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V120",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ListMagnifyingGlass = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"40",y1,"64",x2,"216",y2,"64",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40",y1,"128",x2,"104",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"40",y1,"192",x2,"120",y2,"192",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"184",cy,"144",r,"32",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"206.63",y1,"166.63",x2,"232",y2,"192",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const GridFour = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(rt,x,"48",y,"48",w,"160",h,"160",rx,"8",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"128",y1,"48",x2,"128",y2,"208",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"48",y1,"128",x2,"208",y2,"128",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ArrowBendRightUp = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(py,ps,"104 80 152 32 200 80",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(p,d,"M56,224a96,96,0,0,0,96-96V32",f,n,st,cc,sc,ro,sj,ro,sw,"24"))

export const ShareNetwork = /** @__PURE__ */ () => _(vb,vd,s(rt,w,"256",h,"256",f,n),s(l,x1,"149.09",y1,"73.3",x2,"90.91",y2,"110.7",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(l,x1,"90.91",y1,"145.3",x2,"149.09",y2,"182.7",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"64",cy,"128",r,"32",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"176",cy,"200",r,"32",f,n,st,cc,sc,ro,sj,ro,sw,"24"),s(c,cx,"176",cy,"56",r,"32",f,n,st,cc,sc,ro,sj,ro,sw,"24"))
