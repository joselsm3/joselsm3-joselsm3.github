document.addEventListener('DOMContentLoaded', function() {
    const addSchoolButton = document.querySelector('.add_escola');
    const schoolsContainer = document.querySelector('.escolas');

    addSchoolButton.addEventListener('click', function(event) {
        event.preventDefault();

        const newSchoolDiv = document.createElement('div');
        newSchoolDiv.classList.add('escola');

        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = 'Nome da Nova Escola';
        input.classList.add('new_school_input');

        newSchoolDiv.appendChild(input);

        schoolsContainer.insertBefore(newSchoolDiv, addSchoolButton);

        input.focus();

        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const schoolNameDiv = document.createElement('div');
                schoolNameDiv.classList.add('escola');
                schoolNameDiv.textContent = input.value; 

                schoolsContainer.replaceChild(schoolNameDiv, newSchoolDiv);

                input.removeEventListener('keypress', arguments.callee);
            }
        });
    });
});


const mensagensDiv = document.querySelector('.mensagens');
const inputMensagem = document.querySelector('.input_mensagem');
const button = document.querySelector('.send-button');

function manda_msg() {
    if (inputMensagem.value != '') {
        const msg = document.createElement('div');
        msg.innerHTML = inputMensagem.value;
        inputMensagem.value = '';
        msg.className = 'mensagem_propria';
        mensagensDiv.appendChild(msg);  
    }
}

button.addEventListener('click', function() {manda_msg()});
inputMensagem.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        manda_msg()
    }
});


if (localStorage.getItem('username') != null) {
    username_mensagem = document.querySelector('.username_mensagem')
    username_mensagem.innerHTML = localStorage.getItem('username')
}