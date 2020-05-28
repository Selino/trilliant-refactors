import React from "react"
import { getSampleData } from "../fixtures/ExecutiveSummaryData"
import { Badge } from "react-bootstrap"
import BootstrapTable from "react-bootstrap-table-next"
import filterFactory, { textFilter } from "react-bootstrap-table2-filter"
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css"
import MiniBar from "../components/MiniBar"
import moment from "moment"
import Dinero from "dinero.js"

const myData = getSampleData()

export default function ExecutiveSummary() {
  const daysInMarketFormatter = (cell, row) => {
    const myPerc = (cell / row.totalDaysInMarket) * 100
    return (
      <>
        {cell}
        <MiniBar
          Perc={Math.round(myPerc)}
          daysInMarket={row.daysInMarket}
          backGroundColor='#E5E5E5'
          forGroundColor='#428BCA'
        />
      </>
    )
  }

  const displayDate = (cell) => {
    const date = moment(cell).format("MM/DD/YYYY").toString()
    return <>{date}</>
  }

  const displaySpend = (cell, row) => {
    const spend = Dinero({ amount: cell, precision: 5 }).toRoundedUnit(1)
    const myPerc = (cell / row.budget) * 100
    return (
      <>
        ${spend}k
        <MiniBar
          Perc={Math.round(myPerc)}
          daysInMarket={row.daysInMarket}
          backGroundColor='#E5E5E5'
          forGroundColor='#4C9D2F'
        />
      </>
    )
  }

  const displayBudget = (cell) => {
    const budget = Dinero({ amount: cell }).toFormat("$0,0")
    return <>{budget}</>
  }

  const displayCpl = (cell) => {
    const cpl = Dinero({ amount: cell }).toFormat("$0,0.00")
    return <>{cpl}</>
  }

  const displayStatus = (status) => {
    let variant = "secondary"
    if (status === "live") {
      variant = "primary"
    }
    return (
      <div>
        <Badge variant={variant} style={{ width: "100%", padding: "4px" }}>
          {status}
        </Badge>
      </div>
    )
  }

  const columns = [
    {
      dataField: "status",
      text: "Status",
      sort: true,
      formatter: displayStatus,
    },
    {
      dataField: "serviceLine",
      text: "Service Line",
      sort: true,
      style: { maxWidth: "200px" },
    },
    {
      dataField: "name",
      text: "Name",
      sort: true,
      style: { maxWidth: "200px" },
    },
    {
      dataField: "spendToDate",
      text: "Spend to Date",
      sort: true,
      formatter: displaySpend,
    },
    {
      dataField: "budget",
      text: "Budget",
      sort: true,
      formatter: displayBudget,
    },
    {
      dataField: "leads",
      sort: true,
      text: "Leads",
    },
    {
      dataField: "averageCpl",
      text: "AVG CPL",
      sort: true,
      formatter: displayCpl,
    },
    {
      dataField: "daysInMarket",
      text: "% Days In Market",
      sort: true,
      style: { whiteSpace: "nowrap" },
      formatter: daysInMarketFormatter,
    },
    {
      dataField: "startDate",
      text: "Launch Date",
      sort: true,
      formatter: displayDate,
    },
    {
      dataField: "endDate",
      text: "End Date",
      sort: true,
      formatter: displayDate,
    },
  ]
  return (
    <>
      <BootstrapTable
        bootstrap4={true}
        bordered={false}
        striped={false}
        hover={true}
        keyField='id'
        condensed={false}
        headerClasses='table-header'
        data={myData}
        columns={columns}
        filter={filterFactory()}
      />
    </>
  )
}
