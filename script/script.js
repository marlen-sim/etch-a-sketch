const container = document.querySelector(".container");
const btn = document.querySelector(".btn");
const row = document.createElement("div");
const box = document.createElement("div");
const rows = document.querySelector(".rows");

row.classList.add("row");

let rowsHTML = "";
function createRows() {
  rowsHTML = rowsHTML + '<div class="rows"></div>';
  return rowsHTML;
}

function addRows() {
  container.innerHTML = rowsHTML;
}

function createBox() {
  let boxHTML = boxHTML + '<div class="boxes"></div>';
  return boxHTML;
}

function addBoxes() {
  rows.innerHTML = boxHTML;
}

btn.addEventListener("click", () => {
  // let grid = prompt("Выбери размер сетки (max 100): ");
  createGrid();
  console.log(createGrid());
});

function createGrid(quantity = 16) {
  for (let i = 0; i < quantity; i++) {
    createRows();
    addRows();
  }
}
