import React, { useContext } from "react";
import { GoalContext } from "./GoalProvider";

export const GoalView = () => {
  const { goal } = useContext(GoalContext);
  const shortenedDate = (goal) => {
    return <>{new Date(`${goal.creation_date}`).toString()}</>;
  };

  return (
    <>
      {goal.creation_date === '' ? (
        <></>
      ) : (
        <>
        <div>
          <p>{goal.title}</p>
          <p>{goal.description}</p>
          <p>{shortenedDate(goal)}</p>
          <p>{goal.is_complete ? "Is complete" : "Is not complete"}</p>
          <p>{goal.is_favorite ? "Is favorite" : "Is not favorite"}</p>
        </div>

        {/* 
        Click button, open existing goal in GoalForm view 
        - create updateGoalView and setter--- OK
        - create goalToUpdate and setter--- OK
        - needs to show form by setUpdateGoalView(!updateGoalView)-- OK
        - invokes setGoalToUpdate(goal)
        - ternary for goalform with goalToUpdate obj filled ( updateGoalView ? setGoal(goalToUpdate))
        - have goalform ternary for updateGoalView to show goal form
        - goal info should be already input from the set taking
        */}
        <button
          onClick={(event) => {
            event.preventDefault()
            // setUpdateGoalView(!updateGoalView) //sets to true
            // setGoalToUpate(goal)
          }}>⚙️</button>

        </>
      )}
    </>
  );
};
