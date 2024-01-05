import "./index.css";
import sea from "./assests/images/sea.jpg";
import coast from "./assests/images/coast.jpg";
import girls from "./assests/images/girls.jpg";
import mountain from "./assests/images/mountain.jpg";
import arrow from "./assests/images/icon/chevron-down.svg";

export const imgArr = [sea, coast, girls, mountain];

export function createImgHTML(imgUrl, elementId, imgId) {
  const img = document.createElement("img");
  img.classList.add("imgs");
  img.src = imgUrl;
  img.id = elementId;
  img.alt = "slider image";
  img.dataset.imgid = imgId;
  return img;
}

function createIconHTML(iconImg, id) {
  const icon = document.createElement("img");
  icon.classList.add("icons");
  icon.src = iconImg;
  icon.id = id;
  icon.alt = "arrow";
  return icon;
}

function createDivHTML(className, id) {
  const div = document.createElement("div");
  div.classList.add(className);
  div.id = id;
  return div;
}

function createButtonHTML(className, id) {
  const btn = document.createElement("button");
  btn.classList.add(className);
  btn.id = id;
  return btn;
}

export function appendElement(container, element) {
  container.appendChild(element);
}

const img = createImgHTML(imgArr[0], "img", 1);
const imgWrapper = createDivHTML("iwrapper", "iw");
const buttonWrapper = createDivHTML("bwrapper", "bw");
const rightArrow = createIconHTML(arrow, "r-arrow");
const leftArrow = createIconHTML(arrow, "l-arrow");
const leftButton = createButtonHTML("buttons", "lb");
const rightButton = createButtonHTML("buttons", "rb");
const container = createDivHTML("container", "mc");
const indicatorContainer = createDivHTML("inc-container", "inc");

imgArr.forEach((i, index) => {
  appendElement(
    indicatorContainer,
    createDivHTML("indicators", `${index + 1}-ind`),
  );
});

appendElement(imgWrapper, img);
appendElement(buttonWrapper, leftButton);
appendElement(leftButton, leftArrow);
appendElement(buttonWrapper, indicatorContainer);
appendElement(rightButton, rightArrow);
appendElement(buttonWrapper, rightButton);
appendElement(container, imgWrapper);
appendElement(container, buttonWrapper);

export default function sliderUI() {
  appendElement(document.querySelector("body"), container);
}
