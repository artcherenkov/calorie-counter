import "./css/fonts.css";
import "./css/normalize.css";
import "./css/style.css";

import CalculatorForm from "./components/CalculatorForm";
import Section from "./components/Section";
import CounterResult from "./components/CounterResult";

const containerSelector = ".counter";

const Formula = {
  FEMALE: ({ weight, height, age }) => {
    return 10 * weight + 6.25 * height - 5 * age - 161;
  },
  MALE: ({ weight, height, age }) => {
    return 10 * weight + 6.25 * height - 5 * age + 5;
  },
};
const ActivityRate = {
  MIN: 1.2,
  LOW: 1.375,
  MEDIUM: 1.55,
  HIGH: 1.725,
  MAX: 1.9,
};

const calculateNorms = (data) => {
  const { gender, activity } = data;

  const activityRate = ActivityRate[activity.toUpperCase()];
  const calories = Formula[gender.toUpperCase()](data) * activityRate;

  return {
    sameLevelWeight: Math.round(calories),
    weightLoss: Math.round(calories - (calories / 100) * 15),
    weightGain: Math.round(calories + (calories / 100) * 15),
  };
};

// Инициализация формы расчета калорий
const calculatorForm = new CalculatorForm({
  onSubmit: (formData) => {
    const { sameLevelWeight, weightLoss, weightGain } = calculateNorms(
      formData
    );

    console.log(
      `Поддержание веса: ${sameLevelWeight}\nПотеря веса: ${weightLoss}\nНабор веса: ${weightGain}`
    );
  },
});
const calculatorFormElement = calculatorForm.createForm();
const calculatorSection = new Section({
  element: calculatorFormElement,
  containerSelector,
});
calculatorSection.render();

// Инициализация результатов расчета
const counterResult = new CounterResult();
const counterResultElement = counterResult.create();
const counterResultSection = new Section({
  element: counterResultElement,
  containerSelector,
});
counterResultSection.render();
