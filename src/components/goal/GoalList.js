import React, { useContext, useState, useEffect } from "react";
import { FolderContext } from "../folder/FolderProvider";
import { GoalContext } from "./GoalProvider";
import { GoalForm } from "./GoalForm"

export const GoalList = () => {
  const { goalsForFolder } = useContext(FolderContext);
  const { getOneGoal, addNewGoal, setAddNewGoal } = useContext(GoalContext);

  useEffect(() => goalsForFolder);

  const goalsMapped = () => {
    return goalsForFolder?.map((goal) => {
      return (
        <button
          key={goal.id}
          onClick={(event) => {
            event.preventDefault();
            getOneGoal(goal);
          }}
        >
          <p>{goal?.title}</p>
          <p>{goal?.description}</p>
          <p>{goal?.creation_date}</p>
          <p>{goal?.is_complete}</p>
          <p>{goal && goal?.is_complete === true ? "Is complete" : "Is not complete"}</p>
          <p>{goal && goal?.is_favorite === true ? "Is favorite" : "Is not favorite"}</p>
        </button>
      );
    });
  };

  return (
    <>
      <h1>Goals List</h1>
      { goalsForFolder.length > 0 ? (
        goalsMapped()
      ) : (
        <div>{"No goals yet, please create one!"}</div>
      )}
      {/* ADD GOAL BUTTON MAY GET MOVED */}
      <button
        onClick={(event) => {
          event.preventDefault();
          setAddNewGoal(!addNewGoal); //sets to true and opens goal form...need to close form
          <GoalForm />
        }}> + Add Goal </button>
    </>
  );
};
