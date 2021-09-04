import './styles/generic/reset.scss';
import './styles/elements/base.scss';

// import BoardGame from './src/objects/BoardGame';
import ScoreBoard from './src/objects/ScoreBoard';
import BoardGame from './src/objects/BoardGame';

const $app = document.querySelector('#app');

$app.innerHTML = 
`
    ${ScoreBoard()}
    ${BoardGame(2)}
`;

