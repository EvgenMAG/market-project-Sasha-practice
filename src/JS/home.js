import "../css/home.css";

import refs from "./refs.js";
console.log(refs);
const { homeSec } = refs;
const homeTitle = `<h2 class='homeTitle'>Home</h2>`;

homeSec.insertAdjacentHTML("afterbegin", homeTitle);

const homeContent = document.createElement("p");
const content =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dolorem, vel tenetur sed tempora, fugit fugiat nobis ullam aliquam quaerat placeat ea. Hic dolorem dignissimos a ex culpa porro praesentium.";
homeContent.textContent = content;

const title = document.querySelector(".homeTitle");
title.appendChild(homeContent);
