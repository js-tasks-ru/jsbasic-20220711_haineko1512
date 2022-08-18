import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  offset = 350;
  indexClick = 0;

  constructor(categories) {
    this.categories = categories;
    this.render();
  }

  render() {
    this.elem = this.ribbon();
    this.#addCategories();
    this.#scrollCategory();
    return this.elem;
  }

  ribbon() {
    const ribbon = createElement(`
            <div class="ribbon">
                <button class="ribbon__arrow ribbon__arrow_left ">
                    <img src="/assets/images/icons/angle-icon.svg" alt="icon">
                </button>
                <nav class="ribbon__inner">
                </nav>
                <button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
                    <img src="/assets/images/icons/angle-icon.svg" alt="icon">
                </button>
            </div>`
    );

    return ribbon;
  }

  #addCategories() {
    const categories = this.categories.map(category => createElement(`
            <a href="#" class="ribbon__item" data-id="${category.id}">${category.name}</a>
            `
    ));
    categories[0].classList.add('ribbon__item_active');
    categories.forEach((category) => {
      this.elem.querySelector(`.ribbon__inner`).append(category);
      category.addEventListener('click', (event) => {
        this.elem.querySelector('.ribbon__item_active').classList.remove('ribbon__item_active');
        event.preventDefault();
        const categoryEvent = new CustomEvent("ribbon-select",
          {
            detail: event.target.dataset.id,
            bubbles: true
          });
        this.elem.dispatchEvent(categoryEvent);
        event.target.classList.add('ribbon__item_active');
      });
    });
  }

  #scrollCategory() {
    const leftArrow = this.elem.querySelector('.ribbon__arrow_left');
    const rightArrow = this.elem.querySelector('.ribbon__arrow_right');

    leftArrow.addEventListener('click', this.#scrolling.bind(this));
    rightArrow.addEventListener('click', this.#scrolling.bind(this));
  }

  #scrolling(event) {
    let direction = 0;
    let scrollRight = this.scrollRight < 1 ? 0 : this.scrollRight;

    if (event.currentTarget.matches('.ribbon__arrow_right')) {
      this.indexClick++;
      direction++;
    }
    if (event.currentTarget.matches('.ribbon__arrow_left')) {
      this.indexClick--;
      direction--;
    }

    let offsetWidth = this.offset * direction * this.indexClick;
    this.inner.scrollBy(offsetWidth, 0);

    (this.indexClick === 0) ? this.arrowLeft.classList.remove('ribbon__arrow_visible') : this.arrowLeft.classList.add('ribbon__arrow_visible');
    (scrollRight > 0 ) ? this.arrowRight.classList.add('ribbon__arrow_visible') : this.arrowRight.classList.remove('ribbon__arrow_visible');
  }

  get inner() {
    return this.elem.querySelector('.ribbon__inner');
  }

  get arrowRight() {
    return this.elem.querySelector('.ribbon__arrow_right');
  }

  get arrowLeft() {
    return this.elem.querySelector('.ribbon__arrow_left');
  }

  get clientWidth() {
    return this.inner.clientWidth;
  }

  get scrollWidth() {
    return this.inner.scrollWidth;
  }

  get scrollLeft() {
    return this.inner.scrollLeft;
  }

  get scrollRight() {
    return this.scrollWidth - this.scrollLeft - this.clientWidth
  }
}
