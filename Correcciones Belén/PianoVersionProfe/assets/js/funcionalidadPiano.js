let cerca = [];

function Nota(nota, tipus) {
    this.nota = nota;
    this.tipus = tipus;
}

function addCerca(nota, tipus, cerca) {
    cerca.push(new Nota(nota, tipus));
}

function Partitura(nombre, melodia) {
    this.nombre = nombre;
    this.melodia = melodia;
}

function cercador(partituras, cerca) {
    let resultat = [];

    for (let i = 0; i <= partituras.length; i++) {
        for (let j = 0; j <= (partituras.melodia.length - cerca.length); j++) {
            let trobat = 1;

            for (let k = 0; k < cerca.length; k++) {
                if (partituras[i + j + k].melodia.nota !== cerca[k].nota || partituras[i + j + k].melodia.tipus !== cerca[k].tipus) {
                    break;
                }
            }
            if (trobat) {
                resultat.push(partituras[i]);
            }
        }
    }
}


let melodiaBalanguera =
    [new Nota("do", ""),
    new Nota("re", ""),
    new Nota("mi", ""),
    new Nota("fa", ""),
    new Nota("fa", ""),
    new Nota("sol", ""),
    new Nota("sol", ""),
    new Nota("la", "#"),
    new Nota("la", "#")
    ];

let melodiaHappyBirthday =
    [
        new Nota("do", ""),
        new Nota("do", ""),
        new Nota("re", ""),
        new Nota("do", ""),
        new Nota("fa", ""),
        new Nota("mi", ""),
        new Nota("do", ""),
        new Nota("do", ""),
        new Nota("re", ""),
        new Nota("do", ""),
        new Nota("sol", ""),
        new Nota("fa", ""),
    ];

let partituraLaBalangera = new Partitura("La Balanguera", melodiaBalanguera);
let partituraHappyBirthday = new Partitura("Happy Birthday", melodiaHappyBirthday);

let partituras = [partituraLaBalangera, partituraHappyBirthday];

console.log(partituras);

addCerca("do", "", cerca);
addCerca("do", "", cerca);
addCerca("re", "", cerca);


console.log(cerca);
console.log(cercador(partituras, cerca)); 