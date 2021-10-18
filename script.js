axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';

// pega a div de mensagens pelo id
const divMensagens = document.getElementById('mensagens');

// pega o input de perguntas pelo id
const inputPergunta = document.getElementById('pergunta');

// função que será executada quando o botão de enviar for pressionado
function enviarPergunta() {
    
    // pega o valur do input da pergunta
    const valorInputPergunta = inputPergunta.value;

    // cria a div que vai exibir o texto da pergunta na div de mensagens
    const pergunta = criarMensagemTela(valorInputPergunta, 'pergunta');
    
    // insere a div criada dentro da div de mensagens
    divMensagens.appendChild(pergunta);

    // codifica a mensagem para renderizar caracteres especiais corretamente dentro da url
    const mensagemURI = encodeURI(valorInputPergunta);

    // envia a requisição ao servidor com a mensagem codificada
    axios.get(
        `http://127.0.0.1:5000/api_chatbot?mensagem=${mensagemURI}`
    ).then(response => {

        // escreve a resposta no console do navegador
        console.log(response);

        // cria a div que vai exibir o texto da pergunta na div de mensagens
        const resposta = criarMensagemTela(response.data.resposta, 'resposta');

        // insere a div criada dentro da div de mensagens
        divMensagens.appendChild(resposta); 

    }).catch(error => {
        console.log(error);
    });

    // reseta o conteúdo do input da pergunta
    inputPergunta.value = "";

}

function criarMensagemTela(texto, classe) {

    // gera a div pura no documento, sem atrelar a nenhum outro elemento
    const mensagem = document.createElement('div');

    // adiciona a classe correspondente ao tipo de mensagem ao div criado acima
    mensagem.classList.add('mensagem-' + classe);

    // passa o texto pego do input para dentro da div criada
    mensagem.innerText = texto;

    // retorna a div da mensagem montada
    return mensagem;

}