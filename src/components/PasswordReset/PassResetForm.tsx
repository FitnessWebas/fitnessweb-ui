import React, { useState } from "react";
import styles from "./PassResetForm.module.css";
import user_icon from "../../assets/Username.png";
import Password from "../../assets/Password.png";

interface PassResetFormProps {
  onClose: () => void;
  handleSubmit: () => void;
}

const PassResetForm: React.FC<PassResetFormProps> = ({
  onClose,
  handleSubmit,
}) => {
  const [NewPassword, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const isFormValid =
    NewPassword.trim() !== "" &&
    password.trim() !== "" &&
    password === NewPassword;

  return (
    <div className={styles.container1}>
      <div className={styles.header}>
        <p>Change password</p>
      </div>
      <hr className={styles.hr} />
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputs}>
          <div className={styles.input}>
            <img src={user_icon} alt="User Icon" />
            <input
              type="password"
              placeholder="New Password"
              value={NewPassword}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className={styles.input}>
            <img src={Password} alt="Password Icon" />
            <input
              type="password"
              placeholder="Repeat Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.signupButton}>
          <button
            type="submit"
            className={`${styles.submit} ${
              !isFormValid ? styles.submitDisabled : ""
            }`}
            disabled={!isFormValid}
          >
            Change Password
          </button>
        </div>
      </form>
    </div>
  );
};

export default PassResetForm;
