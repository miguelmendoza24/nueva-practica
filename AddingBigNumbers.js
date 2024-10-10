/*function add(a, b) { 
  return (BigInt(a) + BigInt(b)).toString();
}
console.log(add('63829983432984289347293874', '90938498237058927340892374089'));*/
/*
function sumarNGrandes(cadenauno, cadenados) {
  let numerouno = BigInt(cadenauno);
  let numerodos = BigInt(cadenados);
  let suma = numerouno + numerodos;
  return suma.toString();
}
console.log(
  sumarNGrandes("63829983432984289347293874", "90938498237058927340892374089")
);
*/

function igualarLongitud(cadenaUno, cadenaDos) {
  let ceros = "";
  if (cadenaUno.length < cadenaDos.length) {
    let rellenar = cadenaDos.length - cadenaUno.length;

    for (let index = 0; index < rellenar; index++) {
      ceros += "0";
    }
    cadenaUno = ceros + cadenaUno;
  }
     else if (cadenaDos.length < cadenaUno.length) {
    rellenar = cadenaUno.length - cadenaDos.length;
    for (let index = 0; index < rellenar; index++) {
      ceros += "0";
    }
    cadenaDos = ceros + cadenaDos;
  }
  return [cadenaUno, cadenaDos];
}

function sumarcadena(arrayDeCadenas) {
  let acarreado = 0;
  let resultado = "";
  let cadenaUno = arrayDeCadenas[0];
  let cadenaDos = arrayDeCadenas[1];

  for (let index = cadenaUno.length - 1; index >= 0; index--) {
    let digitoUno = parseInt(cadenaUno[index]);
    let digitoDos = parseInt(cadenaDos[index]);
    let suma = digitoUno + digitoDos + acarreado;
    if (suma >= 10) {
      acarreado = 1;
      suma -= 10;
    } else {
      acarreado = 0;
    }
    resultado = suma + resultado;
  }
  if (acarreado > 0){
    resultado = acarreado + resultado;
  }
  return resultado;
}

function add(cadenaUno,cadenaDos) {
  const ajustaLongitud = igualarLongitud(cadenaUno, cadenaDos)
  const sumar = sumarcadena(ajustaLongitud)
  return sumar
}
console.log(add("888", "222"));
