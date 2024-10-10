function eliminarProtocolo(cadena) {
  let protocolo = ["http://", "https://", "www."];
  let nuevaCadena = cadena; 
  for (let index = 0; index < protocolo.length; index++) {
    if (nuevaCadena.startsWith(protocolo[index])) {
      nuevaCadena = nuevaCadena.substring(protocolo[index].length);
    }
  }
  return nuevaCadena;
}


function eliminaTDL(cadena) {
  let otraCadena = cadena.split(".");
  return otraCadena[0];
  
}


function domainName(url) {
  const cortarCadena = eliminarProtocolo(url);
  const eliminaSubDominio = eliminaTDL(cortarCadena);
  return eliminaSubDominio;
}
