document.addEventListener('DOMContentLoaded', function() {
    const profilePicture = document.getElementById('profile-picture');
    const fotoPerfil = localStorage.getItem('fotoPerfil');
    
    if (fotoPerfil) {
        profilePicture.src = `imagens/personagens/${fotoPerfil}`;
    }
});

function escolherPersonagem(imagem) {
    localStorage.setItem('fotoPerfil', imagem);
    alert('Personagem escolhido com sucesso!');
    window.location.reload(); // Atualiza a página para refletir a mudança
}
