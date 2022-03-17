import React, { useContext } from "react";
import { GoalContext } from "./GoalProvider";

export const GoalView = () => {
  const { goal, setUpdateGoalView, updateGoalView, setGoalToUpdate, setShowGoalForm } =
    useContext(GoalContext);
  const shortenedDate = (goal) => {
    return <>{new Date(`${goal.creation_date}`).toString()}</>;
  };

  return (
    <>
      {goal.creation_date === "" ? (
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

          <button
            onClick={(event) => {
              event.preventDefault();
              setUpdateGoalView(true); //sets to true will + need false placement
              setShowGoalForm(true) //opens form
              setGoalToUpdate({
                id: goal.id,
                creator: goal.creator,
                title: goal.title,
                description: goal.description,
                creation_date: goal.creation_date,
                folder: goal.folder,
                is_complete: goal.is_complete,
                is_favorite: goal.is_favorite
            }); //sends goal obj to goalToUpdate placement
            }}
          >
            ⚙️
          </button>
        </>
      )}
    </>
  );
};

{
  /* 
        Click button, open existing goal in GoalForm view 
        - create updateGoalView and setter--- OK
        - create goalToUpdate and setter--- OK
        - needs to show form by setUpdateGoalView(!updateGoalView)-- OK
        - invokes setGoalToUpdate(goal)
        - ternary for goalform with goalToUpdate obj filled ( updateGoalView ? setGoal(goalToUpdate))
        - have goalform ternary for updateGoalView to show goal form
        - goal info should be already input from the set taking
        */
}
