const front = document.querySelector(".front")
const back = document.querySelector(".back")
const page1 = document.querySelector(".page1")
const page1Back = document.querySelector(".page1-back")
const page2 = document.querySelector(".page2")
const page2Back = document.querySelector(".page2-back")
const flame = document.querySelector(".flame")

front.addEventListener("click", () => {
  back.classList.toggle("open");
  front.classList.toggle("open");
  flame.classList.toggle("open");
});

page1.addEventListener("click", () => {
  page1Back.classList.toggle("open");
  page1.classList.toggle("open");
});

page2.addEventListener("click", () => {
  page2Back.classList.toggle("open");
  page2.classList.toggle("open");
});

document.querySelector(".page3").addEventListener("click", () => {
  back.classList.toggle("open");
  front.classList.toggle("open");
  flame.classList.toggle("open");
  page1Back.classList.toggle("open");
  page1.classList.toggle("open");
  page2Back.classList.toggle("open");
  page2.classList.toggle("open");
});