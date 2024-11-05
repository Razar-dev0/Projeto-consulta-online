const form = document.getElementById('agendamento-form');
const agendarBtn = document.getElementById('agendar-btn');

agendarBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const data = document.getElementById('data').value;
    const hora = document.getElementById('hora').value;   

    if (nome === ''|| data === '' || hora === ''){
        alert('preencha todos os campos!');
        return;
    }

    const agendamento = {
        nome,
        data,
        hora
    };
    const agendamentos = JSON.parse(localStorage.getItem('agendamentos')) || [];
    agendamentos.push(agendamento);
    localStorage.setItem('agendamentos', JSON.stringify(agendamentos));
    exibirAgendamentos();
});

function exibirAgendamentos () {
    const agendamentos = JSON.parse(localStorage.getItem('agendamentos')) || [];
    const listaAgendamentos = document.getElementById('lista-agendamentos');

    listaAgendamentos.innerHTML = '';

    agendamentos.forEach((agendamento) => {
        const li = document.createElement('li');
        li.textContent = `${agendamento.nome} - ${agendamento.data} ${agendamento.hora}`;
        listaAgendamentos.appendChild(li);
    });
}

