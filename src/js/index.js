import '../sass/main.scss';
import keyLayouts from './layouts';
import Key from './Key';

document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body');

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
    // const keys = document.querySelectorAll('.key');

    container.append(titleAndExplain, monitorWrapper, keyboardWrapper);
  }
  createDomElements();
  function renderKeyboard(keys) {
    Object.entries(keys).forEach(([keycode, value]) => {
      const key = new Key();
      key.createKey(keycode, value.en);
    });
  }
  renderKeyboard(keyLayouts);

  // mouse click listener
  const textarea = document.querySelector('.keyboard-input');
  const keys = document.querySelectorAll('.key');
  keys.forEach((key) => {
    key.addEventListener('mousedown', (e) => {
      textarea.focus();
      e.preventDefault();
      e.target.classList.add('active');
      textarea.insertAdjacentText('beforeend', e.target.innerHTML);
      // eslint-disable-next-line no-console
      console.log(e.target.innerHTML);
    });
    key.addEventListener('mouseup', (e) => {
      e.target.classList.remove('active');
    });
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
