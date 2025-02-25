import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/navbar/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
