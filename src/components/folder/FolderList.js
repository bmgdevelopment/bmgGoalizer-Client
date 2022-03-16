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
      <h1>Folder List</h1>
      { folders?.map((folder) => {
        return (
          <>
            <div
              key={`label-${folder.id}`}
              className="folder-color-label"
              style={{ display: "flex" }}
            >
              <div
                key={`color-${folder.id}`}
                className="folder-color"
                style={{
                  height: "10px",
                  width: "10px",
                  border: `2px solid ${folder.color}`,
                  backgroundColor: `${folder.color}`,
                  marginRight: "10px",
                }}
              ></div>
              <button
                key={folder.id}
                onClick={(event) => {
                  event.preventDefault();
                  getFolderWithGoals(folder);
                  <GoalList key={`goallist-${folder.id}`} folder={folder} />;
                }}
              >
                {folder?.name}
              </button>
              <button 
              key={`delete-folder-${folder.id}`}
              onClick={event => {
                event.preventDefault();
                deleteFolder(folder);
                window.alert(`Your folder ${folder.name} has been deleted!`)
                window.location.reload(true);
              }}
              >🗑</button>
            </div>
          </>
        );
      })}
      <br />
      <hr style={{ color: "gray", width: "150px" }} />
      <br />

      <div
        className="folder-addition"
        style={{ display: "flex", justifyContent: "center" }}
      >
        {!addNewState ? (
          <>
            <button
              onClick={(event) => {
                event.preventDefault();
                setAddNewState(!addNewState);
                setFolderCreated(false);
              }}
            >
              + Add Folder
            </button>
          </>
        ) : (
          <>
            <button
              onClick={(event) => {
                event.preventDefault();
                setAddNewState(!addNewState);
                setFolderCreated(false);
              }}
            >
              Cancel
            </button>
          </>
        )}
      </div>
      {addNewState ? <FolderForm /> : ""}
    </>
  );
};
