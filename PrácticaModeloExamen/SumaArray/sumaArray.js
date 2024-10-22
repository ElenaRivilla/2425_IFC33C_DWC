/* 4. Calcula la suma de números dentro de un array
Puedes crear tu propio array de números, pero considera probar este problema con algunos conjuntos diferentes para verificar tu solución.
 Ten un array con números negativos y positivos y otra con números enteros y decimales.

También puedes intentar usar arrays de diferentes longitudes. Si te sientes cómodo con esto, prueba el desafío adicional un poco 
más desafiante que aparece a continuación.

Desafío intermedio adicional: crea una función que pueda devolver la suma de un número de columna o fila en particular en una tabla. */

let arrayEntero = [];
let arrayDecimales = [];
let arrayNegativo = [];
let arrayNegativoDecimal = [];
let arrayDimensional = [];

function generarArray(length){
    for (let i = 0; i < length; i++){
        arrayEntero.push(Math.floor(Math.random() * 15) + 1);
    }
    console.log(arrayEntero);
}

function generarArrayDecimales(length){
    for (let i = 0; i < length; i++){
        resultado = ((Math.random() * 15) + 1).toFixed(2);
        arrayDecimales.push(parseFloat(resultado));
    }
    console.log(arrayDecimales);
}

function generarArrayNegativo(length){
    for (let i = 0; i < length; i++){
        arrayNegativo.push(- Math.floor(Math.random() * 15) + 1);
    }
    console.log(arrayNegativo);
}

function generarArrayNegativoDecimal(length){
    for (let i = 0; i < length; i++){
        resultado = (( -Math.random() * 15) + 1).toFixed(2);
        arrayNegativoDecimal.push(parseFloat(resultado));
    }
    console.log(arrayNegativoDecimal);
}

function generarArrayDimensional(length, numColumns) {
    for (let i = 0; i < length; i++) {
        const fila = []; 

        for (let j = 0; j < numColumns; j++) {
            fila.push(Math.floor(Math.random() * 15) + 1); 
        }
        arrayDimensional.push(fila); 
    }
    console.log(arrayDimensional);
}

function sumarArrayEntero(){
    resultado = 0;

    for(let i = 0; i < arrayEntero.length; i++){
        resultado += arrayEntero[i];
    }
    console.log(resultado);
}

function sumarArrayDecimales(){
    resultado = 0;

    for(let i = 0; i < arrayDecimales.length; i++){
        resultado += arrayDecimales[i];
    }
    console.log(resultado);
}

function sumarArrayNegativo(){
    resultado = 0;

    for(let i = 0; i < arrayNegativo.length; i++){
        resultado += arrayNegativo[i];
    }
    console.log(resultado);
}

function sumarArrayNegativoDecimal(){
    resultado = 0;

    for(let i = 0; i < arrayNegativoDecimal.length; i++){
        resultado += arrayNegativoDecimal[i];
    }
    console.log(resultado);
}

function sumarArrayDimensional(fila1, col1, fila2, col2) {
    let resultado = 0;

    if (fila1 < arrayDimensional.length && col1 < arrayDimensional[0].length && fila2 < arrayDimensional.length && col2 < arrayDimensional[0].length) {
        resultado = arrayDimensional[fila1][col1] + arrayDimensional[fila2][col2];

    } else {
        console.log('Índice de fila o columna no válido');
        return;
    }
    console.log(resultado);
}


function imprimirTodo(){
    generarArray(10);
    sumarArrayEntero();

    generarArrayNegativo(10);
    sumarArrayNegativo();

    generarArrayNegativoDecimal(10);
    sumarArrayNegativoDecimal();

    generarArrayDecimales(10);
    sumarArrayDecimales();

    generarArrayDimensional(3, 3);
    sumarArrayDimensional(0, 2, 1, 2);
}

imprimirTodo();



