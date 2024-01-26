/** mobile menu **/
const hamburger = document.getElementById('hamburger');
const menuContainer = document.querySelector('.menubar__menu-container');

hamburger.addEventListener('click', handleMobileMenu);

function handleMobileMenu() {
  menuContainer.classList.toggle('open');
  toggleHamburgerIcon();
}

function toggleHamburgerIcon () {
  const h = './img/mobile/icon-hamburger.svg';
  const x = './img/mobile/icon-cross.svg';

  // if the menu container has the "open" class...
  if(menuContainer.classList.contains('open')) {
    //change the hamburger icon to the x icon
      hamburger.setAttribute('src', x );
      hamburger.setAttribute('style','width:20px;height:20px');
  } else {
    //..change x icon to the hamburger icon
    hamburger.setAttribute('src', h );
    hamburger.setAttribute('style','width:24px;height:18px');
  }
}


/** Slider **/

// variables
const slides = document.querySelectorAll('.slider__slide');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
let curSlide = 0; // current slide counter
let maxSlide = slides.length - 1; // maximum number of slides

// loop through slides and set each slides translateX property to index * 100% 
slides.forEach((slide, index) => {
  slide.style.transform = `translateX(${index * 100}%)`;
});

// set slide position by updating the index number
function moveSlide() {
   slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * (index - curSlide)}%)`;
  });
}

// add event listener and navigation functionality
next.addEventListener("click", function () {
  
  // check if current slide is the last and reset current slide
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }
// updates slider position when curSlide is incrimented -100%
moveSlide()

});

// add event listener and navigation functionality
prev.addEventListener("click", function () {
  
  // check if current slide is the first and reset current slide to last
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }
  // updates slider position when curSlide is decrimented -100%
  moveSlide()

});