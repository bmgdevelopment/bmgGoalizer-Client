import React, { useContext, useEffect, useState } from "react";
// import { GoalizerHome } from "./GoalizerHome";
import { FolderList } from "./folder/FolderList";
import { GoalList } from "./goal/GoalList";
import { GoalView } from "./goal/GoalView";
import { GoalContext } from "./goal/GoalProvider";
import { GoalForm } from "./goal/GoalForm";
import "./goal/goal.css"

export const ApplicationView = () => {
  // const [showHome, setShowHome] = useState(false);
  const { showGoalForm, setShowGoalForm, updateGoalView, setUpdateGoalView } =
    useContext(GoalContext);

  useEffect(() => showGoalForm);
  useEffect(() => updateGoalView);

  return (
    <>
      <main className="entireView" style={{ margin: "0px", padding: "none" }}>
        <div className="profilePane">
          {/* PROFILE COLUMN */}
          <div className="column1">{/* MyProfileView */}

          </div>
        </div>

        <div className="remainingPane">
          <div className="topNav">
            <h1 className="logo" >goalizer 🎯</h1>
            <button
            className="addGoalButton"
              onClick={(event) => {
                event.preventDefault();
                setShowGoalForm(!showGoalForm); //sets to true and opens goal form...need
              }}
            >
              +
            </button>
          </div>

          <div className="containFourColumns">

            {/* FOLDER LIST COLUMN */}
            <div className="column2">
              <div className="centerColumn2">
              <FolderList />
                </div>
            </div>

            {/* GOAL LIST COLUMN */}
            <div id="column3" className="column3">
              {/* <button onClick={() => setShowHome(!showHome)}>Toggle</button> */}
              <GoalList />
            </div>

            {/* ONE GOAL VIEW */}
            <div className="column4">
              {showGoalForm ? (
                <>
                <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                  <button
                  className="cancelGoalForm"
                    onClick={(event) => {
                      event.preventDefault();
                      setShowGoalForm(!showGoalForm);
                    }}
                  >
                   Cancel Form
                  </button>
                </div>
                  <GoalForm />
                </>
              ) : (
                ""
              )}

              {showGoalForm === false ? <GoalView /> : ""}

              {/* {showHome && <GoalizerHome />} */}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
