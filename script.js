const container = document.querySelector(".js-content");

let player = "X";
const wins = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];
let historyX = [];
let historyO = [];

for (let i = 1; i < 10; i++) {
  const markup = `<div class="js-item item" data-id=${i}></div>`;
  container.insertAdjacentHTML("beforeend", markup);
}

container.addEventListener("click", onClick);

function onClick(event) {
  const box = event.target;
  if (!box.classList.contains("js-item") || box.textContent) {
    return;
  }

  const id = Number(box.dataset.id);

  let result = true;

  if (player === "X") {
    historyX.push(id);
    console.log(historyX);
    result = isWinner(historyX);
  } else {
    historyO.push(id);
    result = isWinner(historyO);
  }

  if (result) {
    container.style.borderColor = "green";
    alert(`Winner: ${player}`);
    return;
  } else if (historyX.length + historyO.length === 9) {
    container.style.borderColor = "tomato";
    alert("Good game!");
    return;
  }

  box.textContent = player;
  player = player === "X" ? "O" : "X";
}

function isWinner(arr) {
  return wins.some((item) => item.every((id) => arr.includes(id)));
}

// const btnEl = document.querySelector(".btn");
// const countX = document.querySelector(".js-Xcount");
// const countO = document.querySelector(".js-Ocount");

// let Xcount = 0;
// let Ocont = 0;

// btnEl.addEventListener("click", onClick);

// function onClick() {
//   countX.textContent = Xcount;
//   Xcount += 1;
// }
