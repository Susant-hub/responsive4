import './scss/main.scss'

const mobileMenu = document.querySelector('.mobile-menu')
const primaryNav = document.querySelector('.primary-navigation')
const navbar = document.querySelector('.nav-wrapper')
const hamburger = document.querySelector('.hamburger-icon')
const close = document.querySelector('.close-icon')


mobileMenu.addEventListener('click', ()=>{
    primaryNav.classList.toggle('show')
    hamburger.classList.toggle('hide')
    close.classList.toggle('show')
    navbar.toggleAttribute('data-overlay')
})