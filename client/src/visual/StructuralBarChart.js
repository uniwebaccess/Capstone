import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';

export default function StructuralBarChart(props) {
  return (
    <div>
      <HorizontalBar
        data={{
          labels: props.data.testNames,
          datasets: [
            {
              label: ' YOUR APP SCORE',
              data: [
                props.data.sectionTag.score,
                props.data.headerTag.score,
                props.data.inputAndLabel.score
              ],
              backgroundColor: [
                'rgba(33, 158,188, 1)',
                'rgba(255, 183, 3, 1)',
                'rgba(251, 133, 0, 1)',
                'rgba(142, 202, 230, 1)',
                'rgba(2,48,205, 1)',
              ],
              borderColor: [
                'rgba(33, 158,188, 1)',
                'rgba(255, 183, 3, 1)',
                'rgba(251, 133, 0, 1)',
                'rgba(142, 202, 230, 1)',
                'rgba(2,48,205, 1)',

              ],
              borderWidth: 1,
            },
            {
              label: 'AVERAGE SCORE',
              data: [35, 26, 22],
            },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true,
                suggestedMax: 50,
                suggestedMin: 0,
              },
            },
            ],
            xAxes: [{
              gridLines: {
                offsetGridLines: true
              },
              ticks: {
                suggestedMax: 50,
                suggestedMin: 0,
              }
            }],
          },
          legend: {
            labels: {
              fontColor: '#023047',
              fontFamily: 'arial',
              fontSize: 15,
              fontStyle: 'bold',

            },
          },
          title: {
            display: true,
            text: 'Maximum score possible by Sub-Test:',
            color: "#fb8500",
            fontSize: 20,
          },
        }}
      />
    </div>
  );
}
