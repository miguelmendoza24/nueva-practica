function printerError(s) {
  let coloresValidos = "a,b,c,d,e,f,g,h,i,j,k,l,m"
  let contador = 0;
  for (let index = 0; index < s.length; index++) {
    if (!coloresValidos.includes(s[index])) {
      contador += 1;
    }
  }
  return `${contador}/${s.length}`;
}
console.log(printerError());

/*s="aaabbbbhaijjjm"
printer_error(s) => "0/14"

s="aaaxbbbbyyhwawiwjjjwwm"
printer_error(s) => "8/22"*/




console.log(["a", "s", "l"].includes("q"));

/*revisar que es ecmascript
metodos de cadenas
Qué es el paradigma orientado a objetos
Estructuras de datos:
cola, fila, lista enlazada, lista doblemente enlazada y árbol binario
*/







//https://meet.google.com/oaq-uysh-cnc