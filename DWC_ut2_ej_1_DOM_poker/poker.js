let numeros = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "ace", "jack", "queen", "king"];
let palos = ['hearts', 'diamonds', 'clubs', 'spades'];
let barajaEntera = [];
let baraja = [];

let jugador = prompt("Introduce el nombre del jugador: ");
let nombreJugador = document.createElement("h1");
nombreJugador.innerHTML = "Nombre del jugador: " + jugador;
nombreJugador.id = "jugador"
document.body.prepend(nombreJugador);

class Carta {
    constructor(numero, palo) {
        this.numero = numero;
        this.palo = palo;
    }
}

function rellenarBaraja() {
    for (let palo of palos) {
        for (let numero of numeros) {
            barajaEntera.push(new Carta(numero, palo));
        }
    }
}

function barajar() {
    return barajaEntera.sort(function () {
        return Math.random() - 0.5;
    });
    
}

function repartir() {
    if (barajaEntera.length < 5) {
        return false;
    }

    baraja = barajaEntera.slice(0, 5);

    let div = document.querySelector(".container-cartas");
    div.innerHTML = '';

    for (let i = 0; i < baraja.length; i++) {
        let carta = document.createElement("img");

        carta.src = './cards/' + baraja[i].numero + "_of_" + baraja[i].palo + ".png";
        div.appendChild(carta);
    }

    barajaEntera.splice(0, 5);
    return true;
}

function esGanador() {
    let resultado = "Has perdido";

    for (let i = 0; i < baraja.length; i++) {
        for (let j = i + 1; j < baraja.length; j++) {

            if (baraja[i].numero === baraja[j].numero) {
                resultado = "Has ganado";
                break;
            }
        }
    }
    return resultado;
}

function jugar() {
    let containerTexto = document.querySelector(".container-texto");
    let resultadoAnterior = containerTexto.querySelector("h2");
    let texto = document.createElement("h1");
    let botonJugar = document.querySelector("button");
    let nombreJugador = document.querySelector("#jugador");
    let divCartas = document.querySelector(".container-cartas");

    if (resultadoAnterior) {
        resultadoAnterior.remove();
    }
    nombreJugador.style.display = "none";
    botonJugar.style.display = "none";
    divCartas.innerHTML = '';

    if (barajaEntera.length < 5) {
        if (repartir()) {
            let resultat = document.createElement("h2");
            resultat.innerHTML = esGanador();
            containerTexto.appendChild(resultat);
        }

        texto.innerHTML = 'Se ha acabado la baraja';
        containerTexto.appendChild(texto);
        return;
    }

    let contador = 3;
    const cuentaAtras = setInterval(() => {
        divCartas.innerHTML = contador; 
        contador--;

        if (contador < 0) {
            clearInterval(cuentaAtras);
            divCartas.innerHTML = '';

            if (repartir()) {
                let resultat = document.createElement("h2");
                resultat.innerHTML = esGanador();
                containerTexto.appendChild(resultat);
            }

            if (barajaEntera.length >= 5) {
                botonJugar.style.display = "block";
                nombreJugador.style.display = "block";
            }
        }
    }, 1000);
}

rellenarBaraja();
barajar();
jugar();
