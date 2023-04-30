import '../sass/main.scss';
import keyLayouts from './layouts';
import Key from './Key';

// window.addEventListener('beforeunload', setSiteLang);

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
      <p class="explanation">Created on MacOS.<br/>
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
    if (
      // eslint-disable-next-line operator-linebreak
      e.target.dataset.keycode === 'ShiftLeft' ||
      e.target.dataset.keycode === 'ShiftRight'
    ) {
      renderKeyboard(keyLayouts, 'rushift');
    }
    if (e.target.dataset.keycode === 'AltLeft') {
      changeKeyboardLang();
    }
    if (e.target.dataset.keycode === 'AltRight') {
      changeKeyboardLang();
    }
    textarea.insertAdjacentText('beforeend', e.target.innerHTML);
  });
  keyboard.addEventListener('mouseup', (e) => {
    e.target.classList.remove('active');
    // eslint-disable-next-line no-console
    console.log(e);
  });

  // keyboard click listener
  window.addEventListener('keydown', (e) => {
    textarea.focus();
    e.preventDefault();
    keys.forEach((key) => {
      if (e.code === key.dataset.keycode) {
        key.classList.add('active');
        textarea.insertAdjacentText('beforeend', key.innerHTML);
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
