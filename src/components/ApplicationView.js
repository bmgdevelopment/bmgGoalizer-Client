import React, { useContext, useEffect, useState } from "react";
// import { GoalizerHome } from "./GoalizerHome";
import { FolderList } from "./folder/FolderList";
import { GoalList } from "./goal/GoalList";
import { GoalView } from "./goal/GoalView";
import { GoalContext } from "./goal/GoalProvider";
import { GoalForm } from "./goal/GoalForm";

export const ApplicationView = () => {
  // const [showHome, setShowHome] = useState(false);
  const { setGoalCreated, showGoalForm, setShowGoalForm } = useContext(GoalContext);

  useEffect(() => setGoalCreated())
  useEffect(() => showGoalForm)


  return (
    <>
          <main style={{ margin: "0px" }}>

            <div className="topNav">
              {/* ADD GOAL BUTTON MAY GET MOVED */}
              <button
                onClick={(event) => {
                  event.preventDefault();
                  setShowGoalForm(!showGoalForm); //sets to true and opens goal form...need
                  setGoalCreated(false)
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

                {showGoalForm === false ? <GoalView/> : ""}
                
                {/* {showHome && <GoalizerHome />} */}
              </div>
            </div>
          </main>
    </>
  );
};
