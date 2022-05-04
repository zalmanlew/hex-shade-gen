old_obj = document.getElementById("old");
old_obj_txt = document.getElementById("old-text");

new_obj = document.getElementById("new");
new_obj_txt = document.getElementById("new-text");

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
  color = shadeColor(color, 0); // normalize

  old_obj.style.backgroundColor = color;
  old_obj_txt.style.color = shadeColor(color, 3); // text color
  old_obj_txt.innerText = color;

  new_color = shadeColor(color, -1); // TODO: number controlled by user

  new_obj.style.backgroundColor = new_color;
  new_obj_txt.style.color = shadeColor(new_color, 3);
  new_obj_txt.innerText = new_color;  // text color

  navigator.clipboard.writeText(new_color); //  TODO: don't copy on init run
}

// recolor on page load
reColor(color);

// listen for pasted colors and recolor boxes on paste
document.addEventListener("paste", (event) => {
  let paste = (event.clipboardData || window.clipboardData).getData("text");
  if (paste.match(/^#?[0-9A-F]{6}$/i)) {
    reColor(paste);
  } else {
    return;
  }
});
