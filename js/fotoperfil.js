function openMenu() {
  const menu = document.getElementById('menu');
  menu.style.display = 'flex'; // Mostra o menu em tela cheia
}

function closeMenu() {
  const menu = document.getElementById('menu');
  menu.style.display = 'none'; // Oculta o menu
}
const accessButton = document.getElementById("accessButton");
const accessCard = document.getElementById("accessCard");

accessButton.addEventListener("click", () => {
    accessCard.classList.toggle("hidden");
});

function zoomIn() {
    document.body.style.zoom = (parseFloat(document.body.style.zoom || 1) + 0.1).toString();
}

function zoomOut() {
    document.body.style.zoom = Math.max(parseFloat(document.body.style.zoom || 1) - 0.1, 0.5).toString();
}

function increaseFont() {
    document.body.style.fontSize = (parseFloat(getComputedStyle(document.body).fontSize) + 2) + "px";
}

function decreaseFont() {
    document.body.style.fontSize = Math.max(parseFloat(getComputedStyle(document.body).fontSize) - 2, 10) + "px";
}

function toggleDaltonicMode() {
    document.body.classList.toggle("daltonic-mode");
}

function toggleLightDarkMode() {
    document.body.classList.toggle("dark-mode");
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




