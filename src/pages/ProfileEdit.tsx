import React, { useEffect } from "react";
import ProfileEdit from "../components/ProfileForm/ProfileEdit";

function ProfilePageEdit() {
  useEffect(() => {
    document.title = "FitnessApp - Profile";
  }, []);

  return (
    <div>
      <ProfileEdit />
    </div>
  );
}

export default ProfilePageEdit;
