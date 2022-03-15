import React, { useContext, useEffect, useState } from "react";
import { GoalizerHome } from "./GoalizerHome";
import { FolderList } from "./folder/FolderList";
import { FolderProvider } from "./folder/FolderProvider";
import { GoalProvider } from "./goal/GoalProvider";
import { GoalList } from "./goal/GoalList";
import { GoalView } from "./goal/GoalView";
import { GoalContext } from "./goal/GoalProvider";
import { GoalForm } from "./goal/GoalForm";

export const ApplicationView = () => {
  const [showHome, setShowHome] = useState(false);
  const [showGoalForm, setShowGoalForm] = useState(false);
  // const { addNewGoal, setAddNewGoal } = useContext(GoalContext);

  // useEffect(() => setAddNewGoal())

  return (
    <>
      <FolderProvider>
        <GoalProvider>
          <main style={{ margin: "0px" }}>
            {/* <Route exact path="/">
          <GoalizerHome />
        </Route> */}

            <div className="topNav">
              {/* ADD GOAL BUTTON MAY GET MOVED */}
              <button
                onClick={(event) => {
                  event.preventDefault();
                  setShowGoalForm(!showGoalForm); //sets to true and opens goal form...need
                }}
              >
                + Add Goal
              </button>
            </div>
            <div className="containFourColumns">
              {/* PROFILE COLUMN */}
              <div className="column1">{/* MyProfileView */}</div>

              {/* FOLDER LIST COLUMN */}
              <div className="column2">
                <FolderList />
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
                    <GoalForm />
                    <button
                      onClick={(event) => {
                        event.preventDefault();
                        setShowGoalForm(!showGoalForm);
                      }}
                    >
                      Cancel Goal Form
                    </button>
                  </>
                ) : (
                  ""
                )}
                {showGoalForm === false ? <GoalView /> : ""}
                {/* <GoalView /> */}
                {/* {showHome && <GoalizerHome />} */}
              </div>
            </div>
          </main>
        </GoalProvider>
      </FolderProvider>
    </>
  );
};
