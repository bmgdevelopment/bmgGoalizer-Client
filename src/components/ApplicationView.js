import React from "react";
// import { Route } from "react-router-dom";
import { GoalizerHome } from "./GoalizerHome";
// import { GoalizerHome } from "./GoalizerHome"
// import { UserProvider } from "./user/UserProvider"
// import { UserList } from "./user/UserList"

export const ApplicationView = () => {
  return (
    <>
      <main
        // style={{
        //   margin: "5rem 2rem",
        //   lineHeight: "1.75rem",
        // }}
      >
        {/* <Route exact path="/">
          <GoalizerHome />
        </Route> */}

        <GoalizerHome />
      </main>
    </>
  );
};
