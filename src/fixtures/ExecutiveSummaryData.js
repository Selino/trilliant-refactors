import moment from "moment"

export const getSampleData = () => ({
  strategies: [
    {
      id: "1",
      status: "running",
      serviceLine: "Emergency",
      name: "Mountain View Regional Medical Center",
      spendToDate: 6200000,
      budget: 1105800,
      leads: 80,
      averageCpl: 0.84,
      daysInMarket: 23,
      startDate: moment(1583326800000),
      endDate: moment(1588338000000),
    },
    {
      id: "2",
      status: "running",
      serviceLine: "Woman's Health",
      name: "Jennersville Regional Hospital",
      spendToDate: 220000,
      budget: 7325000,
      leads: 23,
      averageCpl: 0.88,
      daysInMarket: 3,
      startDate: moment(1583326800000),
      endDate: moment(1588338000000),
    },
  ],
})
