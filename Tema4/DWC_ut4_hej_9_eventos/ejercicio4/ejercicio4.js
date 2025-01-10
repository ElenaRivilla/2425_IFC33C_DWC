document.addEventListener('DOMContentLoaded', cargaInicial);


function cargaInicial() {
    let reset = document.getElementById('reset')
    reset.addEventListener('click', resetearContador);

    let incrementar = document.getElementById('incrementar')
    incrementar.addEventListener('click', incrementarContador);
}

let contador = 0;
function incrementarContador() {
    contador++;
    document.getElementById('contador').innerText = contador;
}

function resetearContador() {
    document.getElementById('contador').innerText = 0;
    contador = 0;
}




