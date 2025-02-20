document.addEventListener('DOMContentLoaded', cargaDOM);

function cargaDOM() {
    evento();
}

async function setData() {
    try {
        let titulo = document.getElementById('titulo').value;
        let cuerpo = document.getElementById('cuerpo').value;
        let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                'userId': 1,
                'title': titulo,
                'body': cuerpo
            })
        })
        if (!response.ok) {
            let eMessage;
            switch (response.status) {
                case 404:
                    eMessage = "La página no fue encontrada";
                    break;
                case 500:
                    eMessage = "Error interno del servidor";
                    break;
                default:
                    eMessage = "Error en la respuesta";
            }
            throw new Error(eMessage);
        }
        let json = await response.json();
        console.log(`La publicación ha sido creada con éxito. ${json.id}`);
        console.log(json)
    } catch (e) {
        console.error(e);
    }
}

function evento() {
    let form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        setData();
    })
}