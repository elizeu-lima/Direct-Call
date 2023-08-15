/*api das chamadas gravadas  */

const apiData = {
    
        "registros": [
          {
            "id": 1,
            "data_e_hora": "2023-08-04T10:00:00",
            "operador": {
              "id": "op1",
              "nome": "Operador 1"
            },
            "cliente": {
              "id": "cli1",
              "nome": "Cliente 1",
              "telefone": "11999999999",
              "email": "cliente1@email.com"
            },
            "tipo_de_contato": ["email", "whatsapp"],
            "historico": [
              {
                "idOperador": "op1",
                "idCliente": "cli1",
                "data_e_hora": "2023-08-04T09:30:00",
                "mensagem_enviada": "Bom dia, como posso ajudar?",
                "mensagem_recebida": "Bom dia, estou com uma dúvida."
              },
              {
                "idOperador": "op1",
                "idCliente": "cli1",
                "data_e_hora": "2023-08-04T09:32:00",
                "mensagem_enviada": "Claro, qual é a sua dúvida?",
                "mensagem_recebida": "Estou com problemas no pagamento."
              },
              {
                "idOperador": "op1",
                "idCliente": "cli1",
                "data_e_hora": "2023-08-04T09:35:00",
                "mensagem_enviada": "Vou verificar isso para você agora.",
                "mensagem_recebida": "Obrigado!"
              },
              {
                "idOperador": "op1",
                "idCliente": "cli1",
                "data_e_hora": "2023-08-04T09:40:00",
                "mensagem_enviada": "O problema foi resolvido.",
                "mensagem_recebida": "Ótimo, obrigado!"
              }
            ]
          },
          {
            "id": 2,
            "data_e_hora": "2023-08-04T10:30:00",
            "operador": {
              "id": "op2",
              "nome": "Operador 2"
            },
            "cliente": {
              "id": "cli2",
              "nome": "Cliente 2",
              "telefone": "11999999998",
              "email": "cliente2@email.com"
            },
            "tipo_de_contato": ["chat"],
            "historico": [
              {
                "idOperador": "op2",
                "idCliente": "cli2",
                "data_e_hora": "2023-08-04T10:00:00",
                "mensagem_enviada": "Bom dia, em que posso ajudar?",
                "mensagem_recebida": "Olá, preciso de assistência com minha conta."
              },
              {
                "idOperador": "op2",
                "idCliente": "cli2",
                "data_e_hora": "2023-08-04T10:05:00",
                "mensagem_enviada": "Claro, o que está acontecendo com sua conta?",
                "mensagem_recebida": "Não consigo acessá-la."
              },
              {
                "idOperador": "op2",
                "idCliente": "cli2",
                "data_e_hora": "2023-08-04T10:10:00",
                "mensagem_enviada": "Vou verificar isso para você.",
                "mensagem_recebida": "Obrigado!"
              },
              {
                "idOperador": "op2",
                "idCliente": "cli2",
                "data_e_hora": "2023-08-04T10:15:00",
                "mensagem_enviada": "Agora você deve conseguir acessar sua conta.",
                "mensagem_recebida": "Sim, agora está funcionando. Obrigado!"
              }
            ]
          },
          {
            "id": 3,
            "data_e_hora": "2023-08-04T14:00:00",
            "operador": {
              "id": "op10",
              "nome": "Operador 3"
            },
            "cliente": {
              "id": "cli3",
              "nome": "Cliente 3",
              "telefone": "11999999910",
              "email": "cliente10@email.com"
            },
            "tipo_de_contato": ["chat"],
            "historico": [
              {
                "idOperador": "op3",
                "idCliente": "cli3",
                "data_e_hora": "2023-08-04T13:50:00",
                "mensagem_enviada": "Olá, como posso auxiliar?",
                "mensagem_recebida": "Oi, estou com problema no pagamento."
              },
              {
                "idOperador": "op3",
                "idCliente": "cli3",
                "data_e_hora": "2023-08-04T13:52:00",
                "mensagem_enviada": "Vamos resolver isso para você. Pode detalhar o problema?",
                "mensagem_recebida": "Não consigo finalizar o pagamento."
              },
              {
                "idOperador": "op3",
                "idCliente": "cli3",
                "data_e_hora": "2023-08-04T13:55:00",
                "mensagem_enviada": "Estou verificando isso agora.",
                "mensagem_recebida": "Agradeço a ajuda."
              },
              {
                "idOperador": "op3",
                "idCliente": "cli3",
                "data_e_hora": "2023-08-04T14:00:00",
                "mensagem_enviada": "Resolvemos o problema. Tente novamente.",
                "mensagem_recebida": "Funcionou! Muito obrigado."
              }
            ]
          }
        ]
      
      
  };

