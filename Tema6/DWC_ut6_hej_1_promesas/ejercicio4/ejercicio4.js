
document.addEventListener('DOMContentLoaded', cargaDOM);

function cargaDOM() {
    crearBase();
    document.querySelector('button').addEventListener('click', () => {
        const text = document.querySelector('p');

        new Promise((resolve) => {
            text.innerHTML = "Descargando...";
            setTimeout(() => {
                resolve("Archivo descargado");
            }, 3000);
        })
            .then((result) => {
                text.innerHTML = result;
                return new Promise((resolve) => {
                    text.innerHTML = "Procesando datos...";
                    setTimeout(() => {
                        resolve("Datos procesados");
                    }, 2000);
                });
            })
            .then((result) => {
                text.innerHTML = result;
                return new Promise((resolve) => {
                    text.innerHTML = "Guardando datos...";
                    setTimeout(() => {
                        resolve("Datos guardados con éxito");
                    }, 1000);
                });
            })
            .then((result) => {
                text.innerHTML = result;
                text.style.color = 'green';
            })
            .catch((error) => {
                text.innerHTML = error;
                text.style.color = 'red';
            });
    });
}

function crearBase() {
    let div = document.querySelector('#container');
    let h3 = document.createElement('h3');
    let button = document.createElement('button');
    let text = document.createElement('p');

    div.appendChild(h3);
    div.appendChild(button);
    div.appendChild(text);
    button.innerHTML = 'Descargar';
    h3.innerHTML = 'archivo1.mp4';
}

/* document.addEventListener("DOMContentLoaded", cargaDOM);

function cargaDOM() {
    crearBase();
    const statusElement = document.getElementById("status");

    function actualizarEstado(mensaje, color = "black") {
        const p = document.createElement("p");
        p.textContent = mensaje;
        p.style.color = color;
        statusElement.appendChild(p);
    }

    function descargarArchivo() {
        return new Promise((resolve) => {
            statusElement.innerHTML = '';
            actualizarEstado("Descargando archivo...");
            setTimeout(() => {
                actualizarEstado("Archivo descargado con éxito.");
                resolve("Datos del archivo");
            }, 3000);
        });
    }

    function procesarDatos() {
        return new Promise((resolve) => {
            statusElement.innerHTML = '';
            actualizarEstado("Procesando datos...");
            setTimeout(() => {
                actualizarEstado("Datos procesados correctamente.");
                resolve(`Datos procesados`);
            }, 2000);
        });
    }

    function guardarDatos() {
        return new Promise((resolve) => {
            statusElement.innerHTML = '';
            actualizarEstado("Guardando datos...");
            setTimeout(() => {
                statusElement.innerHTML = '';
                actualizarEstado("Datos guardados con éxito.", "green");
                resolve("Proceso finalizado");
            }, 1000);
        });
    }

    document.querySelector('button').addEventListener('click', () => {
        statusElement.innerHTML = '';
        descargarArchivo()
            .then(procesarDatos)
            .then(guardarDatos)
            .catch(error => actualizarEstado(error, "red"));
    });
}

function crearBase() {
    let div = document.querySelector('#container');
    let h3 = document.createElement('h3');
    let button = document.createElement('button');
    let statusElement = document.createElement('div');
    statusElement.id = 'status';

    div.appendChild(h3);
    div.appendChild(button);
    div.appendChild(statusElement);
    button.innerHTML = 'Descargar';
    h3.innerHTML = 'archivo1.mp4';
} */

