import React, { useState } from "react";
import Username from "../../assets/Username.png";
import styles from "./Profile.module.css";

export const Profile = () => {
  const [name, setName] = useState("Name Surname");
  const [memberSince, setMemberSince] = useState("MMMM-YY-XX");
  const [email, setEmail] = useState("PLACEHOLDER@gmail.com");
  const [gender, setGender] = useState("Male");
  const [dateOfBirth, setDateOfBirth] = useState("1900 01 01");
  const [weight, setWeight] = useState("200 kg");
  const [height, setHeight] = useState("192cm");
  const [privacy, setPrivacy] = useState("Public");
  const [theme, setTheme] = useState("Dark");
  const [units, setUnits] = useState("Metric");
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isThemeOpen, setIsThemeOpen] = useState(false);
  const [isUnitsOpen, setIsUnitsOpen] = useState(false);

  const handlePrivacyChange = (newPrivacy: string) => {
    setPrivacy(newPrivacy);
    setIsPrivacyOpen(false); // Close the dropdown after selection
  };

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
    setIsThemeOpen(false); // Close the dropdown after selection
  };

  const handleUnitsChange = (newUnits: string) => {
    setUnits(newUnits);
    setIsUnitsOpen(false); // Close the dropdown after selection
  };

  return (
    <div className={styles.container1}>
      <div className={styles.content1}>
        <h1>Profile Information</h1>
        <hr className={styles.hr} />
        <form className={styles.credentials}>
          <div className={styles.credImg}>
            <img src={Username} alt="Profile picture" />
          </div>
          <div className={styles.credInfo}>
            <div>
              <h4>{name}</h4>
              <p>Member since: {memberSince}</p>
            </div>
            <div>
              <h4>Email address</h4>
              <p>{email}</p>
            </div>
            <hr className={styles.credHr} />
          </div>
        </form>
        <form className={styles.information}>
          <div className={styles.infoDesc}>
            <div>
              <img src={Username} alt="Gender sign" />
              <h4>Gender</h4>
            </div>
            <div>
              <img src={Username} alt="Gender sign" />
              <h4>Date of birth</h4>
            </div>
            <div>
              <img src={Username} alt="Gender sign" />
              <h4>Weight</h4>
            </div>
            <div>
              <img src={Username} alt="Gender sign" />
              <h4>Height</h4>
            </div>
          </div>
          <div className={styles.infoData}>
            <div>
              <h4>{gender}</h4>
            </div>
            <div>
              <h4>{dateOfBirth}</h4>
            </div>
            <div>
              <h4>{weight}</h4>
            </div>
            <div>
              <h4>{height}</h4>
            </div>
          </div>
          <div className={styles.infoButton}>
            <button type="button">Edit profile</button>
          </div>
        </form>
        <hr className={styles.hr} />
        <form className={styles.account}>
          <h1>Account settings</h1>
          <div className={styles.accSettings}>
            <div className={styles.settingsDesc}>
              <h5>Profile privacy</h5>
              <h5>Website theme</h5>
              <h5>Unit System</h5>
            </div>
            <div className={styles.settingsData}>
              <div className={styles.dropdown}>
                <button
                  type="button"
                  onClick={() => setIsPrivacyOpen(!isPrivacyOpen)}
                >
                  <h5>{privacy}</h5>
                </button>
                {isPrivacyOpen && (
                  <div className={styles.dropdownContent}>
                    <p onClick={() => handlePrivacyChange("Private")}>
                      Private
                    </p>
                    <p onClick={() => handlePrivacyChange("Public")}>Public</p>
                  </div>
                )}
              </div>
              <div className={styles.dropdown}>
                <button
                  type="button"
                  onClick={() => setIsThemeOpen(!isThemeOpen)}
                >
                  <h5>{theme}</h5>
                </button>
                {isThemeOpen && (
                  <div className={styles.dropdownContent}>
                    <p onClick={() => handleThemeChange("Dark")}>Dark</p>
                    <p onClick={() => handleThemeChange("Light")}>Light</p>
                  </div>
                )}
              </div>
              <div className={styles.dropdown}>
                <button
                  type="button"
                  onClick={() => setIsUnitsOpen(!isUnitsOpen)}
                >
                  <h5>{units}</h5>
                </button>
                {isUnitsOpen && (
                  <div className={styles.dropdownContent}>
                    <p onClick={() => handleUnitsChange("Metric")}>Metric</p>
                    <p onClick={() => handleUnitsChange("Imperial")}>
                      Imperial
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
