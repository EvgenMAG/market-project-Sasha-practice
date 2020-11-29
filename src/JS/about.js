import "../css/about.css";

import myAvtoPark from "../data/items.js";
import aboutRefs from "./refs.js";
const { aboutSec } = aboutRefs;

function createCarsList(arr) {
  return arr.map((car) => {
    const { name, picture, price } = car;
    const imgName = document.createElement("h3");
    imgName.textContent = name;
    const imgWrapper = document.createElement("div");

    const pictures = picture.map((pic) => {
      const img = document.createElement("img");
      img.setAttribute("src", pic);
      img.setAttribute("alt", name);
      img.setAttribute("width", "200px");
      return img;
    });
    imgWrapper.append(...pictures);
    console.log(imgWrapper);

    const carPrice = document.createElement("p");
    carPrice.textContent = price;

    const item = document.createElement("li");
    item.append(imgName, imgWrapper, carPrice);
    return item;
  });
}
const carsItems = createCarsList(myAvtoPark);
console.log(carsItems);

const carsList = document.createElement("ul");
carsList.append(...carsItems);
console.log(carsList);

aboutSec.append(carsList);
