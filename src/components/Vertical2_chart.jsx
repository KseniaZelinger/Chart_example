import React from 'react';
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

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top'
        },
        title: {
            display: true,
            text: 'Chart.js Bar Chart',
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [
        {
            label: 'яблоки',
            data: [39, 56, 86, 90, 87, 56, 55],
            backgroundColor: 'red',
        },
        {
            label: 'бананы',
            data: [56, 84, 98, 34, 66, 78, 205],
            backgroundColor: 'green',
        },
    ],
};

export default function App() {
    return <Bar options={options} data={data} />;
}
