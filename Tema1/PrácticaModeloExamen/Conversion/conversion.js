/* 3. Crea una función de conversión de longitud
Crear una función es una habilidad que te resultará útil en muchos entornos y, a medida que avances, trabajarás con funciones mucho más
 complicadas que esta. Pero una función que convierta unidades de medida puede ser bastante útil en múltiples profesiones e industrias.

Comencemos con una conversión de kilómetros a millas. La función debe incluir la entrada en kilómetros y devolver la respuesta en millas. */

function converter(cantidadKm){
    milla = 0.621371;

    resultado = (cantidadKm * milla);
    console.log(resultado);
}

converter(30);