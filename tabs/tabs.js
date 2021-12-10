const tabBar = document.getElementById("tabBar");
const city = document.querySelectorAll(".city");
const p = document.querySelectorAll("p");

const handleClick = (event) => {
  console.log(event.currentTarget);
};

city[i].addEventListener("click", handleClick);
