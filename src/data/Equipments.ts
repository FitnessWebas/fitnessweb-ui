export enum Equipment {
  Barbell = 0,
  Dumbbell = 1,
  BodyWeight = 2,
  Machine = 3,
  Cardio = 4,
  Kettlebell = 5,
}

export const EquipmentOptions = [
  { value: Equipment.Barbell, label: "Barbell" },
  { value: Equipment.Dumbbell, label: "Dumbbell" },
  { value: Equipment.BodyWeight, label: "Body weight" },
  { value: Equipment.Machine, label: "Machine" },
  { value: Equipment.Cardio, label: "Cardio" },
  { value: Equipment.Kettlebell, label: "Kettlebell" },
];
