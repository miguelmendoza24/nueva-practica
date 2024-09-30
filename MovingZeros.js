function separarCeros(array) {
  let arrayCeros = [];
  let arrayNoCeros = [];
  for (let index = 0; index < array.length; index++) {
    if (array[index] === 0) {
      arrayCeros.push(array[index])
    } else {
      arrayNoCeros.push(array[index])
    }
  }
  return [arrayNoCeros, arrayCeros];
}

function unirArray(arrayNoCeros, arrayCeros) {
  let nuevoArray = arrayNoCeros.concat(arrayCeros)
  return nuevoArray;
}

function moveZeros(arrayDeArrays) {
  const [arrayNoCeros,arrayCeros] = separarCeros(arrayDeArrays);
   const nuevoArray = unirArray(arrayNoCeros, arrayCeros)
  return nuevoArray;
}

//Moving Zeros To The End
