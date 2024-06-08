let img = document.querySelector("img");
let border = false;

img.addEventListener("click", () => {
  if (border == false) {
    img.style.border = "solid 2px red";
    border = true;
  } else {
    img.style.border = "";
    border = false;
  }
});
