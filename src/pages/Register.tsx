import React, { useEffect } from "react";
import RegisterForm from "../components/RegisterForm/RegisterForm.tsx";

function Register() {
  useEffect(() => {
    document.title = "FitnessApp - Sign up";
  }, []);

  return (
    <div className="vh-100 d-flex justify-content-center align-items-center">
      <RegisterForm />
    </div>
  );
}

export default Register;
