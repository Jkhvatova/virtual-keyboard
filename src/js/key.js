export default class Key {
  constructor(value) {
    this.value = value;
  }

  renderKey(attribute, value) {
    this.key = document.createElement('div');
    this.key.className = 'key';
    this.key.innerHTML = value;
    this.key.setAttribute('data-keycode', attribute);
    switch (value) {
      case 'backspace':
        this.key.classList.add('backspace');
        break;
      case 'tab':
        this.key.classList.add('tab');
        break;
      case 'del':
        this.key.classList.add('del');
        break;
      case 'capslock':
        this.key.classList.add('caps');
        break;
      case 'enter':
        this.key.classList.add('enter');
        break;
      case 'shift':
        this.key.classList.add('shift');
        break;
      case 'ctrl':
        this.key.classList.add('ctrl');
        break;
      case 'alt':
        this.key.classList.add('alt');
        break;
      case 'command':
        this.key.classList.add('command');
        break;
      case ' ':
        this.key.classList.add('space');
        break;
      default:
        break;
    }
    const keyboard = document.querySelector('.keyboard');
    keyboard.append(this.key);
  }
}
