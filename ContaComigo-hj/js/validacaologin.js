function validarFormulario() {
    // Validação do formulário
    const email = document.querySelector('input[name="email"]').value;
    const senha = document.querySelector('input[name="senha"]').value;
    const politicas = document.querySelector('input[name="politicas"]').checked;

    let formValido = true;

    // Limpa mensagens de erro
    document.getElementById('emailError').innerText = '';
    document.getElementById('senhaError').innerText = '';
    document.getElementById('politicasError').innerText = '';

    // Validação de email
    if (!email.includes('@')) {
        document.getElementById('emailError').innerText = 'O email deve conter o caractere "@" e ser do Gmail (exemplo: usuario@gmail.com).';
        formValido = false;
    }

    // Validação de senha
    if (senha.length < 8) {
        document.getElementById('senhaError').innerText = 'A senha deve ter pelo menos 8 caracteres.';
        formValido = false;
    }

    // Validação de aceitação das políticas do site
    if (!politicas) {
        document.getElementById('politicasError').innerText = 'Você deve aceitar as políticas do site.';
        formValido = false;
    }

    if (formValido) {
        // Redireciona para a página de usuário
        window.location.href = 'usuario.html';
    }

    return formValido;
}