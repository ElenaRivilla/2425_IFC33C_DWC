let letrasNif = 'TRWAGMYFPDXBNJZSQVHLCKE';

class Nif {
    constructor(numero, letra) {
        this.numero = numero;
        this.letra = letra;
    }

    esCorrecto() {
        if (this.numero.toString().length !== 7) {
            return false;
        }
        let resto = this.numero % 23;
        let letraCalculada = letrasNif[resto];

        return this.letra === letraCalculada;
    }
}

let nifCorrecto = new Nif(2255667, 'B');
console.log(nifCorrecto);
console.log(nifCorrecto.esCorrecto()); 

let nifIncorrecto = new Nif(1156987, 'A');
console.log(nifIncorrecto);
console.log(nifIncorrecto.esCorrecto()); 
