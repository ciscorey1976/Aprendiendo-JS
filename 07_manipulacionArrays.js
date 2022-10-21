//**manipulacion de arreglos */

//**asignacion de valores  */

var array = []; /**este es un arreglo vacio  */

array[0] = "francisco"; /**estoy colocando en la pocicion 0 el arreglo */
console.log(array);

array[5] =
  "johanna"; /**me muestra los arreglos en la ubicacion que los coloque */
console.log(array);

array[1] = [1, 2, 3, 4]; /**toca ubicar la pocision que quiero en el arreglo  */
console.log(array);

/**propiedad length  */
//**esta propiedad recorre los componentes de un arreglo */

var letras = ["a", "b", "c", "d", "e"];

console.log(letras.length);

/**esta condicion hacer que pueda recorrer el arreglo hasta que se acabe  */

//for (let i = 0; i < letras.length; i++) {
//                        const element = letras[i];
//                        console.log(element);
//}

//**funciones adicionales  */

//*forEachS

/**de esta forma solo se  puede recorrer el elemento*/
letras.forEach((elemento) => console.log(elemento));

//**push ---shift----pop */

/**mutavilidad  modifica algo*/

//**push ingresa modificaciones al arreglo al final */

var letras = ["a", "b", "c", "d", "e"];
letras.push("f", "g", "h");
console.log(letras);

//**shift modifica el arreglo quita el primer elemento -- indice 0  */
var letras = ["a", "b", "c", "d", "e"];
var primerElemento = letras.shift();
console.log(letras);
console.log(primerElemento);

//**pop quita el ultimo elemento del arreglo le devuelve el valor y lo saca de la lista    */

var letras = ["a", "b", "c", "d", "e"];
var ultimoElemento = letras.pop();
console.log(letras);
console.log(ultimoElemento);

var lista = [22, 17, 13, 45];
console.log(lista);
var numero = lista.pop(); //**si no creo variable pierdo el objeto de la lista */
console.log(numero);
console.log(lista);

//**map es inmutable crea un nuevo arreglo sin modificarel original*/

var estudiantes = ["cisco", "johanna", "juan", "pepe"]; /**arreglo origuinal */

var asistencia = estudiantes.map((nombre) => {
  /**se crea un nuevo arreglo con 0 asisitencia  */
  return {
    nombre: nombre,
    asistencia: false,
  };
});
console.log(estudiantes);
console.log(asistencia);

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var nvoArray = array.map(function(num){
    return num * 2;
})
console.log(nvoArray);



/**si quiero modificar el arreglo y sacr uno nuevosin hacer cambios   */

var estudiantes = ["cisco", "johanna", "juan", "pepe"];

var asistencia = estudiantes.map((nombre) => "${nombre}.");
console.log(estudiantes);
console.log(asistencia);

//** RECORRER UN ARREGLO CON BUCLE FOR */

var array1 = ["hola", 1235, "mama", true, [50 * 10]];
console.log(array1);

for (let i = 0; i < array1.length; i++) {
  console.log(array1[i]);
}
//*for of*/



//* for each*/
/**toma en intera en el for tomando el argumento y el indice*/

var autos = ["ford", "chevrolet", "toyota","tesla"]
autos.forEach (function (elemento, indice) {
    console.log(elemento);
    console.log(indice);
})
var lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let array = [];
lista.forEach(function(num){
    array.push(num * 2);
});
console.log(lista);

console.log(array);

//**CONBINACION DE WHILE Y .POP() */
//**se sacan los elelemntos de una lista y se eliminan /

var lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "cisco", true];
console.log(lista);

while (lista.length > 0) {
  console.log(lista.pop());
}
console.log(lista);

//**REDUCE */
//**reduce cada elemento que se devuelve  */


var lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var resultado = lista.reduce(function(acumulador, elemento){
    return acumulador + elemento;
});
console.log(resultado);/* suma todos lo elemntos de array*/ 

var autos = ["ford", "chevrolet", "toyota","tesla"]

var taller = autos.reduce(function(acumulador, elemento){
    return acumulador +" "+ elemento;
},"EN EL TALLER HAY:")/**estoy  ingresalndo al callback  */
console.log(taller);

// EJERCICIO REDUCE hacer lista de edades //

var edades = [21, 15, 35, 18, 21, 18, 41, 35, 15, 18, 23, 17, 21]
//.. salida como objeto es definodpo como un solo valor //
var resultado = edades.reduce((acumulador, elemento) => {
  if (!acumulador[elemento]){
    acumulador[elemento] = 1
  }else {
    acumulador[elemento] += 1
  }
  return acumulador;
}, {})
console.log(resultado);

//ejercicio cuantosdinero se recolecto de cada producto 

var ventas = [
  {productoNpombre:"camisetas buzz", costo:20, totalVendido:250},
  {productoNpombre:"camisetas iron Man ", costo:20, totalVendido:5},
  {productoNpombre:"camisetas spiderman", costo:20, totalVendido:50}
]
var resultado = ventas.reduce((acumulador, producto) => {
  let totalVendido = producto.costo * producto.totalVendido;
  acumulador[producto.productoNpombre] =`$ ${totalVendido}`;// no olvidar las comillas invertidas para sacar el costo//
  return acumulador;
},{})
console.log(resultado);


