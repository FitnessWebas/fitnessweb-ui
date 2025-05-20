import { useGetByUserIdWorkouts } from "../api/workout/useGetByUserIdWorkouts";
import WorkoutForms from "../components/WorkoutForms/WorkoutForms";

function Workouts() {
  const loggedInUserId = localStorage.getItem("userId");
  console.log("Logged in user ID:", loggedInUserId);
  const { data: workouts } = useGetByUserIdWorkouts(loggedInUserId);

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

  if (workouts.length === 0) {
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
        Generate your first workout to get started!
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
