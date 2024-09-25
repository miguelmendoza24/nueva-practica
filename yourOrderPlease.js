function identificarPalabras(cadena) {
  let array = cadena.split(" ")

  return array;
}
console.log(identificarPalabras("esto es una cadena con varias palabras"));

function buscarPosicion(cadena) {
  for (let index = 0; index < cadena.length; index++) {
    if (!isNaN(cadena[index])) {
    return parseInt(cadena[index])
  }
  }
}
  console.log(buscarPosicion("est1o"));
  
function buscarPosiciones(arregloPalabras) {
  let arregloPosiciones = [];
  for (let index = 0; index < arregloPalabras.length; index++) {
    arregloPosiciones.push(buscarPosicion(arregloPalabras[index]))
  }
  return arregloPosiciones;
}
console.log(buscarPosiciones(["est9a", "es2", "un3a", "caden4a", "con5", "varias6", "palabra7s"]));

function ordenarPalabras(posiciones,palabras) {
  let nuevoArray = [];
  for (let index = 0; index < posiciones.length; index++) {
    nuevoArray[posiciones[index] - 1] = palabras[index];
  }
  return nuevoArray;
}
console.log(
  ordenarPalabras(
    [4, 1, 3, 2, 6, 5],["pal4a", "caden1a", "cald3o", "agu2a", "coca6", "per5ro"]
  )
);

["pal4a", "caden1a", "cald3o", "agu2a", "coca6", "per5ro"]
[4, 1, 3, 2, 6, 5]

function convertirArregloACadena(arregloDeCadena) {
  return arregloDeCadena.join(" ")
}
console.log(
  convertirArregloACadena([
    "pal4a",
    "caden1a",
    "cald3o",
    "agu2a",
    "coca6",
    "per5ro",
  ])
);


