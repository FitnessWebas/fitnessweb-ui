import React, { useEffect } from "react";
import LogInForm from "../components/LogInForm/LogInForm.tsx";

function LogIn() {
  useEffect(() => {
    document.title = "FitnessApp - Log In";
  }, []);

  return (
    <div className="vh-100 d-flex justify-content-center align-items-center">
      <LogInForm />
    </div>
  );
}

export default LogIn;
