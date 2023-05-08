const imageOne = document.querySelector('.equilibrium')
const imageTwo = document.querySelector('.equilibrium--hover')

function changeImageOnMouseIn() {
  imageOne.style.display = 'none'
  imageTwo.style.display = 'block'
}

function changeImageOnMouseOut() {
  imageTwo.style.display = 'none'
  imageOne.style.display = 'block'
}

imageOne.addEventListener('mouseover', changeImageOnMouseIn)
imageTwo.addEventListener('mouseout', changeImageOnMouseOut)
