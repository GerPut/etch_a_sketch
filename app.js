//Variables
const container = document.getElementById("container")
const button = document.querySelector('.reset')
const buttonS = document.querySelector('.small')
const buttonM = document.querySelector('.medium')
const buttonL = document.querySelector('.large')


//Event Listners
button.addEventListener('click', resetScreen)




//Functions to make columns and rows
function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
    cell.addEventListener('mouseover', () => setColor(cell))
  }
}

makeRows(16, 16);

function setColor(element) {
  const color = 'hotpink'
  element.style.background = color
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
  element.style.border = '1px solid lightgrey'
}


function resetScreen() {
  location.reload()
}







