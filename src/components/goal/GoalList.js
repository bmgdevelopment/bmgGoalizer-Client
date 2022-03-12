import React, { useContext, useEffect } from "react";
import { FolderContext } from "../folder/FolderProvider";
import { GoalContext } from "./GoalProvider";


export const GoalList = () => {
  const {  goalsForFolder } = useContext(FolderContext);
  const {  getOneGoal } = useContext(GoalContext);

  
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
        <p> {goal.is_complete ? 'Is complete' : 'Is not complete'}</p>
        <p> {goal.is_favorite ? 'Is favorite' : 'Is not favorite'}</p>
      </button>
    );
  });
};
