/*
6. Ordena una matriz de menor a mayor
También puedes crear una función para esta solución, pero asegúrate de probar tu programa con distintas longitudes 
y tipos de matrices. Prueba una con todos los números enteros, otra con números negativos y otra con decimales.
*/
let array = [];

function generarArray(length){
    for (let i = 0; i < length; i++){
        array.push(Math.floor(Math.random() * 15) + 1);
    }
    console.log(array);
}

function ordenarArray() {
    arrayOrdenado = array.slice();

    arrayOrdenado.sort(function (a, b) { 
        return a - b;
    }); 

    console.log("Array ordenado:", arrayOrdenado);
}

generarArray(7);
ordenarArray();