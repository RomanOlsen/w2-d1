let bsu = 0
let byu = 0

function updateBSU(bsu) {
  console.log(bsu)
  document.getElementById("bsuBoard")
  bsuBoard.innerText = bsu
}

function updateBYU() {
  console.log(byu)
  document.getElementById("bsuBoard")
}

function reset() {
  bsu = 0
  byu = 0
  bsuBoard.innerText = bsu
}
// TODO find a way to make updateBSU and BYU into 1 function
