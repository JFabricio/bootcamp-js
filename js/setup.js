/*Array normal
let array1 = ['String', 1, true];
console.log(array1);
*/


let esporte = { Nome: 'Basquete', Modalidae: 'Quadra' }; //objeto

let pessoas = {
    Nome: 'joao',
    Idade: '25',
    Sexo: 'Masculino',
    esporte,
    habilidade: function programar() {
        return "Bom programador";
    }
}; //obejeto com outro objeto dentro

let carros = ["Celta", "Onix", "Palio", "Uno", "Golf", "Jeta"]; //array
let arrayEX = [pessoas, carros, "Chevrollet", "Fiat", "Volkswagen", 99, 9 == '9' ? true : false]; //array com dois objetos,valores e uma condicao booleana

arrayEX.push("Chegou"); //coloca o valor no ultimo elemento
console.log(arrayEX);

carros.forEach(
    function(item, index) {
        console.log(item, index)
    });

carros.pop(); //tira o valor do ultimo elemento
console.log(carros);

carros.shift(); //tira um elemento do começo
console.log(carros);

carros.unshift("Corsa"); // coloca um elemento no começo
console.log(carros);

var idade = pessoas.Idade;
console.log(idade);


var hab = pessoas.habilidade();
console.log(hab);


var dado = parseInt(window.prompt("Digite um numero Par"));


dado % 2 == 0 ? document.write("O valor: " + dado + " é par") : document.write("O valo " + dado + " é impar");