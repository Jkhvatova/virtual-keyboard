import '../sass/main.scss';
import keyLayouts from './layouts';
import Key from './Key';

document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body');
  let siteLang = 'en';

  function createDomElements() {
    const container = document.createElement('div');
    container.className = 'container';
    body.appendChild(container);
    // title and explanations
    const titleAndExplain = document.createElement('div');
    titleAndExplain.className = 'title-and-explanation';
    titleAndExplain.innerHTML = `
      <h1 class="title">Virtual Keyboard</h1>
      <p class="explanation">Created on MacOS.
      To change the language press left ctrl + alt</p>
    `;
    // monitor and text-area
    const monitorWrapper = document.createElement('div');
    monitorWrapper.className = 'monitor-wrapper';
    const monitor = document.createElement('div');
    monitor.className = 'monitor';
    const monitorTextarea = document.createElement('textarea');
    monitorTextarea.className = 'keyboard-input';
    monitorWrapper.appendChild(monitor);
    monitor.appendChild(monitorTextarea);

    // keyboard
    const keyboardWrapper = document.createElement('div');
    keyboardWrapper.className = 'keyboard-wrapper';
    const keyboard = document.createElement('div');
    keyboard.className = 'keyboard';
    keyboardWrapper.appendChild(keyboard);

    container.append(titleAndExplain, monitorWrapper, keyboardWrapper);
  }
  createDomElements();

  // create keyboard on layout change

  const keyboard = document.querySelector('.keyboard');

  function renderKeyboard(keys, lang) {
    keyboard.innerHTML = '';
    Object.entries(keys).forEach(([keycode, value]) => {
      const key = new Key();
      key.createKey(keycode, value[lang]);
    });
  }
  renderKeyboard(keyLayouts, siteLang);
  keyboard.classList.add(siteLang);

  // change keyboard language
  // Local storage

  const setLocalLangStorage = () => {
    localStorage.setItem('siteLang', siteLang);
  };
  window.addEventListener('beforeunload', setLocalLangStorage);

  function getLocalLangStorage() {
    if (localStorage.getItem('siteLang')) {
      const lang = localStorage.getItem('siteLang');
      renderKeyboard(keyLayouts, lang);
    }
  }
  window.addEventListener('load', getLocalLangStorage);

  const changeKeyboardLang = () => {
    if (keyboard.classList.contains('en')) {
      renderKeyboard(keyLayouts, 'ru');
      keyboard.classList.remove('en');
      keyboard.classList.add('ru');
      siteLang = 'ru';
      localStorage.setItem('siteLang', siteLang);
    } else if (keyboard.classList.contains('ru')) {
      renderKeyboard(keyLayouts, 'en');
      keyboard.classList.remove('ru');
      keyboard.classList.add('en');
      siteLang = 'en';
      localStorage.setItem('siteLang', siteLang);
    }
  };
  // mouse click listener
  const textarea = document.querySelector('.keyboard-input');
  const keys = document.querySelectorAll('.key');
  keyboard.addEventListener('mousedown', (e) => {
    textarea.focus();
    e.preventDefault();
    e.target.classList.add('active');
    let keyValue = e.target.innerHTML;
    switch (e.target.dataset.keycode) {
      case 'Tab':
        keyValue = '     ';
        break;
      case 'Enter':
        keyValue = '\n';
        break;
      case 'ShiftLeft':
      case 'ShiftRight':
      case 'AltLeft':
      case 'ControlRight':
      case 'ControlLeft':
      case 'AltRight':
      case 'MetaLeft':
      case 'MetaRight':
      case 'CapsLock':
      case 'Backspace':
      case 'Del':
        keyValue = '';
        break;
      default:
        break;
    }
    if (e.target.dataset.keycode === 'ShiftLeft' && siteLang === 'ru') {
      renderKeyboard(keyLayouts, 'rushift');
    } else if (e.target.dataset.keycode === 'ShiftLeft' && siteLang === 'en') {
      renderKeyboard(keyLayouts, 'enshift');
    }
    if (e.target.dataset.keycode === 'AltLeft') {
      changeKeyboardLang();
    }
    if (e.target.classList.contains('keyboard')) {
      keyValue = '';
      e.target.classList.remove('active');
    }
    textarea.insertAdjacentText('beforeend', keyValue);
  });
  keyboard.addEventListener('mouseup', (e) => {
    e.target.classList.remove('active');
  });

  // keyboard click listener
  window.addEventListener('keydown', (e) => {
    textarea.focus();
    e.preventDefault();
    keys.forEach((key) => {
      key.classList.add('active');
      if (e.code === key.dataset.keycode) {
        let keyValue = key.innerHTML;
        switch (key.dataset.keycode) {
          case 'Tab':
            keyValue = '     ';
            break;
          case 'Enter':
            keyValue = '\n';
            break;
          case 'ShiftLeft':
          case 'ShiftRight':
          case 'AltLeft':
          case 'ControlRight':
          case 'ControlLeft':
          case 'AltRight':
          case 'MetaLeft':
          case 'MetaRight':
          case 'CapsLock':
          case 'Backspace':
          case 'Del':
            keyValue = '';
            break;
          default:
            break;
        }
        textarea.insertAdjacentText('beforeend', keyValue);
      }
    });
  });
  window.addEventListener('keyup', (e) => {
    keys.forEach((key) => {
      if (e.code === key.dataset.keycode) {
        key.classList.remove('active');
      }
      e.preventDefault();
    });
  });
});
