import * as flsFunctions from "./modules/functions.js"
flsFunctions.isWebp();
//import Swiper, { Navigation, Pagination } from 'swiper';
// const swiper = new Swiper();

const menuIcon = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');
if (menuIcon) {
   menuIcon.addEventListener('click', burgerOnClick);
}

function burgerOnClick(e) {
   const menuIcon = e.currentTarget;
   menuIcon.classList.toggle('_active')
   menu.classList.toggle('_active')
   document.body.classList.toggle('_lock')
}