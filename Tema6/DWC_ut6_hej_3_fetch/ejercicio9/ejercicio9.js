document.addEventListener('DOMContentLoaded', cargaDOM);

function cargaDOM(){
    fetchURL();
}

function fetchURL(){
    let fallo = Math.random() < 0.3;

    if(fallo){
        console.error("Fallo ficticio de fetch");
    } else {
        return fetch('https://jsonplaceholder.typicode.com/comments?postId=1', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((response) => {
            if(!response.ok) {
                throw new Error("Error en la solicitud fetch");
            }
            return response.json();
        })
        .then((json) => {
            for(let i = 0; i < json.length; i++){
                console.log("Nombre de autor:", json[i].name, "\nComentario: ", json[i].body);
            }
        })
        .catch((error) => {
            console.error("Error:", error.message);
        });
    }
}