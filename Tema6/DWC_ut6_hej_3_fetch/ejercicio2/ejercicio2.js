document.addEventListener('DOMContentLoaded', cargaDOM);

function cargaDOM() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        let title = document.getElementById('titulo').value;
        let body = document.getElementById('cuerpo').value;
        let fallo = Math.random() < 0.3;
        
        if (fallo) {
            console.error("Fallo ficticio del fetch");
        } else {
            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'title': title,
                    'body': body
                })
            })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.error("Error en el fetch", error.message);
            });
        }
    });
}