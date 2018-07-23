const bilboard =  document.querySelector('.bilboard__card')
const bilCard = document.querySelector('.bilboard__card--content')
const bilboardimg = document.querySelector('.bilboard__img')
const workimgs = document.querySelectorAll('.site')
function bilboardcardsrink(){
    bilCard.style.width = '60%'
    bilboardimg.style.boxShadow ='0px -1px 58px -15px rgba(138,136,138,1)'
    bilboardimg.style.transform = 'scale(1)'
}
function bilboardcardgrow(){
    bilCard.style.width = '100%'
    bilboardimg.style.boxShadow = 'none'
    bilboardimg.style.transform = 'scale(.98)' 
}
function hanndleimgs(){
    console.log('yo');
    this.classList.toggle('open')
}
function hanndleimgsLeave(){
    this.classList.remove('open')
}
workimgs.forEach(pic => pic.addEventListener('mouseover', hanndleimgs))
workimgs.forEach(pic => pic.addEventListener('mouseleave', hanndleimgsLeave))

bilboard.addEventListener('mouseover',bilboardcardsrink)
bilboard.addEventListener('mouseleave',bilboardcardgrow)