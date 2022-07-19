/* eslint-disable import/no-cycle */
/* eslint-disable import/no-mutable-exports */

import './index.css';
import {
  load,
  add,
  clear,
} from './modules/functions.js';

let scores = [];

if (JSON.parse(localStorage.getItem('scores'))) {
  scores = JSON.parse(localStorage.getItem('scores'));
}

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
  scores,
  score,
  left,
};