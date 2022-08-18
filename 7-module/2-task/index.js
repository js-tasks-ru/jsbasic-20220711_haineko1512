import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  title;
  body;
  closeBtn;

  constructor() {
    this.render();
    this.title = this.elem.querySelector('.modal__title');
    this.body = this.elem.querySelector('.modal__body');
    this.closeBtn = this.elem.querySelector('.modal__close');
  }

  render() {
    this.elem = createElement(`
          <div class="modal">
            <div class="modal__overlay"></div>
            <div class="modal__inner">
              <div class="modal__header">
                <button type="button" class="modal__close">
                  <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
                </button>
                <h3 class="modal__title"></h3>
              </div>
              <div class="modal__body"></div>
            </div>
          </div>
        `);
  }

  open() {
    document.body.append(this.elem);
    document.body.classList.add('is-modal-open');
    this.closeBtn.addEventListener('click', (event)=> this.onClickClose(event));
    document.addEventListener('keydown',  (event) => this.onKeyDown(event));
  }

  setTitle(title) {
    this.title.textContent = title;
  }

  setBody(body) {
    this.body.innerHTML = '';
    this.body.append(body);
  }

  close() {
    document.body.classList.remove('is-modal-open');
    this.elem.remove();
  }

  onClickClose(event) {
    event.preventDefault();
    this.close();
  }

  onKeyDown(event) {
    if (event.code === 'Escape') {
      event.preventDefault();
      this.close();
    }
  }
}
