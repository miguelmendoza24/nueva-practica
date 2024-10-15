/*Ejercicio 1: Convertidor de Reloj de 24 horas a 12 horas
Descripción del problema: 

Escribe una función en JavaScript que reciba como entrada una cadena que represente la hora en formato de 24 horas (`"HH:MM"`) y devuelva la hora en formato de 12 horas con "AM" o "PM" al final.

Por ejemplo:
- `convertirReloj("14:30")` debe devolver `"02:30 PM"`
- `convertirReloj("09:45")` debe devolver `"09:45 AM"`
- `convertirReloj("00:00")` debe devolver `"12:00 AM"`
- `convertirReloj("12:00")` debe devolver `"12:00 PM"`

*/
function separarHorasMinutos(cadena) {
  const partes = cadena.match(/^(0[0-9]|1[0-9]|2[0-3]):([0-5][0-9])$/);
  const horas = partes[1];
  const minutos = partes[2];
  return [horas, minutos];
}

function determinarPMAM(horas) {
  return horas >= 12 ? "PM" : "AM";
}

function convertirHoras(horas) {
  return horas === 0 ? 12 : horas > 12 ? horas - 12 : horas;
}

function convertirReloj(cadena) {
  let [horas, minutos] = separarHorasMinutos(cadena);
  horas = parseInt(horas, 10);
  const tiempo = determinarPMAM(horas);
  horas = convertirHoras(horas);
  const horasFormateada = horas.toString().padStart(2, "0");
  return `${horasFormateada}:${minutos} ${tiempo}`;
}
console.log(convertirReloj("14:30"));

console.log(convertirReloj("09:45"));
console.log(convertirReloj("00:00"));
console.log(convertirReloj("12:00"));

/* 
Ejercicio 2: Validador de Formato de Correo Electrónico (con Regex)
Descripción del problema

Escribe una función en JavaScript que valide si una cadena es un correo electrónico válido. Para considerarse válido, el correo debe cumplir con las siguientes condiciones:
- Debe tener al menos una letra o número antes del símbolo `@`.
- Debe tener al menos un dominio de nivel superior (como `.com`, `.net`, etc.) después de un punto.
- Los dominios no pueden tener caracteres especiales ni números.

Ejemplos:
- `validarCorreo("usuario@dominio.com")` debe devolver `true`.
- `validarCorreo("usuario@dominio")` debe devolver `false`.
- `validarCorreo("user@123.com")` debe devolver `false`.
*/

function validarAntesDelArroba(cadena) {
  const regex = /^[a-zA-Z0-9]+(?=@)+/g;
  const resultado = cadena.match(regex);
  return resultado ? true : false;
}
console.log(validarAntesDelArroba("migueleva@gmail.com"));

function verificarDominio(cadena) {
  const regex = /(?<=@)[a-zA-Z]+/g;
  const resultado = cadena.match(regex);  
  return resultado !== null;
}
console.log(verificarDominio("migueleva@gmail.com"));

function validarTLD(cadena) {
  const regex = /\.(com|net|mx|gob|edu)$/g;
  const resultado = cadena.match(regex);
  return !!resultado;
}
console.log(validarTLD("migueleva@gmail.com"));

function validaCorreo(correo) {
  if (correo.indexOf("@") === -1) {
    return false;
  }
  return (
    validarAntesDelArroba(correo) &&
    verificarDominio(correo) &&
    validarTLD(correo)
  );
}
console.log(validaCorreo("Migueleva@gmail.com"));
console.log(validaCorreo("usuario@dominio.com"));
console.log(validaCorreo("usuario@dominio"));
console.log(validaCorreo("user@123.com"));

/*
Ejercicio 3: Formateador de Texto Capitalizado
Descripción del problema:

Escribe una función que reciba una cadena de texto grande y convierta cada palabra en formato "Capitalizado", es decir, la primera letra de cada palabra debe ser mayúscula y las demás minúsculas. Las palabras están separadas por espacios, pero podrían haber múltiples espacios entre palabras.

Por ejemplo:
- `formatearTexto("   hola   MUNDO   ")` debe devolver `"Hola Mundo"`.
- `formatearTexto("ESTO   es UN   EJEMPLO")` debe devolver `"Esto   Es Un   Ejemplo"`.
*/

function dividirCadena(cadena) {
  return cadena.match(/\S+|\s+/g) || [];
}
console.log(dividirCadena("soy   bojito el     hermoso"));

function CapitalizarPalabra(palabra) {
  return palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
}
console.log(CapitalizarPalabra("miguel"));

function formatearTexto(cadena) {
  if (cadena.length === 0) return "";
  const palabras = dividirCadena(cadena);
  const resultado = palabras.map((parte) => {
    if (/\S/.test(parte)) {
      return CapitalizarPalabra(parte);
    }
    return parte;
  });
  return resultado.join("");
}
console.log(formatearTexto("ESTO   es UN   EJEMPLO"));
console.log(formatearTexto(""));
console.log(
  formatearTexto("palabaras    palbras      PALABRAS   FEAS MAS MA AM  ")
);
