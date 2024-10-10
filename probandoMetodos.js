/*
find-filter-map-reduce-slice-splice-sort-some-includes
para cada metodo quero lo siguiente
que hace?
que parametros recibe?
que paramentros recibe su callback?
que retorna?
que retorna su callback?
como funciona?
*/

/*
metodo find
que hace? 
recorre un arreglo y retorna el primer elemento que cumpla la condicion especificada en la funcion de callback

que parametros recibe?
recibe como parametros una funcion de callback, esta funcion se ejecuta una vez por cada elemento del arreglo hasta que encuentra uno que cumpla la condicion

que paramentros recibe su callback?
puede recibir hasta tres parametros
1-el elemento actual
2-indice: el indice del elemeto actual
3-array: el arreglo completo sobre el cual se esta ejecutando el metodo.
que retorna?
retorna el primer elemento que cumpla la condicion especificada en la funcion de callback, si no se encuentra ningun elemento que cumpla con la condicion, retorna undefined

que retorna su callback?
la funcion de callback debe retornar un valor booleano:
true: si el elemento actual cumple con la condicion.
false: si el elemento actual no cumple con la condicion

como funciona?
1-Se ejecuta la función de callback para cada elemento del arreglo.
2-Si el callback retorna true para un elemento, find() devuelve ese elemento y deja de iterar.
3-Si el callback retorna false o ningún elemento cumple la condición, find() devuelve undefined.
*/

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const resultado = numeros.find((numero) => numero > 5);
console.log(resultado);

/*filter
que hace?
El método filter recorre los elementos de un arreglo y devuelve un nuevo arreglo que contiene todos los elementos que cumplen con la condición establecida en la función de callback. Si ningún elemento cumple con la condición, devuelve un arreglo vacío.

que parametros recibe?
El método filter recibe como parámetro una función de callback que se ejecuta en cada elemento del arreglo. Opcionalmente, también puede recibir un segundo parámetro que sirve como el valor de this dentro del callback.

que paramentros recibe su callback?
La función de callback que se pasa a filter puede recibir hasta tres parámetros:

elementoActual: El valor del elemento actual que se está evaluando.
índice: El índice del elemento actual.
array: El arreglo completo sobre el cual se está ejecutando el método filter.

que retorna?
filter retorna un nuevo arreglo que contiene los elementos que cumplen con la condición especificada en el callback. Si ningún elemento cumple con la condición, devuelve un arreglo vacío.

que retorna su callback?
La función de callback debe retornar un valor booleano:
true: Si el elemento actual debe ser incluido en el nuevo arreglo.
false: Si el elemento actual no debe ser incluido.

como funciona?
1-El método ejecuta la función de callback en cada elemento del arreglo original.

2-Si la función de callback retorna true para un elemento, ese elemento se incluye en el nuevo arreglo.

3-Si la función de callback retorna false, ese elemento se excluye.

4-Al final, filter devuelve un nuevo arreglo con todos los elementos que pasaron la condición del callback.
*/

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const resultad = array.filter((numero) => numero < 5);
console.log(resultad);

/* map
que hace?
El método map recorre un arreglo y devuelve un nuevo arreglo con los resultados de aplicar la función de callback a cada uno de los elementos del arreglo original. El nuevo arreglo tiene la misma longitud que el original, pero con los elementos transformados según lo especificado en el callback.

que parametros recibe?
El método map recibe una función de callback como primer parámetro. Opcionalmente, puede recibir un segundo parámetro que especifica el valor de this dentro de la función de callback.

que paramentros recibe su callback?
La función de callback que se pasa a map puede recibir hasta tres parámetros:
1-el ementoActual: El valor del elemento actual que se está procesando.
2-ndice: El índice del elemento actual dentro del arreglo.
3-array: El arreglo completo sobre el cual se está ejecutando el método map.

que retorna?
retorna un nuevo arreglo que contiene los resultados de aplicar la función de callback a cada elemento del arreglo original. El nuevo arreglo tendrá la misma longitud que el original.
que retorna su callback?
La función de callback debe retornar el nuevo valor que se incluirá en el nuevo arreglo. Este valor es el resultado de la transformación aplicada a cada elemento.

como funciona?
El método map itera sobre cada elemento del arreglo original.
En cada iteración, la función de callback se ejecuta y transforma el elemento.
El valor que retorna el callback para cada elemento se almacena en el nuevo arreglo.
Una vez que ha procesado todos los elementos, map devuelve el nuevo arreglo con los elementos transformados.
*/

const arrays = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const potencia = arrays.map((numero) => numero ** 2);
console.log(potencia);


