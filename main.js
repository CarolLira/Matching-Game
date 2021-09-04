import './styles/elements/base.scss';
import './styles/generic/reset.scss';
import CardGame from './src/components/CardGame';
import PlayerName from './src/components/PlayerName';

/* Apresentação dos 3 desafios do Módulo 01.
1. Criar 6 CardGame na tela;
2. Criar o component que representa o nome dos jogadores;
3. Criar o verso do CardGame e a mecânica de virar a carta quando o player clicar nela. */

const $app = document.querySelector('#app');
const cardsNumber = 6;

function showCards(number) {
    let i = 0, cards = '';
    while (i < number) {
        cards += CardGame(i);
        i++;
    }
    $app.innerHTML = cards;
}

function turnCard() {
    const cards = Array.from(document.querySelectorAll('.card-game'));
    cards.forEach(card => {
        card.addEventListener('click', () => {
            card.innerHTML = `<img src="images/javascript.svg" alt="Logo do Javascript">`;
        });
    });
}

showCards(cardsNumber);
turnCard();

