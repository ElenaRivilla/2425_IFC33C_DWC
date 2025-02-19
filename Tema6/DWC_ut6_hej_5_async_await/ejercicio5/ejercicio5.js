document.addEventListener('DOMContentLoaded', cargaDOM);

function cargaDOM(){
    evento();
}

async function actualizarUsuario(){
    try {
        let correo = document.getElementById('correo').value;
        let nombre = document.getElementById('nombre').value;

        let response = await fetch('https://jsonplaceholder.typicode.com/users/1', {
            method:'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                'username': nombre,
                'email': correo
            })
        })
        if(!response.ok){
            throw new Error(response.status)
        }
        let json = await response.json();
        console.log("Respuesta al servidor realizada con éxito.");
        console.log(json);
    }
    catch(e){
        console.error('Error en el fetch', e);
    }
}

function evento(){
    let form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        actualizarUsuario();
    })
}