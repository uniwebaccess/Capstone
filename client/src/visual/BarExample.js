import React from 'react';
import { Bar } from 'react-chartjs-2';

export default function BarChart(props) {
  return (
    <div>
      <Bar
        data={{
          labels: props.data.testNames,
          datasets: [
            {
              label: ' SCORE FOR YOUR APP IN %',
              data: [props.data.onlyOneH1.score,
              props.data.logicSequence.score,
              props.data.hTagSkip.score
              ],
              backgroundColor: [
                'rgba(58, 46, 57, 0.7)',
                'rgba(30, 85,92, 0.7)',
                'rgba(244,216,205 0.7)',
                'rgba(237, 177, 131, 0.7)',
                'rgba(241, 81, 82, 0.7)',

              ],
              borderColor: [
                'rgba(58, 46, 57, 1)',
                'rgba(30, 85,92, 1)',
                'rgba(244,216,205 1)',
                'rgba(237, 177, 131, 1)',
                'rgba(241, 81, 82, 1)',

              ],
              borderWidth: 1,
            },
            {
              label: 'AVERAGE SCORE',
              data: [88, 86, 60, 45, 77, 65],
            },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  suggestedMax: 100,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontColor: '#3812E3',
              fontFamily: 'arial',
              fontSize: 15,
              fontStyle: 'bold',
            },
          },
          title: {
            display: true,
            text: 'Headings Chart',
          },
        }}
      />
    </div>
  );
}
