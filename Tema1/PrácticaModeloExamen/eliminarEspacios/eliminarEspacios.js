/*
8. Eliminar los espacios que se encuentran en una cadena
Otra forma de limpiar los datos es eliminar los errores o los espacios innecesarios. Esta función tomará una cadena y
luego la devolverá con todos los espacios eliminados. Piense en lo que sucedería si en su trabajo le encargaran limpiar
los datos de los clientes. Podría escalar esta función para limpiar campos específicos de datos, como los códigos postales.
*/

function eliminarEspacios(texto) {
    let cadena = texto.split(" ").join("");
    console.log(cadena);
}
eliminarEspacios("hola que tal");