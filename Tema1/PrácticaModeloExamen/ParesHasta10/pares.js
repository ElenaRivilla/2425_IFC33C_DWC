/* 1. Imprima todos los números pares del 0 al 10
Intente resolver este problema de la forma más eficiente posible. Considere la posibilidad de utilizar bucles que le permitan escribir la menor
 cantidad de caracteres o comandos. Si bien podría simplemente imprimir los números pares, sea creativo y vea cómo podría imprimirlos de una
  manera que funcione hasta 10 o incluso hasta 10 000 con un pequeño esfuerzo adicional. */

let numMaximo = 10;

function imprimirPares(){
    for (let i = 0; i <= numMaximo; i++){
        if (i % 2 == 0){
            console.log(i);
        }
    }
}

imprimirPares()