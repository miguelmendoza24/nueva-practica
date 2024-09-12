
/*console.log("hola, " + "mundo!");

let nombre = "juan";
console.log("hola, " + nombre);

let edad = 35;
console.log("Tengo. " + edad + "años.");

let precio = 20.5;
console.log("el precio es: $" + precio);

let verdadero = true;
console.log("El valor es: " + verdadero);

let nulo = null;
console.log("El valor es: " + nulo);

let indefinido = undefined;

console.log("el valor es:" + indefinido);

let suma = 2 + 5;
console.log("La suma es: " + suma);

let saludo = "hola"
let nombres = "pedrito"
console.log(saludo + " " +  nombre + " " + "mucho gusto");

let numero = 5;
console.log("El numero es: " + numero.toString());
*/
 //Revisar qué es ecmascript



var nombre = "Juana";
var apellido = "Perales";
var edad = 28;

console.log(`Pasado el tiempo,  ${nombre}  ${apellido} va a tener ${edad}`);


function saludo(nombre, edad) {
  return `Hola me llamo ${nombre} y tengo ${edad} año.`;
}
console.log(saludo("macaco", 25));


function arearRectangulo(longitud, ancho) {
  return `El area del rectangulo es 
  ${longitud * ancho} unidades cuadradas.`;
}
console.log(arearRectangulo(5,10));


function estadoCuenta(nombre, saldo) {
  return `Estimado ${nombre}, su saldo actual es de $${saldo} pesos.`;
}
console.log(estadoCuenta("agapito", 5200.25));


function numeroMayor(a, b) {
  return `Entre ${a} y ${b}, el mayor numero mayor es ${a > b ? a : b}, `;  
}
console.log(numeroMayor(25, 15));

