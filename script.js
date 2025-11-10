const inputNome = document.getElementById('nome');
const botao = document.getElementById('enviar');
const mensagem = document.getElementById('mensagem');

botao.addEventListener('click', function() {
  const nomeDigitado = inputNome.value; // pega o valor do input
  mensagem.textContent = `Olá, ${nomeDigitado}! Seja bem-vindo!`;
  botao.style.backgroundColor = 'green';
});
