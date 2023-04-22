const transitionTrigger = document.querySelector('.transition-trigger');
const transition = document.querySelector('.transition');

window.addEventListener('load', () => {
  if (sessionStorage.length === 0) {
    console.log('hello');
  } else {
    console.log('Goodbye');
  }
});
