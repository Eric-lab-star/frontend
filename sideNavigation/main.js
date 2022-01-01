const overlay = document.querySelector("#overlay");
const push = document.querySelector("#push");
const full = document.querySelector("#full");
const sideNav = document.querySelector("#sideNav");
const close = sideNav.querySelector(".closeIcon");
sideNav.hidden = true;
function handleSideNav() {
  sideNav.hidden = false;
  sideNav.className = "slideIn";
}

function handleClose() {
  sideNav.className = "close";
}

close.addEventListener("click", handleClose);
overlay.addEventListener("click", handleSideNav);
