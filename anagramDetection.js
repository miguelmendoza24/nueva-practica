function isAnagram(test, original) {
  if (test.length !== original.length) {
    return false;
  }
  let cadenaOrdenada = test.toLowerCase();
  let cadenaOrdenadaDos = original.toLowerCase();

  cadenaOrdenada = cadenaOrdenada.split("");
  cadenaOrdenadaDos = cadenaOrdenadaDos.split("");
  cadenaOrdenada.sort();
  cadenaOrdenadaDos.sort();

  let cadenaOrdenadaArreglo = cadenaOrdenada.join("");
  let cadenaOrdenadaDosArreglo = cadenaOrdenadaDos.join("");
  return cadenaOrdenadaArreglo === cadenaOrdenadaDosArreglo;
}
console.log(isAnagram("Buckethead", "DeathCubeK"));

//Buckethead" is an anagram of "DeathCubeK"
