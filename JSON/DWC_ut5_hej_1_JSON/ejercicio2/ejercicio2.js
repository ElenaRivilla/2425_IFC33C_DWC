document.addEventListener('DOMContentLoaded', cargaDOM);

function cargaDOM() {
    let json_jugadores = `[
        { "nombre": "Ana", "puntuacion": 150 },
        { "nombre": "Carlos", "puntuacion": 200 },
        { "nombre": "Beatriz", "puntuacion": 180 }
        ]`

    let obj_jugadores = JSON.parse(json_jugadores);
    crearLista(obj_jugadores);
}

function crearLista(jugadores) {
    let ul = document.getElementById("lista");
    ul.innerHTML = '';

    for (let i = 0; i < jugadores.length; i++) {
        let li = document.createElement("li");
        ul.appendChild(li);
        li.innerHTML = `${jugadores[i].nombre}: ${jugadores[i].puntuacion} puntos`;
    }

    let body = document.querySelector("body");
    if (!document.getElementById("puntuacion") && !document.getElementById("nombre")) {
        let sortPuntuacion = document.createElement("button");
        let sortNombre = document.createElement("button");

        sortPuntuacion.innerHTML = "Sort puntuación";
        sortPuntuacion.id = "puntuacion";
        sortNombre.id = "nombre";
        sortNombre.innerHTML = "Sort nombre";

        body.appendChild(sortPuntuacion);
        body.appendChild(sortNombre);

        sortPuntuacion.addEventListener('click', () => sortJugadores(jugadores, 'puntuacion'));
        sortNombre.addEventListener('click', () => sortJugadores(jugadores, 'nombre'));
    }
}

function sortJugadores(jugadores, criterio) {
    if (criterio === 'puntuacion') {
        jugadores.sort((a, b) => b.puntuacion - a.puntuacion);
    } else if (criterio === 'nombre') {
        jugadores.sort((a, b) => a.nombre > b.nombre ? 1 : -1);
    }
    crearLista(jugadores);
}