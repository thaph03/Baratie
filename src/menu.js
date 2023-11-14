"use strict";
function renderMenu() {
  const main = document.querySelector(".main");

  const mainContainer = document.createElement("div");
  mainContainer.classList.add("mainContainer");
  main.appendChild(mainContainer);
  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menuContainer");
  mainContainer.appendChild(menuContainer);

  const menuCard = (ramen, examples) => {
    const ramenCard = document.createElement("div");
    ramenCard.classList.add("ramenCard");
    menuContainer.appendChild(ramenCard);
    const imgR = document.createElement("img");
    imgR.src = `images/${ramen}.png`;
    imgR.classList.add("imgR");
    const ramenName = document.createElement("h2");
    ramenName.textContent = `${ramen}`;
    ramenName.classList.add("ramenName");
    const ramenDes = document.createElement("p");
    ramenDes.textContent = examples;
    ramenDes.classList.add("ramenDes");

    ramenCard.appendChild(imgR);
    ramenCard.appendChild(ramenName);
    ramenCard.appendChild(ramenDes);
  };

  menuCard("tonkotsu", "rich and creamy pork broth");
  menuCard("shoyu", "soy sauce based soup");
  menuCard("miso", "miso based soup");
  menuCard("shio", "salt based soup");
  menuCard("abura soba", "oil dry soba ");
  menuCard("tsukemen", "dipping noodles in a thick broth");
}

export { renderMenu };
