const bilboard =  document.querySelector('.bilboard__card')
const bilCard = document.querySelector('.bilboard__card--content')
const bilboardimg = document.querySelector('.bilboard__img')
const workimgs = document.querySelectorAll('.site')
const aboutCard = document.querySelector('.about__content--bio')
function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
}
function slidein(e){
    const slideInAt = (window.scrollY + window.innerHeight) - aboutCard.offsetHeight / 2;
    const imgBottom = aboutCard.offsetTop + aboutCard.offsetHeight;
    const isHalfShown = slideInAt > aboutCard.offsetTop;
    const isNotScrolledPass = window.scrollY < imgBottom
    if(isHalfShown && isNotScrolledPass){
        aboutCard.classList.add('inview')}


}
function bilboardcardsrink(){
    bilCard.style.width = '60%'
    bilboardimg.style.boxShadow ='0px -1px 58px -15px rgba(138,136,138,1)'
    bilboardimg.style.transform = 'scale(1.03)'
}
function bilboardcardgrow(){
    bilCard.style.width = '100%'
    bilboardimg.style.boxShadow = 'none'
    bilboardimg.style.transform = 'scale(.98)' 
}
function handleimgs(){
    console.log('yo');
    this.classList.toggle('open')
}
function handleimgsLeave(){
    this.classList.remove('open')
}
workimgs.forEach(pic => pic.addEventListener('mouseover', handleimgs))
workimgs.forEach(pic => pic.addEventListener('mouseleave', handleimgsLeave))
window.addEventListener('scroll', debounce(slidein))
bilboard.addEventListener('mouseover',bilboardcardsrink)
bilboard.addEventListener('mouseleave',bilboardcardgrow)