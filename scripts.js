const messagesContainer = document.getElementById('messages-container');
const localStorageKey = 'chatMessages_'; 
let currentContactId = 'Bob';  
const contactData = {
    'Alice': { 
        name: 'Alice', 
        avatar: 'image/alice.png', 
        avatarSmall: 'image/alice.png', 
        messageClass: 'sent' 
    },
    'Bob': { 
        name: 'Bob (Fictif)', 
        avatar: 'image/bob.png', 
        avatarSmall: 'image/bob.png', 
        messageClass: 'received',
        responses: [
            "J'ai bien reçu ton message !",
            "D'accord, je regarde ça.",
            "Intéressant. j'ai trop aimé ",
            "Je te réponds dans une minute.",
            "C'est une bonne idée !"
        ]
    }
};
function saveMessages() {
    const key = localStorageKey + currentContactId;
    const messages = [];
    messagesContainer.querySelectorAll('.message').forEach(msgWrapperDiv => {
        const sender = msgWrapperDiv.classList.contains('sent') ? 'Alice' : currentContactId;
        const text = msgWrapperDiv.querySelector('.message-content').textContent;
        messages.push({
            text: text,
            sender: sender 
        });
    });
    localStorage.setItem(key, JSON.stringify(messages));
}