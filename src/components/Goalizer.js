import React from "react";
import { ApplicationView } from "./ApplicationView";
import { GoalProvider } from "./goal/GoalProvider";
import { FolderProvider } from "./folder/FolderProvider";
import { TagProvider } from "./tag/TagProvider";
import { GoalTagProvider } from "./goaltag/GoalTagProvider";
import { ProfileProvider } from "./auth/AuthProvider";
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { Route } from "react-router-dom";
import { Redirect, useHistory } from "react-router-dom"

import "./Goalizer.css";

export const Goalizer = () => {

//   return (
//     <>
//     <ProfileProvider>
//     <GoalTagProvider>
//       <TagProvider>
//         <FolderProvider>
//           <GoalProvider>
//             <ApplicationView />
//           </GoalProvider>
//         </FolderProvider>
//       </TagProvider>
//     </GoalTagProvider>
//     </ProfileProvider>
//     </>)

     const history = useHistory()
        return(
    <>
        <Route path='*' render={() => {
            if (localStorage.getItem("goalizer_user_id")) {
                return <>
                      <ProfileProvider>
                        <GoalTagProvider>
                        <TagProvider>
                            <FolderProvider>
                            <GoalProvider>
                                <ApplicationView />
                            </GoalProvider>
                            </FolderProvider>
                        </TagProvider>
                        </GoalTagProvider>
                        </ProfileProvider>
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
    
    </>
    )

    };
