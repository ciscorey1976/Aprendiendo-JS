//*Varialbles

/**
 * formas de definir variables 
 */
//* variables con VAR
var nombre = 'francisco'; // se define y se inicializa la variable
console.log(nombre);

var persona = {
  nombre: "francisco",
  apellido: "rey",
  edad: 46,
  direccion: {
    calle: "72a",
    numero: "10",
    letra: null,
    numero: 04,
  },
  comidaPrioritaria: ["pizza", "carne", "pollo"]
};

var ciudad; // solo se define 
ciudad = 'bogota'; // se le da valor a la variable
ciudad = 'armenia';//* reasignar las variables 
console.log(ciudad);// se utliza la variable

//* variables con let 

let nombre = 'francisco';// funciona las variables en un bloque especifico de codigo 
console.log(nombre);

{ // bloque de codigo let solo se utliza en el bloque de codigo 
    let saludo = ' hola como estas';
    console.log(saludo);
}

//variables constantes CONST
//* las constantes van en ,mayuscula 
//* las contantes no se dejan vacias 

const PI = 3.14;
console.log(PI);

// *template srting `` deja utilizar una variable dentro de ellas 
//* se puede dejar espacio en ellas 

var nombre = 'francisco';
var saludo = `hola soy ${nombre}


como estas?`;

console.log(saludo);
