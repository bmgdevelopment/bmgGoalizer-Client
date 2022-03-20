import React from "react";
import { ApplicationView } from "./ApplicationView";
import { GoalProvider } from "./goal/GoalProvider";
import { FolderProvider } from "./folder/FolderProvider";
import { TagProvider } from "./tag/TagProvider";
import { GoalTagProvider } from "./goaltag/GoalTagProvider";
// import { Login } from "./auth/Login"
// import { Register } from "./auth/Register"
import "./Goalizer.css";

export const Goalizer = () => {
  return (
    <>
    <GoalTagProvider>
      <TagProvider>
        <FolderProvider>
          <GoalProvider>
            <ApplicationView />
          </GoalProvider>
        </FolderProvider>
      </TagProvider>
    </GoalTagProvider>
    </>

    /*
     const history = useHistory()
        return(
    <>
        <Route render={() => {
            if (localStorage.getItem("goalizer_user_id")) {
                return <>
                    <NavBar />
                    <ApplicationViews />
                    
                    <h2>Goalizer 🎯</h2>
                    <small>The goal organizer!</small>
                    <span>
                        <div>Coming soon!</div>
                    </span>
                </>
            } else {
                return <Redirect to="/login" />
            }
        }} />

        <Route path="/login" render={() => {
            if (localStorage.getItem("goalizer_user_id")) {
                return <Redirect to="/" />
            } else {
                return <Login />
            }
        }} />

        <Route path="/register" render={() => {
            if (localStorage.getItem("goalizer_user_id")) {
                return <Redirect to="/" />
            } else {
                return <Register history = {history}/>
            }
        }} />
    
    </>)
    */
  );
};
