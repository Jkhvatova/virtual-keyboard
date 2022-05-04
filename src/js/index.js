import '../sass/main.scss';
import { keyLayoutEn } from './layouts';
import Keyboard from './keyboard';

const keyboard = new Keyboard(keyLayoutEn);
keyboard.renderKeyboard();
keyboard.createKeys();

document.querySelectorAll('.key').forEach((key) => {
  key.addEventListener('click', (e) => {
    // eslint-disable-next-line no-console
    console.log(e.target.className);
    e.target.classList.toggle('active');
  });
  key.addEventListener('keydown', (e) => {
    // eslint-disable-next-line no-console
    console.log(e.target.className);
    e.target.classList.add('active');
  });
  key.addEventListener('keyup', (e) => {
    // eslint-disable-next-line no-console
    console.log(e.target.className);
    e.target.classList.remove('active');
  });
});
