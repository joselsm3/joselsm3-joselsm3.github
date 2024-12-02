const posts = document.querySelectorAll(".post");

posts.forEach((post) => {
    const btn = post.querySelector('.mensagem_btn');
    
    btn.addEventListener('click', (event) => {
        event.preventDefault();
        
        // Pegue o username específico do post dentro do evento
        const username = post.querySelector('.username');
        
        if (username) {
            // Remova e defina o item no localStorage
            if (localStorage.getItem('username') !== null) {
                localStorage.removeItem('username');
            }
            localStorage.setItem('username', username.innerHTML);
            
            // Redirecione o usuário para /mensagem.html
            window.location.href = 'mensagem.html';

            username_mensagem = document.querySelector('username_mensagem')
            username_mensagem.innerHTML = localStorage.getItem('username')
        } else {
            console.error('Username element not found');
        }
    });
});