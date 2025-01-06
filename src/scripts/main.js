'use strict';

const dropdown = document.querySelector('.top-bar__dropdown');
const trigger = document.querySelector('.top-bar__dropdown-trigger');

let timeoutId;

trigger.addEventListener('mouseenter', () => {
  clearTimeout(timeoutId);
  dropdown.classList.add('dropdown--active');
});

trigger.addEventListener('mouseleave', () => {
  timeoutId = setTimeout(() => {
    dropdown.classList.remove('dropdown--active');
  }, 2000);
});

const slider = document.querySelector('.slider');
const right = document.querySelector('.arrow--right');
const left = document.querySelector('.arrow-left');
let count = 0;

right.addEventListener('click', (e) => {
  if (count === 0) {
    slider.classList.add('slider-right');
    right.style.opacity = 0.3;
    count++;
  } else if (count === -1) {
    slider.classList.remove('slider-left');
    left.style.opacity = 1;
    count++;
  } else {
    return;
  }
});

left.addEventListener('click', (e) => {
  if (count === 0) {
    slider.classList.add('slider-left');
    left.style.opacity = 0.3;
    count--;
  } else if (count === 1) {
    slider.classList.remove('slider-right');
    right.style.opacity = 1;
    count--;
  } else {
    return;
  }
})
