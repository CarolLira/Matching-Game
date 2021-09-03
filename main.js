import './styles/elements/base.scss';
import './styles/generic/reset.scss';
import CardGame from './src/components/CardGame';

const $app = document.querySelector('#app');
const $htmlCardGame = CardGame();

$app.innerHTML = $htmlCardGame;
