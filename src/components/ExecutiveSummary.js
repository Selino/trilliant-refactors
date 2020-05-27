import React from "react"
import { getSampleData } from "../fixtures/ExecutiveSummaryData"
import BootstrapTable from "react-bootstrap-table-next"
import filterFactory, { textFilter } from "react-bootstrap-table2-filter"
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css"
import MiniBar from "../components/MiniBar"

export default function ExecutiveSummary() {
  const daysInMarketFormatter = (cell, row) => {
    const myPerc = (cell / row.totalDaysInMarket) * 100
    return (
      <>
        <MiniBar Perc={Math.round(myPerc)} />
      </>
    )
  }

  const myData = getSampleData()
  const columns = [
    {
      dataField: "id",
      text: "Product ID",
    },
    {
      dataField: "name",
      text: "Name",
      sort: true,
    },
    {
      dataField: "status",
      text: "Status",
    },
    {
      dataField: "serviceLine",
      text: "Service Line",
      sort: true,
    },
    {
      dataField: "daysInMarket",
      text: "Days In Market",
      formatter: daysInMarketFormatter,
    },
    {
      dataField: "startDate",
      text: "Start Date",
    },
    {
      dataField: "endDate",
      text: "End Date",
    },
  ]
  return (
    <>
      <BootstrapTable
        bootstrap4={true}
        striped={true}
        hover={true}
        keyField='id'
        data={myData}
        columns={columns}
        filter={filterFactory()}
      />
    </>
  )
}
