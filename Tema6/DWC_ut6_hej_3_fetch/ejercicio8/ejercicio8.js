document.addEventListener('DOMContentLoaded', cargaDOM);

function cargaDOM() {
    failedFetch();
}

function failedFetch() {
    return fetch('https://jsonplaceholder.typicode.com/invalid-url', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
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
    })
    .catch((error) => {
        console.log("Error en el fetch: ", error.message);
    });
}