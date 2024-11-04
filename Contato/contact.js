document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form-contato');
    const nomeInput = document.getElementById('nome');
    const emailInput = document.getElementById('email');
    const telefoneInput = document.getElementById('telefone');
    const mensagemInput = document.getElementById('mensagem');
    const mensagemSucesso = document.createElement('p');
    const mensagemErro = document.createElement('p');
    

    form.appendChild(mensagemSucesso);
    form.appendChild(mensagemErro);
    
    //Valida o telefone
    function validarTelefone(telefone) {
        const telefoneRegex = /^\(\d{2}\) \d{5}-\d{4}$/;
        return telefoneRegex.test(telefone);
    }

    //Validar e-mail
    function validarEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Mensagens de erro
    function exibirMensagemErro(erro) {
        mensagemErro.textContent = erro;
        mensagemErro.style.display = 'block';
        mensagemSucesso.style.display = 'none';
    }

    // Função para exibir mensagem de sucesso
    function exibirMensagemSucesso(sucesso) {
        mensagemSucesso.textContent = sucesso;
        mensagemSucesso.style.display = 'block';
        mensagemErro.style.display = 'none';
    }

    // Validação completa do formulário
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Validar nome
        if (nomeInput.value.trim() === '') {
            exibirMensagemErro('Por favor, preencha seu nome.');
            return;
        }

        // Validar email
        if (!validarEmail(emailInput.value.trim())) {
            exibirMensagemErro('Por favor, insira um email válido.');
            return;
        }
        // Função para validar e formatar o telefone
function validarTelefone(telefone) {
    // Esta regex permite números no formato (XX) XXXXX-XXXX ou (XX) XXXX-XXXX
    const telefoneRegex = /^\(\d{2}\) \d{4,5}-\d{4}$/;
    return telefoneRegex.test(telefone);
}
        // Validar mensagem
        if (mensagemInput.value.trim() === '') {
            exibirMensagemErro('Por favor, escreva sua mensagem.');
            return;
        }

        // Simular envio via AJAX
        const dadosFormulario = {
            nome: nomeInput.value.trim(),
            email: emailInput.value.trim(),
            telefone: telefoneInput.value.trim(),
            mensagem: mensagemInput.value.trim()
        };

        // Simulação de AJAX para envio de formulário
        setTimeout(function() {
            exibirMensagemSucesso('Sua mensagem foi enviada com sucesso! Entraremos em contato em breve.');
            form.reset();
        }, 1000);
    });
});
