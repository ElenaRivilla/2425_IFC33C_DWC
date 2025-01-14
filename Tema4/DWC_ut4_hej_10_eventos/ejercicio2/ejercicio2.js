document.addEventListener('DOMContentLoaded', cargaDOM);

function cargaDOM(){
    let form = document.querySelector('form');
    let boton = document.querySelector('button');

    form.addEventListener('submit', (e) => {
        alert("Formulario enviado")
        console.log(e)
    });
    boton.addEventListener('click', (e) => {
        alert("Botón clicado")
        e.stopPropagation();
        e.preventDefault() //evita que se ejecute el comportamiento por defecto
    });
}