const item = document.querySelector(".item1");
const hamburgerIcon = document.querySelector(".hamburger-icon");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".navbar");
const cripto = document.querySelector(".cripto-menu");
const collapse = document.querySelector(".collapse");
const hideMenu = document.querySelector(".fa-arrow-left");
const Morse = document.querySelectorAll(".more-icon");
const items = document.querySelector(".cards");
const card = document.querySelectorAll(".card");
const clickLeft = document.querySelector(".arrow-left");
const clickRight = document.querySelector(".arrow-right");
const collapseFooter = document.querySelectorAll(".speed-link");
// const showCollapse = document.querySelector("#arrow");

collapseFooter.forEach((item) => {
  item.addEventListener("click", showContent);
});

Morse.forEach((item) => {
  item.addEventListener("click", showDropDown);
});

item.addEventListener("mouseenter", showCripto);
item.addEventListener("mouseleave", hideCripto);
hamburgerIcon.addEventListener("click", showAndHideMenu);
collapse.addEventListener("click", showColapse);
hideMenu.addEventListener("click", hideMenuBar);
clickLeft.addEventListener("click", prevCard);
clickRight.addEventListener("click", nextCard);
// showCollapse.addEventListener("click", showCollFooter);

setInterval(nextCard, 5000);

let index = 0;
function prevCard() {
  index === 0 ? (index = 4) : index;
  items.prepend(card[index - 1]);
  index--;
  console.log(index);
}

function nextCard() {
  items.append(card[index]);
  index++;
  index === 4 ? (index = 0) : index;
}

function showDropDown(e) {
  const dropDown = e.target.parentElement.childNodes[3];
  dropDown.style.display === "block"
    ? (dropDown.style.display = "none")
    : (dropDown.style.display = "block");
}

function showAndHideMenu() {
  hamburgerMenu.style.display === "block"
    ? (hamburgerMenu.style.display = "none")
    : (hamburgerMenu.style.display = "block");
}

function showColapse() {
  cripto.style.display === "block"
    ? (cripto.style.display = "none")
    : (cripto.style.display = "block");
}

function hideMenuBar() {
  hamburgerMenu.style.display = "none";
}

function showCripto(e) {
  const menu = e.target.childNodes[3];
  menu.style.display = "block";
}

function hideCripto(e) {
  const menu = e.target.childNodes[3];
  menu.style.display = "none";
}

function showContent(e) {
  const element = e.target.childNodes[1].childNodes[3];
  element.classList.toggle("active");
  if (element.classList.contains("active")) {
    console.log(1);
    element.style.transition = "all 0.50s ease";
    element.style.display = "block";
    rotateArrow(e.target.childNodes[3], "180");
  } else {
    hideContent(element);
  }
}

function hideContent(data) {
  data.style.display = "none";
  data.style.transition = "all 0.50s ease";
  rotateArrow(data.parentElement.parentElement.childNodes[3], "0");
}

function rotateArrow(arrow, deg) {
  arrow.style.transform = `rotate(${deg}deg)`;
  arrow.style.transition = "all 0.50s ease";
}
