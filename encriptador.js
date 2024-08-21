function encriptar() {
    let entrada = document.getElementById('entrada').value;
    let mensaje = document.getElementById('mensaje');
    let copyButton = document.getElementById('copyButton');
    let shift = 3;

    let textoCifrado = entrada
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    if (entrada.trim() !== "") {
        const encriptado = encryptText(textoCifrado, shift);
        updateSalida(encriptado);
        mensaje.classList.add('hidden');
        copyButton.style.display = 'block';
    } else {
        clearSalida();
    }
}

function desencriptar() {
    const entrada = document.getElementById('entrada').value;
    const mensaje = document.getElementById('mensaje');
    const copyButton = document.getElementById('copyButton');
    const shift = 3;

    let textoDesencriptado = entrada
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    if (entrada.trim() !== "") {
        const desencriptado = decryptText(textoDesencriptado, shift);
        updateSalida(desencriptado);
        mensaje.classList.add('hidden');
        copyButton.style.display = 'block';
    } else {
        clearSalida();
    }
}

function handleInput() {
    const entrada = document.getElementById('entrada').value;
    if (entrada.trim() === "") {
        clearSalida();
    }
}

function updateSalida(input) {
    const contenido = document.getElementById('contenido');
    const item = document.getElementById('item');
    const mensaje = document.getElementById('mensaje');
    const copyButton = document.getElementById('copyButton');

    item.style.display = 'none';
    mensaje.style.display = 'none';

    const output = document.createElement('div');
    output.textContent = input;
    output.style.padding = '20px';
    output.style.textAlign = 'center';
    output.style.color = '#343A40';
    output.style.whiteSpace = 'pre-wrap';
    contenido.innerHTML = '';
    contenido.appendChild(output);
    copyButton.style.display = 'block';
}

function clearSalida() {
    const contenido = document.getElementById('contenido');
    const item = document.getElementById('item');
    const mensaje = document.getElementById('mensaje');
    const copyButton = document.getElementById('copyButton');

    item.style.display = 'block';
    mensaje.style.display = 'block';
    contenido.innerHTML = '';
    contenido.appendChild(item);
    contenido.appendChild(mensaje);
    copyButton.style.display = 'none';
}

function copyToClipboard() {
    const texto = document.querySelector('#contenido > div').textContent;
    navigator.clipboard.writeText(texto)
        .then(() => alert('Texto copiado al portapapeles'))
        .catch(err => console.error('Error al copiar al portapapeles: ', err));
}

// Dummy implementations for encryptText and decryptText
// Replace these with actual encryption and decryption logic
function encryptText(text, shift) {
    // Dummy encryption (Caesar cipher as an example)
    return text; // Implement your actual encryption logic here
}

function decryptText(text, shift) {
    // Dummy decryption (Caesar cipher as an example)
    return text; // Implement your actual decryption logic here
}
