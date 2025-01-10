document.addEventListener('DOMContentLoaded', cargaInicial);

function cargaInicial() {
    let boton = document.getElementById('boton');
    boton.addEventListener('click', () => {
        alert('El texto del botón cambiará');
        boton.innerText = '¡Texto cambiado!';
    });
}
