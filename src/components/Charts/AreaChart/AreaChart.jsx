import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

export default function Area() {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Filler,
        Legend
      );
      
        const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top'},
          title: {
            display: true,
            text: 'Inquilinos 2022',
          },
        },
      };
      
      const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
      
      const data = {
        labels,
        datasets: [
          {
            fill: true,
            label: 'Inquilinos',
            data: [65, 59, 80, 81, 66, 70, 80],
            borderColor: 'rgb(58, 189, 255)',
            backgroundColor: 'rgba(76, 194, 241, 0.5)',
          },
        ],
      };
    return (
        <Line options={options} data={data} />
    );
}