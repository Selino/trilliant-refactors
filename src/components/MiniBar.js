import React from "react"

export default function MiniBar(props) {
  const myBarBackGround = {
    backgroundColor: "#C9E5B3",
    width: "80px",
    height: "20px",
    borderRadius: "2px",
    overflow: "hidden",
  }
  const myBarForGround = {
    backgroundColor: "#80B956",
    width: props.Perc + "%",
    height: "100%",
  }
  return (
    <div style={myBarBackGround}>
      <div style={myBarForGround}></div>
    </div>
  )
}