/* reduce
que hace?
 ejecuta una función de callback en cada elemento del arreglo, acumulando los resultados en un único valor final. Se recorre el arreglo desde el primer elemento hasta el último, aplicando la función de acumulación en cada paso.

que parametros recibe?
Recibe dos parametros:
callback: La función que se ejecuta en cada elemento del arreglo.
valorInicial: El valor inicial del acumulador. Si no se proporciona, el primer elemento del arreglo se utiliza como valor inicial y la iteración comienza desde el segundo elemento.

que paramentros recibe su callback?
La función de callback que se le pasa a reduce recibe hasta cuatro parámetros:
acumulador: El valor acumulado que se lleva de una iteración a otra.
elementoActual: El valor del elemento actual que se está procesando en el arreglo.
índice: El índice del elemento actual.
array: El arreglo completo sobre el cual se está ejecutando

que retorna?
retorna un único valor que es el resultado final de la acumulación de todos los elementos del arreglo. Este valor es el resultado de ejecutar la función de callback en cada elemento y acumular los resultados.

que retorna su callback?
La función de callback debe retornar el valor actualizado del acumulador, que será utilizado en la siguiente iteración. Este valor puede ser de cualquier tipo (número, string, objeto, arreglo, etc.)

como funciona?
Se inicializa el acumulador con el valor inicial si se proporciona, o con el primer elemento del arreglo si no se da un valor inicial.
La función de callback se ejecuta para cada elemento del arreglo, actualizando el acumulador en cada paso.
Al final del recorrido, el acumulador contiene el resultado final de la acumulación y es lo que retorna.
*/

const numeris = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const restaTotal = numeris.reduce(
  (acumulador, numeroActual) => acumulador - numeroActual,0);
console.log(restaTotal);



/* slice
que hace?
devuelve una copia de una porción del arreglo o cadena original. El rango de elementos copiados se define por los índices de inicio y fin que se proporcionan como parámetros.

que parametros recibe?
 recibe dos parámetros opcionales:
inicio: El índice a partir del cual se comienza a extraer los elementos. Si no se proporciona, comienza desde el índice 0.
fin: El índice antes del cual se deja de extraer los elementos. si el índice de fin no está incluido en el nuevo arreglo. Si no se proporciona, extrae hasta el final del arreglo o cadena.

que paramentros recibe su callback?
El método slice no utiliza una función de callback. A diferencia de otros métodos como map, filter, o reduce, slice trabaja solo con los índices de inicio y fin.

que retorna?
retorna un nuevo arreglo o nueva cadena que contiene los elementos seleccionados entre los índices de inicio y fin (sin incluir el fin). Si no se selecciona ningún elemento (por ejemplo, si el índice de inicio es mayor que el de fin), retorna un arreglo vacío [] o una cadena vacía ""

que retorna su callback?
no utiliza un callback.

como funciona?
Si se proporciona solo el índice de inicio, slice comenzará a copiar los elementos desde ese índice hasta el final del arreglo o cadena.
Si se proporcionan ambos índices (inicio y fin), slice seleccionará los elementos desde el índice de inicio hasta el índice de fin - 1.
Si alguno de los índices es negativo, se cuenta desde el final del arreglo o cadena, donde -1 representa el último elemento.
slice() no modifica el arreglo o cadena original, sino que devuelve un nuevo arreglo o cadena con los elementos copiados.
*/

const numerios = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const porcion = numerios.slice(3, 6);
console.log(porcion);
console.log(numerios);

/* splice
que hace?
permite insertar, eliminar o reemplazar elementos en un arreglo en base a un índice específico. Modifica el arreglo original y puede devolver los elementos eliminados, si es que se eliminaron.

que parametros recibe?
El método splice recibe hasta tres parámetros:
índic inicio: El índice donde comenzará la modificación del arreglo.
cantidad eliminar: El número de elementos a eliminar a partir del índiceInicio. Si es 0, no se eliminan elementos.
elementos a insertar: Los elementos que deseas agregar al arreglo a partir del índice inicio. Pueden ser uno o más valores.

que paramentros recibe su callback?
no utiliza un callback
que retorna?
 retorna un arreglo que contiene los elementos que fueron eliminados del arreglo original. Si no se eliminó ningún elemento, devuelve un arreglo vacío.
que retorna su callback?
no utiliza un callback

como funciona?
Se selecciona el índice inicio en el arreglo, a partir del cual se realizarán las modificaciones.
Si se especifica cantidad eliminar, se eliminan esa cantidad de elementos comenzando desde el índice inicio.
Si se proporcionan elementos adicionales (argumentos después de cantidad eliminar), estos se insertan en la posición del índice inicio, reemplazando los elementos eliminados (si es que se eliminaron).
El arreglo original se modifica directamente, y splice devuelve un nuevo arreglo con los elementos eliminados, si los hubo.
*/

