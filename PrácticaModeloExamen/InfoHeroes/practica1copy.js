let objeto = {
    squadName: "Super hero squad",
    homeTown: "Metro City",
    formed: 2020,
    secretBase: "Super tower",
    active: true,
    members: [
        {
            name: "Molecule Man",
            age: 29,
            secretIdentity: "Dan Jukes",
            powers: [
                "Radiation resistance",
                "Turning tiny",
                "Radiation blast"
            ]
        },
        {
            name: "Madame Uppercut",
            age: 39,
            secretIdentity: "Jane Wilson",
            powers: [
                "Million tonne punch",
                "Damage resistance",
                "Superhuman reflexes"
            ]
        },
        {
            name: "Eternal Flame",
            age: 1000000,
            secretIdentity: "Unknown",
            powers: [
                "Immortality",
                "Heat Immunity",
                "Inferno",
                "Teleportation",
                "Interdimensional travel"
            ]
        }
    ]
};

function sacarInformacion(){
    titulo();
    
    for(let i = 0; i < objeto.members.length; i++){
        let members = objeto.members[i];
        let name = members.name;
        let age = members.age;
        let secretIdentity = members.secretIdentity;
         console.log(
            "Nombre: ", name, 
            "\nEdad: ", age, 
            "\nIdentidad secreta: ", secretIdentity, 
            "\nPoderes: ", members.powers.join(", "), 
            "\n", "-".repeat(26));
    }
}

function titulo(){
    console.log("-".repeat(26), objeto.squadName, "-".repeat(26),  
    "\n------ Ciudad de origen: ",objeto.homeTown, " // Fecha de origen: ", objeto.formed, "------");
}

sacarInformacion();
