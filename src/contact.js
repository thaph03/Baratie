"use strict";
function renderContact() {
  const main = document.querySelector(".main");

  const mainContainer = document.createElement("div");
  mainContainer.classList.add("mainContainer");
  main.appendChild(mainContainer);

  const contactContainer = document.createElement("div");
  contactContainer.classList.add("contactContainer");
  mainContainer.appendChild(contactContainer);
  const ad1 = document.createElement("h4");
  const ad2 = document.createElement("h4");
  ad1.textContent = "Phone Number : 999-999-9999";
  ad2.textContent =
    "Address : 9999 Sambas Region of the East Blue, Grand Line ";
  const imgM = document.createElement("img");
  imgM.src = "images/map.png";
  imgM.classList.add("imgM");

  contactContainer.appendChild(ad1);
  contactContainer.appendChild(ad2);
  contactContainer.appendChild(imgM);

  return mainContainer;
}

export { renderContact };
