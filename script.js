const hammy = document.querySelector('.headder__hamburger')
const nav = document.querySelector('.nav')
const headHam = document.querySelector('.headder__hamburger')
const ham3 = document.querySelector('.headder__hamburger__3')
const ham1 = document.querySelector('.headder__hamburger__1')
const list = document.querySelectorAll('li')
const mywork = document.querySelector('.mywork__site')
let lastLi = 1
let lastpicked;
function portPicker(){
  if(lastLi != 1){
    lastLi.classList.remove("slected")
  }
  this.classList.add("slected")
  lastLi = this
  let picked = this.innerHTML
  
  mywork.classList.remove(`${lastpicked}`)
  mywork.classList.add("mywork__site",`${picked}`)
  lastpicked = picked
}
function hamburger__clicked() {
  ham1.classList.toggle ("headder__hamburger__1__clicked")
  ham3.classList.toggle("headder__hamburger__3__clicked")
  headHam.classList.toggle("headder__hamburger__clicked") 
  nav.classList.toggle ("nav__clicked")
}
hammy.addEventListener('click',hamburger__clicked)
list.forEach(item => item.addEventListener('click',portPicker))