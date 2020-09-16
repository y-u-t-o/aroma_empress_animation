"use strict";

$(function () {

  /* wipe */
  $('.wipe').addClass('in');

  /* slideShow */
  let nowPage = 0;
  let nextPage = 1;
  const slides = $('.mv__slideShow img');
  const fadeTime = 1500;
  const showTime = 3000;
  const slideShow = () => {
    nextPage = (nowPage + 1) % 3;
    slides.eq(nowPage).fadeOut(fadeTime);
    slides.eq(nextPage).fadeIn(fadeTime);
    nowPage = nextPage;
  };
  slides.hide();
  slides.eq(0).show();
  setInterval(slideShow, showTime);

  /* BackToTop */
  $('.backToTop').click(function () {
    $('html, body').animate(
      { scrollTop: 0 },
      { duration: 1000 },
      { easing: 'ease-in-out' }
    );
  });

  /* hamburger */
  const btn = document.querySelector('.headerMenu__button');
  const border1 = document.querySelector('.border1');
  const border2 = document.querySelector('.border2');
  const border3 = document.querySelector('.border3');
  const nav = document.querySelector('.hamburger');
  const all = document.querySelector('.container');
  const header = document.querySelector('.header');
  const mv = document.querySelector('.mv');
  const about = document.querySelector('.about');
  const course = document.querySelector('.course');
  const gallery = document.querySelector('.gallery');
  const review = document.querySelector('.review');
  const access = document.querySelector('.access');
  const footer = document.querySelector('.footer');
  btn.addEventListener('click', function () {
    border1.classList.toggle('open');
    border2.classList.toggle('open');
    border3.classList.toggle('open');
    header.classList.toggle('white');
    nav.classList.toggle('open');
    all.classList.toggle('fix');
    mv.classList.toggle('close');
    about.classList.toggle('close');
    course.classList.toggle('close');
    gallery.classList.toggle('close');
    review.classList.toggle('close');
    access.classList.toggle('close');
    footer.classList.toggle('close');
  });

  /* scrollAnimation */
  const targetElement = document.querySelectorAll('.animationTarget');
  document.addEventListener('scroll', function () {
    for (let i = 0; i < targetElement.length; i++) {
      const getElementDistanse = targetElement[i].getBoundingClientRect().top + targetElement[i].clientHeight;
      if (window.innerHeight > getElementDistanse) {
        targetElement[i].classList.add('show');
      }
    }
  });

  /* pageLink */
  let aboutLocate = $('#aboutLocate').offset().top;
  $('#about').click(function () {
  $(window).scrollTop(aboutLocate);
  });

});