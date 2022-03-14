import React, { useContext, useState, useEffect } from "react";
import { FolderContext } from "../folder/FolderProvider";
import { GoalContext } from "./GoalProvider";

export const GoalList = () => {
  const { goalsForFolder } = useContext(FolderContext);
  const { getOneGoal, addNewGoal, setAddNewGoal } = useContext(GoalContext);
  // const [ addNewState,  setAddNewState ] = useState(false);

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
          <p>{goal.title}</p>
          <p>{goal.description}</p>
          <p>{goal.creation_date}</p>
          <p>{goal.is_complete}</p>
          <p>{goal.is_complete ? "Is complete" : "Is not complete"}</p>
          <p>{goal.is_favorite ? "Is favorite" : "Is not favorite"}</p>
        </button>
      );
    });
  };

  return (
    <>
      <h1>Goals List</h1>
      { goalsForFolder.length ? (
        goalsMapped()
      ) : (
        <div>{"No goals yet, please create one!"}</div>
      )}
      <button
        onClick={(event) => {
          event.preventDefault();
          setAddNewGoal(!addNewGoal); //sets to true and opens goal form...need to close form
          //<GoalForm />
        }}> + Add Goal </button>
    </>
  );
};
