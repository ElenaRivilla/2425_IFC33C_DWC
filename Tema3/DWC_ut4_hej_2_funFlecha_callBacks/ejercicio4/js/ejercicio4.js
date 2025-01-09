let tareas = [
    {descripcion:"Limpiar el coche", completada: true},
    {descripcion:"Ordenar la habitación", completada: false},
    {descripcion:"Sacar dinero", completada: true},
    {descripcion:"Hacer la compra", completada: false},
    {descripcion:"Llamar al médico", completada: false},
    {descripcion:"Pagar facturas", completada: true}
]

function listaTareas(){
    let div = document.getElementById("container");
    let ul = document.createElement("ul");
    div.appendChild(ul);

    tareas.forEach(element => {
        let li = document.createElement("li");
        ul.appendChild(li);
        
        if (element.completada){
            s = document.createElement("s");
            li.appendChild(s);
            s.innerText = element.descripcion;
        } else {
            li.innerText = element.descripcion;
        }
    });
}
listaTareas();

