document.addEventListener('DOMContentLoaded', cargaDOM);

function cargaDOM() {
    fetchDelete();
}

function fetchDelete() {
    let form = document.querySelector('form');
    
    form.addEventListener('submit', (event) => {
        let fallo = Math.random() < 0.3;
        event.preventDefault()
        let id = document.getElementById('id').value;

        if (fallo) {
            console.error("Error ficticio en el fetch");
        } else {
            return fetch('https://jsonplaceholder.typicode.com/posts/1', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'id': id
                })
            })
            .then((response) => {
                if (!response.ok) {
                    throw new Error;
                }
                console.log('Publicación eliminada con éxito.');
            })
            .catch((error) => {
                console.log(error);
            })
        }
    });
}