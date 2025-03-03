import "./App.css";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn.tsx";
import Setup from "./pages/Setup.tsx";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <div>
        <main>
          <Routes>
            <Route path="/LogIn" element={<LogIn />} />
            <Route path="/Setup" element={<Setup />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
