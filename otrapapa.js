function countPositivesSumNegatives(arr) {
  if (!arr || arr.length === 0) {
    return []
  }
  let contarPositivo = 0;
  let sumarNegativo = 0;
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] > 0) {
      contarPositivo ++
    } else if (arr[index] < 0){ 
    sumarNegativo += arr[index]
    }
  }
  return [contarPositivo, sumarNegativo]
}
console.log(
  countPositivesSumNegatives([
    0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14,
  ])
);