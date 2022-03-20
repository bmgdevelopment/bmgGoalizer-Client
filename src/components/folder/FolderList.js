import React, { useContext, useState, useEffect } from "react";
import { FolderContext } from "./FolderProvider";
import { FolderForm } from "./FolderForm";
import { GoalList } from "../goal/GoalList";
import "./folder.css";

export const FolderList = () => {
  const {
    folders,
    getFolders,
    getFolderWithGoals,
    deleteFolder,
    setFolderCreated, addNewState, setAddNewState
  } = useContext(FolderContext);

  useEffect(() => {getFolders()}, []);

  useEffect(() => <GoalList/>)

  return (
    <>
      <h2 className="goalFolderLabel">Goal Folders</h2>
      { folders?.map((folder) => {
        return (
          <>
            <div
              key={`label-${folder.id}`}
              className="folder-color-label"
            >
              <div
                key={`color-${folder.id}`}
                className="folder-color"
                style={{
                  border: `2px solid ${folder.color}`,
                  backgroundColor: `${folder.color}`,
                }}
              ></div>
              
              <button
                key={folder.id}
                className="folderLabels"
                onClick={(event) => {
                  event.preventDefault();
                  getFolderWithGoals(folder);
                  <GoalList key={`goallist-${folder.id}`} folder={folder} />;
                }}
              >
                {folder?.name}
              </button>

              <button 
              className="folderDeleteButton"
              key={`delete-folder-${folder.id}`}
              onClick={event => {
                event.preventDefault();
                deleteFolder(folder);
                window.alert(`Your folder "${folder.name}" has been deleted and so have the goals you have saved within it!`)
                window.location.reload(true);
              }}
              >🗑</button>
            </div>
          </>
        );
      })}
      <br />
      <hr className="folderLine" style={{ color: "lightgray", width: "175px" }} />
      <br />

      <div className="folder-addition">
        {!addNewState ? (
          <>
            <button
              className="addFolderButton"
              onClick={(event) => {
                event.preventDefault();
                setAddNewState(!addNewState);
                setFolderCreated(false);
              }}
            >
              + add folder
            </button>
          </>
        ) : (
          <>
            <button
              className="folderCancelBtn"
              onClick={(event) => {
                event.preventDefault();
                setAddNewState(!addNewState);
                setFolderCreated(false);
              }}
            >
              X
            </button>
          </>
        )}
      </div>
      {addNewState ? <FolderForm /> : ""}
    </>
  );
};
