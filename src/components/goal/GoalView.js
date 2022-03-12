import React, { useContext } from "react";
import { GoalContext } from "./GoalProvider";


export const GoalView = () => {
    const { goal } = useContext(GoalContext);

    return (
        <>
            <div>
                <p>{goal.title}</p>
                <p>{goal.description}</p>
                <p>{goal.creation_date}</p>
                <p>{goal.is_complete}</p>
            </div>
        </>
    )
}