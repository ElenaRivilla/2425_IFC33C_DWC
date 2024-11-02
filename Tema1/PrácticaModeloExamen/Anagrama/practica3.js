function anagrama(texto1, texto2) {
    var texto1 = texto1.split("").sort().join("");
    var texto2 = texto2.split("").sort().join("");

    if (texto1 == texto2) {
        console.log("Es un anagrama");
    }
    else {
        console.log("No es un anagrama");
    }
}

anagrama("repite", "pieter");