import "./css/fonts.css";
import "./css/normalize.css";
import "./css/style.css";

import CalculatorForm from "./components/CalculatorForm";
import Section from "./components/Section";
import CounterResult from "./components/CounterResult";
import { calculateNorms } from "./utils/utils";
import { containerSelector } from "./utils/constants";
import FormValidator from "./components/FormValidator";

const formSelector = ".counter__form";
export const VALIDATION_CONFIG = {
  inputSelector: ".input__wrapper input",
  submitButtonSelector: ".form__submit-button",
  resetButtonSelector: ".form__reset-button",
};

// Инициализация формы расчета калорий
const onCalculatorFormSubmit = (formData) => {
  const norms = calculateNorms(formData);
  counterResult.show(norms);
};
const onCalculatorFormReset = () => {
  counterResult.hide();
};
const calculatorForm = new CalculatorForm({
  onSubmit: onCalculatorFormSubmit,
  onReset: onCalculatorFormReset,
});
const calculatorFormElement = calculatorForm.createForm();
const calculatorSection = new Section({
  element: calculatorFormElement,
  containerSelector,
});
calculatorSection.render();

// Инициализация валидатора формы
const formValidator = new FormValidator(VALIDATION_CONFIG, formSelector);
formValidator.enableValidation();

// Инициализация секции результатов расчета
const counterResult = new CounterResult();
const counterResultElement = counterResult.create();
const counterResultSection = new Section({
  element: counterResultElement,
  containerSelector,
});
counterResultSection.render();
