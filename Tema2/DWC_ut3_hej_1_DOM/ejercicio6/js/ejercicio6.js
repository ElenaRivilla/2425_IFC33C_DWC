const alumnos = [
    {
        nombre: "Helen",
        edad: "25",
        email: "helen@gmail.com"
    },
    {
        nombre: "Ivi",
        edad: "26",
        email: "ivi@gmail.com"
    }
];

/* for (let alumno of alumnos){
    for (let valor of Object.values(alumno)){
        console.log(valor);
    }
}
console.log(Object.values(alumnos)) */
// Object.values(alumno)
// Object.keys(alumno)

let body = document.querySelector('body');
let table = document.createElement('table');
let tr;
let td;
let th;

body.appendChild(table);

for(let i = 0; i < alumnos.length; i++){
    tr = document.createElement('tr');
    table.appendChild(tr);

    

    for (let j = 0; j < Object.values(alumnos[i]).length; j++){
        td = document.createElement('td');
        tr.appendChild(td);
        td.innerHTML = Object.values(alumnos[i])[j];
    }
}

/* for(let i = 0; i < Object.keys(alumnos).length; i++){
    th = document.createElement('th');
    tr.appendChild(th);
} */