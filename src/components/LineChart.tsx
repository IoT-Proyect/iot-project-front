import React from 'react';
import { Line } from 'react-chartjs-2';

export const LineChart = ({ sensorDataHistory }) => {
  const chartX = sensorDataHistory.map((data) =>
    new Date(Number(data.date)).toLocaleString()
  );

  const chartY = sensorDataHistory.map((data) => Number(data.ph.toFixed(2)));
  const promedio = chartY.reduce((a, b) => a + b, 0) / chartY.length;
  console.log('chartX', chartX);
  console.log('chartY', chartY);
  const data = {
    labels: chartX,
    datasets: [
      {
        label: 'Ultimas capturas de PH',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: chartY,
      },
    ],
  };
  return (
    <>
      <h1 className="mt-3 font-bold text-lg">
        Promedio del nivel PH de las ultimas capturas: {promedio}
      </h1>

      <div className="max-h-md max-full mt-20">
        <Line
          data={data}
          width={300}
          height={300}
          options={{ maintainAspectRatio: false }}
        />
      </div>
    </>
  );
};
