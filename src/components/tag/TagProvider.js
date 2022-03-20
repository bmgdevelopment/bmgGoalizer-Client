import React, { useState } from "react";
export const TagContext = React.createContext();

export const TagProvider = (props) => {
  const [ tags, setTags ] = useState([]);
  
  const getTags = () => {
    return fetch("http://localhost:8000/tags", {
      method: "GET",
      headers: {
        Authorization: `Token ${localStorage.getItem("goalizer_user_id")}`,
      },
    })
      .then((res) => res.json())
      .then(setTags);
  };

  return (
    <TagContext.Provider
      value={{ tags, getTags }}
    >
      {props.children}
    </TagContext.Provider>
  );
};
