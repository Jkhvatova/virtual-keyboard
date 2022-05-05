import '../sass/main.scss';
import keyLayouts from './layouts';
import Keyboard from './keyboard';

const keyboard = new Keyboard(keyLayouts);
keyboard.renderKeyboard();
keyboard.createKeys();
const keys = document.querySelectorAll('.key');

// adding textarea
const textarea = document.createElement('textarea');
textarea.classList.add('keyboard-input');
document.body.append(textarea);
textarea.innerHTML = '';

// adding key values to input
function addKeyValueInput(key) {
  const keyContent = key.innerHTML;
  switch (key.dataset.keycode) {
    case 'Backspace':
      textarea.innerHTML = textarea.innerHTML.slice(0, -1);
      break;
    case 'Tab':
      textarea.innerHTML = `  ${textarea.innerHTML}`;
      break;
    case 'Enter':
      textarea.innerHTML += '\n';
      break;
    case 'ArrowUp':
      textarea.innerHTML += '&#x25B4;';
      break;
    case 'ArrowDown':
      textarea.innerHTML += '&#x25BE;';
      break;
    case 'ArrowLeft':
      textarea.innerHTML += '&#x25C2;';
      break;
    case 'ArrowRight':
      textarea.innerHTML += '&#x25B8;';
      break;
    default:
      textarea.innerHTML += keyContent;
      break;
  }
}
keys.forEach((key) => {
  key.addEventListener('mousedown', (e) => {
    e.target.classList.add('active');
    textarea.focus();
    addKeyValueInput(key);
    // eslint-disable-next-line no-console
    console.log(key.innerHTML);
  });
  key.addEventListener('mouseup', (e) => {
    e.target.classList.remove('active');
  });
});

window.addEventListener('keydown', (e) => {
  keys.forEach((key) => {
    if (e.code === key.dataset.keycode) {
      key.classList.add('active');
      textarea.focus();
    }
  });
});

window.addEventListener('keyup', (e) => {
  keys.forEach((key) => {
    if (e.code === key.dataset.keycode) {
      key.classList.remove('active');
    }
  });
});
