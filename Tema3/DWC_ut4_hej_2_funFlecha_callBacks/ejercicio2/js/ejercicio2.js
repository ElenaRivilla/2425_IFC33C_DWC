let personas = [
    {nombre: "Helen", edad: 25},
    {nombre: "Iván", edad: 26},
    {nombre: "Facundo", edad: 23}
]

function crearTabla(){
    let personasArray = Object.entries(personas);
    personasArray.sort(([,a], [, b]) => a.edad - b.edad);

    let personasOrdenadas = Object.fromEntries(personasArray);
    let table = document.createElement("table");

    table.style.borderCollapse = "collapse";
    table.style.width = "50%";
    table.style.margin = "20px auto";
    table.style.textAlign = "left";
    
    let div = document.getElementById("container");
    div.appendChild(table);

    personasArray.forEach(element => {
        let tr = document.createElement("tr");
        table.appendChild(tr);

        let tdNombre = document.createElement("td");
        tdNombre.style.border = "1px solid #ddd";
        tdNombre.style.padding = "8px";
        tdNombre.innerText = element[1].nombre;
        tr.appendChild(tdNombre);

        let tdEdad = document.createElement("td");
        tdEdad.style.border = "1px solid #ddd";
        tdEdad.style.padding = "8px";
        tdEdad.innerText = element[1].edad;
        tr.appendChild(tdEdad);
    });
    console.log(personasOrdenadas);
}
crearTabla()
