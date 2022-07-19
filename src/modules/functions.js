import {
    scores,
    score,
    left
} from '../index.js'

const load = () => {
    if (scores !== null && scores.length !== 0) {
        let trs = [];
        const table = document.createElement('table');
        const tbody = document.createElement('tbody');
        left.appendChild(table);
        table.appendChild(tbody);
        scores.forEach(score => {
            const tr = document.createElement('tr');
            const td = document.createElement('td');
            td.innerHTML = `${score.name}: ${score.score}`;
            const tbody = document.querySelector('tbody');
            tbody.appendChild(tr);
            tr.appendChild(td);
            trs.push(tr);
        });
        for (let i = 0; i < trs.length; i++) {
            if (i % 2 !== 0) {
                trs[i].style.cssText = 'background-color: gainsboro;';
            }
        }
    } else {
        const noScore = document.createElement('p');
        noScore.innerHTML = 'There is no score yet.';
        left.appendChild(noScore)
    }
}

const add = () => {
    const name = document.getElementById('name');
    if (name.value === '' || score.value === '') {
        const right = document.querySelector('.right');
        const error = document.createElement('p');
        error.innerHTML = 'The forms should not be empty!';
        error.style.cssText = 'color: red;';
        right.appendChild(error);
    } else {
        const newScore = {
            name: name.value,
            score: score.value,
        }
        scores.push(newScore);
        localStorage.setItem('scores', JSON.stringify(scores));
        window.location.reload();
    }
}

const clear = () => {
    window.localStorage.clear();
    window.location.reload();
}

export {
    load,
    add,
    clear
}