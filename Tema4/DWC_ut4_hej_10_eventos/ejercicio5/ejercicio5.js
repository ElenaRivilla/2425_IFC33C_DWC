document.addEventListener('DOMContentLoaded', cargaDOM);

function cargaDOM(){
    let div = document.getElementById("contenedor");
    let section = document.getElementById("seccion");
    let button = document.getElementById("boton");

    div.addEventListener('click', (e) => {
        console.log(e.target.tagName, "captura"), true
    });

    section.addEventListener('click', (e) => {
        console.log(e.target.tagName,"burbuja"), false
    });

    button.addEventListener('click', (e) => {
        console.log(e.target.tagName, " burbuja")
        e.stopPropagation();
    });
}