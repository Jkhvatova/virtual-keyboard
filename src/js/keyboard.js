import Key from './key';

export default class Keyboard {
  constructor(layout) {
    this.layout = layout;
  }

  renderKeyboard() {
    this.keyboard = document.createElement('div');
    this.keyboard.classList.add('keyboard');
    document.body.append(this.keyboard);
  }

  createKeys() {
    const keysLayout = this.layout;
    // eslint-disable-next-line no-console
    console.log(keysLayout);
    this.layout.forEach((item) => {
      const key = new Key();
      key.renderKey(item);
    });
  }
}
