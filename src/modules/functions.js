/* eslint-disable import/no-cycle */

import {
  score,
  left,
} from '../index.js';

let scores;
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/SSGbndo2H1p1mU5MNLum/scores';

const apiCall = async () => {
  const req = new Request(url);
  const res = await fetch(req);
  const json = await res.json();
  scores = json.result;
};

const load = () => {
  if (scores !== null && scores.length !== 0) {
    const trs = [];
    const table = document.createElement('table');
    const tbody = document.createElement('tbody');
    left.appendChild(table);
    table.appendChild(tbody);
    scores.forEach((score) => {
      const tr = document.createElement('tr');
      const td = document.createElement('td');
      td.style.cssText = 'padding: 5px 0 5px 10px;';
      td.innerHTML = `${score.user}: ${score.score}`;
      const tbody = document.querySelector('tbody');
      tbody.appendChild(tr);
      tr.appendChild(td);
      trs.push(tr);
    });
    for (let i = 0; i < trs.length; i += 1) {
      if (i % 2 !== 0) {
        trs[i].style.cssText = 'background-color: gainsboro;';
      }
    }
  } else {
    const noScore = document.createElement('p');
    noScore.innerHTML = 'There is no score yet.';
    left.appendChild(noScore);
  }
};

const add = async () => {
  const name = document.getElementById('name');
  if (name.value === '' || score.value === '') {
    const right = document.querySelector('.right');
    const error = document.createElement('p');
    error.innerHTML = 'The forms should not be empty!';
    error.style.cssText = 'color: red;';
    right.appendChild(error);
  } else {
    const data = {
      method: 'POST',
      body: JSON.stringify({
        user: name.value,
        score: score.value,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    };

    const req = new Request(url);
    await fetch(req, data);
    window.location.reload();
  }
};

const clear = () => {
  window.location.reload();
};

export {
  apiCall,
  load,
  add,
  clear,
};