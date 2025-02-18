document.addEventListener('DOMContentLoaded', cargaDOM);

function cargaDOM() {
    let fallo = Math.random() < 0.3;

    if (fallo) {
        console.error("Fallo ficticio en el fetch");
    } else {
        fetch('https://jsonplaceholder.typicode.com/todos', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error;
            }
            return response.json();
        })
        .then((json) => {
            for (let i = 0; i < json.length; i++) {
                if (json[i].completed) {
                    console.log(json[i]);
                }
            }
        })
        .catch((error) => {
            console.error(error);
        });
    }
}