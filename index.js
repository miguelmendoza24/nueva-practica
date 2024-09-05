function sumaDeNumeros(num1, num2) {
  let suma = num1 + num2;
  return suma;
}
console.log(sumaDeNumeros(5, 10));

const estudiante = {
  nombre: "maria",
  edad: 25,
  fechaInicio: "12/09/2024",
  promedio: 9.5,
  grado: "universidad",
};

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const nombres = [
  "patricio",
  "bob spanja",
  "arenita",
  "calamrdo",
  "gary",
  "cangrejo",
];
const booleano = [true, false, true, false, true, false, true, false];

const personas = [
  {
    nombre: "pedrito",
    edad: 15,
  },
  {
    nombre: "pancracio",
    edad:35,
  }
];

console.log(personas[1].nombre);

/* 
/*Quiero crear una función para la sucesión de Fibonacci que reciba 2 parámetros, un arreglo con la semilla y un número que indica cuántas posiciones serán inferidas a partir de la semilla. Ejemplo:

crearSucesion([2,3], 5)

Se espera este resultado:
2,3,5,8,13,21,34
function crearSucesion(semilla, interacciones) {
  let Fibonacci = [...semilla];
  for (let i = 0; i < interacciones; i++) {
    let siguiente =
      Fibonacci[Fibonacci.length - 1] + Fibonacci[Fibonacci.length - 2];
    Fibonacci.push(siguiente);
  }
  return Fibonacci;
}
console.log(crearSucesion([2, 3], 5));

const persona = {
  nombre: "pedrito",
  edad: 250,
  empleado: false,
  mascotas: ["solovino", "manchas"],
  padres: {
    madre: "nisefora",
    padre: "sinforiano",
  },
};

console.log(persona);
console.log(persona.mascotas);
console.log(persona.mascotas);
persona.dinero = 5000;
console.log(persona);
const clonDeSombra = { ...persona };
persona.mascotas = [];
persona.padres.padre = "";
clonDeSombra.nombre = "naruto";
console.log(persona);
console.log(clonDeSombra);

const computadoras = [
  { marca: "hp", SO: "Windows", RAM: "1600GB", ROM: "1550tb", funciona: true },
  { marca: "mac", SO: "macos", RAM: "160GB", ROM: "1522tb", funciona: false },
  { marca: "dell", SO: "android", RAM: "16GB", ROM: "12tb", funciona: false },
  { marca: "lenovo", SO: "Windows", RAM: "32GB", ROM: "1tb", funciona: true },
  { marca: "acer", SO: "Linux", RAM: "8GB", ROM: "500gb", funciona: true },
  { marca: "asus", SO: "Windows", RAM: "64GB", ROM: "2tb", funciona: false },
  { marca: "toshiba", SO: "Windows", RAM: "4GB", ROM: "256gb", funciona: true },
  { marca: "sony", SO: "Windows", RAM: "16GB", ROM: "1tb", funciona: false },
  { marca: "samsung", SO: "android", RAM: "8GB", ROM: "512gb", funciona: true },
  { marca: "huawei", SO: "Linux", RAM: "32GB", ROM: "1tb", funciona: true },
  { marca: "msi", SO: "Windows", RAM: "128GB", ROM: "4tb", funciona: true },
  { marca: "lg", SO: "Windows", RAM: "16GB", ROM: "500gb", funciona: false },
  { marca: "xiaomi", SO: "android", RAM: "6GB", ROM: "256gb", funciona: true },
  { marca: "gigabyte", SO: "Linux", RAM: "12GB", ROM: "750gb", funciona: true },
  { marca: "surface", SO: "Windows", RAM: "8GB", ROM: "128gb", funciona: true },
  {
    marca: "alienware",
    SO: "Windows",
    RAM: "64GB",
    ROM: "3tb",
    funciona: true,
  },
  { marca: "vaio", SO: "Windows", RAM: "16GB", ROM: "1tb", funciona: false },
  { marca: "raspberry", SO: "Linux", RAM: "4GB", ROM: "32gb", funciona: true },
  { marca: "google", SO: "chromeOS", RAM: "8GB", ROM: "256gb", funciona: true },
  { marca: "zotac", SO: "Windows", RAM: "32GB", ROM: "512gb", funciona: false },
];

console.log(computadoras);

for (let index = 0; index < computadoras.length; index++) {
  const element = computadoras[index];
  console.log(element.marca);
}
Quiero una función para filtrar las computadoras por medio de su sistema operativo y su funcionamiento. La función debe recibir como parámetros la lista completa de computadoras, el nombre del sistema operativo, y por defecto debe excluir a aquellas que no funcionan 

function filtercomputadoras(
  computadoraslista,
  sistemaso,
  excluirNofuncionan = true
) {
  return computadoraslista.filter((computadora)=> computadora)
}
filtercomputadoras(computadoras, SO);
*/