import React from "react"
import ExecutiveSummary from "./ExecutiveSummary"
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css"
import "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css"

// This default export determines where your story goes in the story list
export default {
  title: "ExecutiveSummary",
  component: ExecutiveSummary,
}

const Template = (args) => <ExecutiveSummary {...args} />

export const FirstStory = Template.bind({})

FirstStory.args = {}
