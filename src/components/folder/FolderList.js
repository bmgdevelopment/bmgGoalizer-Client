import React, { useContext, useEffect } from "react";
import { FolderContext } from "./FolderProvider";
import { GoalPreview } from "../goal/GoalPreview";
import "./folder.css";
// import { Link } from "react-router-dom"

export const FolderList = () => {
  const { folders, getFolders, getFolderWithGoals, goalsForFolder } =
    useContext(FolderContext);

  useEffect(() => {
    // debugger
    getFolders();
  }, []);

  // useEffect(() => {
  //   getFolderWithGoals();
  // }, []);

  //   const renderGoalList = {goalsForFolder ? 'show-goals-for-folder' : }

  const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
  };

  const showGoals = (goals) => {

    

    const oneGoal = goals.map((goal) => {

      console.log('Goal info here', goal.id, goal.title, goal.description, goal.creation_date, goal.is_complete)
      return (
        <button>Hello
          {/* <GoalPreview key={goal.id} goal={goal} /> */}
          {/* <p>{goal.title}</p>
          <p>{goal.description}</p>
          <p>{goal.creation_date}</p>
          <p>{goal.is_complete}</p> */}
        </button>
      );
    });

    return goals.length > 0
      ? printToDom("column3", oneGoal)
      : console.log("no goals");
    // return goals ? (
    //   <>
    //     {/* This class needs to have a use state*/}
    //     <div className="list">
    //       <h2>Goals for one folder</h2>
    //       {console.log("Goals here: " + goals)}
    //       {goals.map((goal) => {
    //         return (
    //           <button>
    //             <GoalPreview key={goal.id} goal={goal} />
    //           </button>
    //         );
    //       })}
    //     </div>
    //   </>
    // ) : (
    //   "No goals created, please create goal"
    // );
  };

  return (
    <>
      <h1>Folder List</h1>
      {folders.map((folder) => {
        return (
          <button
            key={folder.id}
            onClick={(event) => {
              event.preventDefault();
              getFolderWithGoals(folder);
              showGoals(goalsForFolder);
              console.log("Made it here");
              // console.log(goalsForFolder);
            }}
          >
            {folder.name}
          </button>
        );
      })}
    </>
  );
};
