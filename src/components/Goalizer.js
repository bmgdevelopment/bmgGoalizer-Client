import React from "react";
import { ApplicationView } from "./ApplicationView";
// import { Route, Redirect, useHistory } from "react-router-dom"
// import { ApplicationViews } from "./ApplicationViews"
// import { NavBar } from "./nav/NavBar"
// import { Login } from "./auth/Login"
// import { Register } from "./auth/Register"
import "./Goalizer.css";

export const Goalizer = () => {
  return (
    <>
      <ApplicationView />

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
