import React from "react"

/**
- Aliquam sed nibh nisi. Ut aliquet, lectus et feugiat aliquam, felis justo lobortis diam, non volutpat ante ligula id sapien. Mauris a molestie lacus, eu egestas felis.
- Nullam iaculis est nec justo tempus iaculis. Aliquam erat volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus.
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
