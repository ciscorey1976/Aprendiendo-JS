/**sirve para recorrer los objetos  */

//**for(variable - opreadorIN - objeto){*/
    //** instrucciones}*/

    var persona ={
        nombre:"Francisco",
        apellido:"rey",
        edad:46
    }
    for (let clave in persona) {
        console.log(clave);
    }

    //**de esta manera sirve para averiaguar las claves del objeto */
    var persona ={
        nombre:"Francisco",
        apellido:"rey",
        edad:46
    }    
    for (let clave in persona) {
        console.log(clave, persona[clave]);
    }    