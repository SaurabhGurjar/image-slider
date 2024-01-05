import { imgArr, createImgHTML, appendElement } from "./sliderUI";

function removeElementFormPage(id) {
  document.getElementById(id).remove();
}
function removeClass(id) {
  document.getElementById(id).classList.remove("active");
}
function addClass(id) {
  document.getElementById(id).classList.add("active");
}

export default function script() {
  const rtButton = document.querySelector("#r-arrow");
  const ltButton = document.querySelector("#l-arrow");
  const imgWrapper = document.querySelector("#iw");
  const img = document.getElementById("img");
  document.getElementById(`${img.dataset.imgid}-ind`).classList.add("active");

  let imgId = Number(img.dataset.imgid);
  let lastImgId = imgId;
  rtButton.onclick = () => {
    if (imgId === imgArr.length) {
      imgId = 0;
    }
    removeElementFormPage("img");
    appendElement(imgWrapper, createImgHTML(imgArr[imgId], "img", imgId + 1));
    removeClass(`${lastImgId}-ind`);
    addClass(`${imgId + 1}-ind`);
    imgId += 1;
    lastImgId = imgId;
  };

  ltButton.onclick = () => {
    if (imgId === 1) {
      imgId = 5;
    }
    removeElementFormPage("img");
    imgId -= 1;
    appendElement(imgWrapper, createImgHTML(imgArr[imgId - 1], "img", imgId));
    removeClass(`${lastImgId}-ind`);
    addClass(`${imgId}-ind`);
    lastImgId = imgId;
  };

  function moveRight() {
    rtButton.click();
  }

  setInterval(moveRight, 5000);
}
