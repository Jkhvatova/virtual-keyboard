export default class Key {
  constructor(keycode, value) {
    this.keycode = keycode;
    this.value = value;
  }

  createKey(keycode, value) {
    this.key = document.createElement('div');
    this.key.className = 'key';
    this.key.dataset.keycode = keycode;
    this.key.innerHTML = value;
    switch (keycode) {
      case 'Backspace':
        this.key.classList.add('backspace');
        break;
      case 'Tab':
        this.key.classList.add('tab');
        break;
      case 'Del':
        this.key.classList.add('del');
        break;
      case 'CapsLock':
        this.key.classList.add('caps');
        break;
      case 'Enter':
        this.key.classList.add('enter');
        break;
      case 'ShiftRight':
      case 'ShiftLeft':
        this.key.classList.add('shift');
        break;
      case 'ControlLeft':
      case 'ControlRight':
        this.key.classList.add('ctrl');
        break;
      case 'AltRight':
      case 'AltLeft':
        this.key.classList.add('alt');
        break;
      case 'MetaRight':
      case 'MetaLeft':
        this.key.classList.add('command');
        break;
      case 'Space':
        this.key.classList.add('space');
        break;
      default:
        break;
    }
    const keyboard = document.querySelector('.keyboard');
    keyboard.append(this.key);
  }
}
