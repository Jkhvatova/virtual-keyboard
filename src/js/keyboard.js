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
    Object.entries(keysLayout).forEach(([attribute, value]) => {
      const key = new Key();
      key.renderKey(attribute, value.en);
    });
  }
}
