/*
let contenedores = `[
    {
        "tipo":"grande",
        "envases":[
            {
                "tipo":"grandeAncho",
                "liquidos":{
                    "tipo": "alimentos",
                    "contenido": ["agua", "leche", "aceite", "vinagre"]
                }
            },
            {
                "tipo":"grandeAlto",
                "liquidos":{
                    "tipo": "alimentos",
                    "contenido": ["agua", "leche", "aceite", "vinagre"]
                }
            }
            
        ]
    },
    {
        "tipo":"mediano",
        "envases": [
            {
                "tipo":"medianoAncho",
                "liquidos":{
                    "tipo": "alimentos",
                    "contenido": ["agua", "leche", "aceite", "vinagre"]
                }
            },
            {
                "tipo":"medianoAlto",
                "liquidos":{
                    "tipo": "corrosivos",
                    "contenido": ["lejia", "amoniaco", "jabon", "aguarras", "alcohol", "gasolina"]
                }
            },
            {
                "tipo":"pequeño",
                "liquidos":{
                    "tipo": "corrosivos",
                    "contenido": ["lejia", "amoniaco", "jabon", "aguarras", "alcohol", "gasolina"]
                }
            }     
        ]
    },
    {
        "tipo":"vertical",
        "envases": [
            {
                "tipo":"grandeAlto",
                "liquidos":{
                    "tipo": "alimentos",
                    "contenido": ["agua", "leche", "aceite", "vinagre"]
                }
            },
            {
                "tipo":"medianoAlto",
                "liquidos":{
                    "tipo": "corrosivos",
                    "contenido": ["lejia", "amoniaco", "jabon", "aguarras", "alcohol", "gasolina"]
                }
            },
        ]
    }
]`
*/
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