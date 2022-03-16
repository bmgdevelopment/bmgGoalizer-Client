import React, { useContext, useEffect, useState } from "react";
import { GoalContext } from "./GoalProvider";
import { FolderContext } from "../folder/FolderProvider";

export const GoalForm = () => {
  const { addGoal, updateGoal, getGoals, setAddNewGoal,
     showGoalForm, setShowGoalForm, updateGoalView, 
    setUpdateGoalView, goalToUpdate } = useContext(GoalContext);
  const { folders} = useContext(FolderContext)
  const goalId = null //Need to change goalId for updateGoal
  // const [goal, setGoal] = useState({
  //   creator: parseInt(localStorage.getItem("goalizer_user_id")),
  //   title: '',
  //   description: '',
  //   creation_date: new Date(),
  //   folder: '',
  //   is_complete: '',
  //   is_favorite: ''
  // })
  
  const goalState = updateGoalView 
  ? goalToUpdate 
  // ? {
  //   creator: parseInt(localStorage.getItem("goalizer_user_id")),
  //   title: goalToUpdate.title,
  //   description: goalToUpdate.description,
  //   creation_date: goalToUpdate.creation_date,
  //   folder: goalToUpdate.folder,
  //   is_complete: goalToUpdate.is_complete,
  //   is_favorite: goalToUpdate.is_favorite
  // }
  : {
    creator: parseInt(localStorage.getItem("goalizer_user_id")),
    title: '',
    description: '',
    creation_date: new Date(),
    folder: '',
    is_complete: '',
    is_favorite: ''
}
  const [goal, setGoal] = useState(goalState)

  // useEffect(() => {
  // if (updateGoalView) {
  //   setGoal(goalToUpdate)
  //     }
  // });

  console.log('Update goal view status: ', updateGoalView)
  console.log('Update goal to update: ', goalToUpdate)
  console.log('Update goal: ', goal)

  const handleControlledInputChange = e => {
    
    const newGoal = {...goal}
    newGoal[e.target.name] = e.target.value
    setGoal(newGoal)

      // if (updateGoalView) {
      //   const updatingGoal = {...goal}
      //   updatingGoal[e.target.name] = e.target.value
      //   setGoal(updatingGoal)
      // } else {
      //   const newGoal = {...goal}
      //   newGoal[e.target.name] = e.target.value
      //   setGoal(newGoal)
      // }
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

  const handleUpdateGoal = () => {
      console.log('Updating with new info here: ', goal)
    // if (goal.title && goal.description
    //   && goal.folder && goal.is_complete.length && goal.is_favorite.length ) {
    if (goal?.id) {
        
        if (showGoalForm) {
          setShowGoalForm(false);
        }

        setUpdateGoalView(false);
        
        window.alert(`Your goal entitled "${goal.title}" has been updated!`)

       updateGoal({
        //  id: goal.id,
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
  }
 
  return (
      <> {
    <form className="">
      <div className="">
        
        <fieldset className="">
          <label className="" htmlFor="goalForm">
            {updateGoalView ? (
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
              value={updateGoalView ? goal.folder.id : goal.folder}
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
              <option value={updateGoalView ? 'false' :'False'}>Not quite...</option>
              <option value={updateGoalView ? 'true' : 'True'}>Yes, indeed!</option>
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
              <option value={updateGoalView ? 'false' : 'False'}>Nope</option>
              <option value={updateGoalView ? 'true' :'True'}>For sure!</option>
            </select>
        </fieldset>

      </div>

      <div className="">
        <fieldset className="">
          <button
            className=""
            onClick={(event) => {
              event.preventDefault(); // Prevent browser from submitting the form and refreshing the page
              updateGoalView ? handleUpdateGoal() : handleSaveGoal();
              setAddNewGoal(false); //should close goalform on applicationview
            }}
          >
            {updateGoalView ? <> Update Goal </> : <> Add New Goal </>}
          </button>
        </fieldset>
      </div>
    </form>}
    </>
  );
};
