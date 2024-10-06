let cerca = [];
let partituras = [];

function Nota(nombre, tipo) {
    this.nombre = nombre;
    this.tipo = tipo;
}

function addCerca(nombre, tipo) {
    cerca.push(new Nota(nombre, tipo));
}

function cercador(partituras) {
    let coincidencias = false;
    let resultado = [];

    console.log("Partitura:", partituras);

    for (let i = 0; i <= partituras.length - cerca.length; i++) {
        let secuenciaCoincide = true;

        for (let j = 0; j < cerca.length; j++) {
            if (partituras[i + j].nombre !== cerca[j].nombre || partituras[i + j].tipo !== cerca[j].tipo) {
                secuenciaCoincide = false;
                break;
            }
        }

        if (secuenciaCoincide) {
            coincidencias = true;
            for (let k = 0; k < cerca.length; k++) {
                resultado.push(partituras[i + k]); 
            }
            break;
        }
    }

    if (coincidencias) {
        console.log("Hay coincidencias, te muestro la secuencia que coincide:");
        console.log(resultado);

    } else {
        console.log("No hay coincidencias");
    }
}

// La Balanguera
partituras.push(
    new Nota("do", "normal"),
    new Nota("re", "normal"),
    new Nota("mi", "normal"),
    new Nota("fa", "normal"),
    new Nota("fa", "normal"),
    new Nota("sol", "normal"),
    new Nota("sol", "normal"),
    new Nota("la", "sostenido"),
    new Nota("la", "sostenido")
);

// Happy Birthday
/* partituras.push(
    new Nota("do", "normal"),
    new Nota("do", "normal"),
    new Nota("re", "normal"),
    new Nota("do", "normal"),
    new Nota("fa", "normal"),
    new Nota("mi", "normal"),
    new Nota("do", "normal"),
    new Nota("do", "normal"),
    new Nota("re", "normal"),
    new Nota("do", "normal"),
    new Nota("sol", "normal"),
    new Nota("fa", "normal"),
); */

addCerca("do", "normal");
addCerca("re", "normal");

cercador(partituras);
