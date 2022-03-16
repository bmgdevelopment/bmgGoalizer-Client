import React, { useState } from "react";
export const GoalContext = React.createContext();

export const GoalProvider = (props) => {
  const [goals, setGoals] = useState([]);
  const [goal, setGoal] = useState({ creation_date: ""});
  const [ addNewGoal, setAddNewGoal ] = useState(false);
  const [ goalCreated, setGoalCreated ] = useState(false);
  const [ viewGoalForm, setViewGoalForm ] = useState(false);
  const [ showGoalForm, setShowGoalForm ] = useState(false);
  const [ updateGoalView, setUpdateGoalView ] = useState(false);

  const getGoals = () => {
    return fetch("http://localhost:8000/goals", {
      method: "GET",
      headers: {
        Authorization: `Token ${localStorage.getItem("goalizer_user_id")}`,
      },
    })
      .then((res) => res.json())
      .then(setGoals);
  };

  const getOneGoal = (goal) => {
    return fetch(`http://localhost:8000/goals/${goal.id}`, {
      method: "GET",
      headers: {
        Authorization: `Token ${localStorage.getItem("goalizer_user_id")}`,
      },
    })
      .then((res) => res.json())
      .then(setGoal);
  };

  const addGoal = (goal) => {
    return fetch("http://localhost:8000/goals", {
      method: "POST",
      headers: {
        Authorization: `Token ${localStorage.getItem("goalizer_user_id")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(goal),
    }).then(getGoals); 
  };

  const updateGoal = (goal) => {
    return fetch(`http://localhost:8000/goals/${goal.id}`, {
      method: "PUT",
      headers: {
        Authorization: `Token ${localStorage.getItem("goalizer_user_id")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(goal),
    }).then(getGoals);
  };

  const deleteGoal = (goal) => {
    return fetch(`http://localhost:8000/goals/${goal.id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Token ${localStorage.getItem("goalizer_user_id")}`,
        "Content-Type": "application/json",
      },
    }).then(getGoals);
  };

  return (
    <GoalContext.Provider
      value={{ goal, setGoal, goals, setGoals, getOneGoal, 
        getGoals, addGoal, updateGoal, deleteGoal, addNewGoal, 
        setAddNewGoal, goalCreated, setGoalCreated, viewGoalForm, 
        setViewGoalForm, showGoalForm, setShowGoalForm, updateGoalView, 
        setUpdateGoalView }}
    >
      {props.children}
    </GoalContext.Provider>
  );
};
