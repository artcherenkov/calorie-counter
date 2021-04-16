export const containerSelector = ".counter";

export const Formula = {
  FEMALE: ({ weight, height, age }) => {
    return 10 * weight + 6.25 * height - 5 * age - 161;
  },
  MALE: ({ weight, height, age }) => {
    return 10 * weight + 6.25 * height - 5 * age + 5;
  },
};
export const ActivityRate = {
  MIN: 1.2,
  LOW: 1.375,
  MEDIUM: 1.55,
  HIGH: 1.725,
  MAX: 1.9,
};
