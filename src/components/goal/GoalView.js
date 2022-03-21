import React, { useContext, useState, useEffect } from "react";
import { GoalContext } from "./GoalProvider";
import { GoalTagContext } from "../goaltag/GoalTagProvider";
import { TagContext } from "../tag/TagProvider";
import { ProfileContext } from "../auth/AuthProvider";
import "./goal.css";

export const GoalView = () => {
  const {
    goal,
    setUpdateGoalView,
    setGoalToUpdate,
    setShowGoalForm,
    deleteGoal,
  } = useContext(GoalContext);
  const { goaltags, getGoalTags } = useContext(GoalTagContext);
  const { tags, getTags } = useContext(TagContext);
  const { profile, getProfile } = useContext(ProfileContext);

  const [userGoalTags, setUserGoalTags] = useState([]);
  const [userGoalTagsMatchGoal, setUserGoalTagsMatchGoal] = useState([]);
  const [tagsNotUsed, setTagsNotUsed] = useState([]);

  useEffect(() => getGoalTags(), []);
  useEffect(() => getTags(), []);
  console.log('tags : ', tags)
  useEffect(() => getProfile(), []);


  // USE EFFECT CHECKS FOR GOALTAG.GOAL.CREATOR.ID TO MATCH PROFILE.GOALIZER.USER.ID
  useEffect(() => {
    if (goaltags?.length > 0) {
      const filterGoalTags = goaltags?.filter(
        (goaltag) =>
          goaltag?.goal?.creator?.id === profile?.goalizeruser?.user?.id
      );
      setUserGoalTags(filterGoalTags);
      // console.log("filtered goaltags :", userGoalTags);
    }
  }, [goal, goaltags, profile]);

  // USE EFFECT CHECKS FOR GOALTAG.GOAL.ID TO MATCH GOAL.ID
  useEffect(() => {
    if (userGoalTags?.length > 0) {
      const filterTagsForGoal = userGoalTags.filter(
        (userGoalTag) => userGoalTag.goal.id === goal.id
      );
      setUserGoalTagsMatchGoal(filterTagsForGoal);
      console.log("user goaltag match for one goal :", userGoalTagsMatchGoal);
    }
  }, [goaltags, userGoalTags, goal]);

  // USE EFFECT CHECKS FOR TAGS NOT IN USE FOR GOAL
  useEffect(() => {
    if (userGoalTagsMatchGoal?.length > 0 ) {
      let tagsNotInUse;
        for (let match of userGoalTagsMatchGoal) {
            tagsNotInUse = tags.filter(tag => tag.id !== match.tag.id )
          }
          setTagsNotUsed(tagsNotInUse)
          console.log('tags not used', tagsNotUsed)
    } else {
      setTagsNotUsed(tags)
    }
  }, [userGoalTagsMatchGoal, tags, goal])

  const shortenedDate = (goal) => {
    return <>{new Date(`${goal.creation_date}`).toString().slice(0, 15)}</>;
  };

  const colorState = (goal) => {
    const color = goal.id ? goal.folder.color : "lightgray";
    return color;
  };

  return (
    <>
      {goal.creation_date === "" ? (
        <></>
      ) : (
        <>
          <div className="oneGoalViewParent" style={{ display: "flex" }}>
            <div
              className="oneGoalMainPane"
              style={{
                margin: "20px",
                width: "97%",
                display: "flex",
                flexDirection: "column",
                padding: "20px",
              }}
            >
              <div className="oneGoalTitleWrapper">
                <div
                  className="oneGoalIconWrapper"
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <div
                    className="oneGoalIcons"
                    style={{ fontSize: "35px" }}
                  ></div>
                </div>
                <div
                  className="oneGoalTitle"
                  style={{
                    fontSize: "35px",
                    fontWeight: "bold",
                    color: "rgb(58, 58, 58)",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    {goal.title}
                    {goal.is_favorite && (
                      <p
                        style={{
                          fontSize: "35px",
                          marginLeft: "15px",
                          marginTop: "0px",
                          marginBottom: "0px",
                          padding: "none !important",
                        }}
                      >
                        {" "}
                        ⭐️{" "}
                      </p>
                    )}
                    {goal.is_complete && (
                      <p
                        className=""
                        style={{
                          fontSize: "35px",
                          marginLeft: "15px",
                          marginTop: "0px",
                          marginBottom: "0px",
                          padding: "none !important",
                        }}
                      >
                        {" "}
                        🎯{" "}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div
                className="oneGoalDetailWrapper"
                style={{
                  marginTop: "20px",
                  marginBottom: "20px",
                  fontSize: "18px",
                  minHeight: "400px",
                  color: "rgb(58, 58, 58)",
                }}
              >
                {goal.description}
              </div>

              <div className="oneGoalHorizontalWrapper" style={{}}>
                <hr style={{ width: "98%", opacity: "0.3" }} />
              </div>

              <div
                className="oneGoalTagWrapper"
                style={{
                  paddingTop: "5px",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                {/* TAG DIV */}
                <div className="leftTagDiv">
                  {userGoalTagsMatchGoal &&
                    userGoalTagsMatchGoal.map((userGoalTagMatch) => {
                      return (
                        <>
                          <button
                            className="tagLabel"
                            style={{
                              padding: "5px 13px",
                              background: "none",
                              border: "1px solid gray",
                              borderRadius: "3px",
                              color: "gray",
                              marginLeft: '5px',
                              cursor: "pointer"
                            }}
                          >
                            {userGoalTagMatch.tag.label}
                          </button>
                        </>
                      );
                    })}
                </div>
                <div
                  className="rightDateDiv"
                  style={{ fontSize: "13px", color: "gray" }}
                >
                  Goal created on {shortenedDate(goal)} in your folder{" "}
                  {goal.folder.name}
                </div>
              </div>

              <div className="oneGoalEditWrapper" style={{ marginTop: "60px" }}>
                <div
                  className="oneGoalEditDiv"
                  style={{ display: "flex", justifyContent: "flex-end" }}
                >
                  <button
                    className="oneGoalEditBtn"
                    onClick={(event) => {
                      event.preventDefault();
                      setUpdateGoalView(true); //sets to true will + need false placement
                      setShowGoalForm(true); //opens form
                      setGoalToUpdate({
                        id: goal.id,
                        creator: goal.creator,
                        title: goal.title,
                        description: goal.description,
                        creation_date: goal.creation_date,
                        is_complete: goal.is_complete,
                        is_favorite: goal.is_favorite,
                      }); //sends goal obj to goalToUpdate placement
                    }}
                  >
                    ⚙️
                  </button>

                  <button
                    key={`delete-folder-${goal.id}`}
                    className="oneGoalEditBtn"
                    onClick={(event) => {
                      event.preventDefault();
                      deleteGoal(goal);
                      window.alert(
                        `Your goal entitled "${goal.title}" has been deleted!`
                      );
                      window.location.reload(true);
                    }}
                  >
                    🗑
                  </button>
                </div>
              </div>
            </div>
            <div
              className="oneGoalColorStrip"
              style={{
                width: "20px",
                height: "90vh",
                background: `${colorState(goal)}`,
              }}
            ></div>
          </div>
        </>
      )}
    </>
  );
};
