//**manipulacion de arreglos */

/**propiedad length  */
//**esta propiedad recorre los componentes de un arreglo */

//*forEachS

var letras = ['a','b','c','d','e'];

console.log(letras.length);

/**esta condicion hacer que pueda recorrer el arreglo hasta que se acabe  */

//for (let i = 0; i < letras.length; i++) {
//                        const element = letras[i];
//                        console.log(element);                        
//}

//**funciones adicionales  */

/**de esta forma solo se  puede recorrer el elemento*/
letras.forEach((elemento) => console.log(elemento));

//**push ---shift----pop */

/**mutavilidad  modifica algo*/

//**push ingresa modificaciones al arreglo  */

var letras = ['a','b','c','d','e'];
letras.push('f','g','h');
console.log(letras);

//**shift modifica el arreglo quita el primer elemento -- indice 0  */
var letras = ['a','b','c','d','e'];
var primerElemento = letras.shift();
console.log(letras);
console.log(primerElemento);

//**pop quita el ultimo elemento del arreglo y le puede hacer return  */

var letras = ['a','b','c','d','e'];
var ultimoElemento = letras.pop();
console.log(letras);
console.log(ultimoElemento);

//**map es inmutable crea un nuevo arreglo sin modificarel original*/

var estudiantes = ['cisco','johanna','juan','pepe'];/**arreglo origuinal */

var asistencia = estudiantes.map((nombre) => { /**se crea un nuevo arreglo con 0 asisitencia  */
                        return{
                         nombre: nombre,
                         asistencia: false
                        };
} );
console.log(estudiantes);
console.log(asistencia);

/**si quiero modificar el arreglo y sacr uno nuevosin hacer cambios   */

var estudiantes = ['cisco','johanna','juan','pepe'];

var asistencia = estudiantes.map ((nombre) => '${nombre}.');
console.log(estudiantes);
console.log(asistencia);













