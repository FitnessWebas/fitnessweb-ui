import { Equipment } from "../types/Equipments";
import { FitnessLevel } from "../types/FitnessLevels";
import { Exercise } from "../types/types";
import benchPress from "../assets/BenchPress.webp";
import legPress from "../assets/Leg_Press.webp";
import lunge from "../assets/Lunge.webp";
import pullUp from "../assets/PullUp.webp";
import dip from "../assets/Dip.webp";

export const mockExercisesNew: Exercise[] = [
  {
    id: 1,
    name: "Bench Press",
    muscles: [
      { id: "chest_1", name: "Chest" },
      { id: "triceps_1", name: "Triceps" },
      { id: "shoulders_1", name: "Shoulders" },
    ],
    equipment: Equipment.Barbell,
    difficulty: FitnessLevel.Intermediate,
    minutesPerSet: 20,
    imagePath: benchPress,
    startingPositionDescription:
      "Lie flat on a bench with feet firmly on the floor. Grip the barbell with hands slightly wider than shoulder-width, palms facing up. Lift the bar off the rack.",
    executionDescription:
      "Slowly lower the barbell to the lower part of your chest, keeping elbows tucked at about a 45-degree angle relative to your torso. Pause briefly, then forcefully push the bar back up until arms are fully extended, without locking elbows.",
  },

  {
    id: 2,
    name: "Barbell Squat",
    muscles: [
      { id: "quads_1", name: "Quads" },
      { id: "glutes_1", name: "Glutes" },
      { id: "hamstrings_1", name: "Hamstrings" },
    ],
    equipment: Equipment.Barbell,
    difficulty: FitnessLevel.Intermediate,
    minutesPerSet: 2,
    imagePath: legPress,
    startingPositionDescription:
      "Stand with feet shoulder-width apart, toes slightly pointed out. Rest the barbell across your upper back/traps, gripping the bar firmly. Keep your chest up and core braced.",
    executionDescription:
      "Initiate the squat by hinging at your hips and bending your knees simultaneously. Lower yourself until your thighs are at least parallel to the floor, keeping your back straight. Drive through your heels to return to the starting position.",
  },

  {
    id: 3,
    name: "Pull-up",
    muscles: [
      { id: "lats_1", name: "Lats" },
      { id: "biceps_1", name: "Biceps" },
      { id: "back_upper_1", name: "Upper Back" },
    ],
    equipment: Equipment.BodyWeight,
    difficulty: FitnessLevel.Expert,
    minutesPerSet: 120,
    imagePath: pullUp,
    startingPositionDescription:
      "Hang from a pull-up bar with an overhand grip (palms facing away), hands slightly wider than shoulder-width apart. Allow your body to hang fully extended.",
    executionDescription:
      "Engage your back muscles and pull your chest towards the bar. Focus on driving your elbows down and back. Continue pulling until your chin clears the bar. Slowly lower yourself back to the starting position under control.",
  },

  {
    id: 4,
    name: "Dumbbell Overhead Press",
    muscles: [
      { id: "shoulders_1", name: "Shoulders" },
      { id: "triceps_1", name: "Triceps" },
    ],
    equipment: Equipment.Dumbbell,
    difficulty: FitnessLevel.Intermediate,
    minutesPerSet: 15,
    imagePath: lunge,
    startingPositionDescription:
      "Sit or stand holding a dumbbell in each hand at shoulder height, palms facing forward. Keep your core tight and back straight.",
    executionDescription:
      "Press the dumbbells straight up overhead until your arms are fully extended but not locked. Avoid arching your lower back excessively. Slowly lower the dumbbells back to the starting position under control.",
  },

  {
    id: 5,
    name: "Kettlebell Swing (Two-Handed)",
    muscles: [
      { id: "glutes_1", name: "Glutes" },
      { id: "hamstrings_1", name: "Hamstrings" },
      { id: "back_lower_1", name: "Lower Back" },
    ],
    equipment: Equipment.Kettlebell,
    difficulty: FitnessLevel.Beginner,
    minutesPerSet: 9,
    imagePath: dip,
    startingPositionDescription:
      "Stand with feet slightly wider than shoulder-width apart, kettlebell on the floor slightly in front of you. Hinge at your hips, keeping your back flat, and grip the kettlebell handle with both hands (overhand grip).",
    executionDescription:
      "Hike the kettlebell back between your legs. Then, forcefully drive your hips forward, squeezing your glutes, allowing the kettlebell to swing up to chest height. Let gravity bring the kettlebell back down, controlling the descent as you hinge at the hips again. Maintain a fluid, pendulum-like motion driven by the hips, not the arms.",
  },
];
