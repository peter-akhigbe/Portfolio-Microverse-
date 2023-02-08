const menuBtn = document.querySelector('#menuBtn');
const mobileNav = document.querySelector('#mobileNav');
const body = document.querySelector('body');

menuBtn.addEventListener('click', () => {
  mobileNav.style.height = '100vh';
  mobileNav.style.display = 'block';
  body.style.overflow = 'hidden';
});

mobileNav.addEventListener('click', () => {
  mobileNav.style.height = '0px';
  body.style.overflow = 'visible';
});
