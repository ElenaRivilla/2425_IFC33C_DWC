document.addEventListener('DOMContentLoaded', cargaDOM);

function cargaDOM() {
    fetchUpdate();
}

function fetchUpdate() {
    let form = document.querySelector('form');
    let fallo = Math.random() < 0.3;
    
    form.addEventListener('submit', (event) => {
        let nombre = document.getElementById('nombre').value;
        let correo = document.getElementById('correo').value;
        event.preventDefault();
        if (fallo) {
            console.error("Fallo simulado del fetch");
        } else {
            return fetch('https://jsonplaceholder.typicode.com/users/1', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'name': nombre,
                    'email': correo
                })
            })
            .then((response) => {
                if(!response.ok){
                    throw new Error;
                }
                return response.json()
            })
            .then((json) => {
                console.log(json);
            })
            .catch((error) => {
                console.error("Failed to fetch: ", error);
            });
        }
    });
}