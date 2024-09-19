function escolherPersonagem(imgSrc) {
    localStorage.setItem('perfilImg', imgSrc);
    atualizarPerfil();
}

function atualizarPerfil() {
    const perfilNav = document.getElementById('perfilNav');
    const imgSrc = localStorage.getItem('perfilImg');
    if (imgSrc) {
        perfilNav.innerHTML = `<img src="${imgSrc}" alt="Foto de perfil">`;
    }
}

document.addEventListener('DOMContentLoaded', atualizarPerfil);

               
document.addEventListener('DOMContentLoaded', function() {
var profilePicture = localStorage.getItem('profilePicture');
if (profilePicture) {
 document.getElementById('profile-picture').src = profilePicture;
}
});




