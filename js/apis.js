const BASE_URL = 'https://api.adviceslip.com/advice';
const botao = document.getElementById('botao');

//Pegando a msg via API
const getMsg = async() => { //função assincrona 
    const data = await fetch(BASE_URL) //pegando dados  da api e colocando na const data
        .then((res) => res.json()) // colocando em formato json
        .catch((e) => console.log(e)) //caso ocorra erro

    //trata o objeto recebido
    const objeto = {
        mensagem: data.slip.advice
    }
    return objeto.mensagem;
};

//Carregando MSG e chamando o API com a MSG
const loadMsg = async() => {
    const msg = document.getElementById('mensagem');


    //chama a função que retorna um promises
    const resultado = await getMsg(); //valor da promise é colocado em resultado

    msg.innerHTML = `- ${resultado}`;
}

botao.addEventListener('click', loadMsg);


loadMsg();