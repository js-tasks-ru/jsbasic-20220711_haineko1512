function initCarousel(event) {
  const carousel = document.querySelector('.carousel');
  const arrowRight = carousel.querySelector('.carousel__arrow_right');
  const arrowLeft = carousel.querySelector('.carousel__arrow_left');
  const inner = carousel.querySelector('.carousel__inner');
  const slides = carousel.querySelectorAll('.carousel__slide');
  let indexSlide = 0;

  arrowLeft.style.display = 'none';
  arrowRight.addEventListener('click', switchSlide);
  arrowLeft.addEventListener('click', switchSlide);

  function switchSlide(event) {
    if (event.currentTarget === arrowRight) {
      indexSlide++;
    }

    if (event.currentTarget === arrowLeft) {
      indexSlide--;
    }

    let switchX = -inner.offsetWidth * indexSlide;
    inner.style.transform = `translateX(${switchX}px)`;

    arrowRight.style.display = (indexSlide === Array.from(slides).length - 1) ? 'none' : 'flex';
    arrowLeft.style.display = (indexSlide === 0) ? 'none' : 'flex';
  }
}
