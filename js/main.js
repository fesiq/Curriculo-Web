// Event liastener para carregamento do DOM
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM totalmente carregado.');
    const userAgent = window.navigator.userAgent;
    console.log('User Agent: ', userAgent);
});

// Event listener para o link do email
document.getElementById('mailadd').addEventListener('click', function () {
    console.log('Usuário clicou no link de email.');
});

// Event listener para o link do LinkedIn
document.getElementById('linkedin').addEventListener('click', function () {
    console.log('Usuário clicou no link do LinkedIn.');
});

// Event listener para o link do GitHub
document.getElementById('github').addEventListener('click', function () {
    console.log('Usuário clicou no link do GitHub.');
});