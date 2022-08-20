//Logica para Menu desplegable en Mobile
const imgMenu = document.querySelector('.icon-nav');
const menuMobile = document.querySelector('.menu-mobile')

function openBurger(){
    menuMobile.classList.toggle('inactive');
    console.log('Hola');
}

imgMenu.addEventListener('click',openBurger);