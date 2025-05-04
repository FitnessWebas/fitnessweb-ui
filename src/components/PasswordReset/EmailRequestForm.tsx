import React, { useState } from "react";
import styles from "./PassResetForm.module.css";
import user_icon from "../../assets/Username.png";

interface EmailRequestFormProps {
  onClose: () => void;
  OnOpenPassReset: () => void;
  handleSubmit: () => void;
}

const EmailRequestForm: React.FC<EmailRequestFormProps> = ({
  onClose,
  OnOpenPassReset,
  handleSubmit,
}) => {
  const [email, setUsername] = useState("");

  const isFormValid = email.trim() !== "";

  return (
    <div className={styles.container1}>
      <div className={styles.header}>
        <p>Request password change</p>
      </div>
      <hr className={styles.hr} />
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputs}>
          <div className={styles.input}>
            <img src={user_icon} alt="User Icon" />
            <input
              type="text"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setUsername(e.target.value)}
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
            onClick={OnOpenPassReset}
          >
            Send request
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmailRequestForm;
