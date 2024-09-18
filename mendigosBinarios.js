function trailingZeros(n) {
  let numeroDecimal = n;
  let numeroBinario = numeroDecimal.toString(2);
  let unoecontrado = false;
  let contarCeros = 0;
  for (let index = numeroBinario.length; index >= 0; index--) {
    if (numeroBinario[index] === "1") {
      unoecontrado = true;
    } else if (numeroBinario[index] === "0") {
      contarCeros++;
    }
    if (unoecontrado) {
      return contarCeros;
    }
  }
  return 0;
}
console.log(trailingZeros(5));

//4  ->  2, porque 4se representa como 100
//5  ->  0, porque 5se representa como101
