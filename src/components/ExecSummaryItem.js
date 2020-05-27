import React from "react"
import moment from "moment"
import Dinero from "dinero.js"
import { Bar, BarChart, XAxis, YAxis } from "recharts"

export default function ExecSummaryItem(props) {
  const myBudget = Dinero({
    amount: props.spendToDate,
    currency: "USD",
  }).toFormat("$0")
  return (
    <tr>
      <td>{props.status}</td>
      <td>{props.serviceLine}</td>
      <td>{props.name}</td>
      <td>
        {Dinero({
          amount: props.spendToDate,
          currency: "USD",
        }).toFormat("$0")}
      </td>
      <td>
        {Dinero({
          amount: props.budget,
          currency: "USD",
        }).toFormat("$0,0")}
      </td>
      <td>{props.leads}</td>
      <td>{props.averageCpl}</td>
      <td>{props.daysInMarket}</td>
      <td>{moment(props.startDate).format("MMMM Do YYYY")}</td>
      <td>{moment(props.endDate).format("MMMM Do YYYY")}</td>
    </tr>
  )
}

// <BarChart width={100} height={30} data={data}>
// <XAxis dataKey='name' hide />
// <YAxis hide />
// <Bar dataKey='pv' fill='#82ca9d' />
// </BarChart>
