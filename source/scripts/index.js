// mobile navigation

const mobileMenu = () => {
  let navMain = document.querySelector('.main-nav');
  let navToggle = document.querySelector('.user-list__toggle');

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
};

mobileMenu();

// slider

document.addEventListener('DOMContentLoaded', function () {
  const slider = document.querySelector('.slider');
  const slides = slider.querySelectorAll('.slide');
  const activeSlides = 'slide--active';
  const slideCount = slides.length;
  const controlButtons = slider.querySelectorAll('.slider__button-pagination');
  const prevButton = slider.querySelector('.slider__button-prev');
  const nextButton = slider.querySelector('.slider__button-next');
  const activeButton = 'active';
  const inactiveButton = 'aria-disabled';
  const currentButton = 'aria-current';
  let currentSlide = 0;

  function updateSlider() {
    slides.forEach((slide, index) => {
      if(index === currentSlide) {
        slide.classList.add(activeSlides);
      } else {
        slide.classList.remove(activeSlides);
      }
    })

    controlButtons.forEach((button, index) => {
      if (index === currentSlide) {
        button.classList.add(activeButton);
        button.setAttribute(currentButton, true);
      } else {
        button.classList.remove(activeButton);
        button.removeAttribute(currentButton, true);
      }

      prevButton.setAttribute(inactiveButton, currentSlide === 0);
      nextButton.setAttribute(inactiveButton, currentSlide === slideCount - 1);
    })
  }

  controlButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      if (index < slideCount) {
        currentSlide = index;
        updateSlider();
      }
    })
  })

  prevButton.addEventListener('click', () => {
    if (currentSlide > 0) {
      currentSlide--;
      updateSlider();
    }
  })

  nextButton.addEventListener('click', () => {
    if (currentSlide < slideCount - 1) {
      currentSlide++;
      updateSlider();
    }
  })

  slider.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowLeft' && currentSlide > 0) {
      currentSlide--;
      updateSlider();
    } else if (event.key === 'ArrowRight' && currentSlide < slideCount - 1) {
      currentSlide++;
      updateSlider();
    }
  })

  updateSlider();
})
