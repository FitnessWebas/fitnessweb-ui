import React from "react";
import "./RegisterForm.css";
import user_icon from "../assets/Username.png";
import Email from "../assets/Email.png";
import Password from "../assets/Password.png";
import Credentials from "../assets/Credentials.png";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    navigate("/Home");
  };
  return (
    <div className="container1">
      <div className="header">
        <div className="text">Sign up</div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={user_icon} alt="User Icon" />
          <input type="text" placeholder="Username" />
        </div>

        <div className="input">
          <img src={Credentials} alt="User Icon" />
          <input type="text" placeholder="Name" />
        </div>

        <div className="input">
          <img src={Credentials} alt="Credentials Icon" />
          <input type="text" placeholder="Surname" />
        </div>

        <div className="input">
          <img src={Email} alt="Email Icon" />
          <input type="email" placeholder="Email" />
        </div>

        <div className="input">
          <img src={Password} alt="Password Icon" />
          <input type="password" placeholder="Password" />
        </div>
        <div className="input">
          <img src={Password} alt="Password Icon" />
          <input type="password" placeholder="Repeat Password" />
        </div>
      </div>

      <div className="forgot-password">
        Already Have An Account ? <span>Sign in!</span>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="submit-container">
          <div className="submit">Sign up</div>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
