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

verificarOrden([20, 6, 9, 15, 1]);
verificarOrden(arregloOrdenado);

/*Una función que reciba dos parámetros, un arreglo y un índice, y que retorne ese arreglo con el índice y el índice  + 1 invertidos */
