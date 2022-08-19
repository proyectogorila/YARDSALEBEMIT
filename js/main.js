//ASIGNACION DE VARIABLES

//!HEADER
//ITEM ICONO PARA DESPLEGAR MENU MOBIL (MOBIL)
const jsHeaderLogoHamburger = document.querySelector('.js-header-logo-hamburger');
//ITEM EMAIL ACTIVO (DESKTOP)
const jsHeaderMenuEmail = document.querySelector('.js-header__email-menu');
//ITEM SING IN EN HEADER PARA LOGEARSE (DESKTOP)
const jsHeaderSinginMenu = document.querySelector('.js-header__singin-menu');


//!MENU ACCOUT DESKTOP DEPLEGLABLE EN DESKTOP
//MENU DESPLEGABLE ACCOUNT (DESKTOP)
const jsMenuAccountDesktop = document.querySelector('.js-menu-account-desktop');
//ITEM SINGOUT ACCOUNT (DESKTOP)
const jsMenuAccountDesktopSingout = document.querySelector('.js-menu-account-desktop__singout');


//!MENU IN MOBIL DESPLEGABLE EN MOBIL
//MENU DESPLEGABLE MOBIL (MOBIL)
const jsMenuMobil = document.querySelector('.js-menu-mobil');
//ITEM ICONO CERRAR (MOBIL)
const jsCerrarMenuMobil = document.querySelector('.js-cerrar-menu-mobil');
//ITEM SING IN (MOBIL)
const jsMenuMobilItemSingin = document.querySelector('.js-menu-mobil-item-singin');
//ITEM EMAIL (MOBIL)
const jsMenuMobilItemEmail = document.querySelector('.js-menu-mobil-item-email');
//ITEM SING OUT (MOBIL)
const jsMenuMobilItemSingout = document.querySelector('.js-menu-mobil-item-singout');





//! FUNCIONES

//ABRIR Y CERRAR EL MENU ACCOUNT (DESKTOP)
jsHeaderMenuEmail.addEventListener('click', toogleMenuAccountDesktop);
function toogleMenuAccountDesktop() {
    jsMenuAccountDesktop.classList.toggle('is-hiden');
}

//SSING OUT (MENU ACCOUNT(DESKTOP))  (DESKTOP)
jsMenuAccountDesktopSingout.addEventListener('click', addsingoutMenuDesktop);
function addsingoutMenuDesktop() {
    jsMenuAccountDesktop.classList.add('is-hiden');
    jsHeaderMenuEmail.classList.add('is-hiden');
    jsHeaderSinginMenu.classList.add('is-visible');
    jsHeaderSinginMenu.classList.remove('is-hiden');
}

//SING IN (HEADER) (DESKTOP)
jsHeaderSinginMenu.addEventListener('click', addEmailMenu);
function addEmailMenu() {
    jsHeaderMenuEmail.classList.remove('is-hiden');
    jsHeaderSinginMenu.classList.add('is-hiden');
    jsHeaderSinginMenu.classList.remove('is-visible');
}


//DEPLAGADO DE MENU MOBIL (MOBIL)
jsHeaderLogoHamburger.addEventListener('click', toogleHeaderLogoHamburger);
function toogleHeaderLogoHamburger() {
    jsMenuMobil.classList.toggle('is-hiden');
}

//CERRAR MENU MOBIL CON ICONO CERRAR (MOBIL)
jsCerrarMenuMobil.addEventListener('click', cerrarMenuMobil);
function cerrarMenuMobil() {
    jsMenuMobil.classList.add('is-hiden');
}

//SING OUT (MENU MOBIL)  (MOBIL)
jsMenuMobilItemSingout.addEventListener('click', singoutaccountmobil);
function singoutaccountmobil() {
    jsMenuMobilItemSingin.classList.remove('is-hiden');
    jsMenuMobilItemEmail.classList.add('is-hiden');
    jsMenuMobilItemSingout.classList.add('is-hiden');
}

//SING IN (MENU MOBIL)  (MOBIL)
jsMenuMobilItemSingin.addEventListener('click', singinaccountmobil);
function singinaccountmobil() {
    jsMenuMobilItemSingin.classList.add('is-hiden');
    jsMenuMobilItemEmail.classList.remove('is-hiden');
    jsMenuMobilItemSingout.classList.remove('is-hiden');
}