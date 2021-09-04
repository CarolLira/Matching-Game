import './style.scss';

function CardGame(index) {
    return `
        <article class="card-game" id="${index}">
            <img src="images/alura.svg" alt="Logo da Alura">
        </article>
    `;
}

export default CardGame;
