let numberOne = Number(prompt("Numero 1"));
let numberTwo = Number(prompt("Numero 2"));

var resultados = [];

function conferirNumero(numberOne, numberTwo) {

    numberOne === numberTwo ? resultados[0] = " sao iguais." : resultados[0] = " não são iguais.";
    let soma = numberOne + numberTwo;
    if (soma >= 10 && soma <= 20) {
        resultados[1] = "maior que de 10 e menor que 20.";
    } else if (soma <= 10 && soma <= 20) {
        resultados[1] = "menor que 10 e menor que 20.";
    } else {
        resultados[1] = "maior que 10 e maior que 20.";
    }

    return document.write(`Os numeros ${numberOne} e ${numberTwo} ${resultados[0]} ,Sua soma é ${soma} ,que é ${resultados[1]}`);
}

//conferirNumero(numberOne, numberTwo);