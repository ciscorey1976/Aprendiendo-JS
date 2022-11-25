//*cliclo while - mientras  */

//var contador = 0 
//
//while (contador <= 100) {
//    console.log("este es un cliclo while a 100");
//}//* si se deja asi se deja infinito

var contador = 0;/*Si se inicia en 0 da un numero mas si se inicia en 1 cierra con los numeros deseados */

while (contador <= 5) {
    console.log("este es un cliclo while a 5");
    contador += 1;
}
//*sienpre hace analisis de la condicion para que se ejecute

const ciudadesDisponibles = ['bogota','lima','santiago','montevideo'];
const precioCiudad = [500,400,380,200];
const presupuestoDisponible = 390;
let i = 0;

while (precioCiudad[i] > presupuestoDisponible) {
    i++;
}
console.log('puedes comprar pasaje para:' +ciudadesDisponibles[i]);

//**cilco while con operadores condicionales  */

const ciudadesViajes  = ['bogota','lima','santiago','montevideo'];
const precioViaje = [500,400,380,200];
const dineroDisponible = 700;
let v = 0;

while (precioViaje[v] > dineroDisponible && v < ciudadesViajes.length) {
    v++;    
}
if (v == ciudadesViajes.length){
    console.log("No tenemos pasajes disponibles");    
}else {
    console.log("Puedes Comprar el pasaje para: " +ciudadesViajes[v]);
}

//**ciclo while interando con maps */

const datosViaje = [
    {
        'ciudad': 'bogota',
        'precio': 500
    },
    {
        'ciudad': 'lima',
        'precio': 400
    },
    {
        'ciudad': 'santiago',
        'precio': 380
    },
    {
        'ciudad': 'montevideo',
        'precio': 200
    },
];
const presupuesto = 190;
let e = 0;
/** le estoy diciendo que me recorra datos valide que ciudad es mayor al presupuesto
 *  y datos sea menor que el array
 * si es asi que el interador e sea igual  
 */

//*while (datosViaje[e].precio > presupuesto && e < datosViaje.length) {
//*    e++;
//*} DE ESTA FORMA NO CORRE SI EL VALOR NO EXISTE YA QUE SE ESTA CORRIENDO LA LISTA AL FINAL 

while (e < datosViaje.length && datosViaje[e].precio > presupuesto) {
    e++;
}

if (e == datosViaje.length) {
    console.log("No tenemos pasajes Disponibles");
}else{
    console.log("Puedes Comprar pasaje para:"+datosViaje[e].ciudad);
};


