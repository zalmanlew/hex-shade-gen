old_obj = document.getElementById("old");
new_obj = document.getElementById("new");

old_obj.addEventListener("click", function () {
  copyToClipboard(old_obj);
});
new_obj.addEventListener("click", function () {
  copyToClipboard(new_obj);
});

function copyToClipboard(o) {
  console.log(o.firstChild.innerText);
  navigator.clipboard.writeText(o.firstChild.innerText);
}

// starting color - randomly generated
color = "#000000".replace(/0/g, function () {
  return (~~(Math.random() * 16)).toString(16);
});

/* TODO
 * message indicating the new color is copied to clipboard
 */

function reColor(color, copy = true) {
  shade = parseInt(document.getElementById("slider").value);

  old_color = shadeColor(color, 0); // normalize
  new_color = shadeColor(old_color, shade);

  Object.assign(old_obj.style, {
    backgroundColor: old_color,
    color: shadeColor(old_color, 3),
  });

  Object.assign(new_obj.style, {
    backgroundColor: new_color,
    color: shadeColor(new_color, 3),
  });

  // set text to color of the text
  old_obj.firstChild.innerText = old_color;
  new_obj.firstChild.innerText = new_color;

  if (copy) {
    navigator.clipboard.writeText(new_color);
  }
  console.log({ old_color }, { shade }, { new_color });
}

// recolor on page load - without copying to clipboard
reColor(color, (copy = false));

// listen for pasted colors and recolor boxes on paste
document.addEventListener("paste", (event) => {
  let paste = (event.clipboardData || window.clipboardData).getData("text");
  if (paste.match(/^#?[0-9A-F]{6}$/i)) {
    reColor(paste);
  } else {
    console.log(`pasted string is not a color:\n\t${paste}`);
  }
});
