// VERSÃO DEFINITIVA COM FETCH (AJAX)

document.addEventListener('DOMContentLoaded', function() {
    
    // Pega os elementos do HTML que vamos manipular
    const formulario = document.getElementById('meuFormulario');
    const secaoFormulario = document.getElementById('formulario-inscricao');
    const secaoConfirmacao = document.getElementById('secao-confirmacao');

    // Adiciona um "ouvinte" que espera o formulário ser enviado
    formulario.addEventListener('submit', function(event) {
        
        // A LINHA MAIS IMPORTANTE: Previne que a página seja recarregada
        event.preventDefault();

        // Cria um objeto com todos os dados do formulário
        const formData = new FormData(formulario);
        
        // AQUI ESTÁ O FETCH: Envia os dados para o Formspree em segundo plano
        fetch(formulario.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json' 
            }
        }).then(response => {
            // Se a resposta do servidor for "ok" (sucesso)...
            if (response.ok) {
                // ...então nós escondemos o formulário e mostramos nossa mensagem de sucesso!
                secaoFormulario.style.display = 'none';
                secaoConfirmacao.style.display = 'block';
            } else {
                // Se o Formspree retornar algum erro, avisamos o usuário
                alert('Ocorreu um erro ao enviar o formulário. Por favor, tente novamente mais tarde.');
            }
        }).catch(error => {
            // Se houver um erro de conexão (internet, etc), também avisamos o usuário
            console.error('Erro de rede:', error);
            alert('Não foi possível enviar o formulário. Verifique sua conexão com a internet.');
        });
    });
});
