function getMinMax(str) {
  let result = {}
  let sortArray = str.split(' ').filter(value => value !== " ").map(value => parseFloat(value)).filter(value => !isNaN(value)).sort((a,b) => a - b );

  result.min = sortArray[0];
  result.max = sortArray[sortArray.length - 1];

  return result;
}
