/**funciones */

function saludar(nombre) {
    console.log("hola soy "+ nombre);
}
saludar("francisco");

function saludar(nombre) {
    return "hola soy"+" " +nombre;
}
var saludo = saludar("francisco");
console.log(saludo);
console.log(saludar("francisco Alejandro"));

//**exprexion o anonimas */

var suma = function (a, b) {
    return a + b ;
}
console.log(suma(2, 23));

//**funcion arrow tiene por default el return*/

var multiplicar = (a, b) => a*b;
console.log(multiplicar(3, 3));

//**cpn cuerpo de funtion  */

var resta = (a, b ) => {
    if (typeof a === 'number' && typeof b === 'number') {
        return a - b; 
    } else {
        return "digite un numero valido"       
    }
}
console.log(resta(5, '5'));