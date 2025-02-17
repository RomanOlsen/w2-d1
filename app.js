let bsu = 0
let byu = 0
let updateNumber = 0 // The current number being clicked on

function updateBSU(updateNumber) {
  if (bsu + updateNumber < 0) {
    console.log("You cant do that!")
  }
  else if (bsu + updateNumber > 100) {
    console.log("BSU reached 100. GG")
    bsuWonBoard.classList.remove('d-none')
  } else {
    bsu = bsu + updateNumber
    console.log(bsu)
    document.getElementById("bsuBoard")
    bsuBoard.innerText = bsu
  }
}

//   capybaraElem.classList.remove('d-none') from Jeremy's lecture.

function updateBYU(updateNumber) {

  if (byu + updateNumber < 0) {
    console.log("You cant do that!")
  }
  else if (byu + updateNumber > 100) {
    console.log("BYU reached 100. GG")
    document.getElementById("byuWonBoard")
    byuWonBoard.classList.remove('d-none')
  } else {
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
  bsuWonBoard.classList.add('d-none')
  byuWonBoard.classList.add('d-none')
}

