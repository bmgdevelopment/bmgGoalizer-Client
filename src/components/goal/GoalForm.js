import React, { useContext, useState } from "react";
import { FolderContext } from "../folder/FolderProvider";
// import { GoalContext } from "./GoalProvider";

export const FolderForm = () => {
  const { addFolder, updateFolder, getFolders, folderCreated, setFolderCreated } = useContext(FolderContext);
  const folderId = null


  const [folder, setFolder] = useState({
      creator: parseInt(localStorage.getItem("goalizer_user_id")),
      name: '',
      color: ''
  })

  const handleControlledInputChange = e => {
      const newFolder = {...folder}
      newFolder[e.target.name] = e.target.value
      setFolder(newFolder)
  }

  const handleSaveFolder = () => {
      return (folder.id ? 
      updateFolder :
      addFolder({
          creator: folder.creator,
          name: folder.name,
          color: folder.color
      }).then(getFolders))
  }
 
  return (
      <> {folderCreated ? '' :
    <form className="">
      <div className="">
        <fieldset className="">
          <label className="" htmlFor="folderForm">
            {folderId ? (
              <> Update Folder Name </>
            ) : (
              <> Add New Folder Name</>
            )}
          </label>
          <textarea
            type="text"
            name="name"
            id="folderName"
            className=""
            placeholder=""
            required
            autoFocus
            value={folder.name}
            onChange={handleControlledInputChange}
          />
        </fieldset>

        <fieldset className="">
          <label className="" htmlFor="itemType">
            Label Color
          </label>
            <select
              name="color"
              id="folderColor"
              className=""
              placeholder=""
              required
              value={folder.color}
              onChange={handleControlledInputChange}
            >
              <option value="#000000">Select A Folder Color</option>
              <option value="#F13000">Red</option>
              <option value="#ED8218">Orange</option>
              <option value="#8218ED">Purple</option>
              <option value="#3000F1">Blue</option>
              <option value="#00F130">Green</option>
            </select>
        </fieldset>
      </div>

      <div className="">
        <fieldset className="">
          <button
            className=""
            onClick={(event) => {
              event.preventDefault(); // Prevent browser from submitting the form and refreshing the page
              handleSaveFolder();
              setFolderCreated(true)
            }}
          >
            {folderId ? <> Update Folder </> : <> Add New Folder </>}
          </button>
        </fieldset>
      </div>
    </form>}
    </>
  );
};
