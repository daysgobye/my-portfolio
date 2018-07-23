const hammy = document.querySelector('.headder__hamburger')
const nav = document.querySelector('.nav')
const headHam = document.querySelector('.headder__hamburger')
const ham3 = document.querySelector('.headder__hamburger__3')
const ham1 = document.querySelector('.headder__hamburger__1')

function hamburger__clicked() {
  ham1.classList.toggle ("headder__hamburger__1__clicked")
  ham3.classList.toggle("headder__hamburger__3__clicked")
  headHam.classList.toggle("headder__hamburger__clicked") 
  nav.classList.toggle ("nav__clicked")
}
hammy.addEventListener('click',hamburger__clicked)