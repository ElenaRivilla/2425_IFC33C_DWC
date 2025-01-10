document.addEventListener('DOMContentLoaded', cargaInicial());

function cargaInicial(){
    document.addEventListener('click', () => {
        alert("Hiciste click en un botón");
    })

    document.addEventListener('input', () => {
        alert("Introduciendo texto en una barra de búsqueda")
    })

    document.addEventListener('scroll', () => {
        alert("Scrolleando la página")
    })
}