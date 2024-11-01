const palavrasProibidas = [
    'racismo', 'homofobia', 'transfobia', 'xenofobia', 'sexismo', 'misoginia', 'misandria', 'bullying', 'assédio', 'violência',
    'ódio', 'nazismo', 'fascismo', 'terrorismo', 'pedofilia', 'discriminação', 'preconceito', 'genocídio', 'intolerância', 
    'segregação', 'elitismo', 'etnocentrismo', 'capacitismo', 'islamofobia', 'antissemita', 'ageísmo', 'toxicidade', 'machismo', 
    'heteronormatividade', 'supremacia branca', 'ódio racial', 'perseguição religiosa', 'violência doméstica', 'abuso', 'discurso de ódio', 
    'mutilação', 'exclusão social', 'marginalização', 'humilhação', 'superioridade racial', 'nacionalismo extremo', 'supremacia de gênero', 
    'hostilidade', 'vandalismo', 'conspiração racista', 'teoria da conspiração', 'fake news', 'assédio moral', 'abuso infantil', 
    'discurso anticiência', 'branquelas', 'sapatão', 'beesha', 'galego', 'zé povinho', 'pobretão', 'varapau', 'raquítico', 'japa', 
    'arroz de festa', 'mão de vaca', 'boca de sino', 'carola', 'bitolado', 'demônio', 'capeta', 'ateu safado', 'crentelho', 'bíblia', 
    'fanático', 'burro', 'mongoloide', 'surdo-mudo', 'doente mental', 'maníaco'
];

const palavrasChave = [
    'depressão', 'ansiedade', 'estresse', 'tristeza', 'solidão', 'angústia', 'medo', 'desesperança', 'insegurança', 'pânico', 
    'suicídio', 'autolesão', 'transtorno obsessivo-compulsivo', 'transtorno de estresse pós-traumático', 'bipolaridade', 'insônia', 
    'fobia', 'dificuldade emocional', 'desespero', 'crise emocional', 'burnout', 'trauma', 'luto', 'abatimento', 'desânimo', 
    'fragilidade emocional', 'síndrome do pânico', 'transtorno alimentar', 'autismo', 'cansaço emocional', 'vazio existencial', 
    'desamparo', 'frustração', 'culpa', 'vergonha', 'desmotivação', 'perda', 'rejeição', 'nervosismo', 'paranoia', 'pavor', 
    'estresse pós-traumático', 'irritabilidade', 'inquietação', 'desconforto emocional', 'transtorno de personalidade', 
    'distúrbio de sono', 'fadiga', 'exaustão'
];

const tentativasProibidas = {};
const limiteTentativas = 3;

function mostrarFormPublicacao() {
    document.getElementById('formPublicacao').style.display = 'block';
}

function criarPublicacao() {
    const conteudoPublicacao = document.getElementById('conteudoPublicacao').value;
    const usuario = 'usuarioExemplo'; // Substitua pelo identificador real do usuário

    if (tentativasProibidas[usuario] >= limiteTentativas) {
        alert('Você foi temporariamente banido de publicar devido a repetidas violações.');
        return;
    }

    if (conteudoPublicacao.trim() === '') {
        alert('A publicação não pode ser vazia');
        return;
    }

    if (contémPalavraProibida(conteudoPublicacao)) {
        mostrarMensagemProibida();
        registrarTentativaProibida(usuario);
        return;
    }

    if (contémPalavraChave(conteudoPublicacao)) {
        mostrarMensagemApoio();
    }

    const listaPublicacoes = document.getElementById('listaPublicacoes');
    const divPublicacao = document.createElement('div');
    divPublicacao.classList.add('publicacao');

    const pConteudo = document.createElement('p');
    pConteudo.textContent = conteudoPublicacao;

    const btnComentario = document.createElement('button');
    btnComentario.textContent = 'Comentar';
    btnComentario.onclick = function() {
        const divComentario = document.createElement('div');
        divComentario.classList.add('comentario');

        const textareaComentario = document.createElement('textarea');
        textareaComentario.placeholder = 'Escreva seu comentário...';

        const btnPublicarComentario = document.createElement('button');
        btnPublicarComentario.textContent = 'Publicar Comentário';
        btnPublicarComentario.onclick = function() {
            const conteudoComentario = textareaComentario.value;

            if (tentativasProibidas[usuario] >= limiteTentativas) {
                alert('Você foi temporariamente banido de comentar devido a repetidas violações.');
                return;
            }

            if (conteudoComentario.trim() === '') {
                alert('O comentário não pode ser vazio');
                return;
            }

            if (contémPalavraProibida(conteudoComentario)) {
                mostrarMensagemProibida();
                registrarTentativaProibida(usuario);
                return;
            }

            if (contémPalavraChave(conteudoComentario)) {
                mostrarMensagemApoio();
            }

            const pComentario = document.createElement('p');
            pComentario.textContent = conteudoComentario;

            const btnDenunciarComentario = document.createElement('button');
            btnDenunciarComentario.textContent = 'Denunciar';
            btnDenunciarComentario.onclick = function() {
                mostrarNotificacao();
            };

            divComentario.innerHTML = '';
            divComentario.appendChild(pComentario);
            divComentario.appendChild(btnDenunciarComentario);
        };

        divComentario.appendChild(textareaComentario);
        divComentario.appendChild(btnPublicarComentario);
        divPublicacao.appendChild(divComentario);
    };

    const btnDenunciarPublicacao = document.createElement('button');
    btnDenunciarPublicacao.textContent = 'Denunciar';
    btnDenunciarPublicacao.onclick = function() {
        mostrarNotificacao();
    };

    divPublicacao.appendChild(pConteudo);
    divPublicacao.appendChild(btnComentario);
    divPublicacao.appendChild(btnDenunciarPublicacao);
    listaPublicacoes.appendChild(divPublicacao);

    document.getElementById('conteudoPublicacao').value = '';
    document.getElementById('formPublicacao').style.display = 'none';
}

