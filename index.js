function shadeColor(color = "#007aff", offset = -1) {
  let newColor = "#";
  for (let i = 1; i < 7; i++) {
    let char = color[i];
    let index = parseInt(char, 16) + offset;
    index = Math.max(0, Math.min(15, index)).toString(16);
    newColor += index;
  }
  return newColor;
}
