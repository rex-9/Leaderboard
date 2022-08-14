/* eslint-disable import/no-cycle */

import {
  score,
  left,
} from '../index.js';

let scores;
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/CdA4w2WAqVnyQ7iO5YIp/scores';

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
        trs[i].style.cssText = 'background-color: #002a1e; color: #09f9ae;';
      } else {
        trs[i].style.cssText = 'background-color: #09f9ae; color: #002a1e;';
      }
    }
  } else {
    const noScore = document.createElement('p');
    noScore.style.cssText = 'color: gray; margin-bottom: 25px; padding-bottom: 25px; border-bottom: 2px dashed gray;';
    noScore.innerHTML = 'There is no score yet. <br>Time to add your score. 😎';
    left.appendChild(noScore);
  }
};

const add = async () => {
  const name = document.getElementById('name');
  if (name.value === '' || score.value === '') {
    const containerDiv = document.querySelector('.container-div');
    const error = document.createElement('p');
    error.id = 'error';
    error.innerHTML = 'The input fields of the form should not be empty!';
    error.style.cssText = 'color: red; text-align: center;';
    const errorCheck = document.getElementById('error');
    if (!containerDiv.contains(errorCheck)) {
      containerDiv.appendChild(error);
    }
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