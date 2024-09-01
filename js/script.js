// Add custom JavaScript here
function runTypingEffect() {
  const text = 'I am Abhi...';
  const typingElement = document.getElementById('typing-text');
  const typingDelay = 200;

  typeText(text, typingElement, typingDelay);
}

function typeText(text, typingElement, delay) {
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      typingElement.textContent += text.charAt(i);
    }, delay * i);
  }
}

document.addEventListener('DOMContentLoaded', runTypingEffect);
