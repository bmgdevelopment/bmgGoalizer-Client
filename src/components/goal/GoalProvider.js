import React, { useState } from "react";
export const GoalContext = React.createContext();

export const GoalProvider = (props) => {
  const [ goals, setGoals ] = useState([]);
  const [ goal, setGoal ] = useState({ creation_date: ""});
  const [ goalToUpdate, setGoalToUpdate ] = useState({});
  const [ addNewGoal, setAddNewGoal ] = useState(false);
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

   const completeGoal = goal => {
  return fetch(`http://localhost:8000/goals/${goal.id}/complete`, {
    method: "PUT",
    headers: {
        "Authorization": `Token ${localStorage.getItem("goalizer_user_id")}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(goal)
  })
      .then(getGoals)
}

   const incompleteGoal = goal => {
  return fetch(`http://localhost:8000/goals/${goal.id}/incomplete`, {
    method: "PUT",
    headers: {
        "Authorization": `Token ${localStorage.getItem("goalizer_user_id")}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(goal)
  })
      .then(getGoals)
}

   const favoriteGoal = goal => {
  return fetch(`http://localhost:8000/goals/${goal.id}/favorite`, {
    method: "PUT",
    headers: {
        "Authorization": `Token ${localStorage.getItem("goalizer_user_id")}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(goal)
  })
      .then(getGoals)
}

   const unfavoriteGoal = goal => {
  return fetch(`http://localhost:8000/goals/${goal.id}/unfavorite`, {
    method: "PUT",
    headers: {
        "Authorization": `Token ${localStorage.getItem("goalizer_user_id")}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(goal)
  })
      .then(getGoals)
}

  return (
    <GoalContext.Provider
      value={{ goal, setGoal, goals, setGoals, getOneGoal, 
        getGoals, addGoal, updateGoal, deleteGoal, addNewGoal, 
        setAddNewGoal, viewGoalForm, setViewGoalForm, showGoalForm, 
        setShowGoalForm, updateGoalView, setUpdateGoalView, goalToUpdate, 
        setGoalToUpdate, completeGoal, incompleteGoal, favoriteGoal, unfavoriteGoal }}
    >
      {props.children}
    </GoalContext.Provider>
  );
};
