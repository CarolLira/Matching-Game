import './style.scss';

function CardGame(icon = 'alura', alt = 'Logo da Alura') {
    return /*html*/`
        <article class="card-game">
            <img src="images/${icon}.svg" alt="${alt}">
        </article>
    `;
}

export default CardGame;
