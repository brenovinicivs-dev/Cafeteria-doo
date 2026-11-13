const botao = document.getElementById('botao');
const cardapio = document.getElementById('cardapio');

botao.addEventListener('click', () => {
  cardapio.classList.toggle('aberto');
});
/* CARROSSEL */

const trilho = document.querySelector('.trilho');
const cards = document.querySelectorAll('.card');
const btnAnterior = document.getElementById('anterior');
const btnProximo = document.getElementById('proximo');
let indice = 0;

function atualizarCarrossel() {
  const estilo = getComputedStyle(trilho);
  const visiveis = parseInt(estilo.getPropertyValue('--visiveis'));
  const espaco = parseFloat(estilo.columnGap);
  const passo = cards[0].offsetWidth + espaco;
  const maximo = cards.length - visiveis;

  if (indice > maximo) indice = maximo;
  if (indice < 0) indice = 0;

  trilho.style.transform = `translateX(-${indice * passo}px)`;
  btnAnterior.disabled = indice === 0;
  btnProximo.disabled = indice === maximo;
}

btnProximo.addEventListener('click', () => {
  indice++;
  atualizarCarrossel();
});

btnAnterior.addEventListener('click', () => {
  indice--;
  atualizarCarrossel();
});

window.addEventListener('resize', atualizarCarrossel);
atualizarCarrossel();