document.addEventListener('DOMContentLoaded', cargaDOM);

function cargaDOM() {
    obtainComments();
}

async function obtainComments() {
    try {
        let fallo = Math.random() < 0.5;
        if (fallo) {
            console.error('Error ficticio del fetch');
        } else {
            let response = await fetch('https://jsonplaceholder.typicode.com/comments?postId=1', {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error('Error en la respuesta', response.status);
            }
            let json = await response.json();
            json.forEach(result => {
                console.log('Nombre autor: ', result.name, '\n\nContenido comentario: ', result.body);
                console.log('-'.repeat(50));
            });
        }
    } catch (e) {
        console.error(e);
    }
}