document.addEventListener('DOMContentLoaded', cargaDOM);

function cargaDOM(){
    let json_productos = `[
        { "id": 1, "nombre": "Camisa", "precio": 20.99, "boton": "" },
        { "id": 2, "nombre": "Pantalón", "precio": 35.50, "boton": "" },
        { "id": 3, "nombre": "Zapatos", "precio": 50.00, "boton": "" },
        { "id": 4, "nombre": "Sombrero", "precio": 15.75, "boton": "" },
        { "id": 5, "nombre": "Chaqueta", "precio": 60.00, "boton": "" }
    ]`;
    let obj_productos = JSON.parse(json_productos);
    crearHeader(obj_productos);
    crearBody(obj_productos);
}

function crearHeader(obj_productos){
    let tabla = document.getElementById("tabla")
    let trHeader = document.createElement("tr");

    for (let key in obj_productos[0]) {
        let th = document.createElement("th");
        th.innerHTML = key.toUpperCase();
        th.style.textAlign = "center"
        trHeader.appendChild(th);
    }
    tabla.appendChild(trHeader);
}

function crearBody(obj_productos){
    for (let i = 0; i < obj_productos.length; i++) {
        let tr = document.createElement("tr");
        let button = document.createElement("button")
        
        for (let key in obj_productos[i]) {
            let td = document.createElement("td");
            td.innerHTML = obj_productos[i][key];
            tr.appendChild(td);
            td.appendChild(button);
            button.innerHTML = "DESTACAR"
            button.addEventListener('click', () => {
                tr.style.backgroundColor = "skyblue";
            });
            button.addEventListener('dblclick', () => {
                tr.style.backgroundColor = "white";
            });
        }
        tabla.appendChild(tr);
    }    
}