var fecharBotao = document.getElementById("fecharPagina");

fecharBotao.addEventListener("click", function() {
  // Fecha a janela atual
  window.close();
});

  /*javascript que chamas as 3 ultimas mensagens*/
  function showAllChats() {
    renderChats(apiData.registros);
  }
  
  function renderChats(chats) {
    const chatHistoryDiv = document.getElementById('chatHistory');
    chatHistoryDiv.innerHTML = '';

    chats.forEach(chat => {
      const chatDiv = document.createElement('div');
      chatDiv.className = 'chat';
      chatDiv.innerHTML = `
        <p style=" padding: 2px 1px;"><strong>Data/Hora:</strong > ${chat.data_e_hora}</p><i style="diplay:flex;  margin-left: 570px;
        margin-top: -640px;" class="fa-brands fa-whatsapp"></i>
        <p style=" padding: 2px 1px;">Operador: ${chat.operador.nome}</p>
        <p style=" padding: 2px 1px;">Telefone: ${chat.cliente.telefone}</p>
      `;
      chatHistoryDiv.appendChild(chatDiv);
    });
  }

  function filterChatsByOperator(operatorName) {
    const filteredChats = apiData.registros.filter(chat => chat.operador.nome === operatorName);
    renderChats(filteredChats);
  }

 

  document.addEventListener('DOMContentLoaded', () => {
    const operator1Image = document.getElementById('operador1');
    const operator2Image = document.getElementById('operador2');
    const showAllImage = document.getElementById('showAll');

    operator1Image.addEventListener('click', () => filterChatsByOperator('Operador 1'));
    operator2Image.addEventListener('click', () => filterChatsByOperator('Operador 2'));
    showAllImage.addEventListener('click', showAllChats);

     // Adicionar atributo title com o nome do operador
     operator1Image.title = 'Operador 1';
     operator2Image.title = 'Operador 2';
     showAllImage.title = 'Mostrar Mais';

    // Renderizar automaticamente os últimos 3 registros iniciais
    const lastThreeChats = apiData.registros.slice(-3);
    renderChats(lastThreeChats);
  });

  


/*final */

/*javascrit das 6 ultimas chamdas e os filtros */


