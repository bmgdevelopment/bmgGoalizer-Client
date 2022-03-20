import React, { useContext, useState, useEffect } from "react";
import { GoalContext } from "./GoalProvider";
import { GoalTagContext } from "../goaltag/GoalTagProvider";
import { TagContext } from "../tag/TagProvider";

export const GoalView = () => {
  const { goal, setUpdateGoalView, setGoalToUpdate, setShowGoalForm, deleteGoal } =
    useContext(GoalContext);
  const { goaltags, getGoalTags, setGoalTags } = useContext(GoalTagContext)
  const { tags, getTags } = useContext(TagContext)

  useEffect(() => getGoalTags(), [])
  // useEffect(() => getGoalTags()
  // .then(res => setGoalTags(res)), [])
  console.log('Goaltags here :', goaltags)

  useEffect(() => getTags(), [])
  // console.log('Tags here :', tags)
  
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
          {goal.is_complete && <p style={{color: 'gold', fontSize: '25px', border:'none', background: 'none', cursor: 'pointer'}}>🎯</p>}
          {goal.is_favorite && <p style={{color: 'gold', fontSize: '25px', border:'none', background: 'none', cursor: 'pointer'}}>⭐️</p>}

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
                window.alert(`Your goal entitled "${goal.title}" has been deleted!`)
                window.location.reload(true);
              }}
              >🗑</button>
        </>
      )}
    </>
  );
};
