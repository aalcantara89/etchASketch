const container = document.getElementById("container");
const btn = document.querySelectorAll("#button");
createGrid(16, 16);
//btn.addEventListener('click', ()=> {
//  resetGrid();
//});

function resetGrid(){
  let rows = prompt("Enter number of rows.");
  let cols = prompt("Enter number of columns.");
  if (rows > 100 || cols > 100) {
    alert("Maximum number of rows and columns is 100.");
  } else {
    reset();
    createGrid(rows, cols);
  }
  
}
function reset() {
  document
    .querySelectorAll(".grid-item")
    .forEach((e) => e.parentNode.removeChild(e));
}
function createGrid(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.innerText = (c + 1);
    container.appendChild(cell).className = "grid-item";
  };
};

