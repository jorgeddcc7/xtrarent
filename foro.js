const form = document.getElementById('forumForm');
const messagesDiv = document.getElementById('messages');
const usernameInput = document.getElementById('username');
const namePromptDiv = document.getElementById('namePrompt');
const messageInput = document.getElementById('message');

// Verificar si ya hay un nombre guardado
if (localStorage.getItem('username')) {
    const username = localStorage.getItem('username');
    namePromptDiv.style.display = 'none'; 
    form.style.display = 'flex'; 
} else {
    form.style.display = 'none'; 
    namePromptDiv.style.display = 'block'; 
}

document.getElementById('nameSubmit').addEventListener('click', function() {
    const username = usernameInput.value;
    
    if (username) {
        localStorage.setItem('username', username);
        
        namePromptDiv.style.display = 'none';
        form.style.display = 'flex';
    } else {
        alert("Por favor, ingresa un nombre.");
    }
});

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const username = localStorage.getItem('username');
    const message = messageInput.value;

    if (username && message) {
        const msgElement = document.createElement('div');
        msgElement.classList.add('message');
        msgElement.innerHTML = `<strong>${username}</strong>: ${message}`;

        messagesDiv.appendChild(msgElement);

        messagesDiv.scrollTop = messagesDiv.scrollHeight;

        form.reset();
    }
});
