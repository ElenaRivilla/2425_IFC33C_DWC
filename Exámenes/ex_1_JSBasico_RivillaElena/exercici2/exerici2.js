
const llibres = [
    {
        títol: "El Petit Príncep",
        autor: {
            nombre: "Antoine",
            apellidos: "de Saint-Exupéry"
        },
        preu: 15.50,
        ISBN: "978-3-16-148410-0",
        editorial: "Editorial Juventud",
        numeroDeEdicio: 1,
        anyDePublicacio: 1943,
        generos: ["Infantil", "Filosofia"]
    },
    {
        títol: "1984",
        autor: {
            nombre: "George",
            apellidos: "Orwell"
        },
        preu: 12.30,
        ISBN: "978-0-452-28423-4",
        editorial: "Signet Classics",
        numeroDeEdicio: 1,
        anyDePublicacio: 1949,
        generos: ["Ficció", "Dystopia"]
    },
    {
        títol: "La casa dels esperits",
        autor: {
            nombre: "Isabel",
            apellidos: "Allende"
        },
        preu: 18.00,
        ISBN: "978-84-204-8276-8",
        editorial: "Plaza & Janés",
        numeroDeEdicio: 2,
        anyDePublicacio: 1982,
        generos: ["Ficció", "Realisme Màgic"]
    },
    {
        títol: "Cien años de soledad",
        autor: {
            nombre: "Gabriel",
            apellidos: "García Márquez"
        },
        preu: 20.00,
        ISBN: "978-0-06-088328-7",
        editorial: "Harper & Row",
        numeroDeEdicio: 1,
        anyDePublicacio: 1967,
        generos: ["Ficció", "Realisme Màgic"]
    },
    {
        títol: "Moby Dick",
        autor: {
            nombre: "Herman",
            apellidos: "Melville"
        },
        preu: 14.50,
        ISBN: "978-1-56619-909-4",
        editorial: "Pleiades Press",
        numeroDeEdicio: 1,
        anyDePublicacio: 1851,
        generos: ["Ficció", "Aventura"]
    }
];

function Llibre(titol, autor, preu, ibsn, editorial, numeroDeEdicio, anyDePublicacio, generos){
    this.titol = titol;
    this.autor = autor;
    this.preu = preu;
    this.ibsn = ibsn;
    this.editorial = editorial;
    this.numeroDeEdicio = numeroDeEdicio;
    this.anyDePublicacio = anyDePublicacio;
    this.generos = generos;
}

function Autor(nombre, apellidos){
    this.nombre = nombre;
    this.apellidos = apellidos;
}

llibre1 = new Llibre("El Petit Príncep", new Autor("Antoine", "de Saint-Exupéry"), 15.50, "978-3-16-148410-0", "Editorial Juventud", 1, 1943, ["Infantil", "Filosofia"]);
console.log(llibre1);

llibre2 = new Llibre("1984", new Autor("George", "Orwell"),  12.30, "978-3-16-148410-0", "Signet Classics", 1, 1949,  ["Ficció", "Dystopia"]);
console.log(llibre2);

llibre3 = new Llibre("La casa dels esperits", new Autor("Isabel", "Allende"), 18.00, "978-84-204-8276-8", "Plaza & Janés", 2, 1982, ["Ficció", "Realisme Màgic"]);
console.log(llibre3);

llibre4 = new Llibre("Cien años de soledad", new Autor("Gabriel", "García Márquez"), 20.00, "978-0-06-088328-7", "Harper & Row", 1, 1967, ["Ficció", "Realisme Màgic"]);
console.log(llibre4);

llibre5 = new Llibre("Moby Dick", new Autor("Herman", "Melville"), 14.50, "978-1-56619-909-4", "Pleiades Press", 1, 1851, ["Ficció", "Aventura"]);
console.log(llibre5);