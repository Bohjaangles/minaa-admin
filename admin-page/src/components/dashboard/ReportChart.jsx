import React from "react";
import { useFetch } from "react-async";
import { ResponsiveContainer, BarChart, Bar, XAxis, Tooltip, YAxis } from "recharts";
import reportsData from "../../mockData/reports.js";

export default function ReportChart() {
  // const repData = () => {
  //   let chartData = {}
  //   const [ data, error ] = useFetch(reportsData, {
  // })
  // let unclearReports = 0;
  // let obscuredReports = 0;
  // let multipleReports = 0;
  // let largeReports = 0;
  // let smallReports = 0;
  // let allData = reportsData.array.forEach(element => {
  //   if (element.reportCategory === "Unclear") {
  //     unclearReports++;
  //   } else if (element.reportCategory === "Obscured") {
  //     obscuredReports++;
  //   } else if (element.reportCategory === "Multiple") {
  //     multipleReports++;
  //   } else if (element.reportCategory === "Large") {
  //     largeReports++;
  //   } else if (element.reportCategory === "Small") {
  //     smallReports++;
  //   }
  // });

  const chartData = [
    {name: "Unclear", value: 17},
    {name: "Obscured", value: 35},
    {name: "Multiple", value: 4},
    {name: "Large", value: 7},
    {name: "Small", value: 16}
  ]
  
  return (
    <ResponsiveContainer width="100%">
      <BarChart data={reportsData}>
        <XAxis dataKey="name" stroke="#2884ff" />
        <YAxis stroke="#2884ff"/>
        <Bar dataKey="Unclear" stroke="#2884ff" fill="#2884ff" barSize={30} />
        <Bar dataKey="Obscured" stroke="#2884ff" fill="#2884ff" barSize={30} />
        <Bar dataKey="Multiple" stroke="#2884ff" fill="#2884ff" barSize={30} />
        <Bar dataKey="Large" stroke="#2884ff" fill="#2884ff" barSize={30} />
        <Bar dataKey="Small" stroke="#2884ff" fill="#2884ff" barSize={30} />
        <Tooltip wrapperClassName="tooltip__style" cursor={false} />
      </BarChart>
    </ResponsiveContainer>
  );
};