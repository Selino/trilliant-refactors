import React from "react"
import MiniBar from "./MiniBar"

// This default export determines where your story goes in the story list
export default {
  title: "MiniBar",
  component: MiniBar,
}

const Template = () => (
  <MiniBar
    Perc='68'
    daysInMarket='100'
    backGroundColor='#E5E5E5'
    forGroundColor='#428BCA'
  />
)

export const FirstStory = Template.bind({})

FirstStory.args = {
  /* the args you need here will depend on your component */
}
