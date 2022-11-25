const salario = "3300.0";

if (salario < 2600.0){
console.log("Su alícuota es de 15%");
console.log("Puede deducir del pago hasta 350 pesos");
}
if (salario < 3750.0){
console.log("Su alícuota es de 22.5%");
console.log("Puede deducir del pago hasta 650 pesos");
}
const ciudadDestino = "Bogotá";
const ciudadesDisponibles = new Array("Bogotá","Lima","Santiago","Montevideo");

let valorPasaje = 0;

console.log(`Verificando pasajes para ${ciudadDestino}`);
/*
if (ciudadesDisponibles.indexOf(ciudadDestino) > -1) {
    if(ciudadDestino == "Bogotá") {
        valorPasaje = 500;
    } else if (ciudadDestino == "Lima") {
        valorPasaje = 400;
    } else if (ciudadDestino == "Santiago") {
        valorPasaje = 380;
    } else if (ciudadDestino = "Montevideo") {
        valorPasaje = 200;
    }
    console.log(`El valor del pasaje es: ${valorPasaje}`);
} else {
    console.log("Ciudad no disponible para viajar")
}
*/
switch(ciudadDestino) {
    case "Bogotá":
        valorPasaje = 500;
        break;
    case "Lima":
        valorPasaje = 400;
        break;
    case "Santiago":
        valorPasaje = 380;
        break;
    case "Montevideo":
        valorPasaje = 200;
        break;
    default:
        console.log(`No hay pasajes disponibles para: ${ciudadDestino}`);
        break;
}
if(valorPasaje > 0) {
    console.log(`El valor del pasaje es: ${valorPasaje}`);
}