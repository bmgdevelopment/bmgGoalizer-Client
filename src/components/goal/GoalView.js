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
        <div>
          <p>{goal.title}</p>
          <p>{goal.description}</p>
          <p>{shortenedDate(goal)}</p>
          <p>{goal.is_complete ? "Is complete" : "Is not complete"}</p>
          <p>{goal.is_favorite ? "Is favorite" : "Is not favorite"}</p>
        </div>
      )}
    </>
  );
};
