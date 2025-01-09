let numeros = []
let min = 1
let max = 50;

function crearNumeros(length) {
    for (let i = 0; i < length; i++){
        numeros.push( Math.floor(Math.random() * (max - min + 1) + min));
    }
    numeros.sort((a, b) =>  a - b);
}
crearNumeros(10);

function generarLista() {
    let container = document.getElementById("container");
    let ul = document.createElement("ul");
    container.appendChild(ul);

    numeros.forEach((num) => {
        let li = document.createElement("li")
        ul.appendChild(li);
        li.innerText = num;
    });
}

generarLista();

