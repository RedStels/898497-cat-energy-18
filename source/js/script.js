var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.page-header__toggle');

var slides = document.querySelectorAll('#slides .cat-slider__slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 3000);


navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

function nextSlide() {
  slides[currentSlide].className = 'cat-slider__slide';
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].className = 'cat-slider__slide cat-slider__showing';
}