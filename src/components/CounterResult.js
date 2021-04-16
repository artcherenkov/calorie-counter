export default class CounterResult {
  constructor() {
    this.hide = this.hide.bind(this);
    this._animationDuration = 600;
  }

  create() {
    this._element = this._createElement(this._getTemplate());
    this._sameLevelWeightElement = this._element.querySelector(
      "#calories-norm"
    );
    this._weightLossElement = this._element.querySelector("#calories-minimal");
    this._weightGainElement = this._element.querySelector("#calories-maximal");
    return this._element;
  }

  show(data) {
    this._sameLevelWeightElement.textContent = data.sameLevelWeight;
    this._weightLossElement.textContent = data.weightLoss;
    this._weightGainElement.textContent = data.weightGain;

    this._element.classList.remove("counter__result--hidden");
  }

  hide() {
    setTimeout(() => {
      this._sameLevelWeightElement.textContent = "&mdash;";
      this._weightLossElement.textContent = "&mdash;";
      this._weightGainElement.textContent = "&mdash;";
    }, this._animationDuration);

    this._element.classList.add("counter__result--hidden");
  }

  _getTemplate() {
    return `<section class="counter__result counter__result--hidden">
      <h2 class="heading">
        Ваша норма калорий
      </h2>
      <ul class="counter__result-list">
        <li class="counter__result-item">
          <h3>
            <span id="calories-norm">&mdash;</span> ккал
          </h3>
          <p>
            поддержание веса
          </p>
        </li>
        <li class="counter__result-item">
          <h3>
            <span id="calories-minimal">&mdash;</span> ккал
          </h3>
          <p>
            снижение веса
          </p>
        </li>
        <li class="counter__result-item">
          <h3>
            <span id="calories-maximal">&mdash;</span> ккал
          </h3>
          <p>
            набор веса
          </p>
        </li>
      </ul>
    </section>`;
  }

  _createElement(template) {
    const container = document.createElement("div");
    container.innerHTML = template;

    return container.firstChild;
  }
}
