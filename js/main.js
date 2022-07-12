/* ------------------------- Header --------------------------*/

const hamburger = document.querySelector('.header__hamburger')
const hamburgerActive = document.querySelector('.header__hamburger.active')
const headerNav = document.querySelector('.header__nav')
const overlay = document.querySelector('.header__overlay')
const cartImg = document.querySelector('.header__box--cart img')

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

/* ------------------------- Slider --------------------------*/
const imgPrincipal = document.querySelector('.main__slider-container--img-principal__img')
const listOfContainers = document.querySelectorAll('.main__slider-container--imgs-container__img-container')


listOfContainers.forEach((container) => {
    //console.log(container.dataset.id);
    container.addEventListener('click', () =>{
        listOfContainers.forEach((c) => {
            console.log(c.classList.remove('active'));
        })

        container.classList.add('active')
        imgPrincipal.setAttribute('src', `../images/image-product-${container.dataset.id}.jpg`)
    })

})

/* ------------------------- Cart Box --------------------------*/
const minus = document.querySelector('.main__content--cart-box__amount span:nth-child(1)')
const amount = document.querySelector('.main__content--cart-box__amount span:nth-child(2)')
const plus = document.querySelector('.main__content--cart-box__amount span:nth-child(3)')
const price = 125
const addToCart = document.querySelector('.main__content--cart-box__btn')
const headerBoxCart = document.querySelector('.header__box--cart')
const cartSpanHeader = document.querySelector('.header__box--cart span')
const boxCartPreview = document.querySelector('.header__box--cart__preview')
const boxCartPreviewTitle = document.querySelector('.header__box--cart__preview--title')
const boxCartPreviewDescription = document.querySelector('.header__box--cart__preview--description')


console.log( typeof parseInt(amount.innerHTML));

minus.addEventListener('click', ()=>{
    if ( parseInt(amount.innerHTML) > 0) {
        amount.innerHTML = parseInt(amount.innerHTML) - 1;
    }
})

plus.addEventListener('click', ()=>{
    amount.innerHTML = parseInt(amount.innerHTML) + 1;
})

addToCart.addEventListener('click', () =>{
    cartSpanHeader.innerHTML = amount.innerHTML
    if(parseInt(cartSpanHeader.innerHTML) > 0){
        boxCartPreviewDescription.innerHTML = ''
        // Remove unnecessary a tags
        if (boxCartPreviewDescription.nextElementSibling) {
            boxCartPreviewDescription.nextElementSibling.remove()
        }
        cartSpanHeader.style.display = 'flex'
        fillCartBox()
    }else if(parseInt(cartSpanHeader.innerHTML) == 0){
        // Remove unnecessary a tags
        if (boxCartPreviewDescription.nextElementSibling) {
            boxCartPreviewDescription.nextElementSibling.remove()
        }
        boxCartPreviewDescription.innerHTML = 'Your cart is empty'
        cartSpanHeader.style.display = 'none'
    }
})

headerBoxCart.addEventListener('click', ()=>{
    if(parseInt(amount.innerHTML) == 0){
        boxCartPreviewDescription.innerHTML = 'Your cart is empty'
    }
    boxCartPreview.classList.toggle('active')
})

/* ------------------------- Fill The Cart Box --------------------------*/
// const headerBoxCart = document.querySelector('.header__box--cart')
// const cartSpanHeader = document.querySelector('.header__box--cart span')
// const boxCartPreview = document.querySelector('.header__box--cart__preview')
function fillCartBox(){
    const div = document.createElement('div')
    div.classList.add('header__box--cart__preview--description__content')
    
    const img = document.createElement('img')
    img.classList.add('header__box--cart__preview--description__content--img')
    img.setAttribute('src', '../images/image-product-1-thumbnail.jpg')
    
    const container = document.createElement('div')
    container.classList.add('header__box--cart__preview--description__content--container')
    
    const p = document.createElement('p')
    p.classList.add('header__box--cart__preview--description__content--container__title')
    let pText = document.createTextNode('Fall Limited Edition Sneakers')
    p.appendChild(pText)
    
    const span = document.createElement('span')
    span.classList.add('header__box--cart__preview--description__content--container__span')
    let spanText = document.createTextNode(`$${price} * ${parseInt(amount.innerHTML)} = `)
    span.appendChild(spanText)
    
    const strong = document.createElement('strong')
    let strongText = document.createTextNode(Math.imul(price,parseInt(amount.innerHTML)))
    strong.appendChild(strongText)
    span.appendChild(strong)
    
    const a = document.createElement('a')
    a.classList.add('header__box--cart__preview--btn')
    let aText = document.createTextNode('Checkout')
    a.appendChild(aText)
    
    container.appendChild(p)
    container.appendChild(span)
    
    boxCartPreviewDescription.appendChild(div)
    div.appendChild(img)
    div.appendChild(container)
    
    boxCartPreview.appendChild(a)
}


/* ------------------------- Turn On/Off Lightbox --------------------------*/
const lightBox = document.querySelector('.lightbox')
const btnCloseLightbox = document.querySelector('.lightbox > img')
const btnleftLightbox = document.querySelector('.lightbox__slider-container--img-principal__btn.btn-left')
const btnRightLightbox = document.querySelector('.lightbox__slider-container--img-principal__btn.btn-right')
const containerImgsLightbox = document.querySelector('.lightbox__slider-container--imgs-container').children
const imgPrincipalSliderLightbox = document.querySelector('.lightbox__slider-container--img-principal > img')
let indexOfContainers;
imgPrincipal.addEventListener('click', () =>{
    lightBox.classList.add('active')
})

btnCloseLightbox.addEventListener('click', ()=>{
    lightBox.classList.remove('active')
})

btnleftLightbox.style.display = 'none'

btnleftLightbox.addEventListener('click', ()=>{
    for (const el of containerImgsLightbox) {
        if(el.classList.contains('active')){
            indexOfContainers = el.dataset.id; 
        }
    }
    indexOfContainers--

    for (const el of containerImgsLightbox) {
        el.classList.remove('active')
        if (el.dataset.id == indexOfContainers) {
            el.classList.add('active')
        }
    }

    imgPrincipalSliderLightbox.setAttribute('src', `../images/image-product-${indexOfContainers}.jpg`)
    
    if (indexOfContainers == 1) {
        btnleftLightbox.style.display = 'none'
    }else if (indexOfContainers > 1 ) {
        btnRightLightbox.style.display = 'flex'
    }

})

btnRightLightbox.addEventListener('click', ()=>{
    for (const el of containerImgsLightbox) {
        if(el.classList.contains('active')){
            indexOfContainers = el.dataset.id; 
        }
    }
    indexOfContainers++

    for (const el of containerImgsLightbox) {
        el.classList.remove('active')
        if (el.dataset.id == indexOfContainers) {
            el.classList.add('active')
        }
    }

    imgPrincipalSliderLightbox.setAttribute('src', `../images/image-product-${indexOfContainers}.jpg`)
    
    if (indexOfContainers== 4) {
        btnRightLightbox.style.display = 'none'
    }else if (indexOfContainers > 1) {
        btnleftLightbox.style.display = 'flex'
    }
})


