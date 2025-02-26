import "./App.css";
import Home from "./pages/Home";
import Register from "./pages/Register";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <div>
        <main>
          <Routes>
            <Route path="/" element={<Register />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
