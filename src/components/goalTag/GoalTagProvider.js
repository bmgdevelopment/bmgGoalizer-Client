import React, { useState } from "react";
export const GoalTagContext = React.createContext();

export const GoalTagProvider = (props) => {
  const [ goaltags, setGoalTags ] = useState([]);
  

  const getGoalTags = () => {
    return fetch(`http://localhost:8000/goaltags/`, {
      method: "GET",
      headers: {
        Authorization: `Token ${localStorage.getItem("goaltagizer_user_id")}`,
      },
    })
      .then((res) => res.json())
      .then(setGoalTags);
  };

  const addGoalTag = (goaltag) => {
    return fetch("http://localhost:8000/goaltags", {
      method: "POST",
      headers: {
        Authorization: `Token ${localStorage.getItem("goaltagizer_user_id")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(goaltag),
    }).then(getGoalTags); 
  };


  const deleteGoalTag = (goaltag) => {
    return fetch(`http://localhost:8000/goaltags/${goaltag.id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Token ${localStorage.getItem("goaltagizer_user_id")}`,
        "Content-Type": "application/json",
      },
    }).then(getGoalTags);
  };


  return (
    <GoalTagContext.Provider
      value={{ goaltags, getGoalTags, addGoalTag, deleteGoalTag }}
    >
      {props.children}
    </GoalTagContext.Provider>
  );
};
