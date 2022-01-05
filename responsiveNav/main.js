const nav = document.getElementById("nav");
const icon = document.getElementById("icon");

function handleClick() {
  nav.classList.toggle("ract");
}

icon.addEventListener("click", handleClick);
