let cerca = [];

function Nota(nota, tipus){
    this.nota = nota;
    this.tipus = tipus;
}

function addCerca(nota, tipus, cerca){
    cerca.push(new Nota(nota, tipus));
}

addCerca("do", "", cerca);
addCerca("re", "", cerca);
addCerca("mi", "", cerca);
addCerca("fa", "#", cerca);
console.log(cerca);

function Partitura(nombre, melodia){
    this.nombre = nombre;
    this.melodia = melodia;
}

melodiaBalanguera = 
[   new Nota("do", "normal"),
    new Nota("re", "normal"),
    new Nota("mi", "normal"),
    new Nota("fa", "normal"),
    new Nota("fa", "normal"),
    new Nota("sol", "normal"),
    new Nota("sol", "normal"),
    new Nota("la", "sostenido"),
    new Nota("la", "sostenido")
];

melodiaHappyBirthday = 
[
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
]