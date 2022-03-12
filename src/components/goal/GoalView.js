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
                {/* <p> {goal && goal.is_complete ? 'Is complete' : 'Is not complete'}</p> */}
                {/* <p> {goal && goal.is_favorite ? 'Is favorite' : 'Is not favorite'}</p> */}
            </div>
        </>
    )
}