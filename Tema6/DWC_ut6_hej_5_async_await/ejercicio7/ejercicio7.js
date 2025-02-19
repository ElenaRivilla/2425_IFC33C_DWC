document.addEventListener('DOMContentLoaded', cargaDOM);

function cargaDOM(){
    errorFetch();
}

async function errorFetch(){
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/invalid-url', {
            method:'GET',
            headers: {
                'Content-type': 'application/json'
            }
        })
        if(!response.ok) {
            let mensajeError;
            switch(response.status){
                case 404:
                    mensajeError = 'Página no encontrada';
                    break
                case 500:
                    mensajeError = 'Error interno en el servidor';
                    break;
                default:
                    mensajeError = `Error en la respuesta, ${response.status}`;
            }
            throw new Error(mensajeError);
        }

    } catch(e){
        console.error('Error en el fetch', e.message);
    }
}