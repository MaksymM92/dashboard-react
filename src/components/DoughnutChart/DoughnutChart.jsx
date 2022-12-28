import * as React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { doughnutChartData } from "../../dummyData/widgetsData";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
    labels: ['BTC', 'ETH', 'LTC'],
    datasets: doughnutChartData,
};

export const DoughnutChart = () => {
    return (
        <Doughnut data={data} />
    )
};