const apiAudios = {
    
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
            "data_inicio": "202-11-03T14:30:00",
            "data_fim": "2023-08-04T15:00:00",
            "nomeCliente": "Cliente 10",
            "numero_de_origem": "+5511999999900",
            "numero_de_destino": "+5511988888890",
            "url_da_gravacao": "http://example.com/gravacao10"
          }
        ]
      }
      


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

  const registrosLigacao = document.getElementById('mensagens-chat');


  const registrosList = document.getElementById('registros-list');



function displayUltimasSeisLigacoes() {
  // Ordena os registros por data e hora (mais recente primeiro)
  apiAudios.registros.sort((a, b) => {
    return new Date(b.data_e_hora) - new Date(a.data_e_hora);
  });

  // Pega apenas as 6 últimas ligações
  const ultimasSeis = apiData.registros.slice(0, 8);

  // Limpa a lista antes de exibir as ligações
  registrosLigacao.innerHTML = '';

  ultimasSeis.forEach(registro => {
    // Crie o elemento HTML para exibir os detalhes da ligação
    const ligacaoElement = document.createElement('div');
    ligacaoElement.classList.add('ligacao');

    const operadorNome = registro.operador.nome;
    const clienteTelefone = registro.cliente.telefone;
    const dataHora = new Date(registro.data_e_hora).toLocaleString();

    
    ligacaoElement.innerHTML = `
      <p>${dataHora} - Operador: ${operadorNome} - Telefone: ${clienteTelefone}</p>
      <audio controls>
        <source src="caminho-para-o-audio.mp3" type="audio/mpeg">
        Seu navegador não suporta o elemento de áudio.
      </audio>
    `;

    registrosLigacao.appendChild(ligacaoElement);
  });
}

// Função para buscar a API (substitua 'apiData' pelo seu objeto JSON da API)


// Chama a função para exibir as 6 últimas ligações na inicialização
document.addEventListener('DOMContentLoaded', () => {
  displayUltimasSeisLigacoes();
});

  
 
  
  
  

  function displayUltimosTresRegistros() {
    // Ordena os registros pelo critério: data, hora, nome do operador e telefone
    apiData.registros.sort((a, b) => {
      const dataHoraA = new Date(a.data_e_hora);
      const dataHoraB = new Date(b.data_e_hora);
  
      if (dataHoraA < dataHoraB) return 1;
      if (dataHoraA > dataHoraB) return -1;
  
      // Se as datas forem iguais, compara a hora
      return a.operador.nome.localeCompare(b.operador.nome) ||
             a.cliente.telefone.localeCompare(b.cliente.telefone);
    });
  
    // Pega apenas os 3 últimos registros
    const ultimosTres = apiData.registros.slice(0, 3);
  
    // Limpa a lista antes de exibir os registros
    registrosList.innerHTML = '';
  
    ultimosTres.forEach(registro => {
      // Crie os elementos HTML para exibir os detalhes do registro
      const registroElement = document.createElement('div');
      registroElement.classList.add('registro');
  
      const operadorNome = registro.operador.nome;
      const clienteTelefone = registro.cliente.telefone;
      const dataHora = new Date(registro.data_e_hora).toLocaleString();
  
      registroElement.innerHTML = `
        <p>Data e Hora: ${dataHora}</p><br>
         <p>Operador: ${operadorNome}</p> <br>
         <p>Telefone: ${clienteTelefone}</p> 
        

      `;
  
      registrosList.appendChild(registroElement);
    });
  }
  
  
  
  // Chama a função para exibir os 3 últimos registros na inicialização
  document.addEventListener('DOMContentLoaded', () => {
    displayUltimosTresRegistros();
  });
  
  // Dados JSON fornecidos

  
  // Referência ao botão
  const botaoMostrar = document.getElementById("mostrarDados");
  
  // Função para mostrar os dados em uma janela
  function mostrarDados() {
    const dadosString = JSON.stringify(apiData, null, 2); // Formatação para facilitar a leitura
    alert(dadosString);
  }
  
  // Adicionar um evento de clique ao botão
  botaoMostrar.addEventListener("click", mostrarDados);
  
  // Referências aos elementos
const botaoPeriodo = document.getElementById("mostrarPeriodo");
const infoPeriodo = document.getElementById("infoPeriodo");




/* Lógica para nome do usuário */


  
 
  




  
  


  

  
  


  
  
  

  

  
  // Referência ao elemento de exibição do período
  const periodoDisplay = document.getElementById("periodoDisplay");
  
  // Função para formatar a data em um formato legível
  function formatarData(data) {
    return data.toLocaleDateString("pt-BR", {
      day: "numeric",
      month: "numeric",
      year: "numeric"
    });
  }
  
  // Ordenar os registros por data de início
  apiAudios.registros.sort((a, b) => new Date(a.data_inicio) - new Date(b.data_inicio));
  
  // Obter a menor e a maior data formatada
  const menorData = new Date(apiAudios.registros[0].data_inicio);
  const maiorData = new Date(apiAudios.registros[apiAudios.registros.length - 1].data_inicio);
  
  // Exibir as datas no elemento
  periodoDisplay.textContent = `Menor Data: ${formatarData(menorData)} | Maior Data: ${formatarData(maiorData)}`;
  
  


/* seleção periodo */

  

document.addEventListener("DOMContentLoaded", function() {
  const startDateInput = document.getElementById("start-date");
  const endDateInput = document.getElementById("end-date");
  const fetchDataButton = document.getElementById("fetch-data");
  const dataDisplay = document.getElementById("data-display");

  fetchDataButton.addEventListener("click", () => {
      const startDate = startDateInput.value;
      const endDate = endDateInput.value;

      // Replace this with your API endpoint
      const apiUrl = `/dados_chamadas_gravadas.json=${startDate}&end=${endDate}`;

      // Perform fetch request to your API
      fetch(apiUrl)
          .then(response => response.json())
          .then(data => {
              // Display fetched data on the page
              dataDisplay.innerHTML = JSON.stringify(data, null, 2);
          })
          .catch(error => {
              console.error("Error fetching data:", error);
          });
  });
});





