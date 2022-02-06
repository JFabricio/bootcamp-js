function caulculadora() {

    const operacao = Number(prompt('Escolha uma Operação:\n 1 - Soma(+)\n 2 - Subtração(-)\n 3 - Multiplicação( * )\n 4 - Divisão Real(/)\n 5 - Divisão Inteira(%)\n 6 - Potenciação(**)'));

    let n1 = Number(prompt('Dgite o primeiro valor'));
    let n2 = Number(prompt('Dgite o segundo valor'));
    let resultado;


    if (operacao == 1) {
        soma()
    } else if (operacao == 2) {
        subtracao()
    } else if (operacao == 3) {
        multiplicacao()
    } else if (operacao == 4) {
        divisaoReal()
    } else if (operacao == 5) {
        divisaoInteira()
    } else if (operacao == 6) {
        potenciacao()
    }

    function isNumber(val) {
        return typeof val === "number"
    }

    function soma() {
        resultado = n1 + n2;
        alert(`${n1}+${n2} = ${resultado}`);
        novaOperacao();

    }

    function subtracao() {
        resultado = n1 - n2;
        alert(`${n1}-${n2} = ${resultado}`);
        novaOperacao();
    }

    function multiplicacao() {
        resultado = n1 * n2;
        alert(`${n1}*${n2} = ${resultado}`);
        novaOperacao();
    }

    function divisaoReal() {
        resultado = n1 / n2;
        alert(`${n1}/${n2} = ${resultado}`);
        novaOperacao();
    }

    function divisaoInteira() {
        resultado = n1 % n2;
        alert(`O resto da divisao ente ${n1}/${n2} = ${resultado}`);
        novaOperacao();
    }

    function potenciacao() {
        resultado = n1 ** n2;
        alert(`${n1} elevado a ${n2} = ${resultado}`);
        novaOperacao();
    }

    function novaOperacao() {
        let opcao = Number(prompt('Deseja fazer outra opração? \n 1 - Sim \n 2- Não'));
        if (opcao == 1) {
            caulculadora();
        } else if (opcao == 2) {
            alert('Muito bom trabalhar com você');
        } else {
            alert('Opção Invalida');
            novaOperacao();
        }
    }


}
caulculadora();