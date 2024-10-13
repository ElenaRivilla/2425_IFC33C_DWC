let numero = parseInt(prompt("Dame un número entre el 1 y el 10"));
let min = 1;
let max = 10;

function comprobarNumero() {
    if (numero < min || numero > max) {
        numero = parseInt(prompt("Número incorrecto. Dame un número entre el 1 y el 10"));
        comprobarNumero();
    }
}

function generarNumero() {
    let numeroAleatorio = Math.floor(Math.random() * (max - min + 1) + min);
    console.log("Número generado: " + numeroAleatorio);

    if (numeroAleatorio !== numero) {
        console.log("Lo sentimos, NO has acertado.");
        return false;
    }
    console.log("¡Enhorabuena, has acertado!");
    return true;
}

comprobarNumero();
generarNumero();
