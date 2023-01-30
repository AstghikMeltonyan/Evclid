const burgerBtn = document.querySelector('.button-burger');
const menu = document.querySelector('.header-nav');
const menuLinks = menu.querySelectorAll('.header-nav__link');
const stagesBtn = document.querySelectorAll('.stages__btn');
const stagesContent = document.querySelectorAll('.stages__content');
const searchBtn = document.querySelector('.search-btn');
const searchArea = document.querySelector('.search-area');
const closeBtn = document.querySelector('.search-close__btn');
const searchInput = document.querySelector('.search__input');

burgerBtn.addEventListener('click', function () {
  burgerBtn.classList.toggle('burger--active');
  burgerBtn.setAttribute('aria-label','закрыть меню');
  menu.classList.toggle('header-nav--active');
  document.body.classList.toggle('stop-scrolle');
})

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {
    burgerBtn.classList.remove('burger--active');
    menu.classList.remove('header-nav--active');
    document.body.classList.remove('stop-scrolle');
  })
})

stagesBtn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    stagesBtn.forEach(function (el) {
      el.classList.remove('active')
    });
    e.currentTarget.classList.add('active');

    stagesContent.forEach(function (el) {
      el.classList.remove('active');
      document.querySelector(`[data-target="${path}"]`).classList.add('active')
    })

  })
})

const swiper = new Swiper('.swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  a11y: {
    paginationBulletMessage: ""
  }

});

searchBtn.addEventListener('click', function(){
  searchArea.classList.add('search-area--active');
  searchInput.classList.add('search__input--active');
  closeBtn.classList.add('search-close__btn--active')
})

closeBtn.addEventListener('click', function(){
  searchArea.classList.remove('search-area--active');
  searchInput.classList.remove('search__input--active');
  closeBtn.classList.remove('search-close__btn--active')
})

