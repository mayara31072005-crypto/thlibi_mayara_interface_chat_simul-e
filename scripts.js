const messageForm = document.getElementById('message-form');
const messageInput = document.getElementById('message-input');
const messagesContainer = document.getElementById('messages-container');
const typingIndicator = document.getElementById('typing-indicator');
const bobLastMessageSpan = document.querySelector('#Bob .last-message');
const bobNotificationBadge = document.getElementById('bob-notification-badge'); 
const localStorageKey = 'chatMessages_'; 
let currentContactId = 'Bob';  
const BOB_RESPONSE_INDEX_KEY = 'bobResponseIndex';
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
function addMessageToDOM(text, senderId) {
    const messageWrapperDiv = document.createElement('div');
    messageWrapperDiv.classList.add('message', contactData[senderId].messageClass);
    const avatarImg = document.createElement('img');
    avatarImg.src = contactData[senderId].avatarSmall;
    avatarImg.alt = `Avatar ${contactData[senderId].name}`;
    avatarImg.classList.add('avatar-small');
    const messageContentDiv = document.createElement('div');
    messageContentDiv.classList.add('message-content');
    messageContentDiv.textContent = text;
    messageWrapperDiv.classList.add('new');
    setTimeout(() => {
        messageWrapperDiv.classList.remove('new');
    }, 300);
    messageWrapperDiv.appendChild(avatarImg);
    messageWrapperDiv.appendChild(messageContentDiv);
    messagesContainer.appendChild(messageWrapperDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    saveMessages(); 
}
function loadMessages(contactId) {
    messagesContainer.innerHTML = ''; 
    const key = localStorageKey + contactId;
    const savedMessages = localStorage.getItem(key);
    if (savedMessages) {
        const messages = JSON.parse(savedMessages);
        messages.forEach(msg => {
            addMessageToDOMWithoutAnimation(msg.text, msg.sender);
        });
    }
}
function addMessageToDOMWithoutAnimation(text, senderId) {
    const messageWrapperDiv = document.createElement('div');
    messageWrapperDiv.classList.add('message', contactData[senderId].messageClass);
    const avatarImg = document.createElement('img');
    avatarImg.src = contactData[senderId].avatarSmall;
    avatarImg.alt = `Avatar ${contactData[senderId].name}`;
    avatarImg.classList.add('avatar-small');
    const messageContentDiv = document.createElement('div');
    messageContentDiv.classList.add('message-content');
    messageContentDiv.textContent = text;
    messageWrapperDiv.appendChild(avatarImg);
    messageWrapperDiv.appendChild(messageContentDiv);
    messagesContainer.appendChild(messageWrapperDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}
function simulateResponse() {
    if (currentContactId !== 'Bob') {
        bobNotificationBadge.classList.remove('hidden');
        return; 
    }
    let responseIndex = parseInt(localStorage.getItem(BOB_RESPONSE_INDEX_KEY)) || 0;
    const responses = contactData['Bob'].responses;
    const responseLength = responses.length;
    if (responseLength === 0) return;
    const currentResponse = responses[responseIndex];
    const nextResponseIndex = (responseIndex + 1) % responseLength;
    localStorage.setItem(BOB_RESPONSE_INDEX_KEY, nextResponseIndex.toString());
    typingIndicator.classList.remove('hidden');
    bobLastMessageSpan.classList.add('hidden'); 
    const delay = Math.random() * 1000 + 1000; 
    setTimeout(() => {
        typingIndicator.classList.add('hidden');
        bobLastMessageSpan.classList.remove('hidden'); 
        bobLastMessageSpan.textContent = currentResponse;
        addMessageToDOM(currentResponse, 'Bob'); 
    }, delay);
}