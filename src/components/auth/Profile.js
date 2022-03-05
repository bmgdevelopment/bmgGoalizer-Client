import React, { useEffect, useContext } from "react";
import { ProfileContext } from "./AuthProvider.js";
import "./Profile.css";

export const Profile = (props) => {
  const { profile, getProfile } = useContext(ProfileContext);

  useEffect(() => {
    getProfile();
  }, []);

  /*
.userListWrapper {
    margin: -2em 6em;
    border: 1px solid gray;
    padding: 1em;
}

.allUserList {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 20px;
}
*/

  return (
    <>
      <article
        className="profile"
        style={{
          margin: " -2em 6em",
          border: " 1px solid lightgray",
          padding: "1em",
        }}
      >
          <header>
            <h1>Your Profile</h1>
          </header>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginLeft: "20px",
          }}
        >
        <section className="profile__info">
          <header className="profile__header">
            <h3>Your Info</h3>
          </header>
          <div className="profile__name">
            Welcome: {profile.goalizeruser && profile.goalizeruser.user.first_name}{" "}
            {profile.goalizeruser && profile.goalizeruser.user.last_name}
          </div>
          <div className="profile__username">
            Username: {profile.goalizeruser && profile.goalizeruser.user.username}
          </div>
          <div className="profile__bio">
            About you: {profile.goalizeruser && profile.goalizeruser.bio}
          </div>
        </section>

        </div>
      </article>
    </>
  );
};
