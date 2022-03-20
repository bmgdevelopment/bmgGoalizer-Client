import React, { useContext, useState } from "react";
import { GoalContext } from "./GoalProvider";
import { FolderContext } from "../folder/FolderProvider";

export const GoalForm = () => {
  const { addGoal, updateGoal, getGoals, setAddNewGoal,
     showGoalForm, setShowGoalForm, updateGoalView, 
    setUpdateGoalView, goalToUpdate } = useContext(GoalContext);
  const { folders} = useContext(FolderContext)
  
  const goalState = updateGoalView ? goalToUpdate : {};
  const [goal, setGoal] = useState(goalState)

  const handleControlledInputChange = e => {
    const newGoal = {...goal}
    newGoal[e.target.name] = e.target.value
    setGoal(newGoal)
  }

  const handleSaveGoal = () => {
    const folder_id = parseInt(goal.folder_id)
    console.log(folder_id)

    if (goal.title && goal.description
      && goal.folder_id && goal.is_complete.length && goal.is_favorite.length ) {
        
        if (showGoalForm) {
          setShowGoalForm(false);
        }
        
        addGoal({
          creator: parseInt(localStorage.getItem("goalizer_user_id")),
          title: goal.title,
          description: goal.description,
          creation_date: new Date(),
          folder_id: folder_id,
          is_complete: goal.is_complete,
          is_favorite: goal.is_favorite
        }).then(getGoals)
        window.location.reload(true);
        window.alert(`Your goal entitled "${goal.title}" has been created!`)
    } else {
      window.alert("Please complete the goal form to save!")
    }
  };

  const handleUpdateGoal = () => {
    if (goal?.id) {

        if (showGoalForm) {
          setShowGoalForm(false);
        }

        setUpdateGoalView(false);
        updateGoal({
          id: goal.id,
          creator: goal.creator,
          title: goal.title,
          description: goal.description,
          creation_date: goal.creation_date,
          is_complete: goal.is_complete === "true" ? true : false,
          is_favorite: goal.is_favorite === "true" ? true : false
      })
        
        window.location.reload(true);
        window.alert(`Your goal entitled "${goal.title}" has been updated!`)

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

        { updateGoalView ? '' : 
        <fieldset className="">
          <label className="" htmlFor="itemType">
            Folder
          </label>
            <select
              name={updateGoalView ? "folderId" : "folder_id"}
              id="goalFolder"
              className=""
              placeholder=""
              required
              value={updateGoalView ? goal.folder_id : goal.folder_id}
              onChange={handleControlledInputChange}
            >
              <option value="0">Select A Folder</option>
              { folders?.map(event => {
                return (
                  <option value={event.id}>{event.name}</option>
                )
              })}
            </select>
        </fieldset>
        }

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
              event.preventDefault(); 
              updateGoalView ? handleUpdateGoal() : handleSaveGoal();
              setAddNewGoal(false); // closes goalform on applicationview
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