function contémPalavraProibida(texto) {
    for (let palavra of palavrasProibidas) {
        if (texto.toLowerCase().includes(palavra.toLowerCase())) {
            return true;
        }
    }
    return false;
}

function contémPalavraChave(texto) {
    for (let palavra of palavrasChave) {
        if (texto.toLowerCase().includes(palavra.toLowerCase())) {
            return true;
        }
    }
    return false;
}

function registrarTentativaProibida(usuario) {
    if (!tentativasProibidas[usuario]) {
        tentativasProibidas[usuario] = 0;
    }
    tentativasProibidas[usuario]++;
}

function mostrarMensagemProibida() {
    const mensagemProibida = document.createElement('div');
    mensagemProibida.classList.add('mensagemProibida');
    mensagemProibida.innerHTML = `
        <div style="max-width: 400px; padding: 20px; background-color: #ffcccc; border: 2px solid red; border-radius: 10px; text-align: center; position: fixed; top: 20px; left: 50%; transform: translateX(-50%); color: black; z-index: 1000;">
            <img src="imagens/bloqueado.svg" alt="Aviso" style="width: 4rem; height: 4rem; display: block; margin: 0 auto 10px;">
            <p>Seu texto contém palavras proibidas. Por favor, revise sua publicação e tente novamente.</p>
            <p style="color: red; font-weight: bold;">Assegure-se de evitar palavras ofensivas ou prejudiciais.</p>
        </div>
    `;
    document.body.appendChild(mensagemProibida);
    setTimeout(() => {
        document.body.removeChild(mensagemProibida);
    }, 4000); // A mensagem será removida após 4 segundos
}


function mostrarMensagemApoio() {
    const mensagemApoio = document.createElement('div');
    mensagemApoio.classList.add('mensagemApoio');
    mensagemApoio.innerHTML = `
        <div style="max-width: 300px; margin: auto; padding: 20px; background-color: #f3f3f3; border-radius: 10px; text-align: center; position: relative;">
            <button style="position: absolute; top: 10px; right: 10px; background: none; border: none; font-size: 16px; cursor: pointer;">&times;</button>
            <p>Você não está sozinho(a). Sua coragem ao compartilhar seus sentimentos é o primeiro passo para buscar ajuda e encontrar alívio. Há pessoas dispostas a ouvir, apoiar e ajudar você a atravessar este momento difícil. Por favor, entre em contato com uma linha de apoio, um profissional de saúde mental ou alguém em que confie.</p>
            <p style="color: purple; font-weight: bold;">Sua vida é preciosa e você merece apoio e cuidado!</p>
            <img src="imagens/mao.png" alt="Mão segurando coração" style="width: 50px; height: 50px;">
        </div>
    `;

    const closeButton = mensagemApoio.querySelector('button');
    closeButton.onclick = function() {
        document.body.removeChild(mensagemApoio);
    };

    document.body.appendChild(mensagemApoio);
}



function mostrarNotificacao() {
    const notificacao = document.getElementById('notification');
    notificacao.style.display = 'block';
    setTimeout(() => {
        notificacao.style.display = 'none';
    }, 3000);
}
