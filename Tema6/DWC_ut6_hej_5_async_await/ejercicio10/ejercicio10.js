document.addEventListener('DOMContentLoaded',cargaDOM);

function cargaDOM() {
    getImages();
}

async function getImages() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/photos', {
          method:'GET',
          headers: {
            'Content-type':'application/json'
          }  
        })
        if(!response.ok){
            throw new Error('Error en la respuesta ', response.status);
        }
        let json = await response.json();
        console.log('Cargando imágenes...');

        for (let result of json) {
            await new Promise(resolve => setTimeout(resolve, 1000));
            console.log(result.title);
            console.log('-'.repeat(40));
        }

    } catch(e) {
        console.error(e);
    }
}