document.addEventListener('DOMContentLoaded', cargaDOM);

function cargaDOM(){
    let json_eventos = `[
        { "id": 1, "evento": "Partido de fútbol", "categoria": "Fútbol" },
        { "id": 2, "evento": "Final de baloncesto", "categoria": "Baloncesto" },
        { "id": 3, "evento": "Torneo de tenis", "categoria": "Tenis" },
        { "id": 4, "evento": "Amistoso de fútbol", "categoria": "Fútbol" }
    ]`

    let obj_eventos = JSON.parse(json_eventos);
    

}