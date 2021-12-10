const tabBar = document.getElementById("tabBar");
const city = document.getElementsByClassName("city");
const p = document.querySelectorAll("p");
console.log(p);

city[0].addEventListener("click", () => {
  p[0].classList.toggle("l");
  p[1].classList.add("l");
  p[2].classList.add("l");
});

city[1].addEventListener("click", () => {
  p[1].classList.toggle("l");
  p[0].classList.add("l");
  p[2].classList.add("l");
});

city[2].addEventListener("click", () => {
  p[2].classList.toggle("l");
  p[1].classList.add("l");
  p[0].classList.add("l");
});
