import { useGetAllWorkouts } from "../api/workout/useGetAllWorkouts";
import WorkoutForms from "../components/WorkoutForms/WorkoutForms";

function Workouts() {
  const { data: workouts } = useGetAllWorkouts();

  if (!workouts) {
    return (
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          fontWeight: "bold",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "var(--light-1)",
          fontSize: "3rem", // Adjust as needed for "much much bigger"
          textAlign: "center",
        }}
      >
        Log in to see your workouts!
      </div>
    );
  }

  return (
    <div className="vh-100 d-flex justify-content-center">
      <WorkoutForms workouts={workouts} />
    </div>
  );
}

export default Workouts;
