// INSTRUCTORS: DO NOT directly edit this sandbox. Fork it, and place the fork inside the cohort folder.

import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import loadMainPage from './components/mainPage';
import domEventListeners from './events/domEvents';

const init = () => {
  loadMainPage();
  domEventListeners();
};

init();
