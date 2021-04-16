import { ActivityRate, Formula } from "./constants";

export const calculateNorms = (data) => {
  const { gender, activity } = data;

  const activityRate = ActivityRate[activity.toUpperCase()];
  const calories = Formula[gender.toUpperCase()](data) * activityRate;

  return {
    sameLevelWeight: Math.round(calories),
    weightLoss: Math.round(calories - (calories / 100) * 15),
    weightGain: Math.round(calories + (calories / 100) * 15),
  };
};
