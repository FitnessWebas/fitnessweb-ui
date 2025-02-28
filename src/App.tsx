import "./App.css";
import Home from "./pages/Home";
import Register from "./pages/Register.tsx";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <div>
        <main>
          <Routes>
            <Route path="/Register" element={<Register />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
