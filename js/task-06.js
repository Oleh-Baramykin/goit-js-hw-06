const textInput = document.querySelector('#validation-input');
const dataLength = document.querySelector('[data-length="6"]');
textInput.addEventListener('blur', () => {
  if (
    textInput.value.length < dataLength.dataset.length ||
    textInput.value.length > dataLength.dataset.length
  ) {
    textInput.classList.remove('valid');
    textInput.classList.add('invalid');
    return;
  }
  textInput.classList.remove('invalid');
  textInput.classList.add('valid');
  return;
});
