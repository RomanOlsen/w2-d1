let bsu = 0
let byu = 0
let updateNumber = 0 // The current number being clicked on

function updateBSU(updateNumber) {
  if (bsu + updateNumber < 0) {
    console.log("You cant do that!")
  }
  else {
    bsu = bsu + updateNumber
    console.log(bsu)
    document.getElementById("bsuBoard")
    bsuBoard.innerText = bsu
  }
}

function updateBYU(updateNumber) {

  if (byu + updateNumber < 0) {
    console.log("You cant do that!")
  }
  else {
    byu = byu + updateNumber
    console.log(byu)
    document.getElementById("byuBoard")
    byuBoard.innerText = byu
  }
}

function reset() {
  bsu = 0
  byu = 0
  bsuBoard.innerText = bsu
  byuBoard.innerText = byu
}

