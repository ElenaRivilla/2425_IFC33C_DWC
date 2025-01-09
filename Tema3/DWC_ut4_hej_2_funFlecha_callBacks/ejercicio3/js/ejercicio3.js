

function mostrarPropiedades() {
    let claves = Object.keys(window);
    claves.sort();
    let div = document.getElementById("container");
    let ul = document.createElement("ul");
    div.appendChild(ul);

    claves.forEach((element, posicion) => {

        if (posicion < 10) {
            let li = document.createElement("li");
            ul.appendChild(li);
            li.innerText = element;
        }
    });
}
mostrarPropiedades(); 