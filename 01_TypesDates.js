// tipos de datos

// numero - number

console.log(45);
// float
console.log(36.45);

// texto

console.log("cisco ");
console.log("hola");
console.log(`hola cisco`); // tremplate strings

// logicos

console.log(true);
console.log(false);

// undefined
console.log(undefined); //* indefinido

// null
console.log(null); //* no hay definicion de algo

/**
 * tipos de datos estructurales
 */

//* objeto
// se delimita por llaves {}
// se agrega clave valor  {nombre: valor }

// ejemplo de un array con objeto

console.log({
  nombre: "cisco",
  edad: 45,
  FechaDeNacimiento: null,
  EsAlto: true,
  ciudades: ["bogota", "cali", "armenia", "coveñas"], 
  direccion: { CallePrincipal: "la marina" },
});

//**array --dato tipo lista  */
// se puede tener de cualquier tipo como de una sola secuencia

console.log([21, true, { nombre: "francisco" }, [1, 2, 3, 4, 5]]);
console.log(["Mexico", "Colomia", "Venezuela", "Brazil"]);
