document.addEventListener('DOMContentLoaded', cargaDOM);

function cargaDOM(){
    esperaDatos();
}
async function esperaDatos() {
    try {
        let urls = ["https://jsonplaceholder.typicode.com/posts",
            "https://jsonplaceholder.typicode.com/users",
            "https://jsonplaceholder.typicode.com/comments"]

        let promesas = []
        for (let url of urls) {
            promesas.push(fetch(url))
        }
        const responses = await Promise.all(promesas);
        let respuestaPost = await responses[0].json()
        let respuestaUsers = await responses[1].json()
        let respuestaComent = await responses[2].json() 

        console.log('Total de publicaciones:', respuestaPost.length);
        console.log('Total de usuarios:', respuestaUsers.length);
        console.log('Total de comentarios:', respuestaComent.length);
    } catch (error) {
        console.log("Error", error)
    }
}

/* function cargaDOM() {
    Promise.all([obtenerDatos()])
        .then(results => {
            let totalPosts = results[0][0].length;
            let totalUsers = results[0][1].length;
            let totalComments = results[0][2].length;
            console.log(`Total Posts: ${totalPosts}, \nTotal Users: ${totalUsers}, \nTotal Comments: ${totalComments}`);
        })
}

async function obtenerDatos() {
    try {
        let urls = ['https://jsonplaceholder.typicode.com/posts', 'https://jsonplaceholder.typicode.com/users', 'https://jsonplaceholder.typicode.com/comments'];
        let results = [];
        for (let url of urls) {
            let response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            if (!response.ok) {
                throw new Error(response.status);
            }
            let json = await response.json();
            results.push(json);
        }
        return results;
    } catch (error) {
        console.error("Error en el fetch");
    }
} */