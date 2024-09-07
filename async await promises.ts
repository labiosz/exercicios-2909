// Função que simula a busca de dados de uma API com atraso e possíveis falhas
async function buscarDadosDaAPI(): Promise<string> {
    // Simula uma chamada à API usando uma Promise com atraso
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const sucesso = Math.random() > 0.5;  // Simula uma chance de 50% de sucesso

            if (sucesso) {
                resolve('Dados recebidos da API');  // Resolve a Promise com os dados simulados
            } else {
                reject('Falha ao buscar dados da API');  // Rejeita a Promise em caso de falha
            }
        }, 2000);  // Simula um atraso de 2 segundos
    });
}

// Função que executa a busca de dados e lida com o resultado ou erro
async function executarBusca() {
    try {
        const dados = await buscarDadosDaAPI();  // Aguarda a resposta da função assíncrona
        console.log(dados);  // Exibe os dados recebidos no console
    } catch (error) {
        // Captura e exibe erros no console
        console.error('Erro ao buscar dados:', error);
    }
}

// Chamada da função que simula a busca de dados com async/await
executarBusca();