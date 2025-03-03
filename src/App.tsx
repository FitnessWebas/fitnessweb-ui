import Home from "./pages/Home";
import LogIn from "./pages/LogIn.tsx";
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
        </Routes>
      </main>
    </div>
  );
}

export default App;
