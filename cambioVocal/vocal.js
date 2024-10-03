var frase = "Una mosca volava per la llum";
var vocal = "a";
var vocalCambiada = "e";

function cambiarVocales(frase, vocal, vocalCambiada){
    let resultado = "";
    for(let i = 0; i < frase.length; i++){
        if (frase[i] == vocal){
            resultado += vocalCambiada;
        } else{
            resultado += frase[i];
        }
    }
    return resultado;
}
var resultado = cambiarVocales(frase, vocal, vocalCambiada);
console.log(resultado); 

