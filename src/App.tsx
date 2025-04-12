import ExerciseDirectory from "./pages/ExerciseDirectory";
import Setup from "./pages/Generator.tsx";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Workouts from "./pages/Workouts.tsx";
import ProfileEdit from "./pages/ProfileEdit";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { ModalProvider } from "./components/ModalPopUp/ModalOperations.tsx";

import NavBar from "./components/navbar/NavBar";

function App() {
  return (
    <ModalProvider>
      <div>
        <NavBar />
        <main style={{ paddingTop: "70px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/Exercises/Directory"
              element={<ExerciseDirectory />}
            />
            <Route path="/Workouts/Generator" element={<Setup />} />
            <Route path="/Workouts/MyWorkouts" element={<Workouts />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/ProfileEdit" element={<ProfileEdit />} />
          </Routes>
        </main>
      </div>
    </ModalProvider>
  );
}

export default App;
