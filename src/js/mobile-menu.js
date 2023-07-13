let menuBtn = document.querySelector('.mobile-burger-icon');
let menu = document.querySelector('.menu');
let links = document.querySelectorAll('.mobile-list a');

// Функція для скидання стану кнопки меню до початкового стану
function resetMenuButton() {
  menuBtn.classList.remove('active');
  menuBtn.innerHTML = `
    <svg class="mobile-burger-icon" id="icon" width="24" height="24">
      <use href="../img/symbol-defs.svg#mobile-burger-icon"></use>
    </svg>`;
  document.body.style.overflow = ''; // Відновлення прокрутки
}

menuBtn.addEventListener('click', function () {
  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');

  if (menuBtn.classList.contains('active')) {
    menuBtn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M18 6L6 18" stroke="#77AC63" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M6 6L18 18" stroke="#77AC63" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`;
    document.body.style.overflow = 'hidden'; // Блокування прокрутки
  } else {
    resetMenuButton();
  }
});

// Додаємо обробники подій до кожного посилання
links.forEach(function (link) {
  link.addEventListener('click', function () {
    resetMenuButton();
  });
});
