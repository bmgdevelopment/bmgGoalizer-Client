import React, { useContext, useState, useEffect } from "react";
import { GoalContext } from "./GoalProvider";
import { GoalTagContext } from "../goaltag/GoalTagProvider";
import { TagContext } from "../tag/TagProvider";
import "./goal.css";

export const GoalView = () => {
  const {
    goal,
    setUpdateGoalView,
    setGoalToUpdate,
    setShowGoalForm,
    deleteGoal,
  } = useContext(GoalContext);
  const { goaltags, getGoalTags, setGoalTags } = useContext(GoalTagContext);
  const { tags, getTags } = useContext(TagContext);

  useEffect(() => getGoalTags(), []);
  console.log("Goaltags here :", goaltags);
  // console.log(goal.folder.color)

  useEffect(() => getTags(), []);
  // console.log('Tags here :', tags)

  const shortenedDate = (goal) => {
    return <>{new Date(`${goal.creation_date}`).toString().slice(0,15)}</>;
  };

  const colorState = (goal) => {
    const color = goal.id ? goal.folder.color : "lightgray";
    return color;
  };

  console.log("color state: ", colorState(goal));

  return (
    <>
      {goal.creation_date === "" ? (
        <></>
      ) : (
        <>
          <div className="oneGoalViewParent" style={{ display: "flex" }}>
            <div
              className="oneGoalMainPane"
              style={{
                width: "20px",
                width: "97%",
                display: "flex",
                flexDirection: "column",
                padding: "20px",
              }}
            >
              <div
                className="oneGoalTitleWrapper"
                style={{}}
              >
                <div
                  className="oneGoalIconWrapper"
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <div className="oneGoalIcons" style={{ fontSize: "35px" }}>
                  </div>
                </div>
                <div
                  className="oneGoalTitle"
                  style={{ fontSize: "35px", fontWeight: "bold"}}
                >
                  <div style={{display: 'flex'}}>
                    {goal.title} 
                    {goal.is_favorite && (<p style={{ fontSize: "35px", marginLeft: '15px', marginTop: '0px', marginBottom: '0px', padding: 'none !important'}}> ⭐️ </p>)}
                    {goal.is_complete && ( <p className="" style={{fontSize: "35px", marginLeft: '15px', marginTop: '0px', marginBottom: '0px', padding: 'none !important' }}> 🎯 </p>)} 
                    </div>
                </div>
              </div>

              <div
                className="oneGoalDetailWrapper"
                style={{
                  marginTop: "20px",
                  marginBottom: "20px",
                  fontSize: "18px",
                  minHeight: "400px",
                }}
              >
                {goal.description}
              </div>

              <div className="oneGoalHorizontalWrapper" style={{}}>
                <hr style={{ width: "98%", opacity: "0.3" }} />
              </div>

              <div className="oneGoalTagWrapper" style={{paddingTop:'5px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <div className="leftTagDiv">
                  <button
                    className="tagLabel"
                    style={{
                      padding: "5px 13px",
                      background: 'none',
                      border: '1px solid gray',
                      borderRadius: '3px',
                      color: 'gray'
                    }}
                  >
                    Tag Label
                  </button>
                </div>
                <div className="rightDateDiv" style={{fontSize: '13px', color: 'gray'}}>
                Goal created on {shortenedDate(goal)} in your folder {goal.folder.name}
                </div>
              </div>

              <div className="oneGoalEditWrapper" style={{}}></div>
            </div>
            <div
              className="oneGoalColorStrip"
              style={{
                width: "20px",
                height: "90vh",
                background: `${colorState(goal)}`,
              }}
            ></div>
          </div>

          {/* ------- OLD -------- */}
          {/*         
        <div>
          {goal.is_complete && <p style={{color: 'gold', fontSize: '25px', border:'none', background: 'none', cursor: 'pointer'}}>🎯</p>}
          {goal.is_favorite && <p style={{color: 'gold', fontSize: '25px', border:'none', background: 'none', cursor: 'pointer'}}>⭐️</p>}

        </div>

          <div>
          
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
              >🗑</button> */}
        </>
      )}
    </>
  );
};
