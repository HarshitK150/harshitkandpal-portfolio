const showNavbarMobile = function() {
    if (navbarMobile.style.display === 'block') {
        navbarMobile.style.display = 'none';
    } else {
        navbarMobile.style.display = 'block';
    }
};

const menuBar = document.getElementById('menu-bar');
const navbarMobile = document.getElementById('navbar-mobile');

menuBar.addEventListener('click', showNavbarMobile);