import CardGame from '../../components/CardGame';

function BoardGame(amoutCards) {
    const $cardGame = CardGame();
    const $boardGame = $cardGame.repeat(amoutCards)
    return $boardGame;
}

export default BoardGame;
