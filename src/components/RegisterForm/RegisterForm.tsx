import React from "react";
import styles from "./RegisterForm.module.css";
import user_icon from "../assets/Username.png";
import Email from "../assets/Email.png";
import Password from "../assets/Password.png";
import Credentials from "../assets/Credentials.png";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    navigate("/Log In");
  };

  return (
    <div className={styles.container1}>
      <div className={styles.header}>
        <p>Start Your Fitness Journey!</p>
      </div>
      <hr className={styles.hr} />
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputs}>
          <div className={styles.input}>
            <img src={Credentials} alt="Credentials Icon" />
            <input type="text" placeholder="Name" />
          </div>

          <div className={styles.input}>
            <img src={Credentials} alt="Credentials Icon" />
            <input type="text" placeholder="Surname" />
          </div>

          <div className={styles.input}>
            <img src={user_icon} alt="User Icon" />
            <input type="text" placeholder="Username" />
          </div>

          <div className={styles.input}>
            <img src={Email} alt="Email Icon" />
            <input type="email" placeholder="Email" />
          </div>

          <div className={styles.input}>
            <img src={Password} alt="Password Icon" />
            <input type="password" placeholder="Password" />
          </div>
          <div className={styles.input}>
            <img src={Password} alt="Password Icon" />
            <input type="password" placeholder="Repeat Password" />
          </div>
        </div>
        <div className={styles.createdAccount}>
          Already Have An Account ?
          <button type="button" onClick={handleSubmit}>
            Log In!
          </button>
        </div>
        <div className={styles.signupButton}>
          <button
            type="submit"
            className={styles.submit}
            onClick={handleSubmit}
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
