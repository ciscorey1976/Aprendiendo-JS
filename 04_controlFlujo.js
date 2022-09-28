/**control de flujo  */

//* estructura If

var llueve = false;

if (llueve) {
  console.log("nesecito una sombrilla"); // no ejecuta poorque es falso
}

var llovisna = true;
if (llovisna) {
  console.log("no nesecito una sombrilla"); // se ejecuta que es verdadero
}
var administrador = true;
if (administrador) {
  console.log("bienvenido al sistema ");
}
var admin = "admin";
if (admin === "admin") {
  console.log("welcome");
}

//* if else
const permiso = 18;
var edad = 20;

if (edad >= permiso) {
  console.log("puedes pasar eres mayor de edad ");
} else {
  console.log("lo siento no puedes pasar ");
}

//* else if encadenado

const semaforo = "amarillo";

if (semaforo === "verde") {
  console.log("siga esta en verde ");
} else if (semaforo === "amarillo") {
  console.log("alistese a seguir ");
} else if (semaforo === "rojo") {
  console.log("no siga");
} else {
  console.log("color no identificado");
}

//* switch  estrucutura de casos en caso de que se vea uno de estos codigos se ejecutara el codigo*/

//switch (expresion) {
//    case value la exprecion:
//    codigo;
//        break;
//
//    default: se ejecuta en caso de que no se cumpla
//        break;
//}
var producto = "mango";

switch (producto) {
  case "papaya":
    console.log("la papaya tiene un costo de $ 1 us ");
    break;
  case "banano":
    console.log("el banano tiene un costo de 2 us el racimo");
    break;
  case "mango":
    console.log("ni lo pieses esta caro");

  default:
    console.log("no hay ese producto");

    break;
}

//**ejercicios  */
1;

//programa segun el dia de la semana pasarlo al ingles

var dia = "domingo";

if (dia == "lunes") {
  console.log("lunes = monday");
} else if (dia == "martes") {
  console.log("martes = thuesday");
} else if (dia == "miercoles") {
  console.log("miercoles = wensday");
} else if (dia == "jueves") {
  console.log("jueves = thursday");
} else if (dia == "viernes") {
  console.log("viernes = friday");
} else if (dia == "sabado") {
  console.log("sabado = saturday");
} else if (dia == "domingo") {
  console.log("domingo es = sunday");
}

switch (dia) {
  case "lunes":
    console.log("lunes = monday");

    break;
  case "martes":
    console.log("martes = thuesday");
    break;
  case "miercoles":
    console.log("miercoles = wensday");
    break;
  case "jueves":
    console.log("jueves = thursday");
    break;
  case "viernes":
    console.log("viernes = friday");
    break;
  case "sabado":
    console.log("sabado = saturday");
    break;
  case "domingo":
    console.log("domingo es = sunday");
    break;
  default:
    console.log("no hay mas dias de la semana");
    break;
}

var valorCompra = 10;

if (valorCompra == 10) {
  console.log(
    "su gasto de envio tiene un costo de $3 usd en total son  $" +
      (valorCompra + 3)
  );
} else if (valorCompra >= 10 && valorCompra <= 20) {
  console.log(
    "su gasto de envio tiene un costo de $5 usd en total son  $" +
      (valorCompra + 5)
  );
} else if (valorCompra >= 20 && valorCompra <= 50) {
  console.log(
    "su gasto de envio tiene un costo de $7 usd en total son  $" +
      (valorCompra + 7)
  );
} else if (valorCompra > 50) {
  console.log("su emvio no tiene costo");
}

//*no se ejecuto bien 


let valorCompra = 10;

switch (valorCompra) {
  case valorCompra == 10:
    console.log(
      "su gasto de envio tiene un costo de $3 usd en total son  $" +
        (valorCompra + 3)
    );
    break;
  case valorCompra >= 10 && valorCompra <= 20:
    console.log(
      "su gasto de envio tiene un costo de $5 usd en total son  $" +
        (valorCompra + 5)
    );
    break;
  case valorCompra >= 20 && valorCompra <= 50:
    console.log(
      "su gasto de envio tiene un costo de $7 usd en total son  $" +
        (valorCompra + 7)
    );
    break;
  case valorCompra > 50:
    console.log("su envio no tiene costo");
    break;
  default:
    console.log("no compro nada ");

    break;
}
