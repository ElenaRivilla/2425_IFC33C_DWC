document.addEventListener('DOMContentLoaded', cargaDOM);

function cargaDOM() {
    crearBase();
    //simularDescarga(descarga);
    simularDescargaPromesa();
}

function simularDescarga(cb) {
    let boton = document.querySelector('button');
    boton.addEventListener('click', () => cb());
}

function simularDescargaPromesa() {
    let h4 = document.querySelector('h4');
    document.querySelector('button').addEventListener('click', () => {
        promesa1().then((resultado) => {
            h4.innerHTML = resultado
        })
        promesa2().then((resultado) => {
            h4.innerHTML = resultado
        })
        promesa3().then((resultado) => {
            h4.innerHTML = resultado
        });
        promesa4().then((resultado) => {
            h4.innerHTML = resultado
        });
        promesa5().then((resultado) => {
            h4.innerHTML = resultado
            h4.style.color = 'green';
        });
    });
}

function crearBase() {
    let container = document.querySelector('#container');
    let h3 = document.createElement('h3');
    let h4 = document.createElement('h4');
    let boton = document.createElement('button');

    container.appendChild(h3);
    container.appendChild(boton);
    container.appendChild(h4);

    h3.innerHTML = 'archivo1.mp4';
    boton.innerHTML = `Descargar`;
}

function descarga() {
    let h4 = document.querySelector('h4');
    setTimeout(() => {
        h4.innerHTML = 'Iniciando descarga...'
    }, 1000)

    setTimeout(() => {
        h4.innerHTML = 'Descargando archivo...'
    }, 5000);

    setTimeout(() => {
        h4.innerHTML = 'Archivo descargado con éxito'
    }, 6000);
}

function promesa1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Iniciando descarga...')
        }, 1000);
    })
}

function promesa2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Descargando archivo 1...')
        }, 5000);
    })
}

function promesa3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Descargando archivo 2...')
        }, 7000);
    })
}

function promesa4() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Descargando archivo 3...')
        }, 9000);
    })
}

function promesa5() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Archivos descargado con éxito.')
        }, 11000);
    })
}