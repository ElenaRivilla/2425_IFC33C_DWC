let envasados = {
    "contenedor_grande" : {
        "grande_ancho": [
            "agua", "leche", "aceite", "vinagre"
        ],
        "grande_alto" : [
            "agua", "leche", "aceite", "vinagre"
        ]
    },
    "contenedor_mediano" : {
        "mediano_ancho" : [
            "agua", "leche", "aceite", "vinagre"
        ],
        "mediano_alto" : [
            "lejía", "amoniaco", "jabón", "aguarrás", "gasolina"
        ],
        "pequeño" : [
            "lejía", "amoniaco", "aguarrás", "gasolina", "alcohol"
        ]
    },
    "verticales": {
        "grande_alto": [
            "agua", "leche", "aceite", "vinagre"
        ],
        "mediano_alto": [
            "lejía", "amoniaco", "jabón", "aguarrás", "gasolina"
        ]
    }
}

let json_envasados = JSON.stringify(envasados);
console.log(`Envases en formato json\n ${json_envasados}`); //JSON
console.log("-".repeat(118))
console.log("Envases en formato objeto:\n ", envasados); //objeto