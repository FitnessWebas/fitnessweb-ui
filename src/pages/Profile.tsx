import React, { useEffect } from "react";
import Profile from "../components/ProfileForm/Profile";

function ProfilePage() {
  useEffect(() => {
    document.title = "FitnessApp - Profile";
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 text-white">
      <Profile />
    </div>
  );
}

export default ProfilePage;
