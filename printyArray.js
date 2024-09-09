/*let cadena = "me gusta pasear";
cadena = `el mensaje es : ${cadena}`
console.log(cadena);
cadena = `me enviaron esto ${cadena}`
console.log(cadena);
*/
function printArray(array) {
  let cadena = "";
  for (let index = 0; index < array.length; index++) {
    let element = array[index];
    if (index < array.length - 1) {
      cadena += `${element},`;
    } else {
      cadena += `${element}`
    }
  }
  return cadena;
}
console.log(printArray([2, 4, 5, 2]));
