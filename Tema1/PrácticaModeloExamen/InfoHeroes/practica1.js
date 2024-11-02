let jsonObj = {
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

function sacarInfo(){
    let scuadName = jsonObj.squadName;
    let homeTown = jsonObj.homeTown;
    let formed = jsonObj.formed;
    
    console.log("-".repeat(26), scuadName, "-".repeat(26));
    console.log("----- Ciudad de origen: ", homeTown, " // ", "Fecha de origen: ", formed, " -----");  

    for(let i = 0; i < jsonObj.members.length; i++){
        let member = jsonObj.members[i];
        let name = member.name;
        let age = member.age;
        let secretIdentity = member.secretIdentity;

        console.log("Nombre: ".concat(name, "\nEdad: ", age, "\nIdentidad secreta: ", secretIdentity, "\nPoderes: ", member.powers.join(", ")));
        console.log("-".repeat(70));
    }
}

sacarInfo();