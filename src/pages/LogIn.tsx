import React, { useEffect } from "react";
import LogInForm from "../components/LogInForm/LogInForm.tsx";

function LogIn() {
  useEffect(() => {
    document.title = "FitnessApp - Log In";
  }, []);

  return (
    <div>
      <LogInForm />
    </div>
  );
}

export default LogIn;
