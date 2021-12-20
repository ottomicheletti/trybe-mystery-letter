// Elementos
const text = document.getElementById('carta-texto');
const button = document.getElementById('criar-carta');
const letter = document.getElementById('carta-gerada');

// Requisito 3, 4 e 5 - Deve haver um botão com id="criar-carta" e ao clicar nesse botão, a carta misteriosa deve ser gerada. Ao criar uma carta através do botão com id="criar-carta", o input com id="carta-texto" deve permanecer com o texto digitado. Se a pessoa usuária não preencher o campo ou preencher com apenas espaços vazios adicionar a mensagem 'Por favor, digite o conteúdo da carta.'

function generateLetter() {
  if (text.value === '' || text.value === ' ') {
    letter.innerHTML = 'Por favor, digite o conteúdo da carta.';
  } else {
    let words = text.value.split(' ');
    letter.innerText = null;

    for (let index = 0; index < words.length; index += 1) {
      let span = document.createElement('span');
      span.textContent = words[index];
      letter.appendChild(span);
    }

    console.log(words);
  }
}

button.addEventListener('click', generateLetter);
