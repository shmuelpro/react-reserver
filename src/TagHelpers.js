export function isHexLight(color) {
  const hex = color.replace('#', '')
  const colorRed = parseInt(hex.substr(0, 2), 16)
  const colorGreen = parseInt(hex.substr(2, 2), 16)
  const colorBlue = parseInt(hex.substr(4, 2), 16)
  const brightness =
    (colorRed * 299 + colorGreen * 587 + colorBlue * 114) / 1000
  return brightness > 155
}
export function shadeColor2(color, percent) {
  const f = parseInt(color.slice(1), 16)
  const t = percent < 0 ? 0 : 255
  const p = percent < 0 ? percent * -1 : percent
  const R = f >> 1
  const G = (f >> 8) & 0x00ff
  const B = f & 0x0000ff
  return (
    '#' +
    (
      0x1000000 +
      (Math.round((t - R) * p) + R) * 0x10000 +
      (Math.round((t - G) * p) + G) * 0x100 +
      (Math.round((t - B) * p) + B)
    )
      .toString(16)
      .slice(1)
  )
}

export function getRandomColor() {
  const letters = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}
