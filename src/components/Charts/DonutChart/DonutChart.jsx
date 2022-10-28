import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

export default function Donut() {
    ChartJS.register(ArcElement, Tooltip, Legend);
    const data = {
        labels: ['Inquilinos', 'Propietarios', 'Admins'],
        datasets: [
          {
            label: '# of Votes',
            data: [120, 100, 70],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(153, 102, 255, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(153, 102, 255, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };
    return (
        <Doughnut data={data} />
    );
}