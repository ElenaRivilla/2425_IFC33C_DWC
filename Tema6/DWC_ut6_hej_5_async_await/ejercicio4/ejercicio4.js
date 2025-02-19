document.addEventListener('DOMContentLoaded', cargaDOM);

function cargaDOM() {
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
}