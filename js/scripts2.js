let lights = document.querySelectorAll('.light');
let button = document.getElementById('change-color-button');

let currentColorIndex = 0;
let colors = ['red', 'yellow', 'green'];

function changeColor() {
  // змінюємо колір поточного елемента світлофора
  lights[currentColorIndex].style.backgroundColor = 'black';
  // збільшуємо індекс поточного кольору
  currentColorIndex = (currentColorIndex + 1) % colors.length;
  // змінюємо колір нового елемента світлофора
  lights[currentColorIndex].style.backgroundColor = colors[currentColorIndex];
}

button.addEventListener('click', changeColor);