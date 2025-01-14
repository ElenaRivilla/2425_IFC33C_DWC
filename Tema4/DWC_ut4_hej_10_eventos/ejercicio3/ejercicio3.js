document.addEventListener('DOMContentLoaded', cargaDOM);

function cargaDOM() {
    let listaLi = document.querySelectorAll('li');
    listaLi.forEach((li) => {
        li.addEventListener('click', añadirListener);
    });

    let boton = document.getElementById("boton");
    boton.addEventListener('click', addButton);
}

function addButton(){
    let ul = document.querySelector('ul');
    let nuevaTarea = document.createElement('li');
    nuevaTarea.innerHTML = `Tarea ${ul.children.length + 1}`;
    nuevaTarea.addEventListener('click', añadirListener);
    ul.appendChild(nuevaTarea);
}

function añadirListener(e) {
    if (e.target.tagName === "LI") {
        alert(`Seleccionaste: ${e.target.textContent}`);
    }
}