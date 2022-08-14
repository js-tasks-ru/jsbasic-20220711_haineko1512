import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.render();
  }

  render() {
    this.elem = this.#carousel();
    this.#addSlide();
    this.#initCarousel();
    return this.elem;

  }

  #carousel() {
    const carousel = createElement(`
            <div class="carousel">
                <div class="carousel__arrow carousel__arrow_right">
                    <img src="/assets/images/icons/angle-icon.svg" alt="icon" />
                </div>
                <div class="carousel__arrow carousel__arrow_left">
                    <img src="/assets/images/icons/angle-left-icon.svg" alt="icon" />
                </div>
                <div class="carousel__inner"></div>
            </div>`);

    return carousel;
  }

  #addSlide() {
    const slides = this.slides.map(slide => createElement(`
          <div class="carousel__slide" data-id="${slide.id}">
            <img
              src="./img/carousel/${slide.image}"
              class="carousel__img"
              alt="slide"
            />
            <div class="carousel__caption">
              <span class="carousel__price">€${slide.price.toFixed(2)}</span>
              <div class="carousel__title">${slide.name}</div>
              <button type="button" class="carousel__button">
                <img src="./img/icons/plus-icon.svg" alt="icon" />
              </button>
            </div>
          </div>`));
    slides.forEach((slide) => this.elem.querySelector(`.carousel__inner`).append(slide))
  }

  #initCarousel() {
    const arrowRight = this.elem.querySelector('.carousel__arrow_right');
    const arrowLeft = this.elem.querySelector('.carousel__arrow_left');
    const inner = this.elem.querySelector('.carousel__inner');
    const slides = this.elem.querySelectorAll('.carousel__slide');
    const btn = this.elem.querySelectorAll('.carousel__button');
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

    btn.forEach(btn => btn.addEventListener('click', this.#clickAddBtn));
  }

  #clickAddBtn = (event) => {
    let id = event.target.closest('.carousel__slide').dataset.id;
    let addBtnEvent = new CustomEvent('product-add', { bubbles: true, detail: id });
    this.elem.dispatchEvent(addBtnEvent);
  }
}
