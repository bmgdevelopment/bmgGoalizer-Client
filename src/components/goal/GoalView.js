import React, { useContext, useState } from "react";
import { GoalContext } from "./GoalProvider";

export const GoalView = () => {
  const { goal, setUpdateGoalView, setGoalToUpdate, setShowGoalForm, deleteGoal,
    completeGoal, incompleteGoal, favoriteGoal, unfavoriteGoal } =
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
          <button className="">⭐️</button>
        </div>

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
                // folder_id: goal.folder.id, //folder id is INCORRECT to send
                // folder: goal.folder.id, //whole folder is INCORRECT to send
                is_complete: goal.is_complete,
                is_favorite: goal.is_favorite
            }); //sends goal obj to goalToUpdate placement
            }}
          >
            ⚙️
          </button>

          <button 
              key={`delete-folder-${goal.id}`}
              onClick={event => {
                event.preventDefault();
                deleteGoal(goal);
                window.alert(`Your goal ${goal.title} has been deleted!`)
                window.location.reload(true);
              }}
              >🗑</button>
        </>
      )}
    </>
  );
};
