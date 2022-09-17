function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnChangeColor = document.querySelector('.change-color');
const colorBody = document.querySelector('.color');
const bodyColor = document.querySelector('body');
bodyColor.classList.add('color');
btnChangeColor.addEventListener('click', onChangeColorClick);
function onChangeColorClick() {
  bodyColor.style.backgroundColor = `${getRandomHexColor()}`;
  colorBody.textContent = bodyColor.style.backgroundColor;
}
