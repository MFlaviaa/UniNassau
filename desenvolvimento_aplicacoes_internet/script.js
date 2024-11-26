// Adicionando uma função para tratar o envio do formulário
document.querySelector('#contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Mensagem enviada com sucesso!");
});
