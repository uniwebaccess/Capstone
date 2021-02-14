import React from 'react';
import { Bar } from 'react-chartjs-2';

export default function BarChartTotal(props) {
  return (
    <div>
      <Bar
        data={{
          labels: ['YOUR SCORE', 'AVERAGE SCORE'],
          datasets: [
            {
              label: ['Only 1 H1 Tag'],
              data: [props.data.h1OnlyOne.score, props.average.headingsResult.percent],
              backgroundColor: [
                'rgba(33, 158,188, 1)',

              ],
              borderColor: [
                'rgba(33, 158,188, 1)',



              ],
              borderWidth: 1,
            },
            {
              label: 'Logic Sequence',
              data: [props.data.logicSequence.score],
              backgroundColor: 'rgba(255, 183, 3, 1)',
            }, {
              label: 'Skip H Tag',
              data: [props.data.hTagSkip.score],
              backgroundColor: 'rgba(251, 133, 0, 1)',
            },

          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [{
              stacked: true,
              ticks: {
                beginAtZero: true,
                suggestedMax: 100,
              },
            },
            ],
            xAxes: [{
              stacked: true,
              gridLines: {
                offsetGridLines: true
              },

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
            text: 'Overall :',
            color: "#fb8500",
            fontSize: 20,
          },

        }}
      />
    </div>
  );
}
