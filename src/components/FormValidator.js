export default class FormValidator {
  constructor(selectors, formSelector) {
    this._selectors = selectors;
    this._formElement = document.querySelector(formSelector);

    this._inputsList = Array.from(
      this._formElement.querySelectorAll(this._selectors.inputSelector)
    );
    this._submitButtonElement = this._formElement.querySelector(
      this._selectors.submitButtonSelector
    );
    this._resetButtonElement = this._formElement.querySelector(
      this._selectors.resetButtonSelector
    );

    this._toggleButtonsState = this._toggleButtonsState.bind(this);
  }

  _setEventListeners() {
    this._formElement.addEventListener("submit", (evt) => evt.preventDefault());
    this._formElement.addEventListener("reset", () => {
      this._inputsList.forEach((input) => (input.value = ""));
      this.resetValidationErrors();
    });

    this._inputsList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => this._onInput(inputElement));
    });
  }

  _onInput() {
    this._toggleButtonsState();
  }

  _toggleButtonsState() {
    const shouldBeDisabled = this._hasInvalidInput(this._inputsList);
    this._submitButtonElement.disabled = shouldBeDisabled;
    this._resetButtonElement.disabled = shouldBeDisabled;
  }

  _hasInvalidInput(inputsList) {
    return inputsList.some((inputElement) => !inputElement.validity.valid);
  }

  enableValidation() {
    this._toggleButtonsState();
    this._setEventListeners();
  }

  resetValidationErrors() {
    this._formElement.reset();
    this._toggleButtonsState();
  }
}
