import "./css/fonts.css";
import "./css/normalize.css";
import "./css/style.css";

import CalculatorForm from "./components/CalculatorForm";
import Section from "./components/Section";
import CounterResult from "./components/CounterResult";

const containerSelector = ".counter";

const calculatorForm = new CalculatorForm();
const calculatorFormTemplate = calculatorForm.createForm();
const calculatorSection = new Section({
  template: calculatorFormTemplate,
  containerSelector,
});
calculatorSection.render();

const counterResult = new CounterResult();
const counterResultTemplate = counterResult.create();
const counterResultSection = new Section({
  template: counterResultTemplate,
  containerSelector,
});
counterResultSection.render();
