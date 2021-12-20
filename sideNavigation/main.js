const overlay = document.querySelector("#overlay");
const push = document.querySelector("#push");
const full = document.querySelector("#full");
const sideNav = document.querySelector("#sideNav");
const close = sideNav.querySelector(".close");

function handleSideNav() {
  console.log("hello");
  sideNav.style.width = "200px";
}

overlay.addEventListener("click", handleSideNav);
