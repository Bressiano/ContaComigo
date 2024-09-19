document.addEventListener('DOMContentLoaded', () => {
    const personagemImagem = localStorage.getItem('personagemEscolhido');
    if (personagemImagem) {
        const profilePicture = document.getElementById('profile-picture');
        if (profilePicture) {
            profilePicture.src = `imagens/personagens/${personagemImagem}`;
        }
    }
});

function escolherPersonagem(imagem) {
    localStorage.setItem('personagemEscolhido', imagem);
    const profilePicture = document.getElementById('profile-picture');
    if (profilePicture) {
        profilePicture.src = `imagens/personagens/${imagem}`;
    }
    alert('Personagem escolhido com sucesso!');
}

function toggleDropdown() {
    const cmdExpandir = document.getElementById('cmdExpandir');
    if (cmdExpandir.style.display === 'none') {
        cmdExpandir.style.display = 'block';
    } else {
        cmdExpandir.style.display = 'none';
    }
}
