function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const container = document.querySelector('#boxes');
const inputEl = document.querySelector('[type="number"]');
const createEl = document.querySelector('[data-create]');
const destroyEl = document.querySelector('[data-destroy]');

const createBoxes = amount => {
  amount = Number(inputEl.value);
  container.innerHTML = '';
  let size = 20;
  for (let i = 0; i < amount; i += 1) {
    size += 10;
    container.insertAdjacentHTML('afterbegin', '<div class="boxes__el"></div>');
    const newEl = document.querySelector('.boxes__el');
    newEl.style.width = `${size}px`;
    newEl.style.height = `${size}px`;
    newEl.style.backgroundColor = getRandomHexColor();
  }
};

const destroyBoxes = () => {
  container.innerHTML = '';
  inputEl.value = '';
};
createEl.addEventListener('click', createBoxes);
destroyEl.addEventListener('click', destroyBoxes);
