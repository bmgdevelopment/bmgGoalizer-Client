import React, { useContext, useEffect, useState } from "react";
// import { GoalizerHome } from "./GoalizerHome";
import { FolderList } from "./folder/FolderList";
import { GoalList } from "./goal/GoalList";
import { GoalView } from "./goal/GoalView";
import { GoalContext } from "./goal/GoalProvider";
import { GoalForm } from "./goal/GoalForm";

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
            {/* PROFILE COLUMN
          <div className="column1">{/* MyProfileView </div> */}

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
              {/* {updateGoalView ? (
                  <>
                    <GoalForm />
                    <button
                      onClick={(event) => {
                        event.preventDefault();
                        setUpdateGoalView(false);
                      }}
                    >
                      Cancel Update Goal Form
                    </button>
                  </>
                ) : (
                  ""
                )} */}

              {showGoalForm === false ? <GoalView /> : ""}

              {/* {showHome && <GoalizerHome />} */}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
