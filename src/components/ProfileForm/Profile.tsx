import React, { useState } from "react";
import Username from "../../assets/Username.png";
import Username1 from "../../assets/Username1.jpg";
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
            <img src={Username1} alt="Profile picture" />
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="2em"
                viewBox="0 -960 960 960"
                width="2em"
                fill="#e3e3e3"
              >
                <path d="M800-800v240h-80v-103L561-505q19 28 29 59.5t10 65.5q0 92-64 156t-156 64q-92 0-156-64t-64-156q0-92 64-156t156-64q33 0 65 9.5t59 29.5l159-159H560v-80h240ZM380-520q-58 0-99 41t-41 99q0 58 41 99t99 41q58 0 99-41t41-99q0-58-41-99t-99-41Z" />
              </svg>
              <h4>Gender</h4>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="2em"
                viewBox="0 -960 960 960"
                width="2em"
                fill="#e3e3e3"
              >
                <path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z" />
              </svg>
              <h4>Date of birth</h4>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="2em"
                viewBox="0 -960 960 960"
                width="2em"
                fill="#e3e3e3"
              >
                <path d="M240-200h480l-57-400H297l-57 400Zm240-480q17 0 28.5-11.5T520-720q0-17-11.5-28.5T480-760q-17 0-28.5 11.5T440-720q0 17 11.5 28.5T480-680Zm113 0h70q30 0 52 20t27 49l57 400q5 36-18.5 63.5T720-120H240q-37 0-60.5-27.5T161-211l57-400q5-29 27-49t52-20h70q-3-10-5-19.5t-2-20.5q0-50 35-85t85-35q50 0 85 35t35 85q0 11-2 20.5t-5 19.5ZM240-200h480-480Z" />
              </svg>
              <h4>Weight</h4>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="2em"
                viewBox="0 -960 960 960"
                width="2em"
                fill="#e3e3e3"
              >
                <path d="M480-120 320-280l56-56 64 63v-414l-64 63-56-56 160-160 160 160-56 57-64-64v414l64-63 56 56-160 160Z" />
              </svg>
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
