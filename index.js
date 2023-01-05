const container = document.getElementById("container");
const btn = document.querySelectorAll("button");
btn.addEventListener('click', () =>{
  let rows = prompt("Enter number of rows.");
  let cols = prompt("Enter number of columns.");
//  makeRows(rows, cols);
})

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.innerText = (c + 1);
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(16, 16);