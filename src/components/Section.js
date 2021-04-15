export default class Section {
  constructor({ template, containerSelector }) {
    this._templateToRender = template;
    this._container = document.querySelector(containerSelector);
  }

  clear() {
    this._container.innerHTML = "";
  }

  render() {
    const elementToRender = this._createElementFromTemplate(
      this._templateToRender
    );
    this._container.append(elementToRender);
  }

  _createElementFromTemplate(template) {
    const container = document.createElement("div");
    container.innerHTML = template;

    return container.firstChild;
  }
}
