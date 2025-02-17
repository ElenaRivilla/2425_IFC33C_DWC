document.addEventListener('DOMContentLoaded', cargaDOM);

function cargaDOM() {
    let boton = document.querySelector('#button');
    let input = document.querySelector('#username');
    let p = document.querySelector('#error');
    let usuarios = ['Alice', 'Bob', 'Charlie'];

    document.querySelector('#searchForm').addEventListener('submit', (event) => {
        event.preventDefault(); // Evita el recargo de la página
        p.innerHTML = "Buscando...";
        p.style.color = 'black';

        new Promise((resolve, reject) => {
            setTimeout(() => {
                if (!input.value.trim()) {
                    reject('Error: El nombre no puede estar vacío.');

                } else if (usuarios.includes(input.value)) {
                    resolve('El usuario existe');

                } else {
                    reject('Usuario no encontrado.');
                }
            }, 2000);
        })
        .then(resultado => {
            p.innerHTML = resultado;
            p.style.color = 'green';
        })
        .catch(error => {
            p.innerHTML = error;
            p.style.color = 'red';
        })
        .finally(() => {
            console.log("Proceso terminado.");
        });
    });
}
