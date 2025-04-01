import { useGetAllExercises } from "../api/exercise/useGetAllExercises";
import ExerciseList from "../components/Exercises/ExerciseList/ExerciseList";
import ExerciseListHeader from "../components/Exercises/ExerciseList/ExerciseListHeader/ExerciseListHeader";

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
      <ExerciseList exercises={mappedExercises} />
    </>
  );
};

export default ExercisePage;
