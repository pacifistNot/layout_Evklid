// Поле поиска +-
let search = document.querySelector('.header__search');
let searchForm = document.querySelector('.header__form');
let searchCancel = document.querySelector('.header__form__cancel');
// let headerNav = document.querySelector('.header__nav');

search.addEventListener('click', function() {
   search.classList.remove('header__search--active');
   searchForm.classList.toggle('header__search--active');
   // headerNav.classList.toggle('header__nav--tran');
})

searchCancel.addEventListener('click', function() {
   searchForm.classList.remove('header__search--active');
   search.classList.toggle('header__search--active');
})


// Бургер меню +
let burger = document.querySelector('.header__burger');
let nav = document.querySelector('.header__container .header__nav');
let navLinks = document.querySelectorAll('.nav__link')

burger.addEventListener('click', function() {
    burger.classList.toggle('header__burger--active');
    nav.classList.toggle('header__nav--active');
    document.body.classList.toggle('stop-scroll');
})

navLinks.forEach(function(el){
    el.addEventListener('click', function() {
        burger.classList.remove('header__burger--active');
        nav.classList.remove('header__nav--active');
        document.body.classList.remove('stop-scroll');
    })
})


// Слайдер +
const swiper = new Swiper('.swiper-container', {
    loop: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  });


// Табы +
let workLink = document.querySelectorAll('.work__link');
let workBlock = document.querySelectorAll('.work__block');

workLink.forEach(function(element){
    element.addEventListener('click', function(e){
        const path = e.currentTarget.dataset.path;

        workLink.forEach(function(link){ link.classList.remove('work__link--active')});
        e.currentTarget.classList.add('work_link--active');

        workBlock.forEach(function(element){ element.classList.remove('work__block--active')});
        document.querySelector(`[data-target="${path}"]`).classList.add('work__block--active');
    })
})



// Аккордеон +
new Accordion('.accordion-container');
