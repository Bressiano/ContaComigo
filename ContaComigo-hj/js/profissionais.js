const profissionaisData = {
    "Taquaritinga": [
        {
            "tipo": "Psicóloga",  "nome": "Maria Clara da Silva",
           
            "foto": "imagens/psicologa.jpg", // Atualize com o caminho correto da imagem
            "endereco": "Rua A, 123, Bairro X",
            "horario": "Atendimento das 8h às 18h",
            "telefone": "(16) 99123-4567",
            "email": "psicologo.taq@gmail.com"
        },
        {
            "tipo": "Terapeuta","nome": "Ricardo Alves",
            
            "foto": "imagens/terapeuta.jpg", // Atualize com o caminho correto da imagem
            "endereco": "Rua B, 456, Bairro Y",
            "horario": "Atendimento das 8h às 18h",
            "telefone": "(16) 99234-5678",
            "email": "terapeuta.taq@gmail.com"
        }
    ],
    "Matão": [
        {
            "tipo": "Psicólogo","nome": "Levi Smitt",
            
            "foto": "imagens/psi.jpg", // Atualize com o caminho correto da imagem
            "endereco": "Rua C, 789, Bairro Z",
            "horario": "Atendimento das 8h às 18h",
            "telefone": "(16) 99345-6789",
            "email": "psicologo.matao@gmail.com"
        },
        {
            "tipo": "Terapeuta", "nome": "Geni Chiara da Cruz",
           
            "foto": "imagens/psquiatra.jpg", // Atualize com o caminho correto da imagem
            "endereco": "Rua D, 101, Bairro W",
            "horario": "Atendimento das 8h às 18h",
            "telefone": "(16) 99456-7890",
            "email": "terapeuta.matao@gmail.com"
        }
    ],
    "Santa Ernestina": [
        {
            "tipo": "Psicóloga", "nome": "Maria Cecília Rodrigues",
           
            "foto": "imagens/ps.santa.jpg", // Atualize com o caminho correto da imagem
            "endereco": "Rua E, 202, Bairro V",
            "horario": "Atendimento das 8h às 18h",
            "telefone": "(16) 99567-8901",
            "email": "psicologo.se@gmail.com"
        },
        {
            "tipo": "Terapeuta", "nome": "Henrique Albuquerque",
           
            "foto": "imagens/tera.santa.jpg", // Atualize com o caminho correto da imagem
            "endereco": "Rua F, 303, Bairro U",
            "horario": "Atendimento das 8h às 18h",
            "telefone": "(16) 99678-9012",
            "email": "terapeuta.se@gmail.com"
        }
    ]
};

function atualizarProfissionais() {
    const cidade = document.getElementById('city').value;
    const profissionais = profissionaisData[cidade];

    const nomeCidadeElem = document.getElementById('nomeCidade');
    nomeCidadeElem.textContent = cidade;

    const profissionaisListaElem = document.getElementById('profissionaisLista');
    profissionaisListaElem.innerHTML = '';

    profissionais.forEach(prof => {
        const profDiv = document.createElement('div');
        profDiv.classList.add('profissional');
        profDiv.innerHTML = `
            <div class="foto" style="background-image: url('${prof.foto}');"></div>
            <div class="info">
                <h3>${prof.tipo}</h3>
                <h4>${prof.nome}</h4>
                <p>${prof.endereco}<br>${prof.horario}</p>
                <p>Telefone: ${prof.telefone}<br>Email: ${prof.email}</p>
            </div>
        `;
        profissionaisListaElem.appendChild(profDiv);
    });
}

document.addEventListener('DOMContentLoaded', atualizarProfissionais);
document.getElementById('city').addEventListener('change', atualizarProfissionais);
