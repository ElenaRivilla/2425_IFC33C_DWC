document.addEventListener('DOMContentLoaded', cargaDOM);

function cargaDOM(){
    return new Promise((resolve, reject) => {
        console.log("Cargando...")
        if(Math.random() < 0.3){
            resolve(peticion());
        } else {
            reject("Ha habido un fallo")
        }
    })
    .then((resultado) => {
        console.log(resultado);
    })
    .catch((error) => {
        console.error(error)
    })

}

function peticion(){
    return fetch('https://jsonplaceholder.typicode.com/photos', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then((response) => {
        if(!response.ok) {
            throw new Error;
        }
        return response.json();
    })
    .then((json) => {
        let titles = [] //necesitas devolver un resultado para manejarlo en la promesa
        for(let i = 0; i < 10; i++) {
            titles.push(json[i].title)
        }
        return titles;
    })
    .catch((error) => {
        console.error("Error en el fetch", error)
    })
}