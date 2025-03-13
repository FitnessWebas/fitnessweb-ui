import React from "react";
import Username from "../../assets/Username.png";
import styles from "./Profile.module.css";

export const Profile = () => {
  return (
    <div className={styles.container1}>
      <h1>Profile Information</h1>
      <hr className={styles.hr} />
      <form className={styles.credentials}>
        <div className={styles.credImg}>
          <img src={Username} alt="Profile picture" />
        </div>
        <div className={styles.credInfo}>
          <h4>Name Surname</h4>
          <p>Member since: PLACEHOLDER</p>
          <h4>Email address</h4>
          <p>PLACEHOLDER@gmail.com</p>
          <hr className={styles.credHr} />
        </div>
      </form>
      <form className={styles.information}>
        <div className={styles.infoData}>
          <h4>Gender</h4>
          <h4>Date of birth</h4>
          <h4>Weight</h4>
          <h4>Height</h4>
        </div>
        <div className={styles.infoButton}>
          <button></button>
        </div>
      </form>
      <hr className={styles.hr} />
      <form className={styles.accSettings}>
        <h1>Account settings</h1>
        <div className={styles.settings}>
          <h5>Profile privacy</h5>
          <h5>Website theme</h5>
          <h5>Unit System</h5>
        </div>
      </form>
    </div>
  );
};

export default Profile;
