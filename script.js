// VERSÃO FINAL COM AJAX - Envia para o Formspree sem sair da página

document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Pega os elementos do HTML
    const formulario = document.getElementById('meuFormulario');
    const secaoFormulario = document.getElementById('formulario-inscricao');
    const secaoConfirmacao = document.getElementById('secao-confirmacao');

    // 2. Adiciona o "ouvinte" de envio ao formulário
    formulario.addEventListener('submit', function(event) {
        
        // 3. Previne o comportamento padrão do navegador (que é recarregar a página)
        event.preventDefault();

        // 4. Coleta todos os dados do formulário
        const formData = new FormData(formulario);
        
        // 5. Envia os dados para o Formspree "nos bastidores" usando fetch (AJAX)
        fetch(formulario.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json' // Pede uma resposta em formato JSON
            }
        }).then(response => {
            // 6. Se a resposta do Formspree for "ok"...
            if (response.ok) {
                // 7. Esconde o formulário e mostra a nossa seção de confirmação!
                secaoFormulario.style.display = 'none';
                secaoConfirmacao.style.display = 'block';
            } else {
                // Se o Formspree retornar um erro, avisa o usuário.
                alert('Ocorreu um erro ao enviar. Por favor, tente novamente.');
            }
        }).catch(error => {
            // Se houver um erro de rede (sem internet, etc), avisa o usuário.
            console.error('Erro:', error);
            alert('Não foi possível enviar o formulário. Verifique sua conexão.');
        });
    });
});
