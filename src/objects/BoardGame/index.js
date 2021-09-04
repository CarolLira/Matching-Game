import './style.scss';
import CardFrontBack from '../../components/CardFrontBack';

function BoardGame(amoutCards) {
    const $cardFrontBack = CardFrontBack();
    const $content = $cardFrontBack.repeat(amoutCards)
    
    return /*html*/`
        <section class="board-game">
            ${$content}
        </section>
    `;
}

export default BoardGame;
