import React from "react"

/**
An inline bar chart that accepts the Perc property to calculate the visualized metric.

### UX Notes
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nulla massa, viverra quis est non, mollis aliquam turpis. Aliquam vitae gravida justo. Sed nec venenatis risus, non sollicitudin erat. Aenean bibendum dolor sit amet mi tristique, quis tincidunt purus tincidunt. Vestibulum auctor dui id lorem pulvinar auctor. Praesent nec egestas purus. Vestibulum porta tempor ornare.

- [Wireframe](https://duckduckgo.com)
- [Prototype](https://duckduckgo.com)
- [User Journey Map](https://duckduckgo.com)
- [A/B Testing Results](https://duckduckgo.com)
- [Full Report](https://duckduckgo.com)
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
