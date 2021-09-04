import './style.scss';
import CardGame from '../../components/CardGame';

function BoardGame(amoutCards) {
    const $cardGame = CardGame();
    const $content = $cardGame.repeat(amoutCards)
    
    return `
        <section class="board-game">
            ${$content}
        </section>
    `;
}

export default BoardGame;
