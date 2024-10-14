class Familia {
    constructor(membres, tasques, setmanes) {
        this.membres = membres;
        this.tasques = tasques; 
        this.setmanes = setmanes; 
    }

    planificarTasques() {
        let planificacio = [];
        let numTasques = this.tasques.length;
        let numMembres = this.membres.length;

        for (let s = 1; s <= this.setmanes; s++) {
            let tasquesSetmana = [];
            for (let i = 0; i < numMembres; i++) {
                let currentTasca = (s + i) % numTasques;

                tasquesSetmana.push("\n" + this.membres[i] + ": " + this.tasques[currentTasca]);
            }
            planificacio.push("Setmana " + s + ": " + tasquesSetmana.join(" "));
        }
        for (let j = 0; j < planificacio.length; j++) {
            console.log(planificacio[j]);
        }
    }
}

let familiaGalmés = new Familia(
    ["Pare", "Mare", "Fill", "Filla"],
    ["Posar rentadora", "Fer cuina neta", "Fer bany net"],
    52 
);

let familiaDuran = new Familia(
    ["Pare", "Mare", "Fill", "Filla"],
    ["Planxar", "Fer bany net"],
    4
);

let familiaSastre = new Familia(
    ["Pare", "Mare", "Fill", "Filla gran", "Filla petita"],
    ["Posar rentadora", "Fer cuina neta", "Netejar la casa", "Planxar", "Fer bany net"],
    12 
);


console.log("Planificació anual per a la família Galmés:");
familiaGalmés.planificarTasques();

console.log("\n\nPlanificació mensual per a la família Duran:");
familiaDuran.planificarTasques();

console.log("\n\nPlanificació trimestral per a la família Sastre:");
familiaSastre.planificarTasques();