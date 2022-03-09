import React, { useState } from "react";
export const ProfileContext = React.createContext();

export const ProfileProvider = (props) => {
  const [profile, setProfile] = useState({ events: [] });

  const getProfile = () => {
    return fetch("http://localhost:8000/myprofile", {
      method: "GET",
      headers: {
        Authorization: `Token ${localStorage.getItem("goalizer_user_id")}`,
      },
    })
      .then((response) => response.json())
      .then(setProfile);
  };

  const updateProfileImage = () => {
    return fetch(`http://localhost:8000/myprofile/edit`, {
      method: "PUT",
      headers: {
        Authorization: `Token ${localStorage.getItem("goalizer_user_id")}`,
      },
      body: JSON.stringify(goal),
    }).then(getGoals);
  };

  return (
    <ProfileContext.Provider
      value={{
        profile, getProfile, updateProfileImage
      }}
    >
      {props.children}
    </ProfileContext.Provider>
  );
};
