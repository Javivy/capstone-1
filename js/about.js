const openMenuBtn = document.querySelector('.open-menu-btn');
const closeMenuBtn = document.querySelector('.close-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu-nav');

openMenuBtn.addEventListener('click', () => {
  mobileMenu.style.display = 'block';
  openMenuBtn.style.display = 'none';
});

closeMenuBtn.addEventListener('click', () => {
  openMenuBtn.style.display = 'block';
  mobileMenu.style.display = 'none';
});