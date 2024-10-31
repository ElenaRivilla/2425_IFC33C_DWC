/*
7. Crea una función que filtre números negativos En este desafío, tendrás una función que toma una matriz como entrada y 
devuelve una matriz. Pero si todo sale según lo planeado, eliminará los números negativos. Este es otro ejemplo de una tarea
 que será útil al combinar datos y buscar formas inteligentes de eliminar "datos incorrectos".
*/

let array = [];

function generarArray(length) {
    for (let i = 0; i < length; i++){
        array.push(Math.floor(Math.random() * 15) - 5);
    }
    console.log(array);
}

function eliminarNegativos(array){
    arrayFiltrado = [];
    
    for (let i = 0; i < array.length; i++){
        if (array[i] >= 0){
            arrayFiltrado.push(array[i]);
        }
    }
    console.log(arrayFiltrado);
}
generarArray(5);
eliminarNegativos(array);