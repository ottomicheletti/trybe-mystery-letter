// Elementos
const text = document.getElementById('carta-texto');
const button = document.getElementById('criar-carta');
const letter = document.getElementById('carta-gerada');

const style = ['newspaper', 'magazine1', 'magazine2'];
const size = ['medium', 'big', 'reallybig'];
const rotation = ['rotateleft', 'rotateright'];
const skew = ['skewleft', 'skewright'];

// Requisito 3, 4, 5, 16 e 18 - Deve haver um botão com id="criar-carta" e ao clicar nesse botão, a carta misteriosa deve ser gerada. Ao criar uma carta através do botão com id="criar-carta", o input com id="carta-texto" deve permanecer com o texto digitado. Se a pessoa usuária não preencher o campo ou preencher com apenas espaços vazios adicionar a mensagem 'Por favor, digite o conteúdo da carta.'. Adicione as classes de forma aleatória a fim de estilizar as palavras.
function generateLetter() {
  if (text.value === '' || text.value === ' ') {
    letter.innerHTML = 'Por favor, digite o conteúdo da carta.';
  } else {
    const words = text.value.split(' ');
    const counter = document.getElementById('carta-contador');

    counter.innerText = words.length;
    letter.innerText = null;

    for (let index = 0; index < words.length; index += 1) {
      const span = document.createElement('span');
      const random3 = Math.floor(Math.random() * 3);
      const random2 = Math.floor(Math.random() * 2);

      span.classList.add(
        style[random3],
        size[random3],
        rotation[random2],
        skew[random2]
      );
      span.textContent = words[index];
      letter.appendChild(span);
    }
  }
}

button.addEventListener('click', generateLetter);

// 17 - Com uma carta misteriosa gerada, adicione a possibilidade de alterar o estilo de uma palavra específica ao clicar nela
function changeStyle(event) {
  if (event.target.className.length > 0) {
    event.target.className = '';
    const random3 = Math.floor(Math.random() * 3);
    const random2 = Math.floor(Math.random() * 2);

    event.target.classList.add(
      style[random3],
      size[random3],
      rotation[random2],
      skew[random2]
    );
  }
}

letter.addEventListener('click', changeStyle);
