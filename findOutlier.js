function numerosParImpar(array) {
  let par = []
  let impar = []
  for (let index = 0; index < array.length; index++) {
    if (array[index] %2 === 0) {
      par.push(array[index])
    } else {
      impar.push(array[index])
    }
  }
  return [par, impar];
}
function medirLongiud(arrayDeArrays) {
  let par = arrayDeArrays[0]
  let impar = arrayDeArrays[1]
  if (par.length === 1) {
    return par[0]
  } else
  return impar[0]
}
function findOutlier(array) {
  const separaArray = numerosParImpar(array)
  const numeroAtipico = medirLongiud(separaArray)
  return numeroAtipico;
}





