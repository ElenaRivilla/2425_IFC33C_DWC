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

        //condicional que pushea a la variable resultado las notas coincidentes
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
        
        //condicional que verifica que canción es
        if (
            resultado.length === 2 &&
            resultado[0].nombre === "do" && resultado[0].tipo === "normal" &&
            resultado[1].nombre === "re" && resultado[1].tipo === "normal"
        ) {
            console.log("La canción es la Balanguera o happy birthday");
        } 
        else if (
            resultado.length === 3 &&
            resultado[0].nombre === "do" && resultado[0].tipo === "normal" &&
            resultado[1].nombre === "re" && resultado[1].tipo === "normal" &&
            resultado[2].nombre === "do" && resultado[2].tipo === "normal"
        ) {
            console.log("La canción es Happy Birthday");
        } 
        else if (
            resultado.length === 1 &&
            resultado[0].nombre === "la" && resultado[0].tipo === "sostenido"
        ) {
            console.log("La canción es La Balanguera");
        } 
        else {
            console.log("Sin resultados");
        }
        return resultado;

    } else {
        console.log("No hay coincidencias");
    }
}

// La Balanguera
/* 
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
*/

// Happy Birthday
partituras.push(
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
);

addCerca("do", "normal");
addCerca("re", "normal");
addCerca("do", "normal");
cercador(partituras);