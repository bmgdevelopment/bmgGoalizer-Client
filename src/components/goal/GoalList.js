import React, { useContext, useState, useEffect } from "react";
import { FolderContext } from "../folder/FolderProvider";
import { GoalContext } from "./GoalProvider";
import { GoalForm } from "./GoalForm";
import "./goal.css";

export const GoalList = () => {
  const { goalsForFolder } = useContext(FolderContext);
  const { getOneGoal, setShowGoalForm, showGoalForm } = useContext(GoalContext);

  useEffect(() => goalsForFolder);
  useEffect(() => showGoalForm);

  // const shortenedDate = (goal) => {
  //   return <>{new Date(`${goal.creation_date}`).toString()}</>;
  // };

  const shortenedMonth = (goal) => {
    return <>{new Date(`${goal.creation_date}`).toString().slice(3, 7)}</>;
  };
  const shortenedDay = (goal) => {
    return <>{new Date(`${goal.creation_date}`).toString().slice(7, 10)}</>;
  };
  const shortenedTitle = (goal) => {
    return <>{`${goal.title}`.toString().slice(0, 20)}...</>;
  };
  const shortenedDetails = (goal) => {
    return <>{`${goal.description}`.toString().slice(0, 70)}...</>;
  };

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
              <p className="goalMonth"> {shortenedMonth(goal)} </p>
              <p className="goalDay"> {shortenedDay(goal)} </p>
            </div>
            <div className="goalDetailWrapper">
              <div className="goalTitleBold">{shortenedTitle(goal)}</div>
              <div className="goalDescriptionInfo">
                {shortenedDetails(goal)}
              </div>
              <div className="goalCompleteDiv">
                  {goal.is_complete && (
                    <p className="completedGoalIcon"> 🎯 </p>
                  )}
              </div>
            </div>
          </div>

          {/* {goal.is_favorite && (
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
          )} */}
        </button>
      );
    });
  };

  return (
    <>
      {goalsForFolder.length > 0 ? (
        goalsMapped()
      ) : (
        <div style={{
          textAlign: 'center',
          paddingTop: '20px',
          color: 'gray'
        }}>{"No goals yet, please create one!"}</div>
      )}
    </>
  );
};
