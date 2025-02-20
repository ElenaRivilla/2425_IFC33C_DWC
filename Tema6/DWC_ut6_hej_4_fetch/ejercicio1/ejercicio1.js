document.addEventListener('DOMContentLoaded', cargaDOM);

function cargaDOM() {
    getPosts();
}

function getPosts() {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
    })
        .then((response) => {
            if (!response.ok) {
                let eMessage;
                switch (response.status) {
                    case 404:
                        eMessage = "Page not found";
                        break;
                    case 500:
                        eMessage = "Internal server error";
                        break;
                    default:
                        eMessage = `Error en la respuesta ${response.status}`;
                }
                throw new Error(eMessage);
            }
            return response.json();
        })
        .then((json) => {
            let table = document.querySelector('table');
            let trHeader = document.createElement('tr');
            table.appendChild(trHeader);
            let columnas = ["ID", "Título", "Contenido"];
            
            for (let co of columnas) {
                let th = document.createElement('th');
                trHeader.appendChild(th);
                th.innerHTML = co;
            }
            
            json.slice(0, 10).forEach(result => {
                let tr = document.createElement('tr');
                table.appendChild(tr);
                
                let tdID = document.createElement('td');
                tdID.innerHTML = result.id;
                tr.appendChild(tdID);
                
                let tdTitle = document.createElement('td');
                tdTitle.innerHTML = result.title;
                tr.appendChild(tdTitle);
                
                let tdBody = document.createElement('td');
                tdBody.innerHTML = result.body;
                tr.appendChild(tdBody);
            });
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}