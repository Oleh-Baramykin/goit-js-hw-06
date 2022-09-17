let counterValue = 0;

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const value = document.querySelector('#value');

const valueDecr = () => {
  counterValue += 1;
  value.textContent = counterValue;
};
const valueIncr = () => {
  counterValue -= 1;
  value.textContent = counterValue;
};
decrementBtn.addEventListener('click', valueIncr);
incrementBtn.addEventListener('click', valueDecr);
