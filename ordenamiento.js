/*
const numerosDesordenados = [3, 4, 25, 2, 45, 10, 1, 56];
let numeroGuardado = numerosDesordenados[2];
let otroNumero = numerosDesordenados[3];
numerosDesordenados[2] = otroNumero;
numerosDesordenados[3] = numeroGuardado;
console.log(numerosDesordenados);
otroNumero = numerosDesordenados[1];
numeroGuardado = numerosDesordenados[2];
numerosDesordenados[2] = otroNumero;
numerosDesordenados[1] = numeroGuardado;
console.log(numerosDesordenados);
numeroGuardado = numerosDesordenados[1];
otroNumero = numerosDesordenados[0]
numerosDesordenados[1] = otroNumero;
numerosDesordenados[0] = numeroGuardado;
console.log(numerosDesordenados);
numeroGuardado = numerosDesordenados[4]
otroNumero = numerosDesordenados[5]
numerosDesordenados[5] = numeroGuardado;
numerosDesordenados[4] = otroNumero;
console.log(numerosDesordenados);
numeroGuardado = numerosDesordenados[3];
otroNumero = numerosDesordenados[4];
numerosDesordenados[4] = numeroGuardado;
numerosDesordenados[3] = otroNumero;
console.log(numerosDesordenados);
numeroGuardado = numerosDesordenados[5];
otroNumero = numerosDesordenados[6];
numerosDesordenados[6] = numeroGuardado;
numerosDesordenados[5] = otroNumero;
console.log(numerosDesordenados);
numeroGuardado = numerosDesordenados[4];
otroNumero = numerosDesordenados[5];
numerosDesordenados[5] = numeroGuardado;
numerosDesordenados[4] = otroNumero;
console.log(numerosDesordenados);
numeroGuardado = numerosDesordenados[3];
otroNumero = numerosDesordenados[4];
numerosDesordenados[4] = numeroGuardado;
numerosDesordenados[3] = otroNumero;
console.log(numerosDesordenados);
numeroGuardado = numerosDesordenados[2];
otroNumero = numerosDesordenados[3];
numerosDesordenados[3] = numeroGuardado;
numerosDesordenados[2] = otroNumero;
console.log(numerosDesordenados);
numeroGuardado = numerosDesordenados[1];
otroNumero = numerosDesordenados[2];
numerosDesordenados[2] = numeroGuardado;
numerosDesordenados[1] = otroNumero;
console.log(numerosDesordenados);
numeroGuardado = numerosDesordenados[0];
otroNumero = numerosDesordenados[1];
numerosDesordenados[1] = numeroGuardado;
numerosDesordenados[0] = otroNumero;
console.log(numerosDesordenados);



/*Quiero crear una función llamada "verificarOrden" que reciba como parámetro un arreglo numérico, y que retorne true si el arreglo está ordenado ascendentemente, de lo contrario, que retorne false
Ejemplo: 

verificarOrden([7,6,9,15,1])
//Se espera un false

verificarOrden ([1,2,3,4,5])
//Se espera un true*/

const verificarOrden = (lista) =>{
  let estaOrdenado = true;
  for (let index = 0; index < (lista.length -1); index++) {
    const comparacion = lista[index] > lista[index + 1];
    console.log(comparacion);
    console.log(lista[index]);
    console.log(lista[index + 1]);
    
  if (comparacion) {
    console.log("no esta ordenado");
    estaOrdenado = false;
    
    }
  }
  return estaOrdenado;
}
let arregloOrdenado = [1, 2, 3, 4, 5];
//let arregloOrdenado = [1, 2, 3, 4, 5];

verificarOrden(arregloOrdenado);
verificarOrden([20, 6, 9, 15, 1]);

/*Una función que reciba dos parámetros, un arreglo y un índice, y que retorne ese arreglo con el índice y el índice  + 1 invertidos */

function invertirIndice(lista, indice) {
  let primerIndice = lista[indice]
  let siguienteIndice = lista[indice + 1]
  lista[indice] = siguienteIndice
  lista[indice + 1] = primerIndice
  return lista
}
console.log(invertirIndice([6, 7, 5, 9], 1));


function  encontrarDesorden(lista) {
  for (let index = 0; index < lista.length; index++) {
    const desorden = lista[index] > lista[index + 1];
  if (desorden) {
    return index;
  }
  }
}
console.log(encontrarDesorden([6, 7, 5, 9]));

function ordenarBubblesort(lista) {
  let estaOrdenado = verificarOrden(lista);
  while (!estaOrdenado) {
    const numeroMaldito = encontrarDesorden(lista); 
    lista = invertirIndice(lista, numeroMaldito);
    estaOrdenado = verificarOrden(lista);
  }
  return lista;
}
console.log(
  ordenarBubblesort([
    16, 99, 27, 84, 30, 77, 39, 61, 48, 53, 91, 100, 10, 23, 35, 77, 89, 98, 51,
    73, 89, 66, 34, 57, 12, 45, 27, 92, 58, 61,
  ])
);
