# Frontend Mentor - Creative agency single page site solution

This is a solution to the [Creative agency single page site challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/creative-agency-singlepage-site-Pq6V3I2RM). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Navigate the slider using either their mouse/trackpad or keyboard

### Screenshot

![](./solution-screenshot.png)


### Links

- Solution URL: [Creative Agency-single page site](https://ldg.github.io/agency-challenge/)

## My process
I started with the markup first, building out the HTML with CSS Grid in mind as the main tool I'd be using to build this complex layout. I tried to be aware of screen readers so I paid attention to adding roles to HTML elements where needed.

Additionally I knew I wanted to use vanilla javascript on this project so I included data-attributes where I thought I might need them once I started working on the mobile menu and the image carousel. I ended up not useing them in my javascript, but I didn't bother to remove them. 

I used SCSS on this project, so I set up SASS partials to organize my code. The slider and mobile menu was built vaninlla javascript.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Sass](https://sass-lang.com/) - For Styles
- Vanilla Javascript


### What I learned

This layout was pretty challenging, I found that getting the propotions of design elements to be consistent across different screen sizes to be a challenge. When I started this I thought I'd limit the screen sizes I supported to just a few break-points. However I found it difficult to do so once I started work on the desktop styles. 

My breakpoint strategy was to use device widths as my guide for setting breakpoints. If I was to do this again, I think I'd probably try a more organic approach and set break-points where the design starts to fall apart first, then consider device widths secondarily.

The mobile menu uses Javascript to add/remove a css class, which controls the opening and closing of the mobile menu container; as well as the switching of the hamburger icon. I used CSS transitions to make the actions more engaging. 

The image slider was a real challenge for me, I ended up basing my solution on [this article](https://blog.logrocket.com/build-image-carousel-from-scratch-vanilla-javascript/). I refactored the code a bit, creating a function to handle the slide moving, and calling the function from the click event. 

**Move Function**
```js
function moveSlide() {
   slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * (index - curSlide)}%)`;
  });
}
```
**Event listener**
```js
next.addEventListener("click", function () {

  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  moveSlide()

});
```


### Continued development

I feel my command of Javascript is my biggest weakness, so I'll be looking to improve in that area.


### Useful resources

- [CSS-Tricks: Complete Guide to CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/) - I consulted this article constantly while building my solution, it's a very helpful resource
- [Kevin Powell Youtube Channel](https://www.youtube.com/@KevinPowell) - Kevin Powell's videos really helped me to understand CSS Grid and SaSS, a very rich resource for all things CSS


## Author

- Website - [Scott McIntire](https://ldgwebdesign.com)
- Frontend Mentor - [@ldg](https://www.frontendmentor.io/profile/ldg)

