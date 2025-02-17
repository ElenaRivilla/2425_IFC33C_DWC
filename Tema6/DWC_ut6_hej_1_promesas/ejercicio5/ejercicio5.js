document.addEventListener('DOMContentLoaded', cargaDOM);

function cargaDOM() {
    let base = crearBase();
    base.button.addEventListener('click', () => {
        let numero = numeroAleatorio();
        base.h3.innerHTML = numero;

        new Promise((resolve, reject) => {
            if (numero >= 4) {
                resolve(`¡Exito! Obtuviste un ${numero}`);
            }
            reject(`Fallaste. Obtuviste un ${numero}`)
        })
            .then((resultado) => {
                base.text.innerHTML = resultado;
                base.text.style.color = 'green'
            })
            .catch((error) => {
                base.text.innerHTML = error;
                base.text.style.color = 'red'
            })
    })
}

function crearBase() {
    let div = document.querySelector('#container');
    let h3 = document.createElement('h3');
    let button = document.createElement('button');
    let text = document.createElement('p');

    div.appendChild(button);
    div.appendChild(h3);
    div.appendChild(text);
    button.innerHTML = 'Lanzar dado';
    return { button, h3, text }
}

function numeroAleatorio() {
    let min = 1;
    let max = 6;
    let formula = Math.floor(Math.random() * (max - min + 1) + min);
    return formula;
}