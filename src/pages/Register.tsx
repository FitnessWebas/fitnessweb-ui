import React, { useEffect } from "react";
import RegisterForm from "../components/RegisterForm/RegisterForm.tsx";

function Register() {
  useEffect(() => {
    document.title = "FitnessApp - Sign up";
  }, []);

  return (
    <div>
      <RegisterForm />
    </div>
  );
}

export default Register;