const chamadasData = {
  "registros": [
    {
      "id": 1,
      "idOperador": "op1",
      "nomeOperador": "Operador 1",
      "data_inicio": "2023-08-04T10:00:00",
      "data_fim": "2023-08-04T10:30:00",
      "nomeCliente": "Cliente 1",
      "numero_de_origem": "+5511999999991",
      "numero_de_destino": "+5511988888881",
      "url_da_gravacao": "http://example.com/gravacao1"
    },
    {
      "id": 2,
      "idOperador": "op2",
      "nomeOperador": "Operador 2",
      "data_inicio": "2023-08-04T10:30:00",
      "data_fim": "2023-08-04T11:00:00",
      "nomeCliente": "Cliente 2",
      "numero_de_origem": "+5511999999992",
      "numero_de_destino": "+5511988888882",
      "url_da_gravacao": "http://example.com/gravacao2"
    },
    {
      "id": 3,
      "idOperador": "op3",
      "nomeOperador": "Operador 3",
      "data_inicio": "2023-08-04T11:00:00",
      "data_fim": "2023-08-04T11:30:00",
      "nomeCliente": "Cliente 3",
      "numero_de_origem": "+5511999999993",
      "numero_de_destino": "+5511988888883",
      "url_da_gravacao": "http://example.com/gravacao3"
    },
    {
      "id": 4,
      "idOperador": "op4",
      "nomeOperador": "Operador 4",
      "data_inicio": "2023-08-04T11:30:00",
      "data_fim": "2023-08-04T12:00:00",
      "nomeCliente": "Cliente 4",
      "numero_de_origem": "+5511999999994",
      "numero_de_destino": "+5511988888884",
      "url_da_gravacao": "http://example.com/gravacao4"
    },
    {
      "id": 5,
      "idOperador": "op5",
      "nomeOperador": "Operador 5",
      "data_inicio": "2023-08-04T12:00:00",
      "data_fim": "2023-08-04T12:30:00",
      "nomeCliente": "Cliente 5",
      "numero_de_origem": "+5511999999995",
      "numero_de_destino": "+5511988888885",
      "url_da_gravacao": "http://example.com/gravacao5"
    },
    {
      "id": 6,
      "idOperador": "op6",
      "nomeOperador": "Operador 6",
      "data_inicio": "2023-08-04T12:30:00",
      "data_fim": "2023-08-04T13:00:00",
      "nomeCliente": "Cliente 6",
      "numero_de_origem": "+5511999999996",
      "numero_de_destino": "+5511988888886",
      "url_da_gravacao": "http://example.com/gravacao6"
    },
    {
      "id": 7,
      "idOperador": "op7",
      "nomeOperador": "Operador 7",
      "data_inicio": "2023-08-04T13:00:00",
      "data_fim": "2023-08-04T13:30:00",
      "nomeCliente": "Cliente 7",
      "numero_de_origem": "+5511999999997",
      "numero_de_destino": "+5511988888887",
      "url_da_gravacao": "http://example.com/gravacao7"
    },
    {
      "id": 8,
      "idOperador": "op8",
      "nomeOperador": "Operador 8",
      "data_inicio": "2023-08-04T13:30:00",
      "data_fim": "2023-08-04T14:00:00",
      "nomeCliente": "Cliente 8",
      "numero_de_origem": "+5511999999998",
      "numero_de_destino": "+5511988888888",
      "url_da_gravacao": "http://example.com/gravacao8"
    },
    {
      "id": 9,
      "idOperador": "op9",
      "nomeOperador": "Operador 9",
      "data_inicio": "2023-08-04T14:00:00",
      "data_fim": "2023-08-04T14:30:00",
      "nomeCliente": "Cliente 9",
      "numero_de_origem": "+5511999999999",
      "numero_de_destino": "+5511988888889",
      "url_da_gravacao": "http://example.com/gravacao9"
    },
    {
      "id": 10,
      "idOperador": "op10",
      "nomeOperador": "Operador 10",
      "data_inicio": "2023-08-04T14:30:00",
      "data_fim": "2023-08-04T15:00:00",
      "nomeCliente": "Cliente 10",
      "numero_de_origem": "+5511999999900",
      "numero_de_destino": "+5511988888890",
      "url_da_gravacao": "http://example.com/gravacao10"
    }
  ]
};

const chamadasContainer = document.getElementById('chamadas');
const userImages = document.querySelectorAll('.user-images img');
const dateFilterInput = document.getElementById('dateFilter');
const filterButton = document.getElementById('filterButton');
const periodDisplay = document.getElementById('periodDisplay');

function renderChamadas(chamadas) {
  chamadasContainer.innerHTML = '';

  const ultimasChamadas = chamadas.slice(-6);

  ultimasChamadas.forEach(chamada => {
    const chamadaElement = document.createElement('div');
    chamadaElement.className = 'chamada';
    chamadaElement.innerHTML = `
      <p><strong>Data/Hora:</strong> ${chamada.data_inicio}</p>
      <p style="display: flex; align-items: center;  justify-content: space-between;">Operador: ${chamada.nomeOperador} <audio controls>
      <audio controls style="width: 5%; max-width: 100px; margin-right: 5px ;">
      <source src="caminho_para_o_arquivo_de_audio.mp3" type="audio/mpeg">
      Seu navegador não suporta a tag de áudio.
  </audio></p>
      <p>Telefone: ${chamada.numero_de_origem}</p><br>
    `;
    chamadasContainer.appendChild(chamadaElement);
  });

  const dataInicial = ultimasChamadas.length > 0 ? ultimasChamadas[0].data_inicio : '-';
  const dataFinal = ultimasChamadas.length > 0 ? ultimasChamadas[ultimasChamadas.length - 1].data_inicio : '-';
  periodDisplay.innerHTML = `<p>${dataInicial}</p> |--| <p> ${dataFinal}</p>`;
}

function filterChamadasByDate(selectedDate) {
  const filteredChamadas = chamadasData.registros.filter(chamada => isSameDay(new Date(chamada.data_inicio), selectedDate));
  renderChamadas(filteredChamadas);
}

function isSameDay(date1, date2) {
  return (
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear()
  );
}

dateFilterInput.addEventListener('change', () => {
  const selectedDate = new Date(dateFilterInput.value);
  filterChamadasByDate(selectedDate);
});

// Inicialização da página
renderChamadas(chamadasData.registros);


/*final */

  
 
  




  
  


  

  
  


  
  
  

  




