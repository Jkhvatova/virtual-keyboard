import Key from './key';

export default class Keyboard {
  constructor(layout) {
    this.layout = layout;
  }

  renderKeyboard(lang, node) {
    this.keyboard = document.createElement('div');
    this.keyboard.classList.add('keyboard', lang);
    node.append(this.keyboard);
  }

  createKeys(lang) {
    const keysLayout = this.layout;
    // eslint-disable-next-line no-console
    console.log(lang);
    Object.entries(keysLayout).forEach(([attribute, value]) => {
      const key = new Key();
      key.renderKey(attribute, value[lang]);
    });
  }
}
