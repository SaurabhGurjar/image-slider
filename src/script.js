import { imgArr, createImgHTML, appendElement } from "./sliderUI";

function removeElementFormPage(id) {
  document.getElementById(id).remove();
}
function removeClass(id, cls) {
  document.getElementById(id).classList.remove(cls);
}
function addClass(id, cls) {
  document.getElementById(id).classList.add(cls);
}

export default function script() {
  const rtButton = document.querySelector("#r-arrow");
  const ltButton = document.querySelector("#l-arrow");
  const imgWrapper = document.querySelector("#iw");
  const img = document.getElementById("0-img");
  document.getElementById(`${img.dataset.imgid}-ind`).classList.add("active");
  

  let imgId = 0;
  let lastImgId = 0;
  rtButton.onclick = () => {
    document.getElementById("iw").style.flexDirection = "row";

    if (imgId === imgArr.length) {
      imgId = 0;
    }

    appendElement(imgWrapper, createImgHTML(imgArr[imgId], `${imgId}-img`, imgId));
    addClass("iw", "animation-right");
    setTimeout(removeClass, 300, "iw", "animation-right");
    setTimeout(removeElementFormPage, 300, `${lastImgId}-img`);
  
    removeClass(`${lastImgId}-ind`, "active");
    addClass(`${imgId}-ind`, "active");
    lastImgId = imgId;
    imgId += 1;
  };

  ltButton.onclick = () => {
    document.getElementById("iw").style.flexDirection = "row-reverse";
    if (imgId === 0 ) {
      imgId = 4;
    }

    appendElement(imgWrapper, createImgHTML(imgArr[imgId - 1], `${imgId - 1}-img`, imgId - 1));
    addClass("iw", "animation-left");
    setTimeout(removeClass, 300, "iw", "animation-left");
    setTimeout(removeElementFormPage, 300, `${lastImgId}-img`);

    removeClass(`${lastImgId}-ind`, "active");
    addClass(`${imgId -1}-ind`, "active");
    lastImgId = imgId - 1;
    imgId -= 1;
  };

  function moveRight() {
    rtButton.click();
  }

  setInterval(moveRight, 5000);
}
