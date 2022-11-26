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
    indexAxis: 'y',
    elments: {
        bar: {
            borderWidth: 2,
        },
    },
    responsive: true,
    plugins: {
        legend: {
            position: 'right'
        },
        title: {
            display: true,
            text: 'Chart.js Horizontal Bar Chart',
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: [6, 9, 3, 11, 48, 5, 79],
            borderColor: 'green',
            backgroundColor: 'yellow',
        },
        {
            label: 'Dataset 2',
            data: [2, 67, 89, 45, 78, 32, 11],
            borderColor: 'green',
            backgroundColor: 'green',
        },
    ],
};

export default function App() {
    return <Bar options={options} data={data} />;
}
