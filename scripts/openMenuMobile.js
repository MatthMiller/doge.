const hamburgerMenuButton = document.querySelector('#js-hamburger-button');
const menuMobileElement = document.querySelector('#js-menu-mobile');

function toggleMenuMobile() {
  menuMobileElement.classList.toggle('active');
}

hamburgerMenuButton.addEventListener('click', toggleMenuMobile);
