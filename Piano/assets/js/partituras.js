import { partituras } from './funcionalidadPiano.js';

let encabezados = ["Títol", "Idioma original", "Accions"];

function tablaPartitura() {
    let div = document.getElementById("container");
    let tabla = document.createElement("table");
    let thead = document.createElement("thead");
    let tbody = document.createElement("tbody");
    let tr = document.createElement("tr");

    div.appendChild(tabla);
    tabla.appendChild(thead);
    tabla.appendChild(tbody);
    thead.appendChild(tr);

    for (let i = 0; i < encabezados.length; i++) {
        let th = document.createElement("th");
        th.innerText = encabezados[i];
        tr.appendChild(th);
    }

    for (let j = 0; j < 25; j++) {
        let contador = 1;
        for (let i = 0; i < partituras.length; i++) {
            let tr = document.createElement('tr');
            tbody.appendChild(tr);

            let tdTitulo = document.createElement('td');
            tdTitulo.innerText = partituras[i].nombrePartitura;
            tr.appendChild(tdTitulo);
            tr.id = contador++;

            let tdIdioma = document.createElement('td');
            tdIdioma.innerText = partituras[i].idioma;
            tr.appendChild(tdIdioma);

            let tdAcciones = document.createElement('td');
            let editarBoto = document.createElement('button');
            let editarIcon = document.createElement('img');
            editarIcon.src = './assets/svg/edit.svg';
            editarBoto.appendChild(editarIcon);
            editarBoto.appendChild(document.createTextNode('Editar'));
            tdAcciones.appendChild(editarBoto);

            let esborrarBoto = document.createElement('button');
            let esborrarIcon = document.createElement('img');
            esborrarIcon.src = './assets/svg/delete.svg';
            esborrarBoto.appendChild(esborrarIcon);
            esborrarBoto.appendChild(document.createTextNode('Esborrar'));
            esborrarBoto.onclick = function () {
                let confirmDelete = confirm(`Estàs segur que vols esborrar l'element ${tr.id}?`);
                if (confirmDelete) {
                    alert("Element esborrat!");
                } else {
                    alert("Acció cancel·lada");
                }
            };

            tdAcciones.appendChild(esborrarBoto);
            tr.appendChild(tdAcciones);
        }
    }
}
tablaPartitura();