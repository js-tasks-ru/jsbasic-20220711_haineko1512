let calculator = {
  read(a, b) {
    this.valueA = a;
    this.valueB = b;
  },
  sum() {
    return this.valueA + this.valueB;
  },
  mul() {
    return this.valueA * this.valueB;
  }
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
