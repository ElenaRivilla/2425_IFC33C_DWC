/*
10. Devuelve la cantidad de vocales en una cadena
Crea una función que devuelva un número entero de la cantidad de vocales que se encuentran en una cadena. 
Esta es una excelente manera de practicar la determinación de las características de un conjunto de datos.
Si usas JavaScript más adelante en tu carrera, estarás bien preparado para determinar de qué están compuestos 
los conjuntos de datos (o solo las cadenas). Si te apetece un desafío adicional, considera devolver la cantidad de caracteres.
*/

function cantidadVocales(texto){
    contador = 0;
    cadena = texto.toLowerCase().split("");
    vocales = ["a", "e", "i", "o", "u"];
    
    for(let i = 0; i < cadena.length; i++){
        for (let j = 0; j < vocales.length; j++){
            if (cadena[i] === vocales[j]){
                contador++;
            }
        }
    }
    
    console.log(contador);
}

cantidadVocales("MURCIELAGO");
