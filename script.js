// Espera o HTML da página ser completamente carregado para executar o código
document.addEventListener('DOMContentLoaded', function() {

    // Pega os elementos do HTML pelos seus IDs
    const formulario = document.getElementById('meuFormulario');
    const secaoFormulario = document.getElementById('formulario-inscricao');
    const secaoConfirmacao = document.getElementById('secao-confirmacao');

    // Adiciona um "ouvinte" ao formulário que espera pelo evento de "submit" (envio)
    formulario.addEventListener('submit', function(event) {
        
        // event.preventDefault() impede que a página recarregue, que é o comportamento padrão de um formulário.
        // event.preventDefault();

        // Aqui você poderia adicionar um código para realmente enviar os dados para um serviço de e-mail marketing, mas por enquanto vamos apenas simular.
        console.log('Formulário enviado!');

        // Esconde a seção do formulário
        secaoFormulario.style.display = 'none';

        // Mostra a seção de confirmação
        secaoConfirmacao.style.display = 'block';

    });


});
