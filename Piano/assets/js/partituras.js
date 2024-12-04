import {partituras} from './funcionalidadPiano.js';

let encabezados = ["Títol", "Idioma original", "Accions"];

function tablaPartitura(){
    let div = document.getElementById("container");
    let tabla = document.createElement("table");
    let thead = document.createElement("thead");
    let tbody = document.createElement("tbody");
    let tr = document.createElement("tr");

    div.appendChild(tabla);
    tabla.appendChild(thead);
    tabla.appendChild(tbody);
    thead.appendChild(tr);

    for (let i = 0; i < encabezados.length; i++){
        let th = document.createElement("th");
        th.innerHTML = encabezados[i];
        tr.appendChild(th);
    }

    for (let j = 0; j < 25; j++){
        for (let i = 0; i < partituras.length; i++){
            let tr = document.createElement('tr');
            tbody.appendChild(tr);
            
            let tdTitulo = document.createElement('td');
            tdTitulo.innerHTML = partituras[i].nombrePartitura;
            tr.appendChild(tdTitulo);
    
            let tdIdioma = document.createElement('td');
            tdIdioma.innerHTML = partituras[i].idioma;
            tr.appendChild(tdIdioma);
            
            let tdAcciones = document.createElement('td');
            tdAcciones.innerHTML = '<img src="./assets/svg/edit.svg"><button>Editar</button><img src="./assets/svg/delete.svg"><button>Esborrar</button>';
            tr.appendChild(tdAcciones);
        }
    }
}



tablaPartitura();