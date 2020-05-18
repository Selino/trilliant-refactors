import React from "react"
import { Table } from "react-bootstrap"
import { getSampleData } from "../fixtures/ExecutiveSummaryData"
import ExecSummaryItem from "./ExecSummaryItem"

export default function ExecutiveSummary() {
  const myData = getSampleData()
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>status</th>
            <th>service line</th>
            <th>strategy name</th>
            <th>spend to date</th>
            <th>total budget</th>
            <th>leads</th>
            <th>avg cpl</th>
            <th>days in market</th>
            <th>launch date</th>
            <th>end date</th>
          </tr>
        </thead>
        <tbody>
          {myData.strategies.map((strategy) => {
            return <ExecSummaryItem key={strategy.id} {...strategy} />
          })}
        </tbody>
      </Table>
    </>
  )
}
