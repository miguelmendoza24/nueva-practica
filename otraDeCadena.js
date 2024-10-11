function convertStringToArray(cadena) {
  return  cadena.split("");
}

function  countRepetitions(array) {
  let contador = {};
  for (let index = 0; index < array.length; index++) {
    let caracter = array[index].toLowerCase();
    if (contador[caracter]) {
      contador[caracter]++;
    } else {
      contador[caracter] = 1;
    }
  }
  return contador
}

function filterUnique(array, contador){ 
 let caracternorepetido = [];
 for (let index = 0; index < array.length; index++) {
   let caracter = array[index].toLowerCase();
   if (contador[caracter] === 1) {
     caracternorepetido.push(array[index]);
   }
 }if (caracternorepetido.length === 0) {
   return "";
 }
  return caracternorepetido[0].toString()
}

function firstNonRepeatingLetter(cadena) {
  const cadenaAArray = convertStringToArray(cadena)
  const conteo = countRepetitions(cadenaAArray)
  const unico = filterUnique(cadenaAArray,conteo);
  return unico
}
console.log(firstNonRepeatingLetter("Coco"));
