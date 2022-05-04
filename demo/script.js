old_obj = document.getElementById("old");
old_obj_txt = document.getElementById("old-text");

new_obj = document.getElementById("new");
new_obj_txt = document.getElementById("new-text");

// starting color
color = "#007aff";

function reColor(color) {
  color = shadeColor(color, 0);
  old_obj.style.backgroundColor = color;
  old_obj.style.color = shadeColor(color, 3);
  old_obj_txt.innerText = color;

  new_color = shadeColor(color, -2);

  new_obj.style.backgroundColor = new_color;
  new_obj.style.color = shadeColor(new_color, 3);
  new_obj_txt.innerText = new_color;
}

// recolor on page load
reColor(color);


// listen for pasted colors and recolor boxes on paste
document.addEventListener("paste", (event) => {
  let paste = (event.clipboardData || window.clipboardData).getData("text");
  if (paste.length > 7 ) {
    return;
  }
  reColor(paste);
});
