import ExerciseDirectory from "./pages/ExerciseDirectory";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <main>
        <Routes>
          <Route path="/" element={<ExerciseDirectory />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
