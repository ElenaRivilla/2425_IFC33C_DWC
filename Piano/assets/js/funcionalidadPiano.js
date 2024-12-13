let cerca = [];
export let partituras = [];

function Nota(nombre, tipo) {
    this.nombre = nombre;
    this.tipo = tipo;
}

function Partitura(nombrePartitura, notas, idioma) {
    this.nombrePartitura = nombrePartitura;
    this.notas = notas;
    this.idioma = idioma;
}

function addCerca(nombre, tipo) {
    cerca.push(new Nota(nombre, tipo));
}

function cercador(partituras) {
    let coincidencias = false;
    let resultado = [];

    for (let partitura of partituras) {
        for (let i = 0; i <= partitura.notas.length - cerca.length; i++) { // asegura que siempre tengas suficientes notas en partituras para hacer una comparación completa con cerca sin que se desborde el array
            let secuenciaCoincide = true;

            for (let j = 0; j < cerca.length; j++) {
                if (partitura.notas[i + j].nombre !== cerca[j].nombre || partitura.notas[i + j].tipo !== cerca[j].tipo) {
                    secuenciaCoincide = false;
                    break;
                }
            }
             //condicional que pushea a la variable resultado las notas coincidentes
            if (secuenciaCoincide) {
                coincidencias = true;

                // Verificar si ya está en resultado
                if (!resultado.includes(partitura)) {
                    resultado.push(partitura); // Añade la partitura completa al resultado
                }
                break; 
            }
        }
    }

    if (coincidencias) {
        console.log("Partituras con coincidencias:");
        for (let i = 0; i < resultado.length; i++) {
            console.log(resultado[i].nombrePartitura);
            console.log(resultado[i].notas);
        }
    } else {
        console.log("No hay coincidencias");
    }
}

// La Balanguera
partituras.push(
    new Partitura("La Balanguera", [
        new Nota("do", "normal"),
        new Nota("re", "normal"),
        new Nota("mi", "normal"),
        new Nota("fa", "normal"),
        new Nota("fa", "normal"),
        new Nota("sol", "normal"),
        new Nota("sol", "normal"),
        new Nota("la", "sostenido"),
        new Nota("la", "sostenido"),
    ], "ca"));

// Happy Birthday
partituras.push(
    new Partitura("Happy Birthday", [
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
    ], "en"));

partituras.push(
    new Partitura("Frère Jacques", [
        new Nota("do", "normal"),
        new Nota("re", "normal"),
        new Nota("mi", "normal"),
        new Nota("do", "normal"),
        new Nota("do", "normal"),
        new Nota("re", "normal"),
        new Nota("mi", "normal"),
        new Nota("do", "normal"),
        new Nota("mi", "normal"),
        new Nota("fa", "normal"),
        new Nota("sol", "normal"),
        new Nota("mi", "normal"),
        new Nota("fa", "normal"),
        new Nota("sol", "normal"),
        new Nota("sol", "normal"),
        new Nota("la", "normal"),
        new Nota("sol", "normal"),
        new Nota("fa", "normal"),
        new Nota("mi", "normal"),
        new Nota("do", "normal"),
        new Nota("sol", "normal"),
        new Nota("la", "normal"),
        new Nota("sol", "normal"),
        new Nota("fa", "normal"),
        new Nota("mi", "normal"),
        new Nota("do", "normal"),
    ], "fr")
);    

partituras.push(
    new Partitura("We Wish You a Merry Christmas", [
        new Nota("sol", "normal"),
        new Nota("la", "normal"),
        new Nota("sol", "normal"),
        new Nota("mi", "normal"),
        new Nota("sol", "normal"),
        new Nota("fa", "normal"),
        new Nota("re", "normal"),
        new Nota("re", "normal"),
        new Nota("mi", "normal"),
        new Nota("fa", "normal"),
        new Nota("re", "normal"),
        new Nota("sol", "normal"),
        new Nota("sol", "normal"),
        new Nota("mi", "normal"),
        new Nota("fa", "normal"),
        new Nota("re", "normal"),
        new Nota("do", "normal"),
    ], "en")
);

addCerca("do", "normal");
addCerca("re", "normal");

cercador(partituras)