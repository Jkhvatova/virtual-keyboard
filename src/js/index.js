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
    Object.entries(keys).forEach(([key, value]) => {
      const newKey = new Key();
      newKey.createKey(key, value.en);
      // eslint-disable-next-line no-console
    });
  }
  renderKeyboard(keyLayouts);
});
