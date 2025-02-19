document.addEventListener('DOMContentLoaded', cargaDOM);

function cargaDOM() {
    evento();
}

async function eliminarPost() {
    try {
        let fallo = Math.random() < 0.5;

        if(fallo) {
            console.log("Fallo simulado en el fetch")
        } else {
            let postId = document.querySelector('input').value;
            let response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    'id': postId
                })
            })
            if (!response.ok) {
                throw new Error(response.status);
            }
            let json = response.json();
            console.log(`El post ${postId} se ha eliminado correctamente.`)
        }
    } catch (e) {
        console.error('Error en el fetch', e);
    }
}

function evento(){
    let form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        eliminarPost();
    })
}