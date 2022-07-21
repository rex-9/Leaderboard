/* eslint-disable import/no-cycle */
/* eslint-disable import/no-mutable-exports */

import './style.css';
import {
  apiCall,
  load,
  add,
  clear,
} from './modules/functions.js';

await apiCall();

const left = document.querySelector('.left');
const score = document.getElementById('score');

const submit = document.getElementById('submit');
const refresh = document.getElementById('refresh');

load();

score.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    add();
    e.preventDefault();
  }
});

submit.addEventListener('click', (e) => {
  add();
  e.preventDefault();
});

refresh.addEventListener('click', (e) => {
  clear();
  e.preventDefault();
});

export {
  score,
  left,
};