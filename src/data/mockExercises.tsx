import benchPress from "../assets/BenchPress.webp";
import squat from "../assets/Barbell_Squat.webp";
import bicepCurl from "../assets/Dumbbell_Curl.webp";
import deadlift from "../assets/Deadlift.webp";
import overheadPress from "../assets/Dumbell_Shoulder_Press.webp";
import lunges from "../assets/Lunge.webp";
import pullUp from "../assets/PullUp.webp";
import legPress from "../assets/Leg_Press.webp";
import tricepDips from "../assets/DIP.webp";
import chestFly from "../assets/Dumbbell_Fly.webp";

const mockExercises = [
  {
    id: 1,
    name: "Bench Press",
    muscleGroup: ["Chest"],
    equipment: "Barbell",
    difficulty: "Medium",
    image: benchPress,
    description:
      "The bench press is a compound exercise that targets the chest, triceps, and shoulders.",
  },
  {
    id: 2,
    name: "Squat",
    muscleGroup: ["Legs"],
    equipment: "Barbell",
    difficulty: "Medium",
    image: squat,
    description:
      "The squat is a compound exercise that targets the quads, hamstrings, and glutes.",
  },
  {
    id: 3,
    name: "Bicep Curl",
    muscleGroup: ["Biceps"],
    equipment: "Dumbbell",
    difficulty: "Easy",
    image: bicepCurl,
    description:
      "The bicep curl is an isolation exercise that targets the biceps.",
  },
  {
    id: 4,
    name: "Deadlift",
    muscleGroup: ["Back", "Legs"],
    equipment: "Barbell",
    difficulty: "Hard",
    image: deadlift,
    description:
      "The deadlift is a compound exercise that targets the back, glutes, hamstrings, and core.",
  },
  {
    id: 5,
    name: "Overhead Press",
    muscleGroup: ["Shoulders"],
    equipment: "Dumbbell",
    difficulty: "Medium",
    image: overheadPress,
    description:
      "The overhead press is an isolation exercise that targets the shoulders, triceps, and upper chest.",
  },
  {
    id: 6,
    name: "Lunges",
    muscleGroup: ["Legs"],
    equipment: "Dumbbell",
    difficulty: "Medium",
    image: lunges,
    description:
      "Lunges are a compound lower body exercise that targets the quads, hamstrings, and glutes.",
  },
  {
    id: 7,
    name: "Pull-up",
    muscleGroup: ["Back", "Biceps"],
    equipment: "Bodyweight",
    difficulty: "Hard",
    image: pullUp,
    description:
      "The pull-up is a compound exercise that primarily targets the back and biceps.",
  },
  {
    id: 8,
    name: "Leg Press",
    muscleGroup: ["Legs"],
    equipment: "Machine",
    difficulty: "Medium",
    image: legPress,
    description:
      "The leg press is a machine exercise that targets the quads, hamstrings, and glutes.",
  },
  {
    id: 9,
    name: "Tricep Dips",
    muscleGroup: ["Triceps"],
    equipment: "Bodyweight",
    difficulty: "Medium",
    image: tricepDips,
    description:
      "Tricep dips are an isolation exercise that targets the triceps, shoulders, and chest.",
  },
  {
    id: 10,
    name: "Chest Fly",
    muscleGroup: ["Chest"],
    equipment: "Dumbell",
    difficulty: "Easy",
    image: chestFly,
    description:
      "The chest fly is an isolation exercise that targets the pectoral muscles.",
  },
];

export default mockExercises;
