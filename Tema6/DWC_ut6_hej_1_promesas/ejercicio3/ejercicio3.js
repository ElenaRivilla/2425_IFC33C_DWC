document.addEventListener('DOMContentLoaded', cargaDOM);

function cargaDOM() {
    let button = document.querySelector('#startButton');
    let mensaje = document.querySelector('#result');

    button.style.padding = '10px 20px';
    button.style.backgroundColor = '#4CAF50';
    button.style.color = 'white';
    button.style.border = 'none';
    button.style.borderRadius = '5px';
    button.style.cursor = 'pointer';
    button.style.fontSize = '16px';

    mensaje.style.marginTop = '20px';
    mensaje.style.fontSize = '18px';
    mensaje.style.fontWeight = 'bold';

    button.addEventListener('click', () => {
        mensaje.innerHTML = '';
        
        let imagen1 = new Promise((resolve) => {
            setTimeout(() => {
                resolve("Imagen 1");
            }, Math.random() * 1000);
        });

        let imagen2 = new Promise((resolve) => {
            setTimeout(() => {
                resolve("Imagen 2");
            }, Math.random() * 1000);
        });
        
        let imagen3 = new Promise((resolve) => {
            setTimeout(() => {
                resolve("Imagen 3");
            }, Math.random() * 1000);
        });

        Promise.race([imagen1, imagen2, imagen3])
            .then((result) => {
                mensaje.textContent = `La tarea más rápida fue: ${result}`;
                mensaje.style.color = 'black';
            })
            .catch((error) => {
                mensaje.innerHTML = 'Error al cargar las tareas';
                mensaje.style.color = 'red';
            });
    })
}