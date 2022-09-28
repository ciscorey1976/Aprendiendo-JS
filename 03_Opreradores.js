//* operador de asignacion (=)

var x = 2;
var y = true;

//* operador de asignacion de adicion (+=)

var x = 2;
var y = 12;

x += y ; // * es igual a x + y /
console.log(x);

//* operador de asignacion (-=) (*=) (/=) (%=) (**=) solo corre una operacion 

var x = 2
var y = 4
x %=y;
console.log(x);

//* operadores de compraracion 
console.log(3 == 3);// los compara es true 
console.log(3 =='3');// ojo puede convinar string con numero 
console.log(3 === 3 );// no deja combinar los datos asegura que sea exacto igualmente de desigualdad !==

//* Operadores aritmeticos ( + , - , *, /, **)

//* operadores de incremento o decremento ( ++ ) decremento (--)
var numero = 0;
//console.log(++numero); //* el incremento de la variable es automatico 
console.log(numero++); //* primero valida la variable 
console.log(numero); //* las dos unidas varia en uno 

//*operaodres logicos 

// operadores and 

console.log(true && true );
console.log(2 > 3 && 1<=2);

// operadores or 

console.log(true || false);
console.log(false || false );

// not //* negacion 

console.log(!false);
console.log(!true);

//* operador de cadena de texto o concatenacion (+)

var nombre = 'Cisco';
var apellido = 'Rey';
var NombreCompleto = nombre +' ' + apellido
console.log(NombreCompleto);

//* operadores incodicionales condicion-operador-valor a retornar (cond-?-val1 : val2);

          
console.log(2 > 3 ? 'es mayor': 'es menor');  //* compara que 2 es mayor a 3 imprimir es mayor si no imprimir es menor

// cumple primero la condicion ( 2 > 3 ) despues da el valor 

//* Operador de desestructuracion 

// va a obtener una estructura especifica de un objeto 

var persona = { 
    nombre: 'Francisco',
    apellido: 'Rey'
};
var { nombre } = persona; //* esta desestructurando 'nombre ' del objeto persona 
console.log(nombre);
console.log(persona);

//* desetructuracion para array 

var arreglo = [1,2,3,4,5];
var [primeraPosicion, dos , tres] = arreglo; //* desestructura por posiciones del arreglo 
console.log(dos);
console.log(primeraPosicion);
console.log(tres);

//* opreador de mienbro o acceso de propiedad 

// notacion punto //* este se tiene acceso con algunos de lpos mienbros del objeto 

var persona = { 
    nombre: 'francisco',
    apellido: 'rey'
}
console.log(persona.nombre);
console.log(persona.apellido);

// notacion por corchetes //* hace lo mismo que punto pero con corchetes se puede utilizar en los arreglos 

var persona = { 
    nombre: 'francisco',
    apellido: 'rey'
}
console.log(persona['nombre']);

// array

var arreglo = [ 21,22,23,24,25,26,27]
console.log(arreglo[4]);//* se hace por posicion de los array 

//* operacion de determinacion de tipo (typeof ) retorna el tipo de dsto de un valor 

console.log(typeof 'cisco ');
console.log(typeof 12);
console.log(typeof true);




