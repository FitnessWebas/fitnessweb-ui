import ExerciseDirectory from "./pages/ExerciseDirectory";
import LogIn from "./pages/LogIn.tsx";

import Setup from "./pages/Generator.tsx";
import Home from "./pages/Home";
import Register from "./pages/Register.tsx";

import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./components/navbar/NavBar";

function App() {
  return (

    <div>
      <NavBar />
      <main style={{ paddingTop: "70px" }}>
        <Routes>
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/" element={<Home />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Exercises/Directory" element={<ExerciseDirectory />} />
          <Route path="/Workouts/Generator" element={<Setup />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