const numerros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const eliminados = numerros.splice(1, 4);

console.log(numerros);
console.log(eliminados); 

/* sort
que hace?
organiza los elementos de un arreglo en un orden determinado. De forma predeterminada, los elementos se convierten en strings y se comparan según el orden alfabético de los valores Unicode. Si quieres un orden específico, como en el caso de números, puedes proporcionar una función de comparación.

que parametros recibe?
recibe un parámetro opcional:
función de comparación: Una función callback que define cómo deben compararse los elementos del arreglo para ordenarlos.

que paramentros recibe su callback?
La función de comparación recibe dos parámetros:
a: El primer elemento para comparar.
b: El segundo elemento para comparar.
que retorna?
retorna el arreglo modificado, es decir, el arreglo original, pero ahora ordenado según la función de comparación (o según el orden por defecto si no se proporciona una función de comparación).

que retorna su callback?
Un número negativo si el primer argumento (a) debe ir antes del segundo (b).
Cero si no hay cambio en el orden entre a y b.
Un número positivo si el segundo argumento (b) debe ir antes que el primero (a).

como funciona?
Si no se proporciona una función de comparación, sort convierte cada elemento a cadena de texto y los ordena según el valor Unicode.
Si se proporciona una función de comparación, se usa esta función para determinar el orden de los elementos.
sort ordena el arreglo, lo que significa que el arreglo original se modifica.
Se comparan dos elementos a la vez utilizando la función de comparación (si está presente). Dependiendo del valor devuelto por la función, sort decide el orden entre esos dos elementos.
*/

const numerrios = [1, 2, 3, 4, 5, 6, 7, 9, 8];
numerrios.sort();
console.log(numerrios);

const numellos = [5,3,8,6,7,9,1,6];
numellos.sort((a, b) => {
  console.log(a);
  console.log(b);
  console.log("----------");
  
  
  return a - b
});
console.log(numellos);


/* some
que hace?
verifica si al menos un elemento del arreglo cumple con una condición definida en una función de prueba (callback). Si encuentra un elemento que cumple la condición, deja de iterar y retorna true. Si no encuentra ninguno, devuelve false.

que parametros recibe?
recibe dos parámetros:

función de prueba: Una función callback que se ejecuta para cada elemento del arreglo.
thisArg: Un valor opcional que puede usarse como this dentro de la función de prueba.

que paramentros recibe su callback?
La función de prueba (callback) que se pasa a some recibe tres parámetros:
elemento: El elemento actual que está siendo procesado en el arreglo.
índice: El índice del elemento actual en el arreglo.
arreglo: El arreglo sobre el que se llama el método some.

que retorna?
retorna un valor booleano:
true si al menos un elemento del arreglo satisface la condición definida en la función de prueba.
false si ningún elemento cumple la condición.

que retorna su callback?
La función de prueba (callback) retorna un valor booleano:

true si el elemento cumple con la condición.
false si el elemento no la cumple.


como funciona?
1-recorre el arreglo elemento por elemento.
2-En cada iteración, llama a la función de prueba (callback) y pasa el elemento actual, su índice, y el arreglo completo como argumentos.
3-Si la función de prueba retorna true para algún elemento, some deja de iterar y retorna true.
4-Si recorre todo el arreglo y la función de prueba nunca retorna true, entonces some devuelve false.

*/

const nume = [1, 2, 3, 4, 5, 6, 7];
const resul = nume.some(num => num > 4);
console.log(resul);


/* includes
que hace?
verifica si un arreglo o cadena contiene un valor determinado. Retorna true si el valor está presente y false si no lo está.

que parametros recibe?
recibe dos parámetros:

valor buscado: El valor que se desea buscar en el arreglo o cadena.
índice inicio: El índice desde el cual comenzar la búsqueda. Si no se proporciona, la búsqueda empieza en el índice 0. Puede ser un número negativo, en cuyo caso el conteo empieza desde el final del arreglo.

que paramentros recibe su callback?
no utiliza un callback

que retorna?
retorna un booleano:

true si el valor buscado está presente en el arreglo o cadena.
false si el valor buscado no se encuentra.

que retorna su callback?
 no utiliza un callback

como funciona?
Búsqueda directa: Busca el valor buscado dentro del arreglo o cadena, comparando los elementos o caracteres.
Índice opcional: Si se proporciona un índice inicio, includes comenzará a buscar desde ese índice en adelante. Si el índice inicio es negativo, comenzará desde esa posición contada desde el final del arreglo.
Tipo de comparación: La comparación es estricta (===), por lo que tanto el valor como el tipo deben coincidir.
*/

const numeriios = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const resultatado = numeriios.includes(5, 3);
console.log(resultatado);
