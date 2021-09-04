import './styles/elements/base.scss';
import './styles/generic/reset.scss';
import CardGame from './src/components/CardGame';
import PlayerName from './src/components/PlayerName';
import BoardGame from './src/objects/BoardGame';

/* Apresentação dos 3 desafios do Módulo 01.
1. Criar 6 CardGame na tela;
2. Criar o component que representa o nome dos jogadores;
3. Criar o verso do CardGame e a mecânica de virar a carta quando o player clicar nela. */

const $app = document.querySelector('#app');
const $boardGame = BoardGame(6);

$app.innerHTML = $boardGame;

