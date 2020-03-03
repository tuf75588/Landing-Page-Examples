const carousel = document.querySelector(".grid-carousel");
const leftArrow = carousel.querySelector(".js-left");
const rightArrow = carousel.querySelector(".js-right");
const carouselItem = carousel.querySelectorAll(".grid-carousel__item");
const captions = carousel.querySelectorAll("figcaption.grid-carousel__caption");

function toggleFeatured(item, order) {
  // handling the toggle of a css class.
  return order === 3
    ? item.classList.add("featured")
    : item.classList.remove("featured");
}

function getOrder(elem) {
  let orderValue = getComputedStyle(elem).order;
  return parseInt(orderValue);
}

function handleLeftClick() {
  carouselItem.forEach(node => {
    let order = getOrder(node);
    if (order < carouselItem.length) {
      node.style.order = order += 1;
    } else {
    }
    toggleFeatured(node, order);
    node.style.order = 1;
  });
}

function handleRightClick() {
  carouselItem.forEach((node, index) => {
    let order = getOrder(node);
    if (order > 1) {
      node.style.order = order -= 1;
    } else {
      node.style.order = 5;
    }
    toggleFeatured(node, order);
  });
}

leftArrow.addEventListener("click", handleLeftClick);
rightArrow.addEventListener("click", handleRightClick);
