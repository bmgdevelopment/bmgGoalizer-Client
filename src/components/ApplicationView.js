import React from "react";
import { useState } from "react";
import { GoalizerHome } from "./GoalizerHome";
import { FolderList } from "./folder/FolderList";
import { FolderProvider } from "./folder/FolderProvider";
import { GoalProvider } from "./goal/GoalProvider";
import { GoalList } from "./goal/GoalList";
import { GoalView } from "./goal/GoalView"

export const ApplicationView = () => {
  const [showHome, setShowHome] = useState(false);

  return (
    <>
      <FolderProvider>
      <GoalProvider>
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
              <GoalList />
            </div>
            <div className="column4">
              {/* <GoalForm /> */}
              <GoalView />
              {showHome && <GoalizerHome />}
            </div>
          </div>
        </main>
      </GoalProvider>
      </FolderProvider>
    </>
  );
};
