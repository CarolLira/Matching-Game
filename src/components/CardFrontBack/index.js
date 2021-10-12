import './style.scss';
import CardGame from '../CardGame';

function CardFrontBack() {
    return /*html*/`
        <article class="card-front-back">
            <div class="front">
                ${CardGame('alura', 'Logo da Alura')}
            </div>
            <div class="back">
                ${CardGame('javascript', 'Logo do Javascript')}
            </div>
        </article>
    `;
}

export default CardFrontBack;
