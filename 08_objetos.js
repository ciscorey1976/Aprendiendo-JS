
//** se inicializa con llaves {}
//*  el se maneja con clave , valor 
//* nombre = key, (clave)  , "cisco " = (value)

//=== LLAMAR LA KEY PARA SABER EL VALOR ===//
//* siembre se separa por comas el objeto

var usuario ={ 
    nombre: "cisco",
    contraseña: "hola123",
    edad: 45,
    online: true
}
//* llamar el objeto objeto
// console.log(usuario);
//* llamar una parte del objeto
// console.log(usuario.nombre);
// console.log(usuario.contraseña);
//* llamar objeto con brakets llamo parte del objeto con pass
// var pass = 'contraseña';
// console.log(usuario[pass]);

//**===asignado valores==== */

// usuario.pais = "COL"
// console.log(usuario);

//**===== eliminar ==== */

// delete usuario.contraseña
// console.log(usuario);

//**===== redifinir una key ===== */

usuario.nombre = "alejandro"
console.log(usuario);

//**etodos de un objeto  */

var nvObjeto = {// esta es una funcion definoida dentro de un objeto //
    decirHola: function () {
        console.log("Hola Todo el mundo");
    }

}
nvObjeto.decirHola();// se llama la funcion


//**======RECORRER OBJETOS ======= */
// FOR IN
//**Estructura del for in **/

 //* for (const key in object) {
 //*   if (Object.hasOwnProperty.call(object, key)) {
 //*       const element = object[key];
        
 //*   }
//*  objeto

var usuario ={ 
    nombre: "cisco",
    contraseña: "hola123",
    edad: 45,
    online: true
}
//* bucle for in 
for (const key in usuario) {
    //if (usuario.hasOwnProperty.call(usuario, key)) {
    //    const element = usuario[key];
    return(key);
    return(usuario[key]);
        
    }
console.log(key);
console.log(usuario[key]);