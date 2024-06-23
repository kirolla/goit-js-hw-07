function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = '';

  const initialSize = 30;
  const sizeIncrement = 10;

  for (let i = 0; i < amount; i++) {
    const divElement = document.createElement('div');
    const size = initialSize + i * sizeIncrement;
    const color = getRandomHexColor();

    divElement.style.width = `${size}px`;
    divElement.style.height = `${size}px`;
    divElement.style.backgroundColor = color;
    divElement.style.marginBottom = '10px';

    boxesContainer.appendChild(divElement);
  }
}

const input = document.querySelector('input[type="number"]');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');

createBtn.addEventListener('click', () => {
  const amount = parseInt(input.value);

  if (Number.isInteger(amount) && amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = '';
  } else {
    alert('Please enter a number between 1 and 100.');
  }
});

destroyBtn.addEventListener('click', () => {
  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = '';
});
