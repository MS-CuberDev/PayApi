'use stript'

const openMenu = document.querySelector('.menu__bar');
const body = document.querySelector('body');

function menuOpen() {
        openMenu.classList.add('mobile-block');
        body.classList.add('lock');
}

function menuCloseBtn() {
        openMenu.classList.remove('mobile-block');
        body.classList.remove('lock');
}