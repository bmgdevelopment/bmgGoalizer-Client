import React from "react";
import { useState } from "react";
import { GoalizerHome } from "./GoalizerHome";
import { FolderList } from "./folder/FolderList";
import { FolderProvider } from "./folder/FolderProvider";
// import { Route } from "react-router-dom";
// import { GoalizerHome } from "./GoalizerHome"
// import { UserProvider } from "./user/UserProvider"
// import { UserList } from "./user/UserList"

export const ApplicationView = () => {
  const [showHome, setShowHome] = useState(false);

  return (
    <>
      <FolderProvider>
        <main style={{ margin: "0px" }}>
          {/* <Route exact path="/">
          <GoalizerHome />
        </Route> */}

          <div className="topNav"></div>
          <div className="containFourColumns">
            <div className="column1"></div>
            <div className="column2">
              <FolderList />
            </div>
            <div id="column3" className="column3">
              <button onClick={() => setShowHome(!showHome)}>Toggle</button>
            </div>
            <div className="column4">{showHome && <GoalizerHome />}</div>
          </div>
        </main>
      </FolderProvider>
    </>
  );
};
