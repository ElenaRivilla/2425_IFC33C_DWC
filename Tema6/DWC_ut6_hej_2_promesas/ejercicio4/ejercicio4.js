document.addEventListener('DOMContentLoaded', cargaDOM);

function cargaDOM() {
    console.log("Cargando...");
    Promise.race([cargarImagen("foto1.jpg"), cargarImagen("foto2.jpg"), cargarImagen("foto3.jpg")])
        .then((resultado) => {
            console.log(resultado);
        })
        .catch((error) => {
            console.log(error)
        })
}

function cargarImagen(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.9) {
                resolve(`La primera imagen cargada fue ${nombre}`);
            } else {
                reject("Error al cargar la imagen")
            }
        }, random() * 1000);
    })
}

function random() {
    let min = 1;
    let max = 5;
    return Math.floor(Math.random() * (max - min + 1) + min);
}