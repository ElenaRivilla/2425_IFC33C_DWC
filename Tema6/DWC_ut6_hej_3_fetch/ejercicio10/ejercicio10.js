document.addEventListener('DOMContentLoaded', cargaDOM);

function cargaDOM(){
    fetchAlbum();
}

function fetchAlbum(){
    let fallo = Math.random() < 0.3;

    if(fallo) {
        console.error("Error ficticio en el fetch");
    } else {
        return fetch('https://jsonplaceholder.typicode.com/albums', {
            method:'GET',
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then((response) => {
            if(!response.ok){
                throw new Error('Error en la respuesta del fetch');
            }
            return response.json();
        })
        .then((json) => {
            let ul = document.querySelector('ul');
            let li = document.createElement('li');
            json.forEach((album, index) => {
                if (index < 10) {
                let li = document.createElement('li');
                li.innerHTML = `${index + 1}. ${album.title}`;
                ul.appendChild(li);
                }
            });
        })
        .catch((error) => {
            console.error(error.message);
        });
    }
}