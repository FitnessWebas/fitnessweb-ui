import { useGetAllWorkouts } from "../api/workout/useGetAllWorkouts";
import WorkoutForms from "../components/WorkoutForms/WorkoutForms";

function Workouts() {
  const { data: workouts } = useGetAllWorkouts();

  if (!workouts) {
    return <div>No workout data is available</div>;
  }

  return (
    <div className="vh-100 d-flex justify-content-center">
      <WorkoutForms workouts={workouts} />
    </div>
  );
}

export default Workouts;
