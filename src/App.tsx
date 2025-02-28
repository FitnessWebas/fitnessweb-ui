import "./App.css";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn.tsx";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <div>
        <main>
          <Routes>
            <Route path="/Log In" element={<LogIn />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
