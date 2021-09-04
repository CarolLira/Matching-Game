import './styles/generic/reset.scss';
import './styles/elements/base.scss';

import BoardGame from './src/objects/BoardGame';
import PlayerName from './src/components/PlayerName';

/* Apresentação dos 3 desafios do Módulo 01.
1. Criar 6 CardGame na tela;
2. Criar o component que representa o nome dos jogadores;
3. Criar o verso do CardGame e a mecânica de virar a carta quando o player clicar nela. */

const $app = document.querySelector('#app');

$app.innerHTML = 
`
    ${PlayerName('Player 1')}
    ${PlayerName('Player 2')}
    ${BoardGame(6)}
`;

