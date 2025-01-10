document.addEventListener('DOMContentLoaded', cargaInicial);

function cargaInicial() {
    document.addEventListener('click', (event) => {
        console.log(`Tipo de evento: ${event.type}`);
    });

    document.addEventListener('focus', (event) => {
        console.log(`Tipo de evento: ${event.type}`);
    }, true); // El tercer parámetro true es para capturar el evento en la fase de captura

    document.addEventListener('keydown', (event) => {
        console.log(`Tipo de evento: ${event.type}`);
    });
}

/*
click:
Este evento se dispara cuando un usuario hace clic en un elemento con el botón principal del ratón (generalmente el botón izquierdo).

focus:
Este evento se dispara cuando un elemento recibe el foco. Los elementos que pueden recibir el foco incluyen inputs, botones, enlaces y cualquier elemento con el atributo tabindex.

keypress:
Este evento se dispara cuando el usuario presiona una tecla en el teclado.
*/