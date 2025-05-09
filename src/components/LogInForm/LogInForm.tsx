import React, { useState } from "react";
import styles from "./LogInForm.module.css";
import user_icon from "../../assets/Username.png";
import Password from "../../assets/Password.png";
import { useLoginUser } from "../../api/user/useLoginUser";

interface LogInFormProps {
  onClose: () => void;
  OnOpenRegister: () => void;
  OnOpenEmailRequest: () => void;
  handleSubmit: () => void;
}

const LogInForm: React.FC<LogInFormProps> = ({
  onClose,
  OnOpenRegister,
  OnOpenEmailRequest,
  handleSubmit,
}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const isFormValid = username.trim() !== "" && password.trim() !== "";

  const loginUserMutation = useLoginUser();

  return (
    <div className={styles.container1}>
      <div className={styles.header}>
        <p>Log In</p>
      </div>
      <hr className={styles.hr} />
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputs}>
          <div className={styles.input}>
            <img src={user_icon} alt="User Icon" />
            <input
              type="text"
              placeholder="Username / Email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className={styles.input}>
            <img src={Password} alt="Password Icon" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.noAccount}>
          <button type="button" onClick={OnOpenRegister}>
            Don't Have An Account ?
          </button>
        </div>
        <div className={styles.forgotPassword}>
          <button type="button" onClick={OnOpenEmailRequest}>
            Forgot Password ?
          </button>
        </div>
        <div className={styles.signupButton}>
          <button
            type="submit"
            className={`${styles.submit} ${
              !isFormValid ? styles.submitDisabled : ""
            }`}
            disabled={!isFormValid}
            onClick={() => {
              loginUserMutation.mutate({
                username: username,
                password: password,
              });
            }}
          >
            Log In
          </button>
        </div>
      </form>
    </div>
  );
};

export default LogInForm;
