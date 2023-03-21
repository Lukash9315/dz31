// Отримання необхідних елементів DOM
const modal = document.getElementById("myModal");
const btn = document.getElementById("openModal");
const span = document.getElementById("closeModal");

// Функція для відкриття модального вікна
function openModal() {
  modal.style.display = "block";
}

// Функція для закриття модального вікна
function closeModal() {
  modal.style.display = "none";
}

// Додавання обробників подій на кнопку відкриття та закриття модального вікна
btn.addEventListener("click", openModal);
span.addEventListener("click", closeModal);

// Додавання обробника подій на клік відносно модального вікна (для закриття при кліку на затемнену область навколо вікна)
window.addEventListener("click", function(event) {
  if (event.target == modal) {
    closeModal();
  }
});
