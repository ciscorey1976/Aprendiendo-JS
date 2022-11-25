//* cliclo for= (for Exprecion Inicial ;Exprecion condicional ; Exprecion de actualizacion){ lo que queremos que haga el for}

for (let contador = 1; contador <= 10; contador++) {
  console.log("este es un ciclo for ");
}

/**ejejrcicio haga la tabla del 2 al 12 con for  */

var tabla = 2;
var cantidad = 12;

for (var i = 2; i <= cantidad; i++) {
  console.log(tabla + "x" + i + "=" + tabla * i + "<br>");
}
//** for .... valor inicial a valor final  */
//const ciudadesDisponibles = ['bogota','lima','santiago','montevideo'];
//const precioCiudad = [500,400,380,200];
//let i = 0;


const presupuestoDisponible = 400;
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
let ciudadSeleccionada = "";

for (let i = 0; i < datosViaje.length && ciudadSeleccionada == ''; i++) {
    
  if (datosViaje[i].precio <= presupuestoDisponible) {
    ciudadSeleccionada = datosViaje[i].ciudad;
  }
}
if (ciudadSeleccionada == "") {
  console.log("No tenemos pasajes Disponibles");
} else {
  console.log("puedes comprar pasajes para :" + ciudadSeleccionada);
}
