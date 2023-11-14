"use strict";
import { renderHome } from "./home";
import { renderMenu } from "./menu";
import { renderContact } from "./contact";
import { resetContent } from "./reset";

const createHeader = () => {
  const header = document.createElement("div");
  header.classList.add("header");
  const title = document.createElement("h1");
  title.classList.add("title");
  title.textContent = "Baratie";

  header.appendChild(title);
  header.appendChild(createNav());
  return header;
};

const createNav = () => {
  const btn = document.createElement("div");
  btn.classList.add("buttons");
  const switchPages = (currentButton) => {
    currentButton.addEventListener("click", () => {
      currentButton.classList.add("buttons-style", "active");
      switch (currentButton) {
        case home:
          resetContent();
          renderHome();
          menu.classList.remove("active");
          contact.classList.remove("active");

          break;
        case menu:
          resetContent();

          renderMenu();
          home.classList.remove("active");
          contact.classList.remove("active");
          break;
        case contact:
          resetContent();
          renderContact();
          menu.classList.remove("active");
          home.classList.remove("active");
          break;
        default:
          // Handle default case
          break;
      }
    });
  };

  const home = document.createElement("button");
  home.classList.add("buttons-style");
  home.textContent = "Home";
  btn.appendChild(home);
  switchPages(home);
  const menu = document.createElement("button");
  menu.classList.add("buttons-style");
  menu.textContent = "Menu";
  btn.appendChild(menu);
  switchPages(menu);
  const contact = document.createElement("button");
  contact.classList.add("buttons-style");
  contact.textContent = "Contact";
  btn.appendChild(contact);
  switchPages(contact);
  return btn;
};

const createMain = () => {
  const main = document.createElement("div");
  main.classList.add("main");

  return main;
};

const createFooter = () => {
  const footer = document.createElement("footer");
  footer.classList.add("footer");

  const copyright = document.createElement("p");
  copyright.textContent = `Made with love by Thai Pham ${new Date().getFullYear()} `;
  const linkElement = document.createElement("a");
  linkElement.href = "https://github.com/thaph03";
  const imagesElement = document.createElement("img");
  imagesElement.src = "images/logo.png";
  linkElement.appendChild(imagesElement);
  linkElement.classList.add("linkElement");

  footer.appendChild(copyright);
  footer.appendChild(linkElement);

  return footer;
};

function website() {
  const app = document.querySelector(".app");

  app.appendChild(createHeader());
  app.appendChild(createMain());
  app.appendChild(createFooter());
  renderHome();
}
export { website };
