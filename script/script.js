const sideNav = document.querySelector('.side-nav');
const closeNav = document.querySelector('.close');
const openNav = document.querySelector('.navigation-btn');
const overlay = document.querySelector('.overlay');

openNav.addEventListener('click', function () {
  overlay.classList.remove('hidden');
  sideNav.classList.remove('translate-x');
  sideNav.classList.add('translate-0');
})

closeNav.addEventListener('click', function () {
  sideNav.classList.add('translate-x');
  sideNav.classList.toggle('translate-0');
  overlay.classList.add('hidden');
})