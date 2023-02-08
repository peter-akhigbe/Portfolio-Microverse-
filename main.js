// create constants for buttons and divs to be manipulated
// shorter way to use document.this and dat is to save it to a constant
const menuBtn = document.querySelector('#menuBtn');
const mobileNav = document.querySelector('#mobileNav');
const closeBtn = document.querySelector('#closeBtn');
const closeLinks = document.querySelectorAll('li[id="closeLink"]');

// manipulate the targeted elements
// listen to the click event on the menu button,
// then change the height of the overlay div to the full screen
menuBtn.addEventListener('click', () => {
  mobileNav.style.height = '100vh';
  mobileNav.style.display = 'block';
});

// listen to the click event on the close button then revert the height of the overlay div back to 0
closeBtn.addEventListener('click', () => {
  mobileNav.style.height = '0px';
});

for (let i = 0; i < closeLinks.length; i += 1) {
  closeLinks[i].addEventListener('click', () => {
    // your code to handle the click event
    mobileNav.style.height = '0px';
  });
}
