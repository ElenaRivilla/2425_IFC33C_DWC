document.addEventListener('DOMContentLoaded', cargaDOM);

function cargaDOM() {
    Promise.all([fetch1(), fetch2(), fetch3()])
        .then((resultado) => {
            const [posts, users, comments] = resultado;
            console.log(`Total de publicaciones: ${posts.length}`);
            console.log(`Total de usuarios: ${users.length}`);
            console.log(`Total de comentarios: ${comments.length}`);
        })
        .catch((error) => {
            console.error('Error en una de las solicitudes:', error);
        });
}

function fetch1() {
    let fallo = Math.random() < 0.3;

    if (fallo) {
        return Promise.reject('Fallo simulado del fetch 1');
    } else {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Error en la solicitud de posts');
                }
                return response.json();
            });
    }
}

function fetch2() {
    let fallo = Math.random() < 0.3;

    if (fallo) {
        return Promise.reject('Fallo simulado del fetch 2');
    } else {
        return fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Error en la solicitud de usuarios');
                }
                return response.json();
            });
    }
}

function fetch3() {
    let fallo = Math.random() < 0.3;

    if (fallo) {
        return Promise.reject('Fallo simulado del fetch 3');
    } else {
        return fetch('https://jsonplaceholder.typicode.com/comments', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Error en la solicitud de comentarios');
                }
                return response.json();
            });
    }
}
