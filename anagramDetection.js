function isAnagram(test, original) {
  if (test.length !== original.length) {
    return false;
  }
  for (let index = 0; index < test.length; index++) {

  }

};
console.log(isAnagram("foefet", "toffee"));


const cadenaConLetrasOrdenadas = (cadena) => {
  // https://parzibyte.me/blog
  // Convertir a arreglo
  const cadenaComoArreglo = cadena.split("");
  // Ordenar
  cadenaComoArreglo.sort();
  // Volver a convertir a cadena
  const cadenaOrdenada = cadenaComoArreglo.join("");
  return cadenaOrdenada;
};