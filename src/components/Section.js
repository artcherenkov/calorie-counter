export default class Section {
  constructor({ element, containerSelector }) {
    this._elementToRender = element;
    this._container = document.querySelector(containerSelector);
  }

  render() {
    this._container.append(this._elementToRender);
  }
}
