"use strict";
function renderHome() {
  const main = document.querySelector(".main");

  const mainContainer = document.createElement("div");
  mainContainer.classList.add("mainContainer");
  main.appendChild(mainContainer);
  const ad1 = document.createElement("h3");
  const ad2 = document.createElement("h3");
  ad1.textContent = "Best Ramen in the in WORLD!";
  ad2.textContent =
    "Food made with passion by Sanji (one of straw hat member!)";
  const imgS = document.createElement("img");
  imgS.src = "images/sanji.png";
  imgS.classList.add("imgS");
  mainContainer.classList.add("mainContainer");
  const ad3 = document.createElement("h3");
  ad3.textContent = "Order online or visit us!";

  mainContainer.appendChild(ad1);
  mainContainer.appendChild(ad2);
  mainContainer.appendChild(imgS);
  mainContainer.appendChild(ad3);

  return mainContainer;
}

export { renderHome };
