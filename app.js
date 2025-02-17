let bsu = 0
let byu = 0
let byuUpdate = 0

function bsuScored1() {
  bsu = bsu + 1
  console.log(bsu)
  document.getElementById("bsuBoard")
  bsuBoard.innerText = bsu
}

function bsuScored2() {
  bsu = bsu + 2
  console.log(bsu)
  document.getElementById("bsuBoard")
  bsuBoard.innerText = bsu
}

function bsuScored3() {
  bsu = bsu + 3
  console.log(bsu)
  document.getElementById("bsuBoard")
  bsuBoard.innerText = bsu
}

function bsuLost1() {
  bsu = bsu - 1
  console.log(bsu)
  document.getElementById("bsuBoard")
  bsuBoard.innerText = bsu
}

function updateBYU(byuUpdate) {
  byu = byu + byuUpdate
  console.log(byu)
  document.getElementById("byuBoard")
  byuBoard.innerText = byu
}

function reset() {
  bsu = 0
  byu = 0
  bsuBoard.innerText = bsu
}
// TODO find a way to make updateBSU and BYU into 1 function
