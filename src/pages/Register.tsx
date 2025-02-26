import RegisterForm from "../components/RegisterForm/RegisterForm.tsx";
import React from "react";

function Register() {
  return (
    <>
      <title>Sign up</title>
      <body style={{ backgroundColor: "var(--light-100" }}>
        <div>
          <RegisterForm />
        </div>
      </body>
    </>
  );
}

export default Register;
