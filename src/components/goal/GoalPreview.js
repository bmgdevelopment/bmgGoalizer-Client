//Part Date, Part Name, maybe a few details, and complete/incomplete spot for icon
import React from "react";


export const GoalPreview = (props) => {
    const { goal } = props;

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