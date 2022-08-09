/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  // rows = [];
  table;
  headerHeadlines = {name : "Имя", age : "Возвраст", salary : "Вес", city : "Город"};

  constructor(rows) {
    this.rows = rows;
    this.table = document.createElement('table');
    this.elem = this.elem();
  }

  elem() {
    this.#renderHead();
    this.#renderBody();
    return this.table;
  }

  get headTitle() {
    return Object.values(this.headerHeadlines);
  }

  #renderHead() {
    let rowHead = this.table.createTHead().insertRow(0);
    this.headTitle.forEach((item, index) => rowHead.insertCell().innerHTML = this.headTitle[index]);
    rowHead.insertCell(rowHead.length).innerHTML = '';
    return rowHead;
  }

  #renderBody() {
    let body = this.table.createTBody();
    for ( let row of this.rows ) {
      let newRow = body.insertRow();
      Object.values(row).forEach((item) => newRow.insertCell().innerHTML = item);
      newRow.insertCell(newRow.lenght).appendChild(this.#btn());
    }
    let btns = body.querySelectorAll('.btn');
    btns.forEach((btn) => btn.addEventListener('click', this.#deleteRow));
  }

  #deleteRow(event) {
    event.currentTarget.parentElement.parentElement.remove();
  }

  #btn() {
    let btn = document.createElement('button');
    btn.classList.add('btn');
    btn.textContent = 'X';
    return btn;
  }
}

