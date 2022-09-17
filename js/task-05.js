const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');
input.addEventListener('input', () => {
  if (input.value.length === 0) {
    return (span.textContent = 'Anonymous');
  }
  span.textContent = input.value;
});
