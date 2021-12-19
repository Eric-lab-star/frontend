const overlay = document.querySelector("#overlay");
const push = document.querySelector("#push");
const full = document.querySelector("#full");
const sideNav = document.querySelector("#sideNav");
const close = sideNav.querySelector(".close");
sideNav.style.width = 0;

const handleClose = () => {
  sideNav.style.width = 0;
};

const handleOverlay = (event) => {
  console.log(AnimationEvent.animationName);
  sideNav.style.width = "auto";
};

close.addEventListener("click", handleClose);
overlay.addEventListener("click", handleOverlay);
