function shadeColor(color = "#007aff", offset = -1) {
  let chars = color.replace("#", "").toLowerCase().split("");
  const hexValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
  let newColor = "#";

  chars.forEach(function (char) {
    let index = hexValues.indexOf(char) + (offset || 0);
    index = Math.max(0, Math.min(hexValues.length - 1, index));
    newColor += hexValues[index];
  });

  return newColor;
}