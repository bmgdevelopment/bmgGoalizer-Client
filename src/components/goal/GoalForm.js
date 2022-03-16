import React, { useContext, useEffect, useState } from "react";
import { GoalContext } from "./GoalProvider";
import { FolderContext } from "../folder/FolderProvider";

export const GoalForm = () => {
  const { addGoal, updateGoal, getGoals, setAddNewGoal,
     showGoalForm, setShowGoalForm, updateGoalView, 
    setUpdateGoalView, goalToUpdate } = useContext(GoalContext);
  const { folders} = useContext(FolderContext)
  const goalId = null //Need to change goalId for updateGoal
  const [goal, setGoal] = useState({
      creator: parseInt(localStorage.getItem("goalizer_user_id")),
      title: '',
      description: '',
      creation_date: new Date(),
      folder: '',
      is_complete: '',
      is_favorite: ''
  })

  const handleControlledInputChange = e => {
    
    // const newGoal = {...goal}
    // newGoal[e.target.name] = e.target.value
    // setGoal(newGoal)

      if (updateGoalView) {
        const updatingGoal = {...goalToUpdate}
        updatingGoal[e.target.name] = e.target.value
        setGoal(updatingGoal)
      } else {
        const newGoal = {...goal}
        newGoal[e.target.name] = e.target.value
        setGoal(newGoal)
      }
  }

  const handleSaveGoal = () => {
      
    if (goal.title && goal.description
      && goal.folder && goal.is_complete.length && goal.is_favorite.length ) {
        
        if (showGoalForm) {
          setShowGoalForm(false);
        }
        
        window.alert(`Your goal entitled "${goal.title}" has been created!`)

       addGoal({
         creator: goal.creator,
         title: goal.title,
         description: goal.description,
         creation_date: goal.creation_date,
         folder: goal.folder,
         is_complete: goal.is_complete,
         is_favorite: goal.is_favorite
     }).then(getGoals)
    } else {
      window.alert("Please complete the goal form to save!")
    }

    // return (goal.id ? 
      // updateGoal :
      // addGoal({
      //     creator: goal.creator,
      //     title: goal.title,
      //     description: goal.description,
      //     creation_date: goal.creation_date,
      //     folder: goal.folder,
      //     is_complete: goal.is_complete,
      //     is_favorite: goal.is_favorite
      // }).then(getGoals))
  }
 
  return (
      <> {
    <form className="">
      <div className="">
        
        <fieldset className="">
          <label className="" htmlFor="goalForm">
            {goalId ? (
              <> Update Goal Name </>
            ) : (
              <> Add New Goal Title</>
            )}
          </label>
          <textarea
            type="text"
            name="title"
            id="goalName"
            className=""
            placeholder="Goal title here"
            required
            autoFocus
            value={goal.title}
            onChange={handleControlledInputChange}
          />
        </fieldset>

        <fieldset className="">
          <label className="" htmlFor="goalForm">
            Description
          </label>
          <textarea
            type="text"
            name="description"
            id="goalDescription"
            className=""
            placeholder="Describe your goal here"
            required
            autoFocus
            value={goal.description}
            onChange={handleControlledInputChange}
          />
        </fieldset>

        <fieldset className="">
          <label className="" htmlFor="itemType">
            Folder
          </label>
            <select
              name="folder"
              id="goalFolder"
              className=""
              placeholder=""
              required
              value={goal.folder}
              onChange={handleControlledInputChange}
            >
              <option value="0">Select A Folder</option>
              { folders?.map(folder => {
                return (
                  <option value={folder.id}>{folder.name}</option>
                )
              })}
            </select>
        </fieldset>

        <fieldset className="">
          <label className="" htmlFor="itemType">
            Complete?
          </label>
            <select
              name="is_complete"
              id="goalIsComplete"
              className=""
              placeholder=""
              required
              value={goal.is_complete}
              onChange={handleControlledInputChange}
            >
              <option value="0">Is this goal complete?</option>
              <option value={'False'}>Not quite...</option>
              <option value={'True'}>Yes, indeed!</option>
            </select>
        </fieldset>

        <fieldset className="">
          <label className="" htmlFor="itemType">
            Favorite?
          </label>
            <select
              name="is_favorite"
              id="goalFavorite"
              className=""
              placeholder=""
              required
              value={goal.is_favorite}
              onChange={handleControlledInputChange}
            >
              <option value="0">Is this goal a favorite?</option>
              <option value={'False'}>Nope</option>
              <option value={'True'}>For sure!</option>
            </select>
        </fieldset>

      </div>

      <div className="">
        <fieldset className="">
          <button
            className=""
            onClick={(event) => {
              event.preventDefault(); // Prevent browser from submitting the form and refreshing the page
              handleSaveGoal();
              setAddNewGoal(false); //should close goalform on applicationview
              // window.alert(`Your goal entitled "${goal.title}" has been created!`)
              
              //showGoalForm opens and closes form
              // if (showGoalForm) {
              //   setShowGoalForm(false);
              // }

            }}
          >
            {goalId ? <> Update Goal </> : <> Add New Goal </>}
          </button>
        </fieldset>
      </div>
    </form>}
    </>
  );
};
