import Home from "./pages/Home";
import LogIn from "./pages/LogIn.tsx";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./components/navbar/NavBar";

function App() {
  return (
    <>
      <div>
        <main>
          <Routes>
            <Route path="/Register" element={<Register />} />
            <Route path="/Log In" element={<LogIn />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
