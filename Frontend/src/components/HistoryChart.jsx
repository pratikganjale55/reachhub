import React, { useEffect, useState } from "react";
import Chart from "react-google-charts";


const HistoryChart = ({ chartData }) => {
  return (
    <>
      <Chart
        chartType="ColumnChart"
        width="100%"
        height="500px"
        data={chartData}
      />
    </>
  );
};

export default HistoryChart;
