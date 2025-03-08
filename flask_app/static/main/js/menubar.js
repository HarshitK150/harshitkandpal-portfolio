const showNavbarMobile = function() {
    if (navbarMobile.classList.contains('visible')) {
        navbarMobile.classList.remove('visible');
    } else {
        navbarMobile.classList.add('visible');
    }
};

const menuBar = document.getElementById('menu-bar');
const navbarMobile = document.getElementById('navbar-mobile');

menuBar.addEventListener('click', showNavbarMobile);