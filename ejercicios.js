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
  let partes = cadena.split(":");
  let horas = parseInt(partes[0], 10);
  let minutos = partes[1];
  return [horas, minutos];
}
console.log(separarHorasMinutos("14:30"));

function determinarPMAM(horas) {
  if (horas === 0) {
    return "AM";
  } else if (horas === 12) {
    return "PM";
  } else {
    if (horas >= 12) {
      return "PM";
    } else {
      return "AM";
    }
  }
}
console.log(determinarPMAM(12));
console.log(determinarPMAM(0));
console.log(determinarPMAM(1));

function convertirHoras(horas) {
  if (horas === 0) {
    return 12;
  } else if (horas > 12) {
    return horas - 12;
  } else {
    return horas;
  }
}
console.log(convertirHoras(24));
console.log(convertirHoras(12));
console.log(convertirHoras(14));

function convertirReloj(cadena) {
  let [horas, minutos] = separarHorasMinutos(cadena);
  let tiempo = determinarPMAM(horas);
  let formato = convertirHoras(horas);
  return formato + ":" + minutos + " " + tiempo;
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
















































Ejercicio 3: Formateador de Texto Capitalizado
Descripción del problema:

Escribe una función que reciba una cadena de texto grande y convierta cada palabra en formato "Capitalizado", es decir, la primera letra de cada palabra debe ser mayúscula y las demás minúsculas. Las palabras están separadas por espacios, pero podrían haber múltiples espacios entre palabras.

Por ejemplo:
- `formatearTexto("   hola   MUNDO   ")` debe devolver `"Hola Mundo"`.
- `formatearTexto("ESTO   es UN   EJEMPLO")` debe devolver `"Esto   Es Un   Ejemplo"`.
*/
