import * as React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { barChartData } from "../../dummyData/widgetsData";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
    },
};

const data = {
    labels: ['Bitcoin', 'Pax gold', 'Ethereum', 'Maker', 'Monero', 'Quant', 'Litecoin'],
    datasets: barChartData
};

export const BarChart = () => {
    return (
        <Bar options={options} data={data} />
    )
}