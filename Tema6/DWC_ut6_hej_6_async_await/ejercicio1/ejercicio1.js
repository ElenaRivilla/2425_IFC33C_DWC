document.addEventListener('DOMContentLoaded', cargaDOM);

function cargaDOM() {
    cargarDatos();
}

async function cargarDatos() {
    try {
        let urls = ['https://jsonplaceholder.typicode.com/users', 'https://jsonplaceholder.typicode.com/posts'];
        let promesas = [];

        for (let url of urls) {
            promesas.push(fetch(url));
        }

        let responses = await Promise.all(promesas);
        let respuestaUsuario = await responses[0].json();
        let ususario = respuestaUsuario.slice(0, 1);
        let publicaciones = await responses[1].json();

        console.log(ususario);
        publicaciones.forEach(publicacion => {
            if (publicacion.userId == 1) {
                console.log(publicacion.title);
            }
        });
    } catch (e) {
        console.log(e);
    }
}