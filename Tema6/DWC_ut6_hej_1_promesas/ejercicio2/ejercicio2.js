document.addEventListener('DOMContentLoaded', cargaDOM);

function cargaDOM() {
    let input = document.querySelector('input');
    let mensaje = document.getElementById('mensaje');

    document.querySelector('button').addEventListener('click', () => {
        mensaje.innerHTML = '';
        new Promise((resolve, reject) => {
            let valor = Number(input.value);

            switch (true) {
                case !Number.isInteger(valor):
                    reject("Introduce campos numéricos");
                    break;
                case !input.value.trim():
                    reject("El campo no puede estar vacío");
                    break;
                case valor < 0:
                    reject("Debes introducir un número positivo");
                    break;
                default:
                    setTimeout(() => {
                        resolve("El tiempo ha terminado");
                    }, valor * 1000);
            }
        })
            .then((resultado) => {
                mensaje.innerHTML = resultado;
                mensaje.style.color = 'black';
            })
            .catch((error) => {
                mensaje.innerHTML = error;
                mensaje.style.color = 'red';
            })
    })
}