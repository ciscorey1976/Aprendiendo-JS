const ciudadDestino = 'bogota';
const ciudadesDisponibles = ['bogota', 'cali','medellin','bucaramanga','armenia','pasto','cartagena','barranquilla','pereira'];
const edadPasajero = 15;
const estaAcompanado = false;
//**si ciudadDestino esta dentro de la lista escribe "venta de pasaje"*/

if ((ciudadesDisponibles.indexOf(ciudadDestino) >= 0) && edadPasajero >= 18 || estaAcompanado){
    console.log('Pasaje disponible para venta');
}else {
    console.log('lo sentimos no temenos pasaje para la venta ');
}

