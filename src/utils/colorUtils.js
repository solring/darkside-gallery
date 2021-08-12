 // Helper functions
 function RGBtoHex(color) {
  const [r, g, b] = color
  const rr = r.toString(16)
  const gg = g.toString(16)
  const bb = b.toString(16)
  return `#${rr}${gg}${bb}`
}

function hexToRGB(color) {
  if(typeof color !== 'string' || color.length !== 7) return [255, 255, 255]
  let r = '0x' + color[1] + color[2]
  let g = '0x' + color[3] + color[4]
  let b = '0x' + color[5] + color[6]

  return [
    Number.parseInt(r),
    Number.parseInt(g),
    Number.parseInt(b),
  ]
}

function hexToRGBAStr(color, opacity) {
  const [r, g, b] = hexToRGB(color)
  return `rgba(${r}, ${g}, ${b}, ${opacity})`
}

export { RGBtoHex, hexToRGB, hexToRGBAStr }