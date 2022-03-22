import React, { useContext, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { FolderList } from "./folder/FolderList";
import { GoalList } from "./goal/GoalList";
import { GoalView } from "./goal/GoalView";
import { GoalContext } from "./goal/GoalProvider";
import { GoalForm } from "./goal/GoalForm";
import "./goal/goal.css"

export const ApplicationView = () => {
  const { showGoalForm, setShowGoalForm, updateGoalView, setUpdateGoalView } =
    useContext(GoalContext);
  const history = useHistory()

  useEffect(() => showGoalForm);
  useEffect(() => updateGoalView);

  return (
    <>
      <main className="entireView" style={{ margin: "0px", padding: "none" }}>
        <div className="profilePane">
          {/* PROFILE COLUMN */}
          <div className="column1" style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-end'}}>
            {/* MyProfileView */}
            
            {/* For logout */}
            {(localStorage.getItem("goalizer_user_id") !== null) &&
                    <button className=""
                        style={{ color: 'white', border: '1px solid white', textDecoration: 'none', background: 'none', textAlign: 'center', height: '25px', marginBottom: '30px'}}
                        onClick={() => {
                            localStorage.removeItem("goalizer_user_id")
                            history.push({ pathname: "/" })
                            // history.push({ pathname: "/login" })
                        }}
                    >Logout</button>
                }
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
                      setShowGoalForm(false);
                      setUpdateGoalView(false);
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

            </div>
          </div>
        </div>
      </main>
    </>
  );
};
