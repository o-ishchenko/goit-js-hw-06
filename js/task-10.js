function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector('#controls input');
const createBtnEl = document.querySelector('[data-create]');
const destroyBtnEl = document.querySelector('[data-destroy]');
const boxEl = document.querySelector('#boxes');



createBtnEl.addEventListener('click', createBoxes);
destroyBtnEl.addEventListener('click', destroyBoxes);

function createBoxes() {
  const number = inputEl.value;
  let size = 20;
  for (let i = 0; i < number; i += 1) {
    const innerBox = document.createElement('div');
    size += 10;
  innerBox.style.width = size + "px";
  innerBox.style.height = size + "px";
  innerBox.style.backgroundColor = getRandomHexColor();
  boxEl.appendChild(innerBox);
  }
}

function destroyBoxes() {
  boxEl.innerHTML = '';
  inputEl.value = '';
}
