const container = document.querySelector(".container");
const btn = document.querySelector(".btn");
const row = document.createElement("div");
const box = document.createElement("div");

row.classList.add("row");

let rowsHTML = "";
function createRow() {
  rowsHTML = rowsHTML + '<div class="rows"></div>';
  return rowsHTML;
}

function addRows() {
  container.innerHTML = rowsHTML;
  return console.log((container.innerHTML = rowsHTML));
}
let boxHTML = "";
function createBox() {
  boxHTML = boxHTML + '<div class="boxes"></div>';
  return boxHTML;
}

function addBoxes() {
  const rows = document.querySelector(".rows");
  rows.innerHTML = boxHTML;
}

btn.addEventListener("click", () => {
  let quantity = prompt("Выбери размер сетки (max 100): ");
  createBoxes(quantity);
  createRows(quantity);
  document.querySelectorAll(".rows").forEach((row) => {
    row.innerHTML = boxHTML;
  });
  console.log(boxHTML);
  boxHTML = "";
  rowsHTML = "";
});

function createBoxes(quantity = 16) {
  for (let index = 0; index < quantity; index++) {
    createBox();
  }
}

function createRows(quantity = 16) {
  for (let index = 0; index < quantity; index++) {
    createRow();
  }
  container.innerHTML = rowsHTML;
}

container.addEventListener("mouseover", (event) => {
  const box = document.querySelector(".boxes");
  const isBox = container.contains(box);
  if (isBox) {
    event.stopPropagation();
    event.target.style.background = "blue";
  }
});
