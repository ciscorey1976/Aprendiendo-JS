//* Do while
/**do{
 * }while(condicion) */
//* primero ejecuta la condicion y despues evalua la condicion
//* ejemplo tipo adivinanza en do coloco adivine un numero -- en while se coloca el numero el ciclo no termina hasta que acave el numero
var contador = 1;
do {
  console.log("inprimo un do while");
  contador += 1;
} while (contador <= 10);

let numero = 1;
function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
  l;
  do {
    console.log((numero += 5));
  } while (numero <= 8);
}

//**ejercicio alura agencia de viajes  */

const datosViaje = [
  {
    ciudad: "bogota",
    precio: 500,
  },
  {
    ciudad: "lima",
    precio: 400,
  },
  {
    ciudad: "santiago",
    precio: 380,
  },
  {
    ciudad: "montevideo",
    precio: 200,
  },
];
const presupuesto = 600;
let e = 0;
let ciudadSeleccionada = '';

do {
  if (datosViaje[e].precio < presupuesto) {
    ciudadSeleccionada = datosViaje[e].ciudad;
  }
  e++;
} while (e < datosViaje.length && ciudadSeleccionada == '');
{
  if ( ciudadSeleccionada == '') {
    console.log("No tenemos pasajes Disponibles");
  } else {
    console.log("Puedes Comprar pasaje para:" +ciudadSeleccionada);
  }
}
