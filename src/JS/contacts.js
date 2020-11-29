import "../css/contacts.css";
import referrences from "./refs.js";

const { contactSec } = referrences;

const game = ["камень", "ножницы", "бумага"];

function createButtons(arr) {
  return arr.map((el) => {
    const button = document.createElement("button");
    button.textContent = el;
    button.dataset.key = el;
    return button;
  });
}

const buttons = createButtons(game);
// console.log(buttons);
contactSec.append(...buttons);

contactSec.addEventListener("click", (e) => {
  let index = Math.round(Math.random() * (game.length - 1));
  let user = e.target.dataset.key;
  let computer = game[index];

  console.log(`user: ${user} - computer: ${computer}`);

  let msg;
  if (user === computer) {
    msg = "Ничья!";
  } else {
    (user === "ножницы" && computer === "бумага") ||
    (user === "бумага" && computer === "камень") ||
    (user === "камень" && computer === "ножницы")
      ? (msg = "User WON")
      : (msg = "Computer WON");
  }
  const result = document.createElement("p");
  result.textContent = msg;

  contactSec.append(result);
});
