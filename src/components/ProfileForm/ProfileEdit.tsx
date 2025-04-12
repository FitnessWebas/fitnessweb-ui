import React, { useState } from "react";
import styles from "./ProfileEdit.module.css";

export const ProfileEdit = () => {
  const [name, setName] = useState("Vardas");
  const [surname, setSurname] = useState("Pavarde");
  const [email, setEmail] = useState("varpav@gmail.com");
  const [gender, setGender] = useState("Female");
  const [dateOfBirth, setDateOfBirth] = useState("MMMM-YY-MM");
  const [weight, setWeight] = useState("145 kg");
  const [height, setHeight] = useState("175 cm");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const handleSaveChanges = (e) => {
    e.preventDefault();
    // Add logic to save profile changes
    console.log("Profile changes saved");
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    // Add password change logic
    console.log("Password changed");
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
              <div className={styles.inputItem}>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={styles.inputField}
                />
              </div>
              <div className={styles.inputItem}>
                <input
                  type="text"
                  id="surname"
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                  className={styles.inputField}
                />
              </div>
              <div className={styles.inputItem}>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={styles.inputField}
                />
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
                  onChange={(e) => setGender(e.target.value)}
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
                  onChange={(e) => setDateOfBirth(e.target.value)}
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
                  onChange={(e) => setWeight(e.target.value)}
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
                  onChange={(e) => setHeight(e.target.value)}
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
                <div>
                  <input
                    type="password"
                    id="oldPassword"
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                    className={styles.inputField}
                  />
                </div>
                <div>
                  <input
                    type="password"
                    id="newPassword"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className={styles.inputField}
                  />
                </div>
                <div>
                  <input
                    type="password"
                    id="repeatPassword"
                    value={repeatPassword}
                    onChange={(e) => setRepeatPassword(e.target.value)}
                    className={styles.inputField}
                  />
                </div>
              </div>

              <div className={styles.passwordButtonColumn}>
                <button type="submit" className={styles.passwordButton}>
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
