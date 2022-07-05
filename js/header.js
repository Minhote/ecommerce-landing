const hamburger = document.querySelector('.header__hamburger')
const hamburgerActive = document.querySelector('.header__hamburger.active')
const headerNav = document.querySelector('.header__nav')
const overlay = document.querySelector('.header__overlay')
const cartImg = document.querySelector('.header__box--cart img')


console.log(cartImg);
// Hamburguer menu
hamburger.addEventListener('click', ()=>{
    headerNav.style.transform = 'translateX(0)';
    overlay.style.transform = 'translateX(0)'
})

hamburgerActive.addEventListener('click', ()=>{
    headerNav.style.transform = 'translateX(-100%)';
    overlay.style.transform = 'translateX(-100%)'    
})

// Mouse evemts of cart
cartImg.addEventListener('mouseover', ()=>{
    cartImg.setAttribute('src', '../images/icon-cart-active.svg')
})

cartImg.addEventListener('mouseout', ()=>{
    cartImg.setAttribute('src', '../images/icon-cart.svg')
})
