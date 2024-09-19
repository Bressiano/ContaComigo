// Seleciona o botão "Escolher personagem" pelo ID
var escolherAmendoimBtn = document.getElementById('escolherAmendoimBtn');

// Adiciona um ouvinte de evento de clique ao botão
escolherAmendoimBtn.addEventListener('click', function() {
    // Seleciona a imagem do perfil pelo ID
    var profilePicture = document.getElementById('profile-picture');
    // Define o atributo src da imagem do perfil para a nova imagem
    profilePicture.src = 'imagens/esquilo.png'; // Substitua 'imagens/esquilo.png' pelo caminho da nova imagem de perfil (Amendoim)
});

// Seleciona o botão "Escolher personagem" pelo ID
var escolherfloraBtn = document.getElementById('escolherfloraBtn');

// Adiciona um ouvinte de evento de clique ao botão
escolherfloraBtn.addEventListener('click', function() {
    // Seleciona a imagem do perfil pelo ID
    var profilePicture = document.getElementById('profile-picture');
    // Define o atributo src da imagem do perfil para a nova imagem
    profilePicture.src = 'imagens/flora.png'; // Substitua 'flora/esquilo.png' pelo caminho da nova imagem de perfil (flora)
});