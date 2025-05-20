import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import styles from "./ProfileEdit.module.css";
import { useNavigate } from "react-router-dom";
import { useGetByUserIdUserMetrics } from "../../api/userMetrics/useGetByUserIdUserMetrics";
import { useGetByUserIdUser } from "../../api/user/useGetByUserIdUser";
import { GenderOptions } from "../../data/Gender";
import { useUpdateUser } from "../../api/user/useUpdateUser";

export const ProfileEdit: React.FC = () => {
  const loggedInUserId = localStorage.getItem("userId");
  const { data: metrics } = useGetByUserIdUserMetrics(loggedInUserId, {
    enabled: !!loggedInUserId,
  });
  const { data: user } = useGetByUserIdUser(loggedInUserId, {
    enabled: !!loggedInUserId,
  });
  const updateUser = useUpdateUser();

  if (!metrics || !user) {
    return <div>Loading...</div>;
  }

  const navigate = useNavigate();
  // Form fields state
  const [name, setName] = useState<string>(user.firstName);
  const [surname, setSurname] = useState<string>(user.lastName);
  const [email, setEmail] = useState<string>(user.email);
  const [gender, setGender] = useState<string>(
    GenderOptions[metrics.gender].label
  );
  const [dateOfBirth, setDateOfBirth] = useState<string>(
    new Date(metrics.birthday).toLocaleDateString("en-EU", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  );
  const [weight, setWeight] = useState<string>("145 kg");
  const [height, setHeight] = useState<string>(metrics.height.toString());
  const [oldPassword, setOldPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [repeatPassword, setRepeatPassword] = useState<string>("");

  // Validation states
  const [nameError, setNameError] = useState<string>("");
  const [surnameError, setSurnameError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [oldPasswordError, setOldPasswordError] = useState<string>("");
  const [newPasswordError, setNewPasswordError] = useState<string>("");
  const [repeatPasswordError, setRepeatPasswordError] = useState<string>("");

  // Form touched states
  const [nameTouched, setNameTouched] = useState<boolean>(false);
  const [surnameTouched, setSurnameTouched] = useState<boolean>(false);
  const [emailTouched, setEmailTouched] = useState<boolean>(false);
  const [oldPasswordTouched, setOldPasswordTouched] = useState<boolean>(false);
  const [newPasswordTouched, setNewPasswordTouched] = useState<boolean>(false);
  const [repeatPasswordTouched, setRepeatPasswordTouched] =
    useState<boolean>(false);

  // Password button disabled state
  const [isPasswordButtonDisabled, setIsPasswordButtonDisabled] =
    useState<boolean>(true);

  // Validation functions
  useEffect(() => {
    if (nameTouched) {
      validateName(name);
    }
  }, [name, nameTouched]);

  useEffect(() => {
    if (surnameTouched) {
      validateSurname(surname);
    }
  }, [surname, surnameTouched]);

  useEffect(() => {
    if (emailTouched) {
      validateEmail(email);
    }
  }, [email, emailTouched]);

  useEffect(() => {
    if (newPasswordTouched || repeatPasswordTouched) {
      validatePasswords(newPassword, repeatPassword);
    }
  }, [newPassword, repeatPassword, newPasswordTouched, repeatPasswordTouched]);

  useEffect(() => {
    if (oldPasswordTouched) {
      validateOldPassword(oldPassword);
    }
  }, [oldPassword, oldPasswordTouched]);

  // Update password button disabled state based on validation and input values
  useEffect(() => {
    // Button should be enabled only when:
    // 1. All password fields are filled
    // 2. There are no validation errors
    // 3. If changing password, all password fields must pass validation

    const arePasswordFieldsFilled =
      oldPassword.length > 0 &&
      newPassword.length > 0 &&
      repeatPassword.length > 0;
    const arePasswordFieldsValid =
      oldPasswordError === "" &&
      newPasswordError === "" &&
      repeatPasswordError === "";

    // If any password field has content, we're attempting to change password and all fields should be validated
    const isAttemptingPasswordChange =
      oldPassword.length > 0 ||
      newPassword.length > 0 ||
      repeatPassword.length > 0;

    if (isAttemptingPasswordChange) {
      // Only enable button if all fields are filled and valid
      setIsPasswordButtonDisabled(
        !arePasswordFieldsFilled || !arePasswordFieldsValid
      );
    } else {
      // If no password fields are touched, disable button (default state)
      setIsPasswordButtonDisabled(true);
    }
  }, [
    oldPassword,
    newPassword,
    repeatPassword,
    oldPasswordError,
    newPasswordError,
    repeatPasswordError,
  ]);

  const validateName = (value: string): void => {
    if (!(/^[A-Za-z]+$/.test(value.trim()) && value.trim().length >= 1)) {
      setNameError(
        "Name must contain only letters and be at least 1 character long"
      );
    } else {
      setNameError("");
    }
  };

  const validateSurname = (value: string): void => {
    if (!(/^[A-Za-z]+$/.test(value.trim()) && value.trim().length >= 1)) {
      setSurnameError(
        "Surname must contain only letters and be at least 1 character long"
      );
    } else {
      setSurnameError("");
    }
  };

  const validateEmail = (value: string): void => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const validateOldPassword = (value: string): void => {
    if (
      value.length === 0 &&
      (newPassword.length > 0 || repeatPassword.length > 0)
    ) {
      setOldPasswordError("Please enter your current password");
    } else {
      setOldPasswordError("");
    }
  };

  const validatePasswords = (newPass: string, repeatPass: string): void => {
    if (newPass.length > 0 || repeatPass.length > 0) {
      // Check if passwords match
      if (newPass !== repeatPass) {
        setRepeatPasswordError("Passwords do not match");
      } else {
        setRepeatPasswordError("");
      }

      // Validate password strength
      if (newPass.length > 0) {
        const isLengthValid = newPass.length >= 8;
        const hasUppercase = /[A-Z]/.test(newPass);
        const hasLowercase = /[a-z]/.test(newPass);
        const hasNumber = /[0-9]/.test(newPass);
        const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(newPass);

        if (
          !isLengthValid ||
          !hasUppercase ||
          !hasLowercase ||
          !hasNumber ||
          !hasSpecial
        ) {
          setNewPasswordError(
            "Password must be at least 8 characters and include uppercase, lowercase, number, and special character"
          );
        } else {
          setNewPasswordError("");
        }
      }
    } else {
      setNewPasswordError("");
      setRepeatPasswordError("");
    }
  };

  const handleSaveChanges = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    // Validate all profile fields
    setNameTouched(true);
    setSurnameTouched(true);
    setEmailTouched(true);

    validateName(name);
    validateSurname(surname);
    validateEmail(email);

    if (
      nameError === "" &&
      surnameError === "" &&
      emailError === "" &&
      loggedInUserId
    ) {
      updateUser.mutate(
        {
          userId: loggedInUserId,
          firstName: name,
          lastName: surname,
          email: email,
        },
        {
          onSuccess: () => {
            navigate("/profile");
          },
        }
      );
    }
  };

  const handleChangePassword = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    // Validate all password fields
    setOldPasswordTouched(true);
    setNewPasswordTouched(true);
    setRepeatPasswordTouched(true);

    validateOldPassword(oldPassword);
    validatePasswords(newPassword, repeatPassword);

    // Only proceed if all validations pass
    if (
      oldPasswordError === "" &&
      newPasswordError === "" &&
      repeatPasswordError === ""
    ) {
      console.log("Password changed");
      // Add password change logic
    }
  };

  // Input change handler with type safety
  const handleInputChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
      setter(e.target.value);
    };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>Edit Profile Information</h2>
        <hr className={styles.divider} />

        <form onSubmit={handleSaveChanges}>
          <div className={styles.profileSection}>
            {/* First column - Profile image */}
            <div className={styles.profileImageColumn}>
              <div className={styles.profileImage}>
                {/* Placeholder for profile image */}
                <div className={styles.avatarPlaceholder}></div>
              </div>
              <button type="button" className={styles.editImageButton}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>

            {/* Second column - Labels */}
            <div className={styles.labelsColumn}>
              <div className={styles.labelItem}>Name</div>
              <div className={styles.labelItem}>Surname</div>
              <div className={styles.labelItem}>Email address</div>
            </div>

            {/* Third column - Input fields */}
            <div className={styles.inputsColumn}>
              <div className={styles.inputContainer}>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={handleInputChange(setName)}
                  onBlur={() => setNameTouched(true)}
                  className={`${styles.inputField} ${
                    nameError && styles.inputError
                  }`}
                />
                {nameError && (
                  <div className={styles.errorMessage}>{nameError}</div>
                )}
              </div>
              <div className={styles.inputContainer}>
                <input
                  type="text"
                  id="surname"
                  value={surname}
                  onChange={handleInputChange(setSurname)}
                  onBlur={() => setSurnameTouched(true)}
                  className={`${styles.inputField} ${
                    surnameError && styles.inputError
                  }`}
                />
                {surnameError && (
                  <div className={styles.errorMessage}>{surnameError}</div>
                )}
              </div>
              <div className={styles.inputContainer}>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleInputChange(setEmail)}
                  onBlur={() => setEmailTouched(true)}
                  className={`${styles.inputField} ${
                    emailError && styles.inputError
                  }`}
                />
                {emailError && (
                  <div className={styles.errorMessage}>{emailError}</div>
                )}
              </div>
            </div>
          </div>

          <hr className={styles.divider} />

          <div className={styles.infoFieldsContainer}>
            {/* First column of info fields */}
            <div className={styles.infoFieldsColumn}>
              <div className={styles.fieldGroup}>
                <label className={styles.fieldLabel}>
                  <svg
                    className={styles.fieldIcon}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                      fill="#e3e3e3"
                    />
                  </svg>
                  Gender
                </label>
                <select
                  value={gender}
                  onChange={handleInputChange(setGender)}
                  className={styles.selectField}
                >
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.fieldLabel}>
                  <svg
                    className={styles.fieldIcon}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"
                      fill="#e3e3e3"
                    />
                  </svg>
                  Date of birth
                </label>
                <input
                  type="text"
                  value={dateOfBirth}
                  onChange={handleInputChange(setDateOfBirth)}
                  className={styles.inputField}
                  placeholder="MMMM-YY-MM"
                />
              </div>
            </div>

            {/* Second column of info fields */}
            <div className={styles.infoFieldsColumn}>
              <div className={styles.fieldGroup}>
                <label className={styles.fieldLabel}>
                  <svg
                    className={styles.fieldIcon}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z"
                      fill="#e3e3e3"
                    />
                  </svg>
                  Weight
                </label>
                <input
                  type="text"
                  value={weight}
                  onChange={handleInputChange(setWeight)}
                  className={styles.inputField}
                />
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.fieldLabel}>
                  <svg
                    className={styles.fieldIcon}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71L12 2z"
                      fill="#e3e3e3"
                    />
                  </svg>
                  Height
                </label>
                <input
                  type="text"
                  value={height}
                  onChange={handleInputChange(setHeight)}
                  className={styles.inputField}
                />
              </div>
            </div>

            {/* Button column aligned with last field */}
            <div className={styles.buttonColumn}>
              <button type="submit" className={styles.saveButton}>
                Save Changes
              </button>
            </div>
          </div>
        </form>

        <hr className={styles.divider} />

        <div className={styles.passwordSection}>
          <h3>Change Password</h3>

          <form onSubmit={handleChangePassword} className={styles.passwordForm}>
            <div className={styles.passwordGrid}>
              <div className={styles.passwordLabels}>
                <div>Old Password</div>
                <div>New Password</div>
                <div>Repeat Password</div>
              </div>

              <div className={styles.passwordInputs}>
                <div className={styles.inputContainer}>
                  <input
                    type="password"
                    id="oldPassword"
                    value={oldPassword}
                    onChange={handleInputChange(setOldPassword)}
                    onBlur={() => setOldPasswordTouched(true)}
                    className={`${styles.inputField} ${
                      oldPasswordError && styles.inputError
                    }`}
                  />
                  {oldPasswordError && (
                    <div className={styles.errorMessage}>
                      {oldPasswordError}
                    </div>
                  )}
                </div>
                <div className={styles.inputContainer}>
                  <input
                    type="password"
                    id="newPassword"
                    value={newPassword}
                    onChange={handleInputChange(setNewPassword)}
                    onBlur={() => setNewPasswordTouched(true)}
                    className={`${styles.inputField} ${
                      newPasswordError && styles.inputError
                    }`}
                  />
                  {newPasswordError && (
                    <div className={styles.errorMessage}>
                      {newPasswordError}
                    </div>
                  )}
                </div>
                <div className={styles.inputContainer}>
                  <input
                    type="password"
                    id="repeatPassword"
                    value={repeatPassword}
                    onChange={handleInputChange(setRepeatPassword)}
                    onBlur={() => setRepeatPasswordTouched(true)}
                    className={`${styles.inputField} ${
                      repeatPasswordError && styles.inputError
                    }`}
                  />
                  {repeatPasswordError && (
                    <div className={styles.errorMessage}>
                      {repeatPasswordError}
                    </div>
                  )}
                </div>
              </div>

              <div className={styles.passwordButtonColumn}>
                <button
                  type="submit"
                  className={`${styles.passwordButton} ${
                    isPasswordButtonDisabled ? styles.disabledButton : ""
                  }`}
                  disabled={isPasswordButtonDisabled}
                >
                  Change Password
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileEdit;
