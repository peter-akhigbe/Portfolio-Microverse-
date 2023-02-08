const menuBtn = document.querySelector('#menuBtn');
const mobileNav = document.querySelector('#mobileNav');
const body = document.querySelector('body');
const closeBtn = document.querySelector('#closeBtn');
const mobileNavLinks = document.querySelector('.mobileNavLinks');

menuBtn.addEventListener('click', () => {
  mobileNav.style.height = '100vh';
  mobileNav.style.display = 'block';
  body.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', () => {
  mobileNav.style.height = '0px';
  body.style.overflow = 'visible';
});

mobileNavLinks.addEventListener('click', () => {
  mobileNav.style.height = '0px';
  body.style.overflow = 'visible';
});
