old_obj = document.getElementById("old");
new_obj = document.getElementById("new");

// starting color - random
color = "#000000".replace(/0/g, function () {
  return (~~(Math.random() * 16)).toString(16);
});

/* TODO
 * set shade levels to a slider
 * labels on old/new color
 * message indicating the new color is copied to clipboard
 * don't copy to clipboard on init recolor
 */

function reColor(color) {
  old_color = shadeColor(color, 0); // normalize
  new_color = shadeColor(old_color, -1); // TODO: number controlled by user

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

  navigator.clipboard.writeText(new_color); //  TODO: don't copy on init run
  console.log({ old_color }, { new_color });
}

// recolor on page load
reColor(color);

// listen for pasted colors and recolor boxes on paste
document.addEventListener("paste", (event) => {
  let paste = (event.clipboardData || window.clipboardData).getData("text");
  if (paste.match(/^#?[0-9A-F]{6}$/i)) {
    reColor(paste);
  } else {
    console.log(`pasted string is not a color:\n\t${paste}`);
  }
});
