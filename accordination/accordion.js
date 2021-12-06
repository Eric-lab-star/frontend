const section1 = document.querySelector(".section1");
const section2 = document.querySelector(".section2");
const section3 = document.querySelector(".section3");
const hidden = document.querySelector(".hidden");
const content1 = document.querySelector(".content1");
const content2 = document.querySelector(".content2");
const content3 = document.querySelector(".content3");
console.log(content2);

const handleClick2 = () => {
  content2.classList.toggle("hidden");
};
const handleClick1 = () => {
  content1.classList.toggle("hidden");
};

const handleClick3 = () => {
  content3.classList.toggle("hidden");
};
section1.addEventListener("click", handleClick1);
section2.addEventListener("click", handleClick2);
section3.addEventListener("click", handleClick3);
