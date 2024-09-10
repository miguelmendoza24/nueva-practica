function dnaStrand(dna) {
  let texto = dna;
  let nuevoDna = "";
  for (let index = 0; index < texto.length; index++) {
    if (texto[index] == "A") {
      nuevoDna = nuevoDna + "T"
    } else if (texto[index] == "T") {
      nuevoDna = nuevoDna + "A"
    }else if (texto[index] == "G") {
      nuevoDna = nuevoDna + "C"
    }else if (texto[index] == "C") {
      nuevoDna = nuevoDna + "G"
    } else {
      nuevoDna = nuevoDna + texto[index]
    }
    
  }
  
  return nuevoDna;
}
console.log(dnaStrand("GTAT"));



//"ATTGC" --> "TAACG"
//"GTAT" --> "CATA"

