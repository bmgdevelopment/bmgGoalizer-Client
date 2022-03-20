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
          ><div className="goalWrapper" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', padding: '10px 10px', alignItems: 'center'
        }}>
            <div className="goalDateWrapper" style={{ display: 'flex', flexDirection: 'column'}}>
              <p className="goalMonth" style={{margin: '0px', fontSize: '30px'}}>Mar</p>  
              <p className="goalDay" style={{margin: '0px', fontSize: '30px'}}>25</p>  
            </div>
            <div className="goalDetailWrapper" style={{ width: '100%'}}>
              <div className="goalTitleBold" style={{fontSize: '16px', fontWeight: 'bold', display: 'flex', flexWrap: 'wrap'}}>
              {/* {goal?.title} */}
              Title Here
              </div>  
              <div className="goalDescriptionInfo" style={{ marginBottom: '10px', marginTop: '10px' }}>
                Details here...
              </div>  
              <div className="goalCompleteDiv" style={{display: 'flex', justifyContent: 'flex-end', marginTop: '-18px' }}>
                <div className="goalDone" style={{fontSize: '20px', right: '10px'}}>🎯</div>
              </div>  
            </div>
          </div>

          <p>{goal?.title}</p>
          <p>{goal?.description}</p>
          <p>{shortenedDate(goal)}</p>
          <p>{goal?.is_complete ? "Is complete" : "Is not complete"}</p>
          <p>{goal?.is_favorite ? "Is favorite" : "Is not favorite"}</p>
          {goal.is_complete && <p style={{color: 'gold', fontSize: '25px', border:'none', background: 'none', cursor: 'pointer'}}>🎯</p>}
          {goal.is_favorite && <p style={{color: 'gold', fontSize: '25px', border:'none', background: 'none', cursor: 'pointer'}}>⭐️</p>}

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
      { goalsForFolder.length > 0 ? (
        goalsMapped()
      ) : (
        <div>{"No goals yet, please create one!"}</div>
      )}
    </>
  );
};
