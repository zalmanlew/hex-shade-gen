function shadeColor(color = "007aff", offset = -1) {
  // normalize color and split to array
  let chars = color.replace("#", "").substr(0, 6).toLowerCase().split("");

  // ordered hex values
  const _hex = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];

  let new_color = "#";

  chars.forEach(function (char) {
    let index = _hex.indexOf(char) + (offset || 0);

    // if the index would cause this color to go 'out of bounds' then we leave that char as is
    if (index >= _hex.length) {
      index = _hex.length - 1;
    }
    if (index < 0) {
      index = 0;
    }
    
    new_color += _hex[index];
  });

  return new_color;
}
