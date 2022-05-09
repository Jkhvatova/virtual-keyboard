import '../sass/main.scss';
import keyLayouts from './layouts';
import Keyboard from './keyboard';

// adding variables
let siteLang = 'en'; // add keyboard initial language state
const main = document.createElement('div');
main.className = 'main';
document.body.append(main);
const textWrapper = document.createElement('div');
textWrapper.classList.add('text-wrapper');
main.append(textWrapper);
const text = document.createElement('h1');
text.innerHTML = 'Virtual Keyboard';
textWrapper.append(text);
const info01 = document.createElement('p');
const info02 = document.createElement('p');
info01.innerHTML = 'Created on MacOS';
info02.innerHTML = 'To change the language press left ctrl + alt';
textWrapper.append(info01);
textWrapper.append(info02);

// adding textarea
const monitorWrapper = document.createElement('div');
monitorWrapper.classList.add('monitor-wrapper');
const monitor = document.createElement('div');
monitor.classList.add('monitor');
const textarea = document.createElement('textarea');
textarea.classList.add('keyboard-input');
main.append(monitorWrapper);
monitorWrapper.append(monitor);
monitor.append(textarea);
textarea.innerHTML = '';
textarea.spellcheck = false;
textarea.scrollLeft = textarea.scrollWidth;
textarea.focus();

// creating keyboard
const keyboardWrapper = document.createElement('div');
keyboardWrapper.classList.add('keyboard-wrapper');
main.append(keyboardWrapper);
const keyboard = new Keyboard(keyLayouts);
keyboard.renderKeyboard(siteLang, keyboardWrapper);
const keyboardActiveClass = document.querySelector('.keyboard');
const keys = document.querySelectorAll('.key');
// eslint-disable-next-line no-console
console.log(keys);

// Local storage

function setLocalLangStorage() {
  localStorage.setItem('siteLang', siteLang);
}
window.addEventListener('beforeunload', setLocalLangStorage);

function getLocalLangStorage() {
  if (localStorage.getItem('siteLang')) {
    const lang = localStorage.getItem('siteLang');
    keyboard.createKeys(lang);
  }
}
window.addEventListener('load', getLocalLangStorage);

// handle language change
const handleLangChange = () => {
  if (keyboardActiveClass.classList.contains('en')) {
    keyboardActiveClass.innerHTML = '';
    keyboard.createKeys('ru');
    keyboardActiveClass.classList.remove('en');
    keyboardActiveClass.classList.add('ru');
    siteLang = 'ru';
    localStorage.setItem('siteLang', siteLang);
  } else if (keyboardActiveClass.classList.contains('ru')) {
    keyboardActiveClass.innerHTML = '';
    keyboard.createKeys('en');
    keyboardActiveClass.classList.remove('ru');
    keyboardActiveClass.classList.add('en');
    siteLang = 'en';
    localStorage.setItem('siteLang', siteLang);
  }
};

// adding key values to input
function addKeyValueInput(key) {
  const keyContent = key.innerHTML;
  switch (key.dataset.keycode) {
    case 'Backspace':
      textarea.innerHTML = textarea.innerHTML.slice(0, -1);
      break;
    case 'Del':
      textarea.innerHTML = textarea.innerHTML.slice(0, -1);
      break;
    case 'Tab':
      textarea.innerHTML = `  ${textarea.innerHTML}`;
      break;
    case 'Enter':
      textarea.innerHTML += '\n';
      break;
    case 'ShiftLeft':
    case 'ShiftRight':
    case 'AltLeft':
    case 'ControlRight':
    case 'ControlLeft':
    case 'AltRight':
    case 'MetaLeft':
    case 'MetaRight':
      textarea.innerHTML += '';
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
  textarea.focus();
}

// changing keyboard layouts
// change keyboard layout on pressing Ctrl + Alt
const keysPressed = {};

window.addEventListener('keydown', (e) => {
  keysPressed[e.code] = true;
  document.querySelectorAll('.key').forEach((key) => {
    if (e.code === key.dataset.keycode) {
      key.classList.add('active');
      textarea.focus();
      if (key.dataset.keycode === 'ShiftLeft' && siteLang === 'ru') {
        keyboardActiveClass.innerHTML = '';
        keyboard.createKeys('rushift');
      } else if (key.dataset.keycode === 'ShiftLeft' && siteLang === 'en') {
        keyboardActiveClass.innerHTML = '';
        keyboard.createKeys('enshift');
      } else {
        key.classList.add('active');
        addKeyValueInput(key);
      }
    }
  });
  if (keysPressed.ControlLeft && e.code === 'AltLeft') {
    handleLangChange();
  }
  e.preventDefault();
});

window.addEventListener('keyup', (e) => {
  keysPressed[e.code] = false;
  document.querySelectorAll('.key').forEach((key) => {
    if (e.code === key.dataset.keycode) {
      key.classList.remove('active');
    }
    if (key.dataset.keycode === 'ShiftLeft' && siteLang === 'en') {
      keyboardActiveClass.innerHTML = '';
      keyboard.createKeys('en');
    }
    if (key.dataset.keycode === 'ShiftLeft' && siteLang === 'ru') {
      keyboardActiveClass.innerHTML = '';
      keyboard.createKeys('ru');
    }
    textarea.focus();
  });
});

document.querySelectorAll('.key').forEach((key) => {
  // eslint-disable-next-line no-console
  console.log(key);
  key.addEventListener('mousedown', (e) => {
    e.target.classList.add('active');
    // eslint-disable-next-line no-console
    console.log(e);
    textarea.focus();
    if (key.dataset.keycode === 'ShiftLeft' && siteLang === 'ru') {
      keyboardActiveClass.innerHTML = '';
      keyboard.createKeys('rushift');
    } else if (key.dataset.keycode === 'ShiftLeft' && siteLang === 'en') {
      keyboardActiveClass.innerHTML = '';
      keyboard.createKeys('enshift');
    } else {
      addKeyValueInput(key);
    }
  });
  key.addEventListener('mouseup', (e) => {
    e.target.classList.remove('active');
    if (key.dataset.keycode === 'ShiftLeft' && siteLang === 'en') {
      keyboardActiveClass.innerHTML = '';
      keyboard.createKeys('en');
    }
  });
});
