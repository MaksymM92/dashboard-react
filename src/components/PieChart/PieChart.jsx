import * as React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { pieChartData } from "../../dummyData/widgetsData";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
    labels: ['FTT', 'SFP', 'FIL'],
    datasets: pieChartData,
};

export const PieChart = () => {
   return (
       <Pie data={data}/>
   )
}