import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

export default function StructuralBarChart(props) {
  return (
    <div>
      <HorizontalBar
      plugins={[ChartDataLabels]}
        data={{
          labels: props.data.testNames,
          datasets: [
            {
              label: ' YOUR APP SCORE',
              data: [props.data.sectionTag.score,
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
                'rgba(251, 133, 0, 1)'

              ],
              borderWidth: 1,
            },
            {
              label: 'AVERAGE SCORE',
              data: [35, 26, 22],
              lableColor: 'white'
            },
          ],
        }}
        height={400}
        width={600}
        options={{

          maintainAspectRatio: false,
          scales: {
            xAxes: [{
              ticks: {
                callback: (v) => `${v}%`
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
          plugins: {
            datalabels: {
                display: true,
                color: 'rgba(255, 255, 255, 0.7)',
                font: {
                  family: 'Helvetica, Arial',
                  size: 10,
                }
            }
          }
        }}
      />
    </div>
  );
}
