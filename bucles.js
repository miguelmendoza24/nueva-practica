/*Quiero escribir un loop que recorra del número 3 al número 120 de 5 en 5
Quiero escribir un loop que recorra del 120 al 3 de 5 en 5
Quiero escribir un loop que vaya del -100 al 100 de 20 en 20
Quiero escribir un loop del 1000 al 0 de 100 en 100 */
/*
for (let index = 3; index <= 120; index +=5) {
  console.log(index);}

for (let index = 120; index >= 3; index -=5) {
  console.log(index);
}

for (let index = -100; index <= 100; index +=20) {
  console.log(index);
  
}

for (let index = 1000; index >= 0; index -=100) {
  console.log(index);
} */

/*
Quiero escribir un loop del 2000 al -2000 de 25 en 25
Quiero escribir del 1 al -1 de 0.1 en 0.1
Quiero escribir un loop del 2 al -2 de 0.05 en 0.05
Quiero una función que cuando reciba un arreglo lo imprima de atrás para adelante
Ejemplo 
imprimirAlReves([8,6,7]) //7, 6, 8
*/
/*
for (let index = 2000; index >= -2000; index -=25) {
  console.log(index);
}

for (let index = 1; index >= -1; index -= 0.1) {
  console.log(index)
}

for (let index = 2; index >= -2; index-= 0.05) {
console.log(index);

}

function imprimirAlReves(arr) {
  for (let index = arr.length -1; index >= 0 ; index--) { 
    console.log(arr[index]);
  } 
}
console.log(imprimirAlReves([8, 6, 7])) //7, 6, 8 */




let index = 2000;
while (index >= -2000) {
  console.log(index);
index-=25
}


let i = 1
while (i >= -1) {
  console.log(i);
  i-=0.1
}

let indi = 2
while (indi >= -2) {
  console.log(indi);
  indi-=0.05
}





let conta = 3;
while (conta <= 120) {
  console.log(conta);
  conta += 5;
}

let control = 120;
while (control >= 3) {
  console.log(control);
  control -= 5;
}

let con = -100;
while (con <= 100) {
  console.log(con);
  con += 5;
}

let gol = 1000;
while (gol <= 0) {
  console.log(gol);
  gol -= 100;
}
