function esPalindromo(palabra) {
    let palindromoGirado = palabra.split("").reverse().join("");
    let palindromo = palabra;

    if (palindromo == palindromoGirado) {
        console.log(palindromo, "es palíndromo");
    }
    else {
        console.log(palindromo, "no es palíndromo")
    }
}

esPalindromo("ivi");