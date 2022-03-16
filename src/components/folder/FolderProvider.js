import React, { useState } from "react";

export const FolderContext = React.createContext();

export const FolderProvider = (props) => {
  const [folders, setFolders] = useState([]);
  const [goalsForFolder, setGoalsForFolder] = useState([]);
  const [folderCreated, setFolderCreated] = useState(false)
  const [addNewState, setAddNewState] = useState(false);


  const getFolders = () => {
    return fetch("http://localhost:8000/folders", {
      method: "GET",
      headers: {
        Authorization: `Token ${localStorage.getItem("goalizer_user_id")}`,
      },
    })
      .then((res) => res.json())
      .then(setFolders);
  };

  const getFolderWithGoals = (folder) => {
    return fetch(`http://localhost:8000/folders/${folder.id}/all`, {
      method: "GET",
      headers: {
        Authorization: `Token ${localStorage.getItem("goalizer_user_id")}`,
      },
    })
    .then((res) => res.json())
    .then(setGoalsForFolder)
  };

  const addFolder = (folder) => {
    return fetch("http://localhost:8000/folders", {
      method: "POST",
      headers: {
        Authorization: `Token ${localStorage.getItem("goalizer_user_id")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(folder),
    }).then(getFolders);
  };

  const updateFolder = (folder) => {
    return fetch(`http://localhost:8000/folders/${folder.id}`, {
      method: "PUT",
      headers: {
        Authorization: `Token ${localStorage.getItem("goalizer_user_id")}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(folder)
    })
    .then(getFolders)
  };

  const deleteFolder = (folder) => {
      return fetch(`http://localhost:8000/folders/${folder.id}`, {
          method: "DELETE",
          headers: {
            "Authorization": `Token ${localStorage.getItem("goalizer_user_id")}`,
            "Content-Type": "application/json" 
          }
      })
      .then(getFolders)
  }

  return (
    <FolderContext.Provider
      value={{
        folders, setFolders, getFolders, getFolderWithGoals, addFolder, updateFolder, deleteFolder, goalsForFolder, 
        folderCreated, setFolderCreated, addNewState, setAddNewState
      }}
    >
      {props.children}
    </FolderContext.Provider>
  );
};
