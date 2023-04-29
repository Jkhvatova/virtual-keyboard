import '../sass/main.scss';
import keyLayouts from './layouts';

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
    const keyboard = document.querySelector('.keyboard');
    // eslint-disable-next-line no-restricted-syntax
    Object.entries(keys).forEach(([key, value]) => {
      const renderKey = document.createElement('div');
      renderKey.className = 'key';
      renderKey.dataset.keycode = key;
      renderKey.innerHTML = value.en;
      switch (key) {
        case 'Backspace':
          renderKey.classList.add('backspace');
          break;
        case 'Tab':
          renderKey.classList.add('tab');
          break;
        case 'Del':
          renderKey.classList.add('del');
          break;
        case 'CapsLock':
          renderKey.classList.add('caps');
          break;
        case 'Enter':
          renderKey.classList.add('enter');
          break;
        case 'ShiftRight':
        case 'ShiftLeft':
          renderKey.classList.add('shift');
          break;
        case 'ControlLeft':
        case 'ControlRight':
          renderKey.classList.add('ctrl');
          break;
        case 'AltRight':
        case 'AltLeft':
          renderKey.classList.add('alt');
          break;
        case 'MetaRight':
        case 'MetaLeft':
          renderKey.classList.add('command');
          break;
        case 'Space':
          renderKey.classList.add('space');
          break;
        default:
          break;
      }
      keyboard.appendChild(renderKey);
      // eslint-disable-next-line no-console
      // console.log(key, renderKey);
    });
  }
  renderKeyboard(keyLayouts);
});
