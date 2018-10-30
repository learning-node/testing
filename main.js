// Grab main div
const mainDiv = document.getElementById('x');

// Adding another div
const output = document.createElement('div');
mainDiv.appendChild(output);


// Make a text input
const textInput = document.createElement('input');
textInput.type = 'text';

// Add text input to main div
mainDiv.appendChild(textInput);

textInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', '/cap', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onload = () => {
            output.textContent = xhr.responseText;
        };
        const payload = {
            stuff: event.target.value
        };
        xhr.send(JSON.stringify(payload));
    }
})