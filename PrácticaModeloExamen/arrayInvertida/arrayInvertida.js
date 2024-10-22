/* 5. Crea una función que invierta una matriz
Este desafío es particularmente útil si planeas convertirte en un científico de datos. Manipular datos es una parte importante 
de la función, y construir las bases ahora te ayudará más adelante cuando trabajes con bases de datos grandes.

Comienza con algo pequeño y ve avanzando. Comienza con una matriz de 5 números y luego prueba tu programa con una 
matriz más grande para verificar su éxito. */
let array = []
let arrayInvertido = []
let arrayLength = 5;  

function generarArray(){
    for (let i = 0; i < arrayLength; i++){
        array.push(Math.floor(Math.random() * 15) + 1);
    }
    console.log("Array original: ", array);
}

function invertirArray(){
    arrayInvertido = array.slice().reverse(); 
    console.log("Array invertido:", arrayInvertido);
}

generarArray();
invertirArray();