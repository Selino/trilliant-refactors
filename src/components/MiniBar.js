import React from "react"

/**
An inline bar chart that accepts the Perc property to calculate the visualized metric.
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
