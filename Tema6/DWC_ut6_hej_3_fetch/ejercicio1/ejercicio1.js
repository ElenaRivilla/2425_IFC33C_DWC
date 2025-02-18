document.addEventListener('DOMContentLoaded', cargaDOM);

function cargaDOM(){
    let fallo = Math.random() < 0.3;

    if(fallo){
        console.error("Fallo ficticio en el fetch");
    } else {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            if(!response.ok){
                throw new Error;
            }
            return response.json();
        })
        .then((json) => {
            for(let i = 0; i < json.length; i++){
                console.log("Name: ", json[i].name,"\nEmail: ", json[i].email);
            }
        })
        .catch((error) => {
            console.error("Error en el fetch", error.message);
        });
    }
}