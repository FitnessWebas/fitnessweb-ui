export enum Goal {
  LoseWeight = 0,
  GainStrength = 1,
  GainMuscle = 2,
}

export const GoalOptions = [
  { value: Goal.LoseWeight, label: "Lose Weight" },
  { value: Goal.GainStrength, label: "Gain Strength" },
  { value: Goal.GainMuscle, label: "Gain Muscle" },
];
