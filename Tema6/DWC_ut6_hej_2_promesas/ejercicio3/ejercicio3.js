document.addEventListener('DOMContentLoaded', cargaDOM);

function cargaDOM() {
    Promise.all([enviarMensaje("Elena"), enviarMensaje("Ivan"), enviarMensaje("Facundo")])
        .then((resultados) => {
            console.log(resultados);
        })
        .catch((error) => {
            console.log(error);
        });
}

function enviarMensaje(usuario) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.5) {
                resolve(`Mensaje enviado a ${usuario}`);
            } else {
                reject(`Error al enviar mensaje a ${usuario}`)
            }
        }, 2000);
    })
}