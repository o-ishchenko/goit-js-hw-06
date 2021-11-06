let counterValue = 0;
const decrementBtnEl = document.querySelector('[data-action="decrement"]');
const incrementBtnEl = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value');
decrementBtnEl.addEventListener('click', (event) => {
    counterValue -= 1;
    valueEl.textContent = counterValue;
});
incrementBtnEl.addEventListener('click', (event) => {
    counterValue += 1;
    valueEl.textContent = counterValue;
});