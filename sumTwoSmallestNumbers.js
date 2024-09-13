function sumTwoSmallestNumbers(numbers) {
  const listaOrdenada = numbers.sort(function (a, b) {
    return a - b;
  
  }
  )
  return listaOrdenada[0] + listaOrdenada[1];
}
console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));

