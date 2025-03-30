import { useGetAllExercises } from "../api/exercise/useGetAllExercises";
import ExerciseAccordion from "../components/ExerciseAccordion/ExerciseAccordion";
import ExerciseList from "../components/Exercises/ExerciseList/ExerciseList";
import ExerciseListHeader from "../components/Exercises/ExerciseListHeader/ExerciseListHeader";

const ExercisePage = () => {
  const { data: exercises } = useGetAllExercises();

  if (!exercises) {
    return <div>No exercise data is available</div>;
  }

  const mappedExercises = exercises.map((exercise) => ({
    ...exercise,
    imagePath: `${import.meta.env.VITE_BASE_IMAGES}${exercise.imagePath}`,
  }));

  return (
    <>
      <ExerciseListHeader />
      <ExerciseList />
      <ExerciseAccordion exercises={mappedExercises} />
    </>
  );
};

export default ExercisePage;
