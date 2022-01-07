const icon = document.querySelector(".icon");
const navBar = document.querySelector(".navBar");

function handleClick() {
  navBar.classList.toggle("hidden");
}

icon.addEventListener("click", handleClick);
