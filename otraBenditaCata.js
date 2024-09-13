function binaryArrayToNumbe(arr) {
  const ultimoIndice = arr.length - 1;
  let resultado = 0;
  for (let index = ultimoIndice; index >= 0; index--) {
    if (arr[index] == 1) {
      resultado += 2 ** (ultimoIndice - index);
    }
  }
  return resultado;
}
