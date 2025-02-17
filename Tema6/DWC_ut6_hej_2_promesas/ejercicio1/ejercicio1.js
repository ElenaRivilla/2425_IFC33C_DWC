document.addEventListener('DOMContentLoaded', cargaDOM)

function cargaDOM() {
    obtenerUsuarios();
}

function obtenerUsuarios() {
    let usuarios = `[
        { "id": 1, "nombre": "Juan Pérez" },
        { "id": 2, "nombre": "Ana García" },
        { "id": 3, "nombre": "Luis Fernández" }
    ]`;
    let usuariosObj = JSON.parse(usuarios);


    return new Promise((resolve, reject) => {
        console.log('Consulta en proceso...');
        setTimeout(() => {
            if (Math.random() < 0.3) {
                reject("Los usuarios no se han encontrado")
            } else {
                resolve(usuariosObj);
            }
        }, 5000);
    })
        .then((resultado) => {
            console.log("Los usuarios han sido encontrados: ", resultado)
        })
        .catch((error) => {
            console.log(error);
        })
}