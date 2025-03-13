import ExerciseDirectory from "./pages/ExerciseDirectory";
import Setup from "./pages/Generator.tsx";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./components/navbar/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <main style={{ paddingTop: "70px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Exercises/Directory" element={<ExerciseDirectory />} />
          <Route path="/Workouts/Generator" element={<Setup />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
