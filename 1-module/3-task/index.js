function ucFirst(str) {
  let firstSymbol = str.charAt(0).toUpperCase();
  let newString = firstSymbol + str.slice(1);
  return newString;
}
