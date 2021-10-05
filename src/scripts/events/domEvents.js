import getJoke from '../helpers/jokeData';
import { showJoke, getAnotherJokeBtn } from '../components/showJoke';

const domEventListeners = () => {
  document.querySelector('#mainContainer').addEventListener('click', (e) => {
    const target = e.target.id;

    if (target.includes('getJokeBtn')) {
      getJoke().then(showJoke);
    }

    if (target.includes('getPunchlineBtn')) {
      document.querySelector('#punchlineContainer').style.display = 'block';
      getAnotherJokeBtn();
    }
  });
};

export default domEventListeners;
