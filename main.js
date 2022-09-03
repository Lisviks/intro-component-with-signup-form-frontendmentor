const form = document.querySelector('form');
const inputDivs = document.querySelectorAll('.input-div');

const validateEmail = (email) => {
  const emailRegEx =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const isMatch = String(email).toLowerCase().match(emailRegEx);
  console.log(isMatch);
  return isMatch;
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  inputDivs.forEach((input) => {
    const inputEl = input.querySelector('input');
    if (inputEl.value.length === 0) {
      input.classList.add('error');
    } else {
      input.classList.remove('error');
    }
    if (inputEl.classList.contains('email') && !validateEmail(inputEl.value)) {
      input.classList.add('error');
    }
  });
});

inputDivs.forEach((inputDiv) => {
  inputDiv.addEventListener('input', () => {
    const inputValue = inputDiv.querySelector('input').value;
    if (inputValue.length > 0) {
      inputDiv.classList.add('not-empty');
    } else {
      inputDiv.classList.remove('not-empty');
    }
  });
});
