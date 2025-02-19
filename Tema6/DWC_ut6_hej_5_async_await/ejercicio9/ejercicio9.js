document.addEventListener('DOMContentLoaded', cargaDOM);

function cargaDOM() {
    getAlbums();
}

async function getAlbums() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/albums', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        })
        if (!response.ok) {
            throw new Error('Error en la respuesta', response.status)
        }
        let json = await response.json();

        json.slice(0, 10).forEach((result, index) => {
            let ul = document.querySelector('ul');
            let li = document.createElement('li');
            ul.appendChild(li)
            li.innerHTML = `${index + 1}. ${result.title}`
        })
    } catch (e) {
        console.error(e);
    }
}