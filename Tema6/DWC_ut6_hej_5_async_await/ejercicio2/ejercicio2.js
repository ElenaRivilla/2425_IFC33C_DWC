document.addEventListener('DOMContentLoaded', cargaDOM);

function cargaDOM() {
    base();
    evento();
}

async function publicarPost() {
    try {
        let titulo = document.getElementById('titulo').value;
        let cuerpo = document.getElementById('cuerpo').value;
        let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                'title': titulo,
                'body': cuerpo
            })
        });
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        console.log("Éxito en la petición");
        let json = await response.json();
        console.log(json);
        return json;
    } catch (error) {
        console.error('Error en el fetch:', error);
    }
}

function evento() {
    let form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        publicarPost();
    });
}

function base() {
    let container = document.querySelector('#container');
    let form = document.createElement('form');

    let labelTitulo = document.createElement('label');
    labelTitulo.setAttribute('for', 'titulo');
    labelTitulo.textContent = 'Título:';

    let inputTitulo = document.createElement('input');
    inputTitulo.setAttribute('id', 'titulo');
    inputTitulo.setAttribute('name', 'titulo');
    inputTitulo.setAttribute('type', 'text');

    let labelCuerpo = document.createElement('label');
    labelCuerpo.setAttribute('for', 'cuerpo');
    labelCuerpo.textContent = 'Cuerpo:';

    let inputCuerpo = document.createElement('input');
    inputCuerpo.setAttribute('id', 'cuerpo');
    inputCuerpo.setAttribute('name', 'cuerpo');
    inputCuerpo.setAttribute('type', 'text');

    let boton = document.createElement('button');
    boton.textContent = 'Enviar';

    container.appendChild(form);
    form.appendChild(labelTitulo);
    form.appendChild(inputTitulo);
    form.appendChild(labelCuerpo);
    form.appendChild(inputCuerpo);
    form.appendChild(boton);
}