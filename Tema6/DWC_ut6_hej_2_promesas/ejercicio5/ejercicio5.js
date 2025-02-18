document.addEventListener('DOMContentLoaded', cargaDOM);

function cargaDOM() {
    let fallo = Math.random() < 0.3;

    if (fallo) {
        console.error('error de fetch simulado');
    } else {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                if (!response.ok) {
                    let mensajeError;
                    switch (response.status) {
                        case 404:
                            mensajeError = 'Error 404: Página no encontrada';
                            break;
                        case 500:
                            mensajeError = 'Error 500: Error interno del servidor';
                            break;
                        default:
                            mensajeError = `La respuesta de la red no fue correcta. Código de estado: ${response.status}`;
                    }
                    throw new Error(mensajeError);
                }
                return response.json();
            })
            .then(json => {
                for (let i = 0; i < 5; i++) {
                    console.log(json[i].title);
                }
            })
            .catch(error => {
                console.error('Error de fetch:', error.message);
            });
    }
}
