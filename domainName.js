function recorrerCadena(cadena) {
  let array = [];
  if (cadena.includes("www.")) {
    array = cadena.split("www.");
  } else if (cadena.includes("//")) {
    array = cadena.split("//");
  } else {
    array = cadena.split();
  }
  return array;
}

function separar(array) {
  let nuevoArray = [];
  for (let index = 0; index < array.length; index++) {
    if (array[index].includes(".")) {
      nuevoArray.push(...array[index].split("."));
    } else {
      nuevoArray.push(array[index]);
    }
  }

  return nuevoArray;
}

function recorrerArray(array) {
  if (array.length == 2) {
    return array[0];
  } else if (array.length == 3) {
    return array[1];
  }
}

function domainName(url) {
  let array = recorrerCadena(url);
  let array2 = separar(array);
  let dominio = recorrerArray(array2);
  return dominio;
}
console.log(domainName("1qcvwjh2kqotxijvb31gi662t.fr/archive/"));
console.log(domainName("http://www.google.com"));
console.log(domainName("www.xakep.ru"));
console.log(domainName("http://google.com"));
