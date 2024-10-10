  function recorrerCadena(cadena) {
    let array = cadena.split("//")
  if (cadena.includes("www.")) {
    array = cadena.split("www.")
  }
    return array[1]
}

function separar(cadena) {
    
    let array = cadena.split(".");
 console.log(array)
    return array;
  }

function recorrerArray(array) {
  return array[0]
}

function domainName(url) {
  console.log(url)
  let array = recorrerCadena(url)
  let array2 = separar(array)
  let dominio = recorrerArray(array2)
  return dominio;
}