document.addEventListener('DOMContentLoaded', cargaDOM);

function cargaDOM(){
    getUsers();
}

async function getUsers(){
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/users', {
            method:'GET',
            headers: {
                'Content-type': 'application/json'
            }
        });
        if(!response.ok) {
            throw new Error(response.status);
        }
        let users = await response.json();
        let firstUser = users[0];
        
        let response2 = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${firstUser.id}`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        });
        if(!response2.ok) {
            throw new Error(response2.status);
        }
        let posts = await response2.json();
        console.log(`User: ${firstUser.name}`);
        posts.forEach(post => {
            console.log(`Title: ${post.title}`);
        });

    } catch(error){
        console.error(error.message);
    }
}