import React from "react";
import styles from "./LogInForm.module.css";
import user_icon from "../assets/Username.png";
import Password from "../assets/Password.png";
import { useNavigate } from "react-router-dom";

const LogInForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    navigate("/");
  };

  const handleSignUpClick = () => {
    navigate("/Register");
  };

  return (
    <div className={styles.container1}>
      <div className={styles.header}>
        <div className={styles.text}>Log In</div>
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputs}>
          <div className={styles.input}>
            <img src={user_icon} alt="User Icon" />
            <input type="text" placeholder="Username" />
          </div>

          <div className={styles.input}>
            <img src={Password} alt="Password Icon" />
            <input type="password" placeholder="Password" />
          </div>
        </div>

        <div className={styles.noAccount}>
          Don't Have An Account ?{" "}
          <button type="button" onClick={handleSignUpClick}>
            Sign up!
          </button>
        </div>
        <div className={styles.forgotPassword}>
          <button type="button">Forgot Password ?</button>
        </div>
        <div>
          <button
            type="submit"
            className={styles.submit}
            onClick={handleSubmit}
          >
            Log in
          </button>
        </div>
      </form>
    </div>
  );
};

export default LogInForm;
