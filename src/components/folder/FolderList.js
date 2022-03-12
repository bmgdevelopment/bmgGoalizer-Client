import React, { useContext, useEffect } from "react";
import { FolderContext } from "./FolderProvider";
import { GoalList} from "../goal/GoalList"
import "./folder.css";

export const FolderList = () => {
  const { folders, getFolders, getFolderWithGoals } =
    useContext(FolderContext);

  useEffect(() => { getFolders() }, []);

  return (
    <>
      <h1>Folder List</h1>
      {folders?.map((folder) => {
        return (
          <button
          key={folder.id}
          onClick={(event) => {
            event.preventDefault();
            getFolderWithGoals(folder);
            <GoalList key={folder.id} folder={folder}/>
            }}
          >
            {folder?.name}
          </button>
        );
      })}
    </>
  );
};
