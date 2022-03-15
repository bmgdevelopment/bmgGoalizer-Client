import React, { useContext, useState, useEffect } from "react";
import { FolderContext } from "../folder/FolderProvider";
import { GoalContext } from "./GoalProvider";
import { GoalForm } from "./GoalForm"

export const GoalList = () => {
  const { goalsForFolder } = useContext(FolderContext);
  const { getOneGoal, setShowGoalForm, showGoalForm } = useContext(GoalContext);

  useEffect(() => goalsForFolder);
  useEffect(() => showGoalForm);

  const goalsMapped = () => {
    
    return goalsForFolder?.map((goal) => {
      return (
        <button
          key={goal.id}
          onClick={(event) => {
            event.preventDefault();
            getOneGoal(goal);
            if (showGoalForm) {
              setShowGoalForm(false);
            }
          }}
        >
          <p>{goal?.title}</p>
          <p>{goal?.description}</p>
          <p>{shortenedDate(goal)}</p>
          <p>{goal?.is_complete ? "Is complete" : "Is not complete"}</p>
          <p>{goal?.is_favorite ? "Is favorite" : "Is not favorite"}</p>
        </button>
      );
    });
  };

  const shortenedDate = (goal) => {
    return (
    <>
    {new Date(`${goal.creation_date}`).toString()}
    </>
    )}

  return (
    <>
      <h1>Goals List</h1>
      { goalsForFolder.length > 0 ? (
        goalsMapped()
      ) : (
        <div>{"No goals yet, please create one!"}</div>
      )}
    </>
  );
};
