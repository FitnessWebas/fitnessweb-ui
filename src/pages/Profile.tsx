import React, { useEffect } from "react";
import Profile from "../components/ProfileForm/Profile";

function ProfilePage() {
  useEffect(() => {
    document.title = "FitnessApp - Profile";
  }, []);

  return (
    <div>
      <Profile />
    </div>
  );
}

export default ProfilePage;
