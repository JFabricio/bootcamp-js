//Palindromo Frase
function palindromos() {
    let palavra = String(prompt('Palindromos: \n \n Vamos verificar se a sua palavra é um PALINDROMO: \n Digite a palava:'));


    let palavraSeparada = palavra.split("").join(); //Padrao 
    let palavraSeparadaDois = palavra.split("");

    let tamanhoOne = palavraSeparadaDois.length;
    console.log(`Tamanho da palavra: ${tamanhoOne}`);



    //frase colocada em reverso sem usar o .reverse()
    let palavraComparacao = [];

    do {
        palavraComparacao.push(palavraSeparadaDois.pop());
    } while (palavraComparacao.length !== tamanhoOne);


    //junção da frase inversa de acordo com o padrao
    let palavraDois = palavraComparacao.join();


    console.log(palavraDois)
    console.log(palavraSeparada);


    if (palavraDois == palavraSeparada) {
        alert('Acertou mizeravi');

    } else {
        alert('Erro');
    }





}

//Palindromo Simples
function palindromosSimple(valor) {

    if (!valor) { return 'Digite um valor!' }

    return valor.split("").reverse().join("") === valor;
}
//alert(palindromosSimple(prompt('Digite um palindromo: \n')));
//palindromos();


function trocaNumerosPares() {

    let array = [0, 1, 2, 3, 4, 5, 67, 0, 4, 44, 77, 8];

    if (array.length == 0) {
        return console.log("-1");
    } else {
        for (let x = 0; x <= array.length; x++) {
            if (array[x] == 0) array[x] = 'zero';
            else if (array[x] % 2 === 0) array[x] = 0;
        }
    }

    console.log(array);

}
//trocaNumerosPares();

function alunos(nome, idade, tipoEsporte, pontuacao) {

    let tamanho = arguments.length;
    console.log(tamanho);

    for (let x = 0; x < arguments.length; x++) {
        console.log(`O argumento ${x} = ${arguments[x]}`);

    }

    let aluno = () => { //arrow function 
        let objeto = {
            Nome: nome,
            Idade: idade,
            tipoEsporte: tipoEsporte,
            pontuacao: pontuacao,
            Esporte: function(aluno) { //aluno é 1 se padrão nao receber nenhuma valor argumento.
                return console.log(` O tipo do Esporte:${this.tipoEsporte} \n Nivel de habilidade é : ${this.pontuacao} \n Nome: ${this.Nome} \n Idade:${this.Idade}`);
            }
        };
        console.log(objeto.Esporte());

    }
    return aluno();

}

function cadeira(...valor) {

    console.log(valor);
    let nomeAluno = () => { this.Nome }
    let idadeAluno = () => { this.Idade }

    let disciplina = () => {
        let disciplina = {
            Nome: valor[0],
            cargaHoraria: valor[1],
            Professor: valor[2],
            Aluno: valor[3][0],
            alunoIdade: valor[3][1]
        };
        return disciplina;
    }
    console.log(disciplina());
}


//Dados de Entrada
let dado = ['João Antonio Fabricio', 25, 'Quadra', 4.2];
let dadoCadeira = ['WEB', 80, 'Master Blaster', dado];

//chamadas
alunos(...dado); //Para cada argumento é passado um valor do array(Tecnica SPREAD)
cadeira(...dadoCadeira);