import React from "react"
import MiniBar from "./MiniBar"

// This default export determines where your story goes in the story list
export default {
  title: "MiniBar",
  component: MiniBar,
  parameters: {
    componentSubtitle: "Lorem ipsum dolar sit amet",
  },
}

const Template = (args) => <MiniBar {...args} />

export const FirstStory = Template.bind({})

FirstStory.args = {
  Perc: "68",
  daysInMarket: "100",
  backGroundColor: "#E5E5E5",
  forGroundColor: "#428BCA",
}
