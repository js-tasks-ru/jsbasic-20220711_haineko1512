function highlight(table) {
  let indexCellStatus, indexCellGender, indexCellAge;

  for ( let row of table.rows) {
    if (row.rowIndex == 0) {
      for (let cell of row.cells) {
        if (cell.textContent === 'Status') {
          indexCellStatus = cell.cellIndex;
        }
        if (cell.textContent === 'Gender') {
          indexCellGender = cell.cellIndex;
        }
        if (cell.textContent === 'Age') {
          indexCellAge = cell.cellIndex;
        }
      }
    } else {
      for (let cell of row.cells) {
        if (cell.cellIndex == indexCellStatus) {

          if (cell.dataset.available === undefined) {
            cell.parentElement.setAttribute('hidden', '');
          } else {
            cell.parentElement.classList.add(cell.dataset.available === 'true' ? 'available' : 'unavailable');
          }
        }

        if (cell.cellIndex == indexCellGender) {
          if (cell.textContent == 'm') {
            cell.parentElement.classList.add('male');
          } if (cell.textContent == 'f') {
            cell.parentElement.classList.add('female');
          }
        }

        if (cell.cellIndex == indexCellAge) {
          if (Number(cell.textContent) < 18) {
            cell.parentElement.style.textDecoration = 'line-through';
          }
        }
      }
    }
  }
}
