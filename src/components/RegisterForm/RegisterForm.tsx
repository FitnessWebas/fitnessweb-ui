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
  const [showNamePopup, setShowNamePopup] = useState(false);

  //kept for later, if we decide to make it auto log in after register
  // const handleSubmit = (event: React.FormEvent) => {
  //   event.preventDefault();
  //   onClose();
  // };

  const isFormValid =
    name.trim() !== "" &&
    surname.trim() !== "" &&
    username.trim() !== "" &&
    email.trim() !== "" &&
    password.trim() !== "" &&
    repeatPassword.trim() !== "";

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
          <div className={styles.input}>
            <img src={Credentials} alt="Credentials Icon" />
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <DropMessage
              message="Window can't be empty and should only have letters"
              isVisible={true}
            />
          </div>

          <div className={styles.input}>
            <img src={Credentials} alt="Credentials Icon" />
            <input
              type="text"
              placeholder="Surname"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />
          </div>

          <div className={styles.input}>
            <img src={user_icon} alt="User Icon" />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className={styles.input}>
            <img src={Email} alt="Email Icon" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
