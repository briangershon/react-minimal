import { getMessage } from './hello';

function starter() {
  document.getElementById('main').innerHTML = `<p>${getMessage()}</p>`;
}

starter();
