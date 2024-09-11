/*const binaryArrayToNumber = (arr) => {
  for (let index = 0; index < arr.length; index++) {
    
    
  }
  return 0;
};


//El valor de cada posición se obtiene de una potencia de base 2, elevada a un exponente igual a la posición del dígito menos uno.
//podria hacer que segun la posicion en el indice


//relacion entre indice y longitud

//https://meet.google.com/pri-bkso-upn*/

function recorrerAlrevez(arr) {
  const ultimoIndice = arr.length - 1;
  for (let index = ultimoIndice; index >= 0; index--) {
    console.log(2**(ultimoIndice - index));
    console.log("---------");
  }
}
console.log(recorrerAlrevez([1, 1, 1, 1]));

