function tratamentoErros(array, num) {

    const erroParametro = new ReferenceError('Não recebeu parametros corretos'); // Variavel inexistente é referenciada
    erroParametro.name = 'Parametros invalido';

    const tamanhoArray = new RangeError('Tamanho do array nao é igual ao numero');
    tamanhoArray.name = 'Tamanho do array errado';


    try {
        if (!array || !num) { //Quando os parametro recebidos sao invalidos o throw dispara um erro
            throw erroParametro;
        } else if (typeof array !== 'object') {
            throw new TypeError('Parametro 1 não é objeto'); //Quando um valor não é do tipo esperado;
        } else if (typeof num !== 'number') {
            throw new TypeError('Parametro 2 não é numero'); //Quando um valor não é do tipo esperado;
        } else if (Object.keys(array).length !== num) {
            console.log(Object.keys(array).length);
            throw tamanhoArray;
        }
    } catch (e) {
        if (e instanceof TypeError) {
            console.log('É um TypeError, Verificar o tipo do arquivo inserido como paramento na função');
        } else if (e instanceof ReferenceError) {
            console.log('É um ReferenceError,Variavel INEXISTENTE está sendo referenciada');
        } else if (e instanceof RangeError) {
            console.log('É um RangerError, Os valor em conjunto (1ª e 2ª) não estão em conjuntos');
        }
    }

}

let obj = { nome: 'artur', idade: 13 };

tratamentoErros(obj, 3);