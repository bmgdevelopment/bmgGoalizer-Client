import React, { useContext, useState, useEffect } from "react";
import { FolderContext } from "../folder/FolderProvider";
import { GoalContext } from "./GoalProvider";
import { GoalForm } from "./GoalForm";
import './goal.css'

export const GoalList = () => {
  const { goalsForFolder } = useContext(FolderContext);
  const { getOneGoal, setShowGoalForm, showGoalForm } = useContext(GoalContext);

  useEffect(() => goalsForFolder);
  useEffect(() => showGoalForm);

  const goalsMapped = () => {
    return goalsForFolder?.map((goal) => {
      return (
        <button
        className="oneGoalBtn"
          key={goal.id}
          onClick={(event) => {
            event.preventDefault();
            getOneGoal(goal);
            if (showGoalForm) {
              setShowGoalForm(false);
            }
          }}
        >
          <div className="goalWrapper">
            <div className="goalDateWrapper">
              <p className="goalMonth"> Mar </p>
              <p className="goalDay"> 25 </p>
            </div>
            <div className="goalDetailWrapper">
              <div className="goalTitleBold">
                {goal?.title}
              </div>
              <div
                className="goalDescriptionInfo"
                style={{ marginBottom: "10px", marginTop: "10px" }}
              >
                Details here...
              </div>
              <div
                className="goalCompleteDiv"
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginTop: "-18px",
                }}
              >
                <div
                  className="goalDone"
                  style={{ fontSize: "20px", right: "10px" }}
                >
                  🎯
                </div>
              </div>
            </div>
          </div>

          <p>{goal?.title}</p>
          <p>{goal?.description}</p>
          <p>{shortenedDate(goal)}</p>
          <p>{goal?.is_complete ? "Is complete" : "Is not complete"}</p>
          <p>{goal?.is_favorite ? "Is favorite" : "Is not favorite"}</p>
          {goal.is_complete && (
            <p
              style={{
                color: "gold",
                fontSize: "25px",
                border: "none",
                background: "none",
                cursor: "pointer",
              }}
            >
              🎯
            </p>
          )}
          {goal.is_favorite && (
            <p
              style={{
                color: "gold",
                fontSize: "25px",
                border: "none",
                background: "none",
                cursor: "pointer",
              }}
            >
              ⭐️
            </p>
          )}
        </button>
      );
    });
  };

  const shortenedDate = (goal) => {
    return <>{new Date(`${goal.creation_date}`).toString()}</>;
  };

  return (
    <>
      {goalsForFolder.length > 0 ? (
        goalsMapped()
      ) : (
        <div>{"No goals yet, please create one!"}</div>
      )}
    </>
  );
};
