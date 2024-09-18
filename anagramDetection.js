function isAnagram(test, original) {
  if (test.length !== original.length) {
    return false;
  }
  let cadenaOrdenada = test.split("");
  let cadenaOrdenadaDos = original.split("");
  cadenaOrdenada.sort();
  cadenaOrdenadaDos.sort();
  let cadenaOrdenadaArreglo = cadenaOrdenada.join("");
  let cadenaOrdenadaDosArreglo = cadenaOrdenadaDos.join("");
  console.log(cadenaOrdenadaArreglo);
  console.log(cadenaOrdenadaDosArreglo);
  return cadenaOrdenadaArreglo === cadenaOrdenadaDosArreglo;
}
console.log(isAnagram("foefet", "toffee"));