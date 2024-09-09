function openOrSenior(data) {
  let novatoOSeñor = [];
  for (let index = 0; index < data.length; index++) {
    let element = data[index];
    if (element[0] >= 55 && data[index][1] >= 7) {
      novatoOSeñor.push("senior");
    } else {
      novatoOSeñor.push("open");
    }
  }
  return novatoOSeñor;
}
console.log(
  openOrSenior([
    [45, 12],
    [55, 21],
    [19, -2],
    [104, 20],
  ])
);
//["Open", "Senior", "Open", "Senior"];
/*Hacer ejercicios de interpolación 

Buscar métodos de arreglos

Hacer un resumen de operadores lógicos y describir las diferencias con operadores de comparación

Hacer investigación de tipos de datos
¿Qué son? ¿Cómo se trabajan en JS?
¿Cuáles son los más usados?

¿Qué es la coerción de tipos?*/
