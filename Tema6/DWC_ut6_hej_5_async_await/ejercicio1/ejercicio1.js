document.addEventListener('DOMContentLoaded', cargaDOM);

function cargaDOM(){
    weitea();
}

async function weitea(){
    try {
        let users = await obtenerUsuarios();
        users.forEach((result) => {
            console.log('Nombre: ', result.name,'\nCorreo: ', result.email);
            console.log('-'.repeat(30));
        });
    } catch (error) {
        console.error("Error: ", error.message);
    }
}

async function obtenerUsuarios(){
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error(response.status);
        }
        let json = await response.json();
        return json;
    } catch (error) {
        console.error("Error: ", error.message);
        throw error;
    }
}