document.addEventListener('DOMContentLoaded', function() {
    // Simulando a obtenção de dados de usuário pré-existentes
    var dadosUsuario = {
        nome: "Nome Padrão",
        email: "email@exemplo.com"
    };

    function excluirConta() {
        var confirmar = confirm('Você tem certeza que deseja excluir sua conta? Esta ação não pode ser desfeita.');
        if (confirmar) {
            // Simulando a exclusão da conta (removendo os dados do usuário)
            var dadosUsuario = {
                nome: "",
                email: ""
            };
    
            // Atualizando os campos do formulário
            document.getElementById('nome').value = dadosUsuario.nome;
            document.getElementById('email').value = dadosUsuario.email;
    
            // Outras ações podem ser adicionadas aqui, como redirecionamento ou exibição de mensagem
            alert('Conta excluída com sucesso!');
            console.log('Conta excluída.');
        }
    }
    
});



function excluirConta() {
    var confirmar = confirm('Você tem certeza que deseja excluir sua conta? Esta ação não pode ser desfeita.');
    if (confirmar) {
        // Simulando a exclusão da conta (removendo os dados do usuário)
        var dadosUsuario = {
            nome: "",
            email: ""
        };

        // Atualizando os campos do formulário
        document.getElementById('nome').value = dadosUsuario.nome;
        document.getElementById('email').value = dadosUsuario.email;

        // Você também pode adicionar outras ações, como redirecionamento para a página inicial, etc.
        alert('Conta excluída com sucesso!');
        console.log('Conta excluída.');
    }
}

function mostrarSecao(secaoId) {
    var secoes = document.querySelectorAll('.secaoConfig');
    secoes.forEach(function(secao) {
        secao.style.display = 'none';
    });

    var secaoSelecionada = document.getElementById(secaoId);
    if (secaoSelecionada) {
        secaoSelecionada.style.display = 'block';
    }
}



     // Simulação de dados de suspensão e publicação
     let suspensao = [
        { motivo: "Comportamento inadequado", data:("17/06/2024"), mensagem: "Discurso de ódio" },
        // Adicione outras suspensões aqui
    ];

    // Limite máximo de suspensões antes do banimento
    const MAX_SUSPENSOES = 3;

    // Função para exibir histórico de suspensões
    function mostrarSuspensao() {
        let listaSuspensao = document.getElementById("listaSuspensao");
        listaSuspensao.innerHTML = ""; // Limpa a lista

        // Adiciona a publicação denunciada, se existir
        suspensao.forEach(function(susp) {
            if (susp.mensagem === "Discurso de ódio") {
                let li = document.createElement("li");
                li.textContent = `Publicação Denunciada: ${susp.mensagem}`;
                li.classList.add("publicacaoDenunciada");
                listaSuspensao.appendChild(li);
            }
        });

        // Adiciona um espaçamento
        if (suspensao.length > 0) {
            listaSuspensao.appendChild(document.createElement("hr"));
        }

        // Adiciona cada suspensão à lista
        suspensao.forEach(function(susp) {
            let li = document.createElement("li");
            li.textContent = `Motivo: ${susp.motivo}, Data: ${susp.data.toDateString()}, Mensagem: ${susp.mensagem}`;
            listaSuspensao.appendChild(li);
        });

        // Se atingiu o limite máximo de suspensões, exibe mensagem de banimento
        if (suspensao.length >= MAX_SUSPENSOES) {
            let li = document.createElement("li");
            li.textContent = `Você atingiu o limite máximo de suspensões. Sua conta foi banida.`;
            listaSuspensao.appendChild(li);
        }
    }

    // Chama a função para mostrar suspensões ao carregar a página
    mostrarSuspensao();

    function mostrarSecao(secaoId) {
        // Oculta todas as seções
        var secoes = document.querySelectorAll('.secaoConfig');
        secoes.forEach(function(secao) {
            secao.style.display = 'none';
        });
    
        // Mostra a seção desejada
        var secao = document.getElementById(secaoId);
        if (secao) {
            secao.style.display = 'block';
    
            // Verifica se a seção é a de personagem e adiciona a mensagem
            if (secaoId === 'personagem') {
                var mensagem = document.createElement('p');
                var link = document.createElement('a');
                link.href = 'personagens.html';
                link.className = 'linkVermelho';
                mensagem.appendChild(link);
                secao.appendChild(mensagem);
            }
        }
    }
    
    // Exemplo de uso:
    mostrarSecao('personagem'); // Isso fará com que a seção de personagem seja exibida com a mensagem e o link
    