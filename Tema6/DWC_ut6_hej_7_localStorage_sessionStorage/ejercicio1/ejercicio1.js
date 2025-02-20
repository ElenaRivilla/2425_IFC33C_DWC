document.addEventListener('DOMContentLoaded', cargaDOM);

function cargaDOM() {
    nombre();
    mostrarNombre();
    agregarBotonBorrar();
}

function nombre() {
    let form = document.querySelector('form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let nombre = document.getElementById('nombre').value;
        localStorage.setItem('nombre', nombre);
        mostrarNombre();
    });
}

function mostrarNombre() {
    let nombreGuardado = localStorage.getItem('nombre');
    if (nombreGuardado) {
        let h5 = document.createElement('h5');
        h5.id = 'mensajeBienvenida';
        h5.innerHTML = `Bienvenido, ${nombreGuardado}!`;
        document.body.appendChild(h5);
    }
}

function agregarBotonBorrar() {
    let botonBorrar = document.createElement('button');
    botonBorrar.innerHTML = 'Borrar Nombre';
    botonBorrar.addEventListener('click', () => {
        localStorage.removeItem('nombre');
        let mensajeBienvenida = document.getElementById('mensajeBienvenida');
        if (mensajeBienvenida) {
            mensajeBienvenida.remove();
        }
    });
    document.body.appendChild(botonBorrar);
}