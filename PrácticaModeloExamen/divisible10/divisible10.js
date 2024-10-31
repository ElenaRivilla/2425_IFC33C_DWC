/*
9. Devuelve un valor booleano si un número es divisible por 10
Aquí, crearás una función que te dará como resultado un valor booleano “verdadero” o “falso”. El número ingresado solo 
debe devolver un valor “verdadero” si es divisible por 10. De lo contrario, tu programa debe devolver una respuesta “falsa”.
*/

function esDivisible(numero){
    if (numero % 10 === 0){
        return true;
    }
    return false;
}

console.log(esDivisible(5));