// Elementos
const text = document.getElementById('carta-texto');
const button = document.getElementById('criar-carta');
const letter = document.getElementById('carta-gerada');

// Requisito 3 - Deve haver um botão com id="criar-carta" e ao clicar nesse botão, a carta misteriosa deve ser gerada.

function generateLetter() {
  let words = text.value.split(' ');
  letter.innerHTML = '';

  for (let index = 0; index < words.length; index += 1) {
    let span = document.createElement('span');
    span.textContent = words[index];
    letter.appendChild(span);
  }

  console.log(words);
}

button.addEventListener('click', generateLetter);
