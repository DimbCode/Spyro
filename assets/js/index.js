// Questions Variables

const questionsButtons = document.querySelectorAll('.question__btn');

// Funtions

function toggleSpoiler(spoiler) {
  spoiler.classList.toggle('none');
}

// Event Listeners

questionsButtons.forEach((item) => {
  item.addEventListener('click', (event) => {
    const clickedElement = event.currentTarget;
    const hiddenSection = clickedElement.parentElement.nextElementSibling;

    toggleSpoiler(hiddenSection);
  });
});

const firstSlider = new Swiper('.feedbacks__slider', {
  direction: 'horizontal',
  slidesPerView: 3,
  spaceBetween: 60,

  pagination: {
    el: '.feedbacks__pagination',
    clickable: true,
  },

});
