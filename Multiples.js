function creaArray(num) {
  let array = [];
  for (index = num-1; index >= 1; index--){
    array [index -1] = index
  }
  return array;
}

function multiplosDeTres(array) {
  let multiplos = [];
  for (index = 0; index < array.length; index++){
    if (array[index] % 3 === 0) {
      multiplos.push(array[index])
      index++;
    }
  }
  return multiplos;
}

function multiplosDeCinco(array) {
  let multiplosCinco = [];
  for (index = 0; index < array.length; index++) {
    if (array[index] % 5 === 0) {
      multiplosCinco.push(array[index])
    }
  }
  return multiplosCinco;
}


function unificarArray(arrayUno,arrayDos) {
  let copiaArray = [...arrayUno]
  for (let index = 0; index < arrayDos.length; index++) {
    if (!copiaArray.includes(arrayDos[index])) {
      copiaArray.push(arrayDos[index])
    }
  }
  return copiaArray
}

function sumar(array) {
  let suma = 0;
  for (index = 0; index < array.length; index++){
    suma += array[index];
  }
  return suma;
}



function solution(num) {
  const array = creaArray(num);
  const multiplosTres = multiplosDeTres(array);
  const multiplosCinco = multiplosDeCinco(array);
  const unirArray = unificarArray(multiplosTres, multiplosCinco);
  const sumacion = sumar(unirArray);
  
  return sumacion;
}
console.log(solution(10));


