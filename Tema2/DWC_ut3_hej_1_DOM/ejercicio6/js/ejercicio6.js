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

let body = document.querySelector('body');
let table = document.createElement('table');
let tr;
let td;
let th;

body.appendChild(table);

const headers = Object.keys(alumnos[0]);

tr = document.createElement('tr');
table.appendChild(tr);

for (let i = 0; i < headers.length; i++) {
    th = document.createElement('th');
    th.innerHTML = headers[i]; 
    tr.appendChild(th);
}

for (let i = 0; i < alumnos.length; i++) {
    tr = document.createElement('tr');
    table.appendChild(tr);

    for (let j = 0; j < headers.length; j++) {
        td = document.createElement('td');
        td.innerHTML = alumnos[i][headers[j]]; 
        tr.appendChild(td);
    }
}

body.style.justifyItems = "center"

table.style.width = "60%";
table.style.height = "auto";
table.style.backgroundColor = "#333";
table.style.color = "#f1f1f1";
table.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.4)";
table.style.fontFamily = "Arial, sans-serif";
table.style.fontSize = "16px";
table.style.borderCollapse = "collapse";
table.style.tableLayout = "fixed";

let thElements = table.getElementsByTagName('th');
for (let i = 0; i < thElements.length; i++) {
    thElements[i].style.padding = "15px";
    thElements[i].style.height = "40px";
    thElements[i].style.backgroundColor = "#4a4a4a";
    thElements[i].style.color = "#ffffff";
    thElements[i].style.border = "2px solid #999";
    thElements[i].style.textAlign = "center";
}

let tdElements = table.getElementsByTagName('td');
for (let i = 0; i < tdElements.length; i++) {
    tdElements[i].style.padding = "12px";
    tdElements[i].style.height = "40px";
    tdElements[i].style.textAlign = "center";
    tdElements[i].style.border = "2px solid gray";
}