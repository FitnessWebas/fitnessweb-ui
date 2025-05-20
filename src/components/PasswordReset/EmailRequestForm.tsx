import React, { FormEvent, use, useEffect, useState } from "react";
import styles from "./PassResetForm.module.css";
import user_icon from "../../assets/Username.png";
import Password from "../../assets/Password.png";
import { useGetByEmailUserId } from "../../api/user/UseGetByEmailUserId";
import { useUpdateUser } from "../../api/user/useUpdateUser";

interface CombinedPasswordResetFormProps {
  onClose: () => void;
  handleEmailSubmit: (email: string) => void;
  handlePasswordReset: (password: string) => void;
}

const CombinedPasswordResetForm: React.FC<CombinedPasswordResetFormProps> = ({
  onClose,
}) => {
  const [step, setStep] = useState<1 | 2>(1);
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [error, setError] = useState("");
  const [fetchUserId, setFetchUserId] = useState(false);

  const isEmailValid = email.trim() !== "";
  const isPasswordValid =
    newPassword.trim() !== "" &&
    repeatPassword.trim() !== "" &&
    newPassword === repeatPassword &&
    newPassword.length >= 8;
  const updateUser = useUpdateUser();
  const { data: userId } = useGetByEmailUserId(email, { enabled: fetchUserId });

  const handleEmailFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isEmailValid) {
      setFetchUserId(true);
    }
  };

  const handlePasswordFormSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!isPasswordValid) {
      setError("Passwords must match and be at least 8 characters.");
      return;
    }
    setError("");
    if (error === "" && userId) {
      console.log("Password changed");

      updateUser.mutate(
        {
          userId: String(userId),
          password: newPassword,
        },
        {}
      );
    }
    onClose();
  };

  // React to userId.data and move to step 2 when userId is fetched
  useEffect(() => {
    if (fetchUserId && userId) {
      setStep(2);
      setFetchUserId(false); // reset for future use if needed
      console.log("User ID fetched:", userId);
    }
  }, [fetchUserId, userId]);

  return (
    <div className={styles.container1}>
      {step === 1 && (
        <>
          <div className={styles.header}>
            <p>Request password change</p>
          </div>
          <hr className={styles.hr} />
          <form className={styles.form} onSubmit={handleEmailFormSubmit}>
            <div className={styles.inputs}>
              <div className={styles.input}>
                <img src={user_icon} alt="User Icon" />
                <input
                  type="text"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className={styles.signupButton}>
              <button
                type="submit"
                className={`${styles.submit} ${
                  !isEmailValid ? styles.submitDisabled : ""
                }`}
                disabled={!isEmailValid}
              >
                Send request
              </button>
            </div>
          </form>
        </>
      )}
      {step === 2 && (
        <>
          <div className={styles.header}>
            <p>Change password</p>
          </div>
          <hr className={styles.hr} />
          <form className={styles.form} onSubmit={handlePasswordFormSubmit}>
            <div className={styles.inputs}>
              <div className={styles.input}>
                <img src={user_icon} alt="User Icon" />
                <input
                  type="password"
                  placeholder="New Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>
              <div className={styles.input}>
                <img src={Password} alt="Password Icon" />
                <input
                  type="password"
                  placeholder="Repeat Password"
                  value={repeatPassword}
                  onChange={(e) => setRepeatPassword(e.target.value)}
                />
              </div>
            </div>
            {error && (
              <div style={{ color: "red", marginBottom: "10px" }}>{error}</div>
            )}
            <div className={styles.signupButton}>
              <button
                type="submit"
                className={`${styles.submit} ${
                  !isPasswordValid ? styles.submitDisabled : ""
                }`}
                disabled={!isPasswordValid}
              >
                Change Password
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default CombinedPasswordResetForm;
