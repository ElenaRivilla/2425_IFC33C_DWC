document.addEventListener('DOMContentLoaded', cargaDOM);

function cargaDOM(){
    let enlace = document.querySelector("a");
    enlace.addEventListener('click', clicarEnlace);

    let div = document.getElementById('div');
    div.addEventListener('click', clicarDiv);
}

function clicarEnlace(e){
    alert("Clickar en el enlace");
    e.preventDefault();
    e.stopPropagation();
}

function clicarDiv(e){
    alert("Click en el div");

}