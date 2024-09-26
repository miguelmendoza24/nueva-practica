function identificarPalabras(cadena) {
  let array = cadena.split(" ")

  return array;
}

function buscarPosicion(cadena) {
  for (let index = 0; index < cadena.length; index++) {
    if (!isNaN(cadena[index])) {
    return parseInt(cadena[index])
  }
  }
}
  
function buscarPosiciones(arregloPalabras) {
  let arregloPosiciones = [];
  for (let index = 0; index < arregloPalabras.length; index++) {
    arregloPosiciones.push(buscarPosicion(arregloPalabras[index]))
  }
  return arregloPosiciones;
}

function ordenarPalabras(posiciones,palabras) {
  let nuevoArray = [];
  for (let index = 0; index < posiciones.length; index++) {
    nuevoArray[posiciones[index] - 1] = palabras[index];
  }
  return nuevoArray;
}

function convertirArregloACadena(arregloDeCadena) {
  return arregloDeCadena.join(" ")
}


function order(cadena) {
  if (cadena) {
    
    let palabras = identificarPalabras(cadena);
    let posiciones = buscarPosiciones(palabras);
    let nuevoArray = ordenarPalabras(posiciones, palabras);
    let cadenaOrdenada = convertirArregloACadena(nuevoArray)
    return cadenaOrdenada;
  }
  return ""
}
//Multiples of 3 or 5

