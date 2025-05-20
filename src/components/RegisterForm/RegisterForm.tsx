import React, { useState } from "react";
import styles from "./RegisterForm.module.css";
import user_icon from "../../assets/Username.png";
import Email from "../../assets/Email.png";
import Password from "../../assets/Password.png";
import Credentials from "../../assets/Credentials.png";
import { UserCreate } from "../../api/user/useCreateUser";
import { UseMutationResult } from "@tanstack/react-query";
import DropMessage from "../InputMessage/DropMessage";

interface RegisterFormProps {
  createUserMutation: UseMutationResult<void, Error, UserCreate>;
  onClose: () => void;
  onOpenLogin: () => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({
  createUserMutation,
  onClose,
  onOpenLogin,
}) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  // Touched states
  const [touchedName, setTouchedName] = useState(false);
  const [touchedSurname, setTouchedSurname] = useState(false);
  const [touchedUsername, setTouchedUsername] = useState(false);
  const [touchedEmail, setTouchedEmail] = useState(false);
  const [touchedPassword, setTouchedPassword] = useState(false);
  const [touchedRepeatPassword, setTouchedRepeatPassword] = useState(false);

  // Active states
  const [activeName, setActiveName] = useState(false);
  const [activeSurname, setActiveSurname] = useState(false);
  const [activeUsername, setActiveUsername] = useState(false);
  const [activeEmail, setActiveEmail] = useState(false);
  const [activePassword, setActivePassword] = useState(false);
  const [activeRepeatPassword, setActiveRepeatPassword] = useState(false);

  // Validation rules
  const isNameValid =
    /^[A-Za-z]+$/.test(name.trim()) && name.trim().length >= 1; // Name must contain only letters and be at least 2 characters long
  const isSurnameValid =
    /^[A-Za-z]+$/.test(surname.trim()) && surname.trim().length >= 1; // Surname must contain only letters and be at least 2 characters long
  const isUsernameValid = username.trim().length >= 4; // Username must have at least 4 characters
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // Valid email format
  const isPasswordValid =
    password === repeatPassword &&
    password.length >= 8 && // Minimum length of 8 characters
    /[A-Z]/.test(password) && // At least one uppercase letter
    /[a-z]/.test(password) && // At least one lowercase letter
    /[0-9]/.test(password) && // At least one number
    /[!@#$%^&*(),.?":{}|<>]/.test(password); // At least one special character

  const isFormValid =
    isNameValid &&
    isSurnameValid &&
    isUsernameValid &&
    isEmailValid &&
    isPasswordValid;

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    createUserMutation.mutate(
      {
        firstName: name,
        lastName: surname,
        username: username,
        email: email,
        password: password,
      },
      {
        onSuccess: () => {
          console.log(`User registered successfully`);
        },
      }
    );
  };

  return (
    <div className={styles.container1}>
      <div className={styles.header}>
        <p>Start Your Fitness Journey!</p>
      </div>
      <hr className={styles.hr} />
      <form className={styles.form}>
        <div className={styles.inputs}>
          <div
            className={`${styles.input} ${
              touchedName && !isNameValid ? styles.inputInvalid : ""
            }`}
          >
            <img src={Credentials} alt="Credentials Icon" />
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onBlur={() => {
                setTouchedName(true);
                setActiveName(false);
              }}
              onFocus={() => {
                if (touchedName) setActiveName(true);
              }}
            />
            <DropMessage
              message="Name can't be empty and should only contain letters"
              isVisible={!isNameValid && activeName}
            />
          </div>

          <div
            className={`${styles.input} ${
              touchedSurname && !isSurnameValid ? styles.inputInvalid : ""
            }`}
          >
            <img src={Credentials} alt="Credentials Icon" />
            <input
              type="text"
              placeholder="Surname"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              onBlur={() => {
                setTouchedSurname(true);
                setActiveSurname(false);
              }}
              onFocus={() => {
                if (touchedSurname) setActiveSurname(true);
              }}
            />
            <DropMessage
              message="Surname can't be empty and should only contain letters"
              isVisible={!isSurnameValid && activeSurname}
            />
          </div>

          <div
            className={`${styles.input} ${
              touchedUsername && !isUsernameValid ? styles.inputInvalid : ""
            }`}
          >
            <img src={user_icon} alt="User Icon" />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onBlur={() => {
                setTouchedUsername(true);
                setActiveUsername(false);
              }}
              onFocus={() => {
                if (touchedUsername) setActiveUsername(true);
              }}
            />
            <DropMessage
              message="Username should be at least 4 characters long"
              isVisible={!isUsernameValid && activeUsername}
            />
          </div>

          <div
            className={`${styles.input} ${
              touchedEmail && !isEmailValid ? styles.inputInvalid : ""
            }`}
          >
            <img src={Email} alt="Email Icon" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => {
                setTouchedEmail(true);
                setActiveEmail(false);
              }}
              onFocus={() => {
                if (touchedEmail) setActiveEmail(true);
              }}
            />
            <DropMessage
              message="Invalid email format"
              isVisible={!isEmailValid && activeEmail}
            />
          </div>

          <div
            className={`${styles.input} ${
              touchedPassword && !isPasswordValid ? styles.inputInvalid : ""
            }`}
          >
            <img src={Password} alt="Password Icon" />
            <input
              type="text"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={() => {
                setTouchedPassword(true);
                setActivePassword(false);
              }}
              onFocus={() => {
                if (touchedPassword) setActivePassword(true);
              }}
            />
            <DropMessage
              message="Password must contain at least: 8+ chars, 1 uppercase, 1 lowercase, 1 number, 1 special."
              isVisible={!isPasswordValid && activePassword}
            />
          </div>
          <div
            className={`${styles.input} ${
              touchedRepeatPassword && !isPasswordValid
                ? styles.inputInvalid
                : ""
            }`}
          >
            <img src={Password} alt="Password Icon" />
            <input
              type="text"
              placeholder="Repeat Password"
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
              onBlur={() => {
                setTouchedRepeatPassword(true);
                setActiveRepeatPassword(false);
              }}
              onFocus={() => {
                if (touchedRepeatPassword) setActiveRepeatPassword(true);
              }}
            />
            <DropMessage
              message="Passwords must match"
              isVisible={!isPasswordValid && activeRepeatPassword}
            />
          </div>
        </div>
        <div className={styles.createdAccount}>
          Already Have An Account ?
          <button type="button" onClick={onOpenLogin}>
            Log In!
          </button>
        </div>
        <div className={styles.signupButton}>
          <button
            type="submit"
            className={`${styles.submit} ${
              !isFormValid ? styles.submitDisabled : ""
            }`}
            disabled={!isFormValid}
            onClick={(e) => {
              handleSubmit(e);
              onOpenLogin();
            }}
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
