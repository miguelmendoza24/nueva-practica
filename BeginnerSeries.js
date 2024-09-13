function getSum(a, b) {
  let suma = 0;
 if (a === b) {
   return a;
  }
  let mayor = 0;
  let menor = 0;
  if (a > b) {
    mayor = a;
    menor = b;
  } else {
    menor = a;
    mayor = b;
  }
  for (let index = menor; index <= mayor; index++) { 
    suma += index;
  }
  return suma;
}
console.log(getSum(2, -1));

