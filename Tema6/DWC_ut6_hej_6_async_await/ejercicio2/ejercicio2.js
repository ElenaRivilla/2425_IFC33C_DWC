document.addEventListener('DOMContentLoaded', cargaDOM);

function cargaDOM() {
    fetchConReintento();
}

async function fetchConReintento() {
    const maxRetries = 3;
    let attempt = 0;
    let success = false;
    while (attempt < maxRetries && !success) {
        let fail = Math.random() < 0.3;

        if (fail) {
            console.error("error ficticio del fetch");
            attempt += 1;
            if (attempt < maxRetries) {
                console.log('Reintentando...');
            } else {
                console.error('Se alcanzó el número máximo de reintentos.');
            }
            continue;
        } else {
            try {
                let response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
                    method: 'GET',
                    headers: {
                        'Content-type': 'application/json'
                    }
                });

                if (!response.ok) {
                    let eMessage;
                    switch (response.status) {
                        case 404:
                            eMessage = "Página no encontrada.";
                            break;
                        case 500:
                            eMessage = "Error interno del servidor";
                            break;
                        default:
                            eMessage = `Error con la petición ${response.status}`;
                    }
                    throw new Error(eMessage);
                }
                let json = await response.json();
                console.log(json);
                success = true;
            } catch (e) {
                console.error(`Intento ${attempt + 1} fallido: ${e.message}`);
            }
        }
    }
}