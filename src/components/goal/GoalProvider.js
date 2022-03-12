import React, { useState } from "react";

export const GoalContext = React.createContext();

export const GoalProvider = (props) => {
    const [ goals, setGoals ] = useState([]);
    const [ goal, setGoal ] = useState([]);

    const getOneGoal = (goal) => {
        return fetch(`http://localhost:8000/goals/${goal.id}`, {
          method: "GET",
          headers: {
            Authorization: `Token ${localStorage.getItem("goalizer_user_id")}`,
          },
        })
        .then((res) => res.json())
        .then(setGoal)
      };

      return (
          <GoalContext.Provider
          value={{ goal, setGoal, goals, setGoals, getOneGoal }}>
              {props.children}
          </GoalContext.Provider>
      )
}