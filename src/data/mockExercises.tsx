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
    startDescription:
      "Lie flat on a bench with feet on the floor and grip the barbell with hands slightly wider than shoulder-width.",
    executionDescription:
      "Unhook the bar and slowly lower it to the lower part of your chest, keeping your elbows at about a 45-degree angle. Push the bar back up until your arms are fully extended.",
  },
  {
    id: 2,
    name: "Squat",
    muscleGroup: ["Legs"],
    equipment: "Barbell",
    difficulty: "Medium",
    image: squat,
    startDescription:
      "Stand with your feet shoulder-width apart, barbell resting on your upper back with your arms fully extended.",
    executionDescription:
      "Bend your knees and hips, lowering your body until your thighs are parallel to the ground or deeper. Keep your chest up and your back straight as you push through your heels to return to the starting position.",
  },
  {
    id: 3,
    name: "Bicep Curl",
    muscleGroup: ["Biceps"],
    equipment: "Dumbbell",
    difficulty: "Easy",
    image: bicepCurl,
    startDescription:
      "Stand with your feet shoulder-width apart, holding a dumbbell in each hand with arms fully extended at your sides.",
    executionDescription:
      "Curl the dumbbells upwards by bending your elbows, squeezing your biceps at the top. Lower the weights back down slowly, maintaining control throughout the movement.",
  },
  {
    id: 4,
    name: "Deadlift",
    muscleGroup: ["Back", "Legs"],
    equipment: "Barbell",
    difficulty: "Hard",
    image: deadlift,
    startDescription:
      "Stand with feet shoulder-width apart, barbell over the middle of your feet, and grip the bar just outside your knees.",
    executionDescription:
      "Lift the bar by driving through your heels, extending your hips and knees simultaneously. Keep your back straight and chest up as you reach a standing position, then lower the bar back to the ground with control.",
  },
  {
    id: 5,
    name: "Overhead Press",
    muscleGroup: ["Shoulders"],
    equipment: "Dumbbell",
    difficulty: "Medium",
    image: overheadPress,
    startDescription:
      "Stand with your feet shoulder-width apart, holding a dumbbell in each hand at shoulder height.",
    executionDescription:
      "Press the dumbbells overhead by extending your arms, keeping your core tight and avoiding arching your back. Lower the weights back to shoulder height with control.",
  },
  {
    id: 6,
    name: "Lunges",
    muscleGroup: ["Legs"],
    equipment: "Dumbbell",
    difficulty: "Medium",
    image: lunges,
    startDescription:
      "Stand tall with feet hip-width apart, holding a dumbbell in each hand at your sides.",
    executionDescription:
      "Step forward with one leg and lower your body until both knees are bent at about 90-degree angles. Push through the front heel to return to the starting position, and repeat on the other leg.",
  },
  {
    id: 7,
    name: "Pull-up",
    muscleGroup: ["Back", "Biceps"],
    equipment: "Bodyweight",
    difficulty: "Hard",
    image: pullUp,
    startDescription:
      "Hang from a pull-up bar with your hands shoulder-width apart and palms facing away from your body.",
    executionDescription:
      "Pull your body up towards the bar by engaging your back and biceps. Keep your chest up and elbows close to your sides as you reach the top. Slowly lower yourself back to the starting position.",
  },
  {
    id: 8,
    name: "Leg Press",
    muscleGroup: ["Legs"],
    equipment: "Machine",
    difficulty: "Medium",
    image: legPress,
    startDescription:
      "Sit on the leg press machine with your feet shoulder-width apart on the platform, knees bent at 90 degrees.",
    executionDescription:
      "Push the platform upwards by extending your legs, but avoid locking your knees. Lower the platform back down slowly, maintaining control and keeping your knees aligned with your toes.",
  },
  {
    id: 9,
    name: "Tricep Dips",
    muscleGroup: ["Triceps"],
    equipment: "Bodyweight",
    difficulty: "Medium",
    image: tricepDips,
    startDescription:
      "Place your hands on a bench or dip bars with your palms facing down, arms fully extended.",
    executionDescription:
      "Lower your body by bending your elbows, keeping your elbows close to your body. Once your upper arms are parallel to the ground, push through your palms to return to the starting position.",
  },
  {
    id: 10,
    name: "Chest Fly",
    muscleGroup: ["Chest"],
    equipment: "Dumbell",
    difficulty: "Easy",
    image: chestFly,
    startDescription:
      "Lie on a flat bench holding a dumbbell in each hand with arms extended above your chest.",
    executionDescription:
      "Slowly lower the dumbbells out to the sides of your body with a slight bend in your elbows. When your chest feels a stretch, bring the dumbbells back together, squeezing your chest muscles at the top.",
  },
];

export default mockExercises;
