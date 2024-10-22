function Marca(nombre){
    this.nombre = nombre;
}

function Modelo(marca, modelo){
    this.marca = marca;
    this.modelo = modelo;
}
var ford = new Marca("Ford");
var citroen = new Marca("Citroen");
var seat = new Marca("Seat");

var focus = new Modelo(ford, "Focus");
var fiesta = new Modelo(ford, "Fiesta");
var saxo = new Modelo(citroen, "Saxo");
var c4 = new Modelo(citroen, "C4");

var coches = [focus, fiesta, saxo, c4];

console.log(ford);  
console.log(coches);

var div = document.getElementById("app");

//crear tabla
var table = document.createElement("table");
table.id = "coches";

var thead = document.createElement("thead");
table.appendChild(thead);

var tr = document.createElement("tr");
thead.appendChild(tr);

// creamos un for para no escribir dos veces el mismo código
var cabeceras = ["Marca", "Modelo"];
var th;

for (let cabecera of cabeceras){
    th = document.createElement("th");
    tr.appendChild(th);
    th.innerText = cabecera;
}

var tbody = document.createElement("tbody");
table.appendChild(tbody);

for (var i = 0; i < coches.length; i++){
    var tr = document.createElement("tr");
    tbody.appendChild(tr);
    var td;
    
    for (let propiedad in coches[i]) {

        if (propiedad === "marca"){
            td = document.createElement("td");
            tr.appendChild(td);
            td.innerText = coches[i].marca.nombre;

        } else if (propiedad === "modelo"){

            td = document.createElement("td");
            tr.appendChild(td);
            td.innerText = coches[i].modelo;
        }

        /* 
        td = document.createElement("td");

        if (typeof coches[i][propiedad] === "string"){
            td.innerText = coches[i][propiedad];
        }
        else {
            td.innerText = coches[i][propiedad].nombre;
        }
        tr.appendChild(td); 
        */
    }
}

div.appendChild(table);

table.style.backgroundColor = "crimson", table;
table.style.color = "white";
table.style.width = "20%"
table.style.boxShadow = "0 2px 10px black";
table.style.borderRadius = "10px";
table.style.textAlign = "center";
table.style.fontSize = "20px";
table.style.fontFamily = "Arial";

console.log(table);