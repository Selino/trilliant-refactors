import React from "react"

/**
- Use an avatar for attributing actions or content to specific users.
- The user's name should always be present when using Avatar – either printed beside the avatar or in a tooltip.
**/

export default function MiniBar(props) {
  const myBarBackGround = {
    backgroundColor: props.backGroundColor,
    width: "60px",
    height: "16px",
    borderRadius: "2px",
    overflow: "hidden",
    display: "inline-block",
    marginLeft: ".5rem",
    verticalAlign: "text-bottom",
  }
  const myBarForGround = {
    backgroundColor: props.forGroundColor,
    width: props.Perc + "%",
    height: "100%",
  }
  return (
    <>
      <div style={myBarBackGround}>
        <div style={myBarForGround}></div>
      </div>
    </>
  )
}
