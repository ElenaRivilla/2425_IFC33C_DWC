document.addEventListener("DOMContentLoaded", cargaInicial);

function cargaInicial(){
    let listaLi = document.querySelectorAll("li");
    for(let li of listaLi){
        li.addEventListener("click", mostrarTexto);
    }
}

function mostrarTexto(){
    alert(`Has hecho click en : ${this.innerText}`);
}